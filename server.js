const express = require('express');
const app = express();

const myLogger = (req, res, next) => {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    next();
  };
  app.use(myLogger);

app.get('/add', (req, res) => {
    const value1 = parseFloat(req.query.value1);
    const value2 = parseFloat(req.query.value2);
    const result = value1 + value2;
    res.send(`El resultado de la suma es: ${result}`);
});

app.get('/substract', (req, res)=>{
    const value1 = parseFloat(req.query.value1);
     const value2 = parseFloat (req.query.value2);
    const result = value1- value2;
res.send(`El resultado de la resta es ${result}`);
});    

app.get('/multiply', (req, res ) => {
    const value1 = parseFloat (req.query.value1);
    const value2 = parseFloat (req.query.value2);
    const result = value1 * value2;
    res.send (`El resultado de la multiplicacion es: ${result}`);
});
app.get('/divide', (req, res)=>{
    const value1 = parseFloat(req.query.value1);
    const value2 = parseFloat(req.query.value2);
    const result = value1 / value2;
    res.send(`El resultado de la division es: ${result}`)
});


//segunda parte de la calculadora

 app.get("/add/:value1/:value2", (req, res)=>{
    const value1 = parseFloat(req.params.value1);
    const value2 = parseFloat(req.params.value2);
    const result= value1 + value2;
    res.send(`el resultado de la suma es= ${result}`)
 })
 app.get ("/substract/:value1/:value2", (req, res) => {
    const value1 = parseFloat(req.params.value1);
    const value2 = parseFloat(req.params.value2);
    const result = value1 - value2;
    res.send(`El resultado de la resta es: ${result}`);
 })

 app.get("/multiply/:value1/:value2", (req, res)=>{
    const value1 = parseFloat(req.params.value1);
    const value2 = parseFloat(req.params.value2);
    const result = value1 * value2;
    res.send(`El resultado de la multiplicacion es: ${result}`);
 })

 app.get("/divide/:value1/:value2", (req, res) =>{
    const value1 = parseFloat(req.params.value1);
    const value2 = parseFloat(req.params.value2);
    const result = value1 / value2;
    res.send(`El resultado de la division es: ${result}`);
 })

app.listen(3000, () => console.log ("server"))

