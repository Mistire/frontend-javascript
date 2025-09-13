interface Teacher {
  readonly firstName: string;
  readonly lastName: string | null;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

// interface printTeacherFunction {
//   (firstName: string, lastName: string) : string
// }


const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);


const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);


function printTeacher(firstName: string, lastName: string) : string {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher(teacher3.firstName, teacher3.lastName))