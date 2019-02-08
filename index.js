const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser')
const request = require('request');

//serve our static files , like images and stylesheets and scripts 
app.use('/public', express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())
const person = [{
    firstname: "a",
    lastname : "b"
},
{
firstname: "a",
lastname : "b"
}
];

//   res.render(name,options,callback)

//   res.render('index',{person:person})


 
app.post('/add',(req,res)=>{
    const newPerson ={
        firstname :req.body.fname,
        lastname :req.body.lname
    }
    person.push(newPerson);
    res.redirect('/');
});


app.get('/',(req,res)=>{
    res.render('index' ,{person:person});
});

app.get('/pdf',(req,res)=>{

  console.log(__dirname);    
    res.sendFile(__dirname + '/js.pdf');
   
})

app.get('/user',(req,res)=>{
    request('https://jsonplaceholder.typicode.com/todos/1',(error,response,body)=>{
        if(error){
            console.log(error);
        }else{
            if(response.statusCode === 200){
                console.log(body);
                let data = JSON.parse(body)
                // res.json(data);
                res.render('user',{data:data});
            }
        }
    });
});









app.listen(port, (req,res)=> console.log(`server is listening at ${port}`));