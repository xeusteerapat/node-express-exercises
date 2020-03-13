// This exercise for express Controller Only - English Exercise

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// test server
app.get('/', (req, res) => {
  res.send('test dev server');
});

// 1. check number input
app.post('/checkEven/:numInput', (req, res) => {
  let num = req.params.numInput;
  if (Number(num) % 2 === 0) {
    res.status(200).send(`The answer is even number`);
  } else {
    res.status(400).send(`BAD REQUEST, NOT EVEN NUMBER`);
  }
});

// 2. save number to array
let arrNumber = [];
app.post('/number/:numInput', (req, res) => {
  arrNumber.push(Number(req.params.numInput));
  res.send(arrNumber);
});

// 3. remove number from array
app.delete('/number/:numInput', (req, res) => {
  arrNumber = arrNumber.filter(num => num !== Number(req.params.numInput));
  res.send(arrNumber);
});

// 4. change number in array
app.put('/number/:a/:b', (req, res) => {
  arrNumber = arrNumber.map(item => {
    return item === Number(req.params.a) ? Number(req.params.b) : item;
  });
  res.send(arrNumber);
});

// 5. count fields
app.post('/countFields', (req, res) => {
  let count = String(Object.keys(req.body).length);
  res.send(count);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
