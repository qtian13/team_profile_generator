const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const generateCard = require('./cardGenerator');
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
        name: 'github',
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
            const {name, id, email, officeNumber} = answer;
            const manager = new Manager(name, id, email, officeNumber);
            cardsSnippet += generateCard(manager);
            if (answer.nextRole === 'Engineer') {
                promptEngineer();
            } else if (answer.nextRole === 'Intern') {
                promptIntern();
            } else {
                generateHtml(cardsSnippet);
            }
        })
}

function promptEngineer() {
    inquirer
        .prompt(questionsAboutEngineer)
        .then((answer) => {
            const {name, id, email, github} = answer;
            const engineer = new Engineer(name, id, email, github);
            cardsSnippet += generateCard(engineer);
            if (answer.nextRole === 'Engineer') {
                promptEngineer();
            } else if (answer.nextRole === 'Intern') {
                promptIntern();
            } else {
                generateHtml(cardsSnippet);
            }
    })
}

function promptIntern() {
    inquirer
        .prompt(questionsAboutIntern)
        .then((answer) => {
            const {name, id, email, school} = answer;
            const intern = new Intern(name, id, email, school);
            cardsSnippet += generateCard(intern);
            if (answer.nextRole === 'Engineer') {
                promptEngineer();
            } else if (answer.nextRole === 'Intern') {
                promptIntern();
            } else {
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