import dotenv from 'dotenv';
dotenv.config();

import {MainClient,WebsocketClient} from'binance';

// const client = new MainClient({
//     api_key: process.env.BNC_API,
//     api_secret: process.env.BNC_SECRET,  
//   });

// client.getAssetDetail({asset : 'BTC'})
// .then(r=>{
//     console.log("info anan:" , r);
// })
// .catch(e => {
//     console.log("error anan :" , e);
// })

// client.getSymbolPriceTicker({symbol : 'BTCUSDT'})
// .then(r=>{
//     console.log("info anan:" , r);
// })
// .catch(e => {
//     console.log("error anan :" , e);
// })


const wsClient = new WebsocketClient({
  api_key: process.env.BNC_API,
  api_secret: process.env.BNC_SECRET,
  beautify: true,
})

wsClient.on('message', (data) => {
    console.log('raw message received ', JSON.stringify(data, null, 2));
});

wsClient.on('formattedMessage', (data) => {
    if (!Array.isArray(data)) {
      if (data.eventType === 'kline') {
        console.log('kline received ', data.kline);
        return;
      }
      if (data.eventType === '24hrTicker') {
        console.log('24hrTicker received ', data);
        return;
      }
    }
    console.log('log formattedMessage: ', data);
});

wsClient.on('open', (data) => {
    console.log('connection opened open:', data.wsKey, data.ws.target.url);
});

// response to command sent via WS stream (e.g LIST_SUBSCRIPTIONS)
wsClient.on('reply', (data) => {
    console.log('log reply: ', JSON.stringify(data, null, 2));
});

wsClient.on('reconnecting', (data) => {
    console.log('ws automatically reconnecting.... ', data?.wsKey );
});

wsClient.on('reconnected', (data) => {
    console.log('ws has reconnected ', data?.wsKey );
});

wsClient.subscribeKlines('BTCUSDT', '1m', 'usdm');