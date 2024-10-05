const express = require('express')
const proxy = require('express-http-proxy')

const app = express()

app.use('/auth',proxy('http://auth-service:5000'));
app.use('/products',proxy('http://product-service:5001'));
app.use('/orders',proxy('http://order-service:5002'));

app.listen(4000,()=>{
    console.log(`API gateway listening on port 4000`);
    
})