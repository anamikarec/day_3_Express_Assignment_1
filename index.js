const express=require('express');
const app=express();
const port=3000;
const myLogger = require('./middlewares/logger');
const bookRouter=require('./app/book/books.js');
const cors=require('cors');

app.use(myLogger);
// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

app.use("/books", bookRouter);

app.get("/",(req,res)=>{
    res.send('Welcome to the Hello World');
})


app.listen(port,()=>{
    console.log(`Listen on port ${port}`)
})