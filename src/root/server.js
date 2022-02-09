import { getBalance, getPriceList, getSymbolPrice,getSymbolBalance,getTradeHistory} from './app.js';

import express from 'express';
const app = express();
const port = 3000



app.get('/', (req, res) => {
  res.send('Home page')
})

app.route('/prices').get(getPriceList)

app.route('/prices/:symbol').get(getSymbolPrice)

app.route('/balance').get(getBalance)

app.route('/balance/:symbol').get(getSymbolBalance)

app.route('/trades').get(getTradeHistory)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})