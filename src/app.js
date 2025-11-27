// src/app.js

const express = require('express');
const app = express();

// Rota de Health Check (Integridade)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// A aplicação é exportada para ser usada tanto pelo servidor quanto pelos testes
module.exports = app;