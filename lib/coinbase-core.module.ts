import { Global, Module, DynamicModule, Provider, Type } from '@nestjs/common';
import { CoinbaseModuleOptions, CoinbaseModuleAsyncOptions, CoinbaseOptionsFactory } from './interfaces';
import { createCoinbaseProviders } from './providers';
import { COINBASE_MODULE_OPTIONS, COINBASE_TOKEN } from './common/coinbase.constants';
import { createCoinbaseClient } from './common/coinbase.util';

@Global()
@Module({})
export class CoinbaseCoreModule {
    public static forRoot(options: CoinbaseModuleOptions): DynamicModule {
        const provider = createCoinbaseProviders(options);

        return {
            exports: [provider,],
            module: CoinbaseCoreModule,
            providers: [provider]
        };
    }

    public static forRootAsync(options: CoinbaseModuleAsyncOptions): DynamicModule {
        const provider: Provider = {
            inject: [COINBASE_MODULE_OPTIONS],
            provide: COINBASE_TOKEN,
            useFactory: (options: CoinbaseModuleOptions) => createCoinbaseClient(options),
        };

        return {
            exports: [provider],
            imports: options.imports,
            module: CoinbaseCoreModule,
            providers: [...this.createAsyncProviders(options), provider]
        };
    }

    private static createAsyncProviders(
        options: CoinbaseModuleAsyncOptions,
      ): Provider[] {
        if (options.useExisting || options.useFactory) {
          return [this.createAsyncOptionsProvider(options)];
        }
        const useClass = options.useClass as Type<CoinbaseOptionsFactory>;
        return [
          this.createAsyncOptionsProvider(options),
          {
            provide: useClass,
            useClass,
          },
        ];
      }

      private static createAsyncOptionsProvider(
        options: CoinbaseModuleAsyncOptions,
      ): Provider {
        if (options.useFactory) {
          return {
            inject: options.inject || [],
            provide: COINBASE_MODULE_OPTIONS,
            useFactory: options.useFactory,
          };
        }
        const inject = [
          (options.useClass || options.useExisting) as Type<CoinbaseOptionsFactory>,
        ];
        return {
          provide: COINBASE_MODULE_OPTIONS,
          useFactory: async (optionsFactory: CoinbaseOptionsFactory) =>
            await optionsFactory.createCoinbaseOptions(),
          inject,
        };
      }
}
