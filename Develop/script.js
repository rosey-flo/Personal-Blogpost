// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

var firstNames = [];
var lastNames = [];
var Salaries = [];

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let firstName, lastName, Salary;
  let ask = true;

  while (ask) {
    
    firstName = prompt('Please enter your first name');
    if (!firstName) {
      continue;
      }
      lastName = prompt('Please enter your last name');
      if (!lastName) {
        continue;
        }
        Salary = prompt('Pleasae enter your salary');
        if (!Salary) {
          continue;
          }
          
    firstNames.push(firstName)
    lastNames.push(lastName)
    Salaries.push(Salary)

    let Repeat = true;
    let add_employee;

    while (Repeat) {
      add_employee = prompt('Would you like to enter another employee? Yes|No');
      if (add_employee.toLowerCase() == "yes") {
        break;
      }
      else if (add_employee.toLowerCase() == "no") {
        ask = false;
        break;
      }
      else {
        alert('Invalid response, click ok to continue');
      }
    }
  }
  console.log(firstNames);
  console.log(lastNames);
  console.log(Salaries);
}

addEmployeesBtn.addEventListener('click', collectEmployees);




// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = add Salaries;

  for (let number of employeesArray) {
    sum += Number(number);
  }

  let averageSalary = sum / employeesArray.length;
  return averageSalary;
}


// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  // Use array destructuring to directly extract the random element
  const randomName = employeesArray[randomIndex]; 

  return randomName;
}

console.log(averageSalary);










  ====================
  STARTER CODE
  Do not modify any of the code below this line:


// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);