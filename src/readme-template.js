const generateReadMe = (projectName, githubName) => {
    return `
    # ${projectName}

    ## Description
    
    ${ description }

    ## Table of Contents (Optional)

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

    ## Screenshot

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
    ${name}
    ${githubName}
    ${email}
    `;
};

module.exports = generateReadMe;