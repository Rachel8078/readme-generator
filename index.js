const inquirer = require('inquirer');
const generateReadMe = require('./src/readme-template.js');

//const readMeContent = generateReadMe(projectName, description, installation, usage, contributing, license, name, githubName, email);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Hi, what is your name?'
        },
        {
            type: 'input',
            name: 'githubName',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please include installation instructions for your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please include usage information for your project.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please include contributing guidelines for your project.'
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
