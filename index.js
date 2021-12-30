const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");
const { printTable } = require("console-table-printer");
const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "8@Rbanel",
    database: "employee_db",
});

db.connect((err) => {
    if (err) throw err;
    startMenu();
});

function viewDeparment() {
    db.query("select * from department", (err, data) => {
        printTable(data);
        startMenu();
    });
}

function viewRoles() {
    db.query("select * from role", (err, data) => {
        printTable(data);
        startMenu();
    });
}

function viewEmployees() {
    db.query("select * from employee", (err, data) => {
        printTable(data);
        startMenu();
    });
}

function addDepartment() {
    inquirer
        .prompt([{
            type: "input",
            name: "departmentName",
            message: "Select new department?",
        }, ])
        .then((answer) => {
            db.query(
                "insert into department (name) values (?)", [answer.departmentName],
                (err, data) => {
                    console.log("You succesfully added a new department!");
                    viewDeparment();
                }
            );
        });
}

function addRole() {
    inquirer
        .prompt([{
                type: "input",
                name: "roleTitle",
                message: "What is the new role?",
            },
            {
                type: "input",
                name: "roleSalary",
                message: "What is the salary of this role?",
            },
            {
                type: "input",
                name: "roleDepartmentId",
                message: "What is this role's deparment ID?",
            },
        ])
        .then((answer) => {
            db.query(
                "insert into role (title, salary, department_id) values (?, ?, ?)", [answer.roleTitle, answer.roleSalary, answer.roleDepartmentId],
                (err, data) => {
                    console.log("Your have added a new role");
                    viewRoles();
                }
            );
        });