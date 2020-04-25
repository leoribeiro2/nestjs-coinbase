import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
export interface CoinbaseModuleOptions {
    apiKey: string;
    baseApiUrl?: string;
    apiVersion?: string;
    timeout?: number;
}
export interface CoinbaseOptionsFactory {
    createCoinbaseOptions(): Promise<CoinbaseModuleOptions> | CoinbaseModuleOptions;
}
export interface CoinbaseModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useClass?: Type<CoinbaseOptionsFactory>;
    useExisting?: Type<CoinbaseOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<CoinbaseModuleOptions> | CoinbaseModuleOptions;
}
