var request = require('request');


request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
    if(error){
        console.log("errror:", error );
    }else{
        if(response.statusCode === 200){
                    let data = JSON.parse(body)
            console.log(data.userId);
          
        }
    }
});