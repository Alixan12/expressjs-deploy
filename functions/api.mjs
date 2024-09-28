import express from "express";
import serverless from "serverless-http";
import path from 'path';

const app = express();

// Asosiy yo'l
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/disk/index.html')); // Disk papkasidagi index.html
});

// 'abaut' yo'li
app.get('/abaut', (req, res) => {
    res.json({
        name: 'Alisher',
        surname: 'Qurbonov',
        age: 21
    });
});

// Serverless funktsiya
export const handler = serverless(app);