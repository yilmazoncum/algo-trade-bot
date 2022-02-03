import dotenv from 'dotenv';
dotenv.config({path:"../.env"});

import Binance from 'node-binance-api';
const binance = new Binance().options({
  APIKEY: process.env.API_KEY,
  APISECRET: process.env.API_SECRET
});

/* let ticker = await binance.prices(); //istenilen coin n giyat bilgisi
console.log(ticker.BNBUSDT); */

binance.balance((error, balances) => {
  if ( error ) return console.error(error);
  //console.info("balances()", balances); //cüzdan bilgisi
  //console.info("USDT balance: ", balances.USDT.available); //spesifik bi coin in cüzdan bilgisi
});
