const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname+ '/public'));


hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});
// app.use((req,res, next)=>{
//     res.render('offline');
// })

app.get('/', (req, res) =>{
    res.render('home.hbs',{
        pageTitle:'Home Page',
        message:'You are rendering the home page using hbs'
    })
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'About Page'
    });
});

app.get('/bad',(req,res)=>{
    res.send({
        errorMessage:'Unable to reach to the right Info'
    });
})

app.listen(port,()=>{
    console.log(`server is up on ${port} port`);
}); 