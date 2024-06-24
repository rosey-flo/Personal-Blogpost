// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
var employeesArray = []; // A global array to store employee objects and be accessed anywhere.

// Collect employee data
const collectEmployees = function () {
  let ask = true;

  while (ask) {
    let firstName = prompt('Please enter your first name');
    if (!firstName) continue;

    let lastName = prompt('Please enter your last name');
    if (!lastName) continue;

    let salary = prompt('Please enter your salary');
    if (!salary || isNaN(Number(salary))) {
      alert('Please enter a number for salary, click ok to restart');
      continue; // Ensure salary is a valid number
    }
    // Create an employee object
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: Number(salary)
    };

    // Store each iteration of employee data into an array.
    employeesArray.push(employee);
    let Repeat = true;
    let add_employee;

    // Ask user if they will like to add more employees.
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
  return employeesArray; // return the array of employee objects
}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;

  // loop through the indencies where the array has the salaries and add them up
  for (let employee of employeesArray) {
    sum += Number(employee.salary);
  }

  let averageSalary = sum / employeesArray.length;
  let numEmployees = employeesArray.length;

  console.log('The number of employees is: ', numEmployees, ' and the average salary is ', averageSalary);

  return averageSalary;
}


// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  // Use the random generated number to index the names.
  const randomfName = employeesArray[randomIndex].firstName;
  const randomlName = employeesArray[randomIndex].lastName;

  console.log('The random selected employee is: ', randomfName, ' ', randomlName);

  return randomfName, randomlName;
}








/*

====================
STARTER CODE
Do not modify any of the code below this line:
*/

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