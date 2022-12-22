var express=require('express');
var app=express();
var person={
    'id':229117,
    'firstname':'Komal',
    'lastname':'Dekate'
};

app.get('/', (req,res)=>{
    res.send(person);
})

app.listen(3000);
console.log( ' express server is listening on port 3000');