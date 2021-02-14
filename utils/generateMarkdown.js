// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  console.log("license rest: " + license);
  
  if(license === 'Apache 2.0'){
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
  } else if(license === 'Boost') {
    return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg';
  } else if(license === 'GNU AGPL v3') {
    return ' https://img.shields.io/badge/License-AGPL%20v3-blue.svg';
  } else if(license === 'GNU FDL v1.3') {
    return 'https://img.shields.io/badge/License-FDL%20v1.3-blue.svg';
  } else if(license === 'GNU GPL v3') {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  } else if(license === 'GNU LGPL v3') {
    return 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg';
  } else if(license === 'ISC') {
    return 'https://img.shields.io/badge/License-ISC-blue.svg';
  } else if(license === 'MIT') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg';
  } else if(license === 'Mozilla') {
    return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
  } else { // no license 
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if(license === 'Apache 2.0'){
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if(license === 'Boost') {
    return 'https://www.boost.org/LICENSE_1_0.txt';
  } else if(license === 'GNU AGPL v3') {
    return 'https://www.gnu.org/licenses/agpl-3.0';
  } else if(license === 'GNU FDL v1.3') {
    return 'https://www.gnu.org/licenses/fdl-1.3';
  } else if(license === 'GNU GPL v3') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if(license === 'GNU LGPL v3') {
    return 'https://www.gnu.org/licenses/lgpl-3.0';
  } else if(license === 'ISC') {
    return 'https://opensource.org/licenses/ISC';
  } else if(license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if(license === 'Mozilla') {
    return 'https://opensource.org/licenses/MPL-2.0';
  } else { // no license 
    return '';
  }
}

const completedLicenseBadge = license => {
  if(license === 'N/A') {
    return ''
  } 
  return `
[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})
`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if(license === 'N/A') {
    return ''
  } 
  return `
## License
${license}  
`
}

const renderTableOfContents = license => {
  if(license === 'N/A') {
    return `
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)  
  * [Questions](#questions)      
      
`
  } 
  return `
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)  
  * [Questions](#questions)   
`
}

// TODO: Create a function to generate markdown for README
//function intergrated into the module.export
module.exports = generateMarkdown => {
  console.log(generateMarkdown);
  //destructure object
  const { license, ...data } = generateMarkdown

  return `
# ${data.title}

${completedLicenseBadge(license)}
  
## Description
${data.description}
  
${renderTableOfContents(license)}
  
## Installation
${data.installation}
  
## Usage
${data.usage}
  
${renderLicenseSection(license)}
  
## Contribution
${data.contribution}
  
## Tests
${data.tests}
  
## Questions
If you have any Question you can get in touch with me through :  
GitHub User: ${data.username}  
Email: ${data.email}  
`
};
