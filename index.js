const inquirer = require('inquirer');
const fs = require('fs');
const questionsAboutManager = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'manager',
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
        name: 'role',
        choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
    }
];
const questionsAboutEngineer = [
    {
        type: 'input',
        message: "What is your engineer's name?",
        name: 'manager',
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
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: 'Which type of team member do you want to add?',
        name: 'role',
        choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
    }
];
const questionsAboutIntern = [
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'manager',
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
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: 'Which type of team member do you want to add?',
        name: 'role',
        choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
    }
];

function promptManager() {
    inquirer
        .prompt(questionsAboutManager)
        .then((answer) => {
            if (answer.role === 'Engineer') {
                promptEngineer();
            } else if (answer.role === 'Intern') {
                promptIntern();
            }
        })
}

function promptEngineer() {
    inquirer
        .prompt(questionsAboutEngineer)
        .then((answer) => {
            if (answer.role === 'Engineer') {
                promptEngineer();
            } else if (answer.role === 'Intern') {
                promptIntern();
            }
        })
}

function promptIntern() {
    inquirer
        .prompt(questionsAboutIntern)
        .then((answer) => {
            if (answer.role === 'Engineer') {
                promptEngineer();
            } else if (answer.role === 'Intern') {
                promptIntern();
            }
        })
}


function init() {
    console.log('Please build your team:');
    promptManager();
}

init();