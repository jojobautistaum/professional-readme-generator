// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = ["What is your GitHub username? ", 
                   "What is your email address? ", 
                   "What is your project's name? ",
                   "Please write a short description of your project ",
                   "What kind of license should your project have? ",
                   "What command should be run to install dependencies? ",
                   "What command should be run to run test? ",
                   "What does the user need to know about using the repo? ",
                   "What does the user need to know about contributing to the repo? "];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    FileSystem.writeFile(`./${fileName}`, data, err => {
        if (err) {
            console.log(err);
            return
        }
        console.log("Your README file is successfully generated with a filename: " + fileName);
    });    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
