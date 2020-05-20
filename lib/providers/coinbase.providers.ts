import { Provider } from '@nestjs/common';
import { CoinbaseModuleOptions } from '../interfaces/coinbase-options.interface';
import { COINBASE_TOKEN } from '../common/coinbase.constants';
import { createCoinbaseClient } from '../common/coinbase.util';

export function createCoinbaseProviders(
  options: CoinbaseModuleOptions,
): Provider {
  return {
    provide: COINBASE_TOKEN,
    useValue: createCoinbaseClient(options),
  };
}
