import WebSocket from "ws";
const wss = new WebSocket.Server({ port: 8086 });

import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import Binance from "node-binance-api";
const binance = new Binance().options({
  APIKEY: process.env.API_KEY,
  APISECRET: process.env.API_SECRET,
});

export async function getPriceList(req, res) {
  let ticker = await binance.prices(); //istenilen coin n giyat bilgisi
  console.log(ticker);
  res.status(200).send(ticker);
}

export async function getSymbolPrice(req, res) {
  let ticker;
  try {
    ticker = await binance.prices(req.params.symbol); //istenilen coin n giyat bilgisi
    console.log(ticker);
  } catch (error) {
    res.status(404).send("Invalid Symbol");
  }

  res.status(200).send(ticker);
}

export async function getBalance(req, res) {
  binance.balance((error, balances) => {
    if (error) return console.error(error);
    console.info("balances()", balances); //cüzdan bilgisi
    res.status(200).send(balances); // TODO avaible is 0 don't show
  });
}

export async function getSymbolBalance(req, res) {
  binance.balance((error, balances) => {
    if (error) return console.error(error);
    res.status(200).send(balances[req.params.symbol]); //spesifik bi coin in cüzdan bilgisi
  });
}

export async function getTradeHistory(req, res) {
  binance.trades((trades) => {
    //trade history
    console.info("trade history", trades);
  });
}

wss.on("connection", (ws) => {
  console.log("new client connected!");

  // Periods: 1m,3m,5m,15m,30m,1h,2h,4h,6h,8h,12h,1d,3d,1w,1M
  binance.websockets.candlesticks(["BNBBTC"], "1m", (candlesticks) => {
    let { e: eventType, E: eventTime, s: symbol, k: ticks } = candlesticks;
    let {
      o: open,
      h: high,
      l: low,
      c: close,
      v: volume,
      n: trades,
      i: interval,
      x: isFinal,
      q: quoteVolume,
      V: buyVolume,
      Q: quoteBuyVolume,
    } = ticks;

    console.info(symbol + " " + interval + " candlestick update");
    const obj = {
      "open: ": open,
      "high: ": high,
      "low: ": low,
      "close: ": close,
      "isFinal: ": isFinal,
      "eventTime: ": eventTime,
    };
    console.log(obj);
    ws.send(JSON.stringify(obj));
  }); //candle update realtime

  ws.on("message", (data) => {
    console.log("client has sent us:" + data);
  });

  ws.on("close", () => {
    console.log("client has disconnected");
  });
});

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
/* 
binance.websockets.chart("BNBBTC", "1m", (symbol, interval, chart) => {
  let tick = binance.last(chart);
  const last = chart[tick].close;
  console.info(JSON.stringify(chart));
  // Optionally convert 'chart' object to array:
  // let ohlc = binance.ohlc(chart);
  // console.info(symbol, ohlc);
  console.info(symbol+" last price: "+last)
}); //most recent 500 candle */
