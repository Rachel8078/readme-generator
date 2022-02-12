module.exports = templateData => {
    console.log(templateData);
    const { name, githubName, email, projectName, description, installation, usage, contributing, tests, license } = templateData;
    
    return `
# ${projectName}

[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})

## Description
    
${ description }

## Table of Contents

- [Installation](#installation)
- [Usage](#usage) 
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## License

${license}

## Tests

${tests}

## Questions

    Please use following contact information for any questions:
    Name: ${name}
    GitHub Link: https://github.com/${githubName}
    Email: ${email}
    `;
};

