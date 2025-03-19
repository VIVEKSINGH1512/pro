const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server'); // JSON Server for mock API

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// JSON Server (Mock Database)
const router = jsonServer.router('data.json'); // Use 'data.json' as your DB
app.use('/api', router);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at: http://localhost:${PORT}/api`);
});
