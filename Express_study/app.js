//////////////////// Start the server and Listen on this port 9000 //////////////////////

const express = require('express');

const app = express();

app.listen(9000, function(req, res){
    console.log("Server is running...");
})

////////////////////////////////////////////////////////////////

app.get('/', function(req, res){
    res.send('<html><body> <h1> Hello </h1> <p> Home Page </p> </body></html>')
})

////////////////////////// params //////////////////////////////////////


app.get('/alien/:id', function(req, res){
    const id = req.params.id;
    console.log("id >>>", id);

    res.send('Welcome Alien of Id >>> ' + id)
    //  http://localhost:9000/alien/21
    //  output : Welcome Alien of Id >>> 21
})

////////////////////////// query //////////////////////////////////////


app.get('/alien', function(req, res){
    const reqQuery =  req.query;
    console.log("reqQuery >>>", reqQuery);
    const nameReceived = reqQuery.name;

    res.send(`<h1> Hi ${nameReceived}</h1>`)
    //  http://localhost:9000/alien?name=vinayak
    //  output : Hi Vinayak
})