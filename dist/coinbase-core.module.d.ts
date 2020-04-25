import { DynamicModule } from '@nestjs/common';
import { CoinbaseModuleOptions, CoinbaseModuleAsyncOptions } from './interfaces';
export declare class CoinbaseCoreModule {
    static forRoot(options: CoinbaseModuleOptions): DynamicModule;
    static forRootAsync(options: CoinbaseModuleAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
