//////////////////// TASK 1 ////////////////////
class Employee {
  constructor(nameArg, companyArg, jobPositionArg, salaryArg) {
    this.name = nameArg;
    this.companyName = companyArg;
    this.jobPosition = jobPositionArg;
    this.salary = salaryArg;
  }
}

const employee1 = new Employee('Marija', 'Telekom', 'Employee', 40000);
const employee2 = new Employee('Stefan', 'Alkaloid', 'Director', 70000);
const employee3 = new Employee('Dejan', 'A1', 'Boss', 90000);

const employees = [employee1, employee2, employee3];

const list = document.createElement('ul');

employees.forEach((el) => {
  list.innerHTML += `
  <li><b>Name:</b> ${el.name}</li>
  <li><b>Company name:</b> ${el.companyName}</li>
  <li><b>Job position:</b> ${el.jobPosition}</li>
  <li><b>Salary:</b> $${el.salary}</li>
  <br/>
  `;
});

document.body.appendChild(list);
