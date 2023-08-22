const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;
const DB = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (DB === undefined) {
    res.end('Error: Cannot load the database');
  } else if (req.url === '/') {
    res.statusCode = 200;
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
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

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
