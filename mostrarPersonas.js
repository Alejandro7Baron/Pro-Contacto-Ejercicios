const express = require ('express');
const QueryString = require('qs');
const router = express.Router();
const form = require("fs").readFileSync("crearPersonas.html");
//util = require(util);
querystring = require("https://reclutamiento-14cf7.firebaseio.com/personas.json");
dataString = "";

var app = express();

app.use(router);

router.get("/", function (req, res)
{
    if(req.method == "GET")
    {
        res.writeHead(201, {"Content-Type" : "text/html"})
        res.end(form)
    }
    if(req.method == "POST")
    {
        req
            .on("data", function (data)
            {
                dataString += data
            })
            .on("end", function()
            {
                var templateString = `Los datos por POST son: ${dataString}`
                console.log(templateString)
                res.end(templateString)
            })
    }
});

app.listen(3000);
console.log('http://localhost:3000 puerto local');