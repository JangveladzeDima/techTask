import {BinanceClient} from "ccxws";
import {parentPort} from "worker_threads";

const exchange = new BinanceClient();

exchange.on("trade", (trade) => {
    parentPort.postMessage(trade)
});
const market = {
    id: "BTCUSDT",
    base: "BTC",
    quote: "USDT",
};
exchange.subscribeTrades(market);