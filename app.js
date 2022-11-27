const express=require('express');
const app=express();
const { mail } = require('./mailService');

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static('./public'));

app.post('/',(req,res)=>{
    mail(req.body.Name,req.body.Email);
    res.send('Please check your email');
})

const port=8000;
app.listen(port,()=>{
    console.log(`Server is listening at port: ${port}`);
});