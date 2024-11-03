// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  // LIST OF LICENSES FROM QUESTION (LIST OPTION OF (HOW TO ADD LICENSE))
  if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license === 'Apache'){
    return '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'GPL'){
    return '[![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license === 'BSD'){
    return '[![License: BSD](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } 
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  // CONDITION (IF LICENSE IS ---> RETURN LINK)
  if (license === 'MIT'){
    return '(https://opensource.org/licenses/MIT)'
  }
  if (license === 'Apache'){
    return '(https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'GPL'){
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license === 'BSD'){
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  } 
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  // SECTION FOR IT ----> HEADER IF THER IS A ONE
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => { // EVERYTHING FOR EVERY SECTION 
  return `# ${data.title}
  
## Description
  
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}.

## License

This project is covered under the ${data.license} license.

## How to Contribute

${data.contributions}

## Tests

${data.tests}

## Questions

For any questions, please contact me at: ${data.email}

GitHub: [${data.github}](https//github.com/${data.github})`;
}

export default generateMarkdown;



