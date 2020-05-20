import { CoinbaseModuleOptions } from '../interfaces';
import { CoinbaseService } from '../services/coinbase.service';

export function createCoinbaseClient(options: CoinbaseModuleOptions): CoinbaseService {
  const client = new CoinbaseService(options);
  return client;
}
