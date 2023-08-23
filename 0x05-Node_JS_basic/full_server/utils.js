const fs = require('fs');

export default function readDatabase(filePath) {
  return new Promise((res, rej) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        rej(new Error('Cannot load the database'));
      } else {
        const buffer = data;
        const bufferList = buffer.split('\n').slice(1);
        const filtered = bufferList.filter((n) => n !== '');
        const CS = filtered.filter((n) => n.includes('CS'));
        const CsStudents = CS.map((n) => n.split(',')[0]);
        const SWE = filtered.filter((n) => n.includes('SWE'));
        const SweStudents = SWE.map((n) => n.split(',')[0]);
        const output = {
          CS: CsStudents,
          SWE: SweStudents,
        };

        res(output);
      }
    });
  });
}
