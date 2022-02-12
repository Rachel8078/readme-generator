module.exports = templateData => {
    console.log(templateData);
    const { name, githubName, email, projectName, description, installation, usage, contributing, license } = templateData;
    
    return `
# ${projectName}

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

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
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

Contact Information: 
Name: ${name}
GitHub Username: ${githubName}
Email: ${email}
    `;
};

