import { Inject } from '@nestjs/common';
import { COINBASE_TOKEN } from './coinbase.constants';

export function InjectCoinbase() {
  return Inject(COINBASE_TOKEN);
}
