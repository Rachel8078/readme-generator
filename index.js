const generateReadMe = require('./src/readme-template.js');
const profileDataArgs = process.argv.slice(2);

const [projectName, description, installation, usage, contributing, license, name, githubName, email] = profileDataArgs;
