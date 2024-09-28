import express from "express";
import serverless from "serverless-http"

const app = express();

const path = require('path');

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/disk/index.html'));
});

app.get('/abaut', (req,res) => {
    res.json({
        name : 'Alisher',
        surname : 'Qurbonov',
        age : 21
    });
});

export const handler = serverless(app); 
