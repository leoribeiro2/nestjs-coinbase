import { DynamicModule } from '@nestjs/common';
import { CoinbaseModuleOptions, CoinbaseModuleAsyncOptions } from './interfaces';
export declare class CoinbaseModule {
    static forRoot(options: CoinbaseModuleOptions): DynamicModule;
    static forRootAsync(options: CoinbaseModuleAsyncOptions): DynamicModule;
}
