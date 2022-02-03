import dotenv from 'dotenv';
dotenv.config({path:"../.env"});

import Binance from 'node-binance-api';
const binance = new Binance().options({
  APIKEY: process.env.API_KEY,
  APISECRET: process.env.API_SECRET
});

/* let ticker = await binance.prices(); //istenilen coin n giyat bilgisi
console.log("BTCUSDT price: " + ticker.BTCUSDT);  */

/* binance.balance((error, balances) => {
  if ( error ) return console.error(error);
  console.info("balances()", balances); //cüzdan bilgisi
  console.info("USDT balance: ", balances.USDT.available); //spesifik bi coin in cüzdan bilgisi
}); */

/* binance.trades("ETHUSDT", (error, trades, symbol) => {  //trade history
  console.info(symbol+" trade history", trades);
}); */

/* binance.bookTickers('BNBUSDT', (error, ticker) => {
  console.info("bookTickers", ticker);
}); */

/* let quantity = 0.00046, price = 30000.00000000;
binance.buy("BTCUSDT", quantity, price, {type:'LIMIT'}, (error, response) => {
  console.info("Limit Buy response", response);
  console.info("order id: " + response.orderId);
}); */

/* let quantity = 0.00046, price = 30000.00000000;
binance.sell("BTCUSDT", quantity, price, {type:'LIMIT'}, (error, response) => {
  console.info("Limit Sell response", response);
  console.info("order id: " + response.orderId);
}); */

/* let orderid = ;
binance.cancel("BTCUSDT", orderid, (error, response, symbol) => {
  console.info(symbol+" cancel response:", response);
});  */

/* setTimeout(() => {
  console.info( binance.cancelAll("BTCUSDT") );
},20000); */

/* binance.websockets.chart("BNBBTC", "1m", (symbol, interval, chart) => {
  let tick = binance.last(chart);
  const last = chart[tick].close;
  console.info(chart);
  // Optionally convert 'chart' object to array:
  // let ohlc = binance.ohlc(chart);
  // console.info(symbol, ohlc);
  console.info(symbol+" last price: "+last)
}); */ //most recent 500 candle

// Periods: 1m,3m,5m,15m,30m,1h,2h,4h,6h,8h,12h,1d,3d,1w,1M
/* binance.websockets.candlesticks(['BNBBTC'], "1m", (candlesticks) => {
  let { e:eventType, E:eventTime, s:symbol, k:ticks } = candlesticks;
  let { o:open, h:high, l:low, c:close, v:volume, n:trades, i:interval, x:isFinal, q:quoteVolume, V:buyVolume, Q:quoteBuyVolume } = ticks;
  console.info(symbol+" "+interval+" candlestick update");
  console.info("open: "+open);
  console.info("high: "+high);
  console.info("low: "+low);
  console.info("close: "+close);
  console.info("volume: "+volume);
  console.info("isFinal: "+isFinal);
}); //candle update realtime */

