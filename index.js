// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the project usage?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What apps are needed to be installed for this project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What is the contribution of this project?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'What is the credits for this project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is the license for the app?',
        choices: ['Apache', 'MIT', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'badge',
        message: 'What is the badge for the app?',
        choices: ['Apache', 'MIT', 'BSD', 'None']
    },  
    {
        type: 'input',
        name: 'test',
        message: 'How to test the app?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Do you have any questions?',
    },
];

// TODO: Create a function to write README fileex
function writeFilewriteToFile(fileName, data) {
// fs is a Node standard library package for reading and writing files
// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
//fs.readFile('data.csv', 'utf8', (error, data) =>
// error ? console.error(error) : console.log(data)
//);
// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

 fs.writeFile(fileName, data, "utf8", (err) =>
 err ? console.error(err) : console.log('Success!')
);
}
// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const markdown = generateMarkdown(answers);
        writeFilewriteToFile("./dist/README-Generator.md", markdown);
    });    
}

// Function call to initialize app
init();
