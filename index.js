const inquirer = require('inquirer');
const generateReadMe = require('./src/readme-template.js');

//const readMeContent = generateReadMe(projectName, description, installation, usage, contributing, license, name, githubName, email);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Hi, what is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubName',
            message: 'What is your GitHub username?',
            validate: githubNameInput => {
                if (githubNameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter your project name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please include installation instructions for your project.',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please include usage information for your project.', 
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage information for your project.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to include custom contributing guidelines for your project.',
            default: true,
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please list contributing guidelines for your project.',
            when: ({ confirmContributing }) => {
                if (confirmContributing) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose which license your project is covered under.',
            choices: ['MIT', 'GNU GPLv3']
        }, 
    ]);
};

promptUser().then(answers => console.log(answers));
