// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs"
import generateMarkdown from "./utils/generateMarkdown";
import Choices from "inquirer/lib/objects/choices";
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title your readme?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter intall instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the use.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Pick license',
        choices: ['Boost', 'BSD', 'Apcache']
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'List contributers.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'App tests?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github link.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email here.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
