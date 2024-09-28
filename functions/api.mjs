import express from "express";
import serverless from "serverless-http"

const app = express();

app.get("/" , (req,res) => {
    res.send('S!')
});

app.get('/abaut', (req,res) => {
    res.json({
        name : 'Alisher',
        surname : 'Qurbonov',
        age : 21
    });
});

export const handler = serverless(app); 
