"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coinbase_constants_1 = require("../common/coinbase.constants");
const coinbase_util_1 = require("../common/coinbase.util");
function createCoinbaseProviders(options) {
    return {
        provide: coinbase_constants_1.COINBASE_TOKEN,
        useValue: coinbase_util_1.createCoinbaseClient(options),
    };
}
exports.createCoinbaseProviders = createCoinbaseProviders;
