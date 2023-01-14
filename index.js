// const express = require("express");
import express from 'express';
import data from './data.js'
const app = express();

// const PORT = 4000;
app.get("/movies", function (request, response) {
  response.send(data);
});

app.get("/movies", function (request, response) {
  response.send(data);
});

app.get("/movies/:id", function (request, response) {
    const id=request.params.id;
    const idData=data.find((e)=>e.id == id)
    if(idData ==undefined){
        response.status(404).send({
            message:'data not found'
        })
    }else{
        response.send(idData);
    }
});


app.listen(process.env.PORT||4000, () => console.log(`The server started ✨✨`));
