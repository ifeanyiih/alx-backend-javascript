const fs = require('fs');

function countStudents(path) {
  try {
    const buffer = fs.readFileSync(path, 'utf-8');
    const bufferList = buffer.split('\n').slice(1);
    const filtered = bufferList.filter((n) => n !== '');
    const CS = filtered.filter((n) => n.includes('CS'));
    const CsStudents = CS.map((n) => n.split(',')[0]).join(', ');
    const SWE = filtered.filter((n) => n.includes('SWE'));
    const SweStudents = SWE.map((n) => n.split(',')[0]).join(', ');
    console.log(`Number of students: ${String(filtered.length)}`);
    const csOutput = `Number of students in ${'CS'}: ${CS.length}. List: ${CsStudents}`;
    const sweOutput = `Number of students in ${'SWE'}: ${SWE.length}. List: ${SweStudents}`;
    console.log(csOutput);
    console.log(sweOutput);
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
