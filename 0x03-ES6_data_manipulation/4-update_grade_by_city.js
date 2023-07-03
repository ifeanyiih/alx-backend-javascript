export default function updateStudentGradeByCity(list, city, newgrades) {
  return list.filter((student) => student.location === city).map((std) => {
    const student = std;
    let studentGrade = false;
    for (const grade of newgrades) {
      if (grade.studentId === student.id) {
        studentGrade = grade;
      }
    }
    if (studentGrade) {
      student.grade = studentGrade.grade;
    } else {
      student.grade = 'N/A';
    }

    return student;
  });
}
