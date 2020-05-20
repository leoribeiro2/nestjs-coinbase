import { Module, DynamicModule, Global } from '@nestjs/common';
import { CoinbaseCoreModule } from './coinbase-core.module';
import { CoinbaseService } from './services';
import { CoinbaseModuleOptions, CoinbaseModuleAsyncOptions } from './interfaces';

@Module({})
export class CoinbaseModule {
  public static forRoot(options: CoinbaseModuleOptions): DynamicModule {
    return {
      module: CoinbaseModule,
      imports: [CoinbaseCoreModule.forRoot(options)],
    };
  }

  public static forRootAsync(options: CoinbaseModuleAsyncOptions): DynamicModule {
    return {
      module: CoinbaseModule,
      imports: [CoinbaseCoreModule.forRootAsync(options)],
    };
  }
}
