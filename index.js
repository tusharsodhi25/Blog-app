const express = require('express');

const app = express(); 


require('dotenv').config();
const PORT = process.env.PORT || 4000

// middleware

app.use(express.json());


const blog = require('./routes/blog');

app.use('/api/v1',blog);


const connectwithdb = require('./config/Database');
connectwithdb();

app.listen(PORT,()=>{
    console.log(`APP STARTED AT ${PORT}`);
})

// DEFAULT ROUTE
app.get('/',(req,res)=>{
    res.send('home page')
});