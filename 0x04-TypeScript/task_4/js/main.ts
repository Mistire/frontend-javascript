

// export const cpp = new Cpp();
// export const java = new Java();
// export const react = new React();


// export const cTeacher: Teacher = {
//   firstName: "John",
//   lastName: "Doe",
//   experienceTeachingC: 10
// };




export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();


export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10
};

// C++ Subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());        
console.log(cpp.getAvailableTeacher());   

// Java Subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());       
console.log(java.getAvailableTeacher());   

// React Subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());     
console.log(react.getAvailableTeacher()); 
