const express=require('express');
const app=express();
const expresslayouts=require('express-ejs-layouts');
const req = require('express/lib/request');

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(expresslayouts);
app.set("layout extractScripts", true);
app.set("layout extractStyles", true)

app.get('/',(req,resp)=>{
    resp.render('index.ejs');
});


app.get('/layout',(req,resp)=>{
    resp.render('layout.ejs')
});

app.get('/about',(req,res)=>{
res.render('about.ejs',{name:"aaron"});
})

app.listen(3000);