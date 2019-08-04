
// import express
var express = require('express')
// import cors
var cors = require('cors')

// use them
var app = express()
app.use(cors())

// get json file
var foo = require('./data1.json');

// functions
function getJson(req, res, next){
    return foo;
}

// get All data
app.get('/data1', (req, res)=>{
    let data = getJson();
    res.json(data)
})

// Get data by id
app.get('/data1/:id', (req, res)=>{
    let data = getJson();
    data.forEach(element => {
        if(element.id == req.params.id){
            res.status(200).json(element)
        }
    });
})

// Get data by searching title
app.get('/data1/search/:title',(req,res) => {
    let data = getJson();
    data.forEach(element => {
        if(element.title == req.params.title|| element.catagory == req.params.title){
            res.status(200).json(element)
            console.log(req.params);
        }
    });
})

// Allow Cros
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method ==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','POST,PUT,DELETE,GET');
        return res.status(200).json({});
    }
    next();
  })

  // bind a port 
app.listen(3000)