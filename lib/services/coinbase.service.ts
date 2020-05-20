import { Inject, Injectable } from '@nestjs/common';
import { COINBASE_MODULE_OPTIONS } from '../common';
import { CoinbaseModuleOptions } from '../interfaces';
import { Client, CreateCharge, resources } from 'coinbase-commerce-node';
import Charge = resources.Charge;

@Injectable()
export class CoinbaseService {
  constructor(
    @Inject(COINBASE_MODULE_OPTIONS)
    private readonly options: CoinbaseModuleOptions,
  ) {
    if (!(options && options.apiKey)) {
      return;
    }
    Client.init(options.apiKey);
  }

  public async createCharge(chargeData: CreateCharge) {
    return Charge.create(chargeData);
  }
}
