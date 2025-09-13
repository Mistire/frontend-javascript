interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Mistire",
  lastName: "Daniel",
  age: 23,
  location: "Addis Ababa"
}

const student2: Student = {
  firstName: "Remi",
  lastName: "Dan",
  age: 23,
  location: "Jimma"
}

const studentsList: Student[] = [student1, student2]

const table = document.createElement("table");
const tableHead = document.createElement("thead");
const headerRow = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");

th1.textContent = "First Name";
th2.textContent = "Location";

headerRow.appendChild(th1);
headerRow.appendChild(th2);
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

const tableBody = document.createElement("tbody");

studentList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);

