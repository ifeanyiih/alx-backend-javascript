import readDatabase from '../utils';

const DB = process.argv[2];

export default class StudentsController {
  static getAllStudents(req, res) {
    res.statusCode = 200;
    readDatabase(DB)
      .then((data) => {
        res.write('This is the list of our students\n');
        let i = 0;
        const entries = Object.entries(data).sort();
        for (const [key, val] of entries) {
          res.write(`Number of students in ${key}: ${val.length}. List: ${val.join(', ')}`);
          if (i < entries.length - 1) res.write('\n');
          i += 1;
        }
        res.end();
      })
      .catch((err) => {
        res.statusCode = 500;
        res.send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    res.statusCode = 200;
    const major = req.params.major.trim();
    if ((major === 'CS') || (major === 'SWE')) {
      readDatabase(DB)
        .then((data) => {
          res.send(`List: ${data[major].join(', ')}`);
        })
        .catch((err) => {
          res.statusCode = 500;
          res.send(err.message);
        });
    } else {
      res.statusCode = 500;
      res.send('Major parameter must be CS or SWE');
    }
  }
}
