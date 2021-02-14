// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const renderLicenseBadge = (license) => {
//   if(license === 'Apache 2.0'){
//     return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
//   } else if(license === 'Boost') {
//     return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg'
//   } else if(license === 'GNU GPL v3') {
//     return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
//   } else if(license === 'GNU AGPL v3') {
//     return ''
//   } else if(license === 'GNU LGPL v3') {
//     return ''
//   } else if(license === 'GNU FDL v1.3') {
//     return ''
//   } else if(license === 'ISC') {
//     return ''
//   } else if(license === 'MIT') {
//     return ''
//   } else if(license === 'Mozilla') {
//     return ''
//   } else { // no license 
//     return ''
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
