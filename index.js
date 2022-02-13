const inquirer = require('inquirer');
const generateReadMe = require('./src/readme-template.js');
const { writeFile } = require('./utils/generate-readme.js');

// function that initializes and contains questions
const promptUser = () => {
    console.log(`
    =================================================================
                  Welcome to the README File Generator!
       Answer the following questions about your project to begin.
    =================================================================
    `);
    
    // start inquirer question prompt
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('(Required)');
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
                    console.log('(Required)');
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
                    console.log('(Required)');
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
                    console.log('(Required)');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project.',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('(Required)');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('(Required)');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions and examples for your project.', 
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('(Required)');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose which license your project is covered under.',
            choices: ['MIT', 'Apache 2.0', 'MPL 2.0', 'The Unlicense','GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Boost Software License 1.0']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please include contributing guidelines for your project.',
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log('(Required)');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide tests and examples on how to run them for your application.',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('(Required)');
                    return false;
                }
            }
        },
         
    ]);
};

// function call to begin app
promptUser()
// send answers to questions to readme file template
.then(readMeData => {
    return generateReadMe(readMeData);
})
// write the readme file and insert in dist folder
.then(pageREADME => {
    console.log(pageREADME);
    return writeFile(pageREADME);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
})
// catch errors
.catch(err => {
    console.log(err);
});
