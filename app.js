const pool=require('./database.js');
const express=require('express');
const { resolve } = require('path');
const app=express();
const path=require('path');

app.set('view engine','ejs');
app.use(express.static('./frontend'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get('/',(req,res)=>{
res.status(200).sendFile(path.resolve(__dirname,'./home.html'));
})
app.get('/login',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./registration.html'));
})

app.post('/home',function(req,res){
const {firstname}=req.body;
const {lastname}=req.body;
const {email}=req.body;
const {password}=req.body;

    pool.getConnection(function(error){
        if (error) throw error;

    var insert='INSERT INTO users (first_name,last_name,email,password_key) VALUES("'+firstname+'","'+lastname+'","'+email+'","'+password+'")';

        pool.execute(insert,function(error,result){
      if (error) throw error;
       console.log(result);
        })
    })
    res.render(__dirname+"/index",{name:firstname,lastname:lastname,email:email,password:password});
})


app.listen(3000);
