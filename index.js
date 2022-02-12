const inquirer = require('inquirer');
const generateReadMe = require('./src/readme-template.js');
const { writeFile } = require('./utils/generate-readme.js');

const promptUser = () => {
    console.log(`
    =================================================================
                  Welcome to the README File Generator!
       Answer the following questions about your project to begin.
    =================================================================
    `);
    
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
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
            message: 'Provide a short description explaining the what, why, and how of your project.',
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
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
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
            message: 'Provide instructions and examples for use of your project.', 
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
            name: 'confirmScreenshot',
            message: 'Would you like to include a screenshot for your project?',
            when: ({ confirmScreenshot }) => {
                if (confirmScreenshot) {
                    return true;
                    console.log('To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it.')
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose which license your project is covered under.  If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).',
            choices: ['GNU AGPLv3','GNU GPLv3', 'GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT','Boost Software License 1.0', 'The Unlicense']
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
            type: 'input',
            name: 'tests',
            message: 'Please provide tests and examples on how to run them for your application.',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please enter tests information for your project.');
                    return false;
                }
            }
        },
         
    ]);
};

promptUser()
.then(readMeData => {
    return generateReadMe(readMeData);
})
.then(pageREADME => {
    console.log(pageREADME);
    return writeFile(pageREADME);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
})
.catch(err => {
    console.log(err);
});
