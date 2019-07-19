const express = require('express');

const Projects = require('./routes/project');

const server = express();

server.use(express.json());

server.use('/api/projects', Projects);

module.exports = server;