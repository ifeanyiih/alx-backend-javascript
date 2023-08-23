const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const DB = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  if (DB === undefined) {
    res.send('Cannot load the database');
  } else {
    try {
      res.write('This is the list of our students\n');
      const buffer = fs.readFileSync(DB, 'utf-8');
      const bufferList = buffer.split('\n').slice(1);
      const filtered = bufferList.filter((n) => n !== '');
      const CS = filtered.filter((n) => n.includes('CS'));
      const CsStudents = CS.map((n) => n.split(',')[0]).join(', ');
      const SWE = filtered.filter((n) => n.includes('SWE'));
      const SweStudents = SWE.map((n) => n.split(',')[0]).join(', ');
      res.write(`Number of students: ${String(filtered.length)}\n`);
      const csOutput = `Number of students in ${'CS'}: ${CS.length}. List: ${CsStudents}`;
      const sweOutput = `Number of students in ${'SWE'}: ${SWE.length}. List: ${SweStudents}`;
      res.write(`${csOutput}\n`);
      res.write(sweOutput);
    } catch (e) {
      res.write('Cannot load the database');
    }
  }
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
