import { CoinbaseModuleOptions } from '../interfaces';
import { CreateCharge, resources } from 'coinbase-commerce-node';
export declare class CoinbaseService {
    private readonly options;
    constructor(options: CoinbaseModuleOptions);
    createCharge(chargeData: CreateCharge): Promise<resources.Charge>;
}
