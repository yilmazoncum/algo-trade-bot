import dotenv from 'dotenv';
dotenv.config();

import {MainClient} from'binance';

const client = new MainClient({
    api_key: process.env.BNC_API,
    api_secret: process.env.BNC_SECRET,
    baseUrl:'https://testnet.binance.vision',
    
  });

//client.requestUrl = 'https://testnet.binance.vision/api'

client.getAccountInformation()
.then(r=>{
    console.log("info anan:" , r);
})
.catch(e => {
    console.log("error anan :" , e);
})