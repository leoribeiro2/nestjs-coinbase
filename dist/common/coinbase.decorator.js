"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const coinbase_constants_1 = require("./coinbase.constants");
function InjectCoinbase() {
    return common_1.Inject(coinbase_constants_1.COINBASE_TOKEN);
}
exports.InjectCoinbase = InjectCoinbase;
