const express = require('express');
const app = express();

// Lab 1a
app.get('/static', (req, res) => {
  res.send('Hello world!');
});

// Lab 1b
app.get('/staticJSON', (req, res) => {
  res.send({ text: 'Hello World' });
});

// Lab 1c
app.get('/echo', (req, res) => {
  res.send(req.query.text);
});

// Lab 1d
app.get('/plus', (req, res) => {
  let a = req.query.a;
  let b = req.query.b;
  res.send(`The answer is ${Number(a) + Number(b)}`);
});

// Lab 1e
app.get('/plusByJSON', (req, res) => {
  let jsonStr = req.query.jsonText;
  let obj = JSON.parse(jsonStr);
  res.send(`The answer is ${Object.values(obj)[0] + Object.values(obj)[1]}`);
});

// Lab 1f
app.get('/plus/:a/:b', (req, res) => {
  let a = req.params.a;
  let b = req.params.b;
  res.send(`The answer is ${Number(a) + Number(b)}`);
});

// Lab 1g
app.get('/checkEvenNumber/:num', (req, res) => {
  let num = req.params.num;
  if (Number(num) % 2 === 0) {
    res.send(`The answer is even number`);
  } else {
    res.send(`The answer is not even number`);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
