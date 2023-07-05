interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'David',
  lastName: 'Goggins',
  age: 33,
  location: 'New York',
}

const student2: Student = {
  firstName: 'Steven',
  lastName: 'Spielberg',
  age: 44,
  location: 'California',
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const theadRow = document.createElement('tr');
const theadData1 = document.createElement('td');
theadData1.textContent = "FirstName";
const theadData2 = document.createElement('td');
theadData2.textContent = "Location";
theadRow.append(theadData1);
theadRow.append(theadData2);
thead.append(theadRow);
table.append(thead);
table.append(tbody);

studentsList.map((student) => {
  const row = document.createElement('tr');
  const d1 = document.createElement('td');
  const d2 = document.createElement('td');

  d1.textContent = student.firstName;
  d2.textContent = student.location;
  row.append(d1);
  row.append(d2);
  tbody.append(row);
});

document.body.append(table);
