import express, { json , urlencoded } from 'express'; 
import productsRoutes from './routes/products/index'; 


// const express = require('express')
const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/products', productsRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
