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

app.get('/about',(req,resp)=>{
resp.render('about.ejs',{layout:false});
});

app.get('/projects',(req,resp)=>{
    resp.render('projects.ejs',{layout:false});
});

app.get('/contact',(req,resp)=>{
    resp.render('contact.ejs');
});

app.get('/admin_login',(req,resp)=>{
    resp.render('dashboard/login.ejs',{layout:false});
});


app.listen(3000);
//process.env.PORT