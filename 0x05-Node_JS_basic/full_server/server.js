import { homeRoute, studentsRoute, studentsMajorRoute } from './routes/index';

const express = require('express');

const app = express();
const PORT = 1245;

app.use('/', homeRoute);
app.use('/students', studentsRoute);
app.use('/students:major', studentsMajorRoute);

app.listen(PORT, () => {
  console.log('Server is running');
});

module.exports = app;
