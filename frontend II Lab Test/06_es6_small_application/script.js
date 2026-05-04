class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = Number(marks);
  }

  getGrade = () => {
    if (this.marks >= 90) return "A+";
    if (this.marks >= 75) return "A";
    if (this.marks >= 60) return "B";
    if (this.marks >= 40) return "C";
    return "Fail";
  };
}

const form = document.querySelector("#studentForm");
const result = document.querySelector("#result");

let students = [];

const displayStudents = () => {
  result.innerHTML = students
    .map(({ name, marks }) => {
      const student = new Student(name, marks);
      return `
        <div class="student">
          <strong>${name}</strong><br>
          Marks: ${marks}<br>
          Grade: ${student.getGrade()}
        </div>
      `;
    })
    .join("");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const marks = document.querySelector("#marks").value;

  const newStudent = { name, marks };
  students = [...students, newStudent];

  displayStudents();
  form.reset();
});
