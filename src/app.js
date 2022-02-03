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

setTimeout(() => {
  console.info( binance.cancelAll("BTCUSDT") );
},20000);