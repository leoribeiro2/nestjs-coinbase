"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coinbase_service_1 = require("../services/coinbase.service");
function createCoinbaseClient(options) {
    const client = new coinbase_service_1.CoinbaseService(options);
    return client;
}
exports.createCoinbaseClient = createCoinbaseClient;
