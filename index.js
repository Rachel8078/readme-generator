const inquirer = require('inquirer');
const generateReadMe = require('./src/readme-template.js');

//const readMeContent = generateReadMe(projectName, description, installation, usage, contributing, license, name, githubName, email);

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));
