// require('dotenv').config();
const express = require('express')
const app = express();


const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/shoaib', (req, res) => {
    res.send('Hello World shoaib !')
  })

app.listen(port, () => { 
  console.log(`The app is listening on port ${port}`);
})