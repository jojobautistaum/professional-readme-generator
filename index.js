// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = ["What is your GitHub username? ", 
                   "What is your email address? ", 
                   "What is your project's name? ",
                   "Please write a short description of your project: ",
                   "What kind of license should your project have? ",
                   "What command should be run to install dependencies? ",
                   "What command should be run to run test? ",
                   "What does the user need to know about using the repo? ",
                   "What does the user need to know about contributing to the repo? "
                  ];



// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Your README file was successfully generated with a filename: " + fileName);
        console.log(`You may copy "${fileName}" into your repo and rename it into "README.md"`);
    });    
}

// Create a function to initialize app
function init() {
    // Ask the user for the information needed to build the README file
    const promptUser = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'username',
                message: questions[0]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[1]
            },
            {
                type: 'input',
                name: 'project',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'description',
                message: questions[3]
            },
            {
                type: 'list',
                name: 'license',
                message: questions[4],
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            },
            {
                type: 'input',
                name: 'dependencies',
                message: questions[5]
            },
            {
                type: 'input',
                name: 'test',
                message: questions[6]
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[7]
            },
            {
                type: 'input',
                name: 'contributing',
                message: questions[8]
            }
        ]);
    };

    promptUser()
        .then(answers => writeToFile("generated-README.md", generateMarkdown(answers)));
}

// Function call to initialize app
init();
