const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const generateCard = require('./cardGenerator');
const generateHtml = require('./generateHtml');
let cardsSnippet = ``;

const commonQuestions = (role) => {
    let phrase;
    switch (role) {
        case "Manager":
            phrase = "the team manager";
            break;
        case "Engineer":
            phrase = "your engineer";
            break;
        case "Intern":
            phrase = "your intern";
            break;
        default:
            phrase = "";
    }
    return [
        {
            type: 'input',
            message: "What is " + phrase + "'s name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is " + phrase + "'s id?",
            name: 'id',
            validate(value) {
                const valid = !isNaN(parseInt(value));
                return valid || 'Please enter a number';
            },
            // filter: Number,
        },
        {
            type: 'input', 
            message: "What is " + phrase + "'s email?",
            name: 'email',
        }
    ]
};

const specialQuesion = (role) => {
    switch (role) {
        case "Manager":
            return {
                type: 'input',
                message: "What is the team manager's office number?",
                name: 'officeNumber',
                validate(value) {
                    const valid = !isNaN(parseInt(value));
                    return valid || 'Please enter a number';
                },
            };
        case "Engineer":
            return {
                type: 'input',
                message: "What is your engineer's GitHub username?",
                name: 'github',
            };
        case "Intern":
            return {
                type: 'input',
                message: "What is your intern's school?",
                name: 'school',
            };
        default:
            return {};
    }
}

const questions = (role) => {
    return [
        ...commonQuestions(role),
        specialQuesion(role),
        {
            type: 'list',
            message: 'Which type of team member do you want to add?',
            name: 'nextRole',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
        }
    ];
}

const promptQuestions = (role) => {
    inquirer
        .prompt(questions(role))
        .then((answer) => {
            switch (role) {
                case "Manager": {
                    const {name, id, email, officeNumber} = answer;
                    const manager = new Manager(name, id, email, officeNumber);
                    cardsSnippet += generateCard(manager);
                    break;
                }
                case "Engineer": {
                    const {name, id, email, github} = answer;
                    const engineer = new Engineer(name, id, email, github);
                    cardsSnippet += generateCard(engineer);
                    break;
                }
                case "Intern": {
                    const {name, id, email, school} = answer;
                    const intern = new Intern(name, id, email, school);
                    cardsSnippet += generateCard(intern);
                    break;
                }
                default:
                    break;
            }

            if (answer.nextRole === 'Engineer' || answer.nextRole === 'Intern') {
                promptQuestions(answer.nextRole);
            } else {
                generateHtml(cardsSnippet);
            }
        })
}

const generatePrompts = () => {
    employees = [];
    cardsSnippet = ``;
    promptQuestions("Manager");
};

module.exports = generatePrompts;