const express = require('express');
const helmet = require('helmet');

const cohortsRouter = require('../cohorts/cohort-router');
const studentRouter = require('../cohorts/student-router');

const server = express();

server.use(express.json(), helmet());

server.use('/api/cohorts', cohortsRouter);
server.use('/api/students', studentsRouter);

module.exports = server;