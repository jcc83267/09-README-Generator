// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your Github Username: (Required)', 
    },
    {
        type: 'input',
        name: 'repoName',
        message: 'Enter your Github Repo Name: (Required)'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of of your project? (Required)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project: (Required)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the steps to install your project : '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instuctions/examples of your project in use: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'What License did this project use? (Check all that apply)',
        choices: [
            'Apache',
            'Boost',
            'GNU GPL v3',
            'GNU AGPL v3', 
            'GNU LGPL v3', 
            'GNU FDL v1.3', 
            'ISC', 
            'MIT', 
            'Mozilla', 
            'N/A']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide guidelines on how other developers can contribute to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any tests written for your application.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email: '
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(     
        questions
    )
}

// Function call to initialize app
init()
    // .then(init => {
    //     return generateMarkdown(init)
    // });
