module.exports = templateData => {
    console.log(templateData);
    const { name, githubName, email, projectName, description, installation, usage, contributing, tests, license } = templateData;
    const licenseBadge = license.replace(/\s+/g, '_');
    const licenseLink = license.replace(/\s+/g, '-');
    
    return `
# ${projectName}

[![License](https://img.shields.io/badge/License-${licenseBadge}-blue.svg)](https://opensource.org/licenses/${licenseLink})

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

## License

${license}

## Tests

${tests}

## Questions

### Please use following contact information for any questions:
- Name: ${name}
- GitHub Link: https://github.com/${githubName}
- Email: ${email}
    `;
};

