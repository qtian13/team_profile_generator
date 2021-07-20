const inquirer = require('inquirer');
const fs = require('fs');
const generateCard = require('./cardGenerator');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const generateHtml = require('./generateHtml');
let employees = [];
let cardsSnippet = ``;

const questionsAboutManager = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'id',
        validate(value) {
            const valid = !isNaN(parseInt(value));
            return valid || 'Please enter a number';
        },
        // filter: Number,
    },
    {
        type: 'input', 
        message: "What is the team manager's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'officeNumber',
        validate(value) {
            const valid = !isNaN(parseInt(value));
            return valid || 'Please enter a number';
        },
    },
    {
        type: 'list',
        message: 'Which type of team member do you want to add?',
        name: 'nextRole',
        choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
    }
];
const questionsAboutEngineer = [
    {
        type: 'input',
        message: "What is your engineer's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is your engineer's id?",
        name: 'id',
        validate(value) {
            const valid = !isNaN(parseInt(value));
            return valid || 'Please enter a number';
        },
        // filter: Number,
    },
    {
        type: 'input', 
        message: "What is your engineer's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your engineer's GitHub username?",
        name: 'username',
    },
    {
        type: 'list',
        message: 'Which type of team member do you want to add?',
        name: 'nextRole',
        choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
    }
];
const questionsAboutIntern = [
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is your intern's id?",
        name: 'id',
        validate(value) {
            const valid = !isNaN(parseInt(value));
            return valid || 'Please enter a number';
        },
        // filter: Number,
    },
    {
        type: 'input', 
        message: "What is your intern's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your intern's school?",
        name: 'school',
    },
    {
        type: 'list',
        message: 'Which type of team member do you want to add?',
        name: 'nextRole',
        choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
    }
];

function promptManager() {
    inquirer
        .prompt(questionsAboutManager)
        .then((answer) => {
            employees.push(new Manager(answer.name, answer.id, answer.email, answer.officeNumber));
            if (answer.nextRole === 'Engineer') {
                promptEngineer();
            } else if (answer.nextRole === 'Intern') {
                promptIntern();
            } else {
                employees.forEach(employee => cardsSnippet += generateCard(employee));
                generateHtml(cardsSnippet);
            }
        })
}

function promptEngineer() {
    inquirer
        .prompt(questionsAboutEngineer)
        .then((answer) => {
            employees.push(new Engineer(answer.name, answer.id, answer.email, answer.username));
            if (answer.nextRole === 'Engineer') {
                promptEngineer();
            } else if (answer.nextRole === 'Intern') {
                promptIntern();
            } else {
                employees.forEach(employee => cardsSnippet += generateCard(employee));
                generateHtml(cardsSnippet);
            }
    })
}

function promptIntern() {
    inquirer
        .prompt(questionsAboutIntern)
        .then((answer) => {
            employees.push(new Intern(answer.name, answer.id, answer.email, answer.school));
            if (answer.nextRole === 'Engineer') {
                promptEngineer();
            } else if (answer.nextRole === 'Intern') {
                promptIntern();
            } else {
                employees.forEach(employee => cardsSnippet += generateCard(employee));
                generateHtml(cardsSnippet);
            }
        })
}

function generatePrompts() {
    employees = [];
    cardsSnippet = ``;
    promptManager();
}

module.exports = {
    generatePrompts,
};