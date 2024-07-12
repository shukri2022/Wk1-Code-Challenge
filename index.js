function getStudentGrade() {
  let marks = prompt("Enter student marks (between 0 and 100):");

  // Convert the input to a number
  marks = Number(marks);

  // Check if the input is valid
  if (isNaN(marks) || marks < 0 || marks > 100) {
    alert("Please enter a valid number between 0 and 100.");
    return;
  }

  // Determine the grade
  let grade;
  if (marks > 79) {
    grade = 'A';
  } else if (marks >= 60) {
    grade = 'B';
  } else if (marks >= 49) {
    grade = 'C';
  } else if (marks >= 40) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  // Output the grade
  alert(`The grade is: ${grade}`);
}

getStudentGrade();

// Challenge 2: Speed Detector
function checkSpeed() {
  let speed = prompt("Enter the speed of the car:");

  // Convert the input to a number
  speed = Number(speed);

  // Check if the input is valid
  if (isNaN(speed) || speed < 0) {
    alert("Please enter a valid speed.");
    return;
  }

  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

  if (speed <= speedLimit) {
    alert("Ok");
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints > 12) {
      alert("License suspended");
    } else {
      alert(`Points: ${demeritPoints}`);
    }
  }
}

checkSpeed();

// Challenge 3: Net Salary Calculator
function calculateNetSalary() {
  let basicSalary = prompt("Enter the basic salary:");
  let benefits = prompt("Enter the benefits:");

  // Convert inputs to numbers
  basicSalary = Number(basicSalary);
  benefits = Number(benefits);

  // Check if the inputs are valid
  if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
    alert("Please enter valid numbers for basic salary and benefits.");
    return;
  }

  // Gross salary
  const grossSalary = basicSalary + benefits;

  // Calculate PAYE (simplified for this example)
  let payee;
  if (grossSalary <= 24000) {
    payee = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    payee = grossSalary * 0.25;
  } else {
    payee = grossSalary * 0.3;
  }

  // NHIF Deductions (simplified)
  let nhif;
  if (grossSalary <= 5999) {
    nhif = 150;
  } else if (grossSalary <= 7999) {
    nhif = 300;
  } else if (grossSalary <= 11999) {
    nhif = 400;
  } else if (grossSalary <= 14999) {
    nhif = 500;
  } else if (grossSalary <= 19999) {
    nhif = 600;
  } else if (grossSalary <= 24999) {
    nhif = 750;
  } else if (grossSalary <= 29999) {
    nhif = 850;
  } else if (grossSalary <= 34999) {
    nhif = 900;
  } else if (grossSalary <= 39999) {
    nhif = 950;
  } else if (grossSalary >= 40000) {
    nhif = 1000;
  }

  // NSSF Deductions (simplified)
  const nssf = 200;

  // Calculate net salary
  const netSalary = grossSalary - payee - nhif - nssf;

  // Output the results
  alert(`Gross Salary: ${grossSalary}`);
  alert(`PAYE: ${payee}`);
  alert(`NHIF: ${nhif}`);
  alert(`NSSF: ${nssf}`);
  alert(`Net Salary: ${netSalary}`);
}

calculateNetSalary();
