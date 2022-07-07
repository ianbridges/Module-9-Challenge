/* Packages needed for this Application */
import inquirer from "inquirer";
import fs from "fs"
import generateMarkdown from "./utils/generateMarkdown";
import Choices from "inquirer/lib/objects/choices";


/* Prompt Questions Array Start */
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
/* Prompt Questions Array End */


/* README Writing Function Start */
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        }
        console.log("Readme Completed")
    })
};
/* README Writing Function End */


/* Initializing Function Start */
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            var data = generateMarkdown(answers);
            writeToFile("README.md", data)
        })
        .catch((error) => {
            if (error.isTtyError) {
                
            } else {
                
            }
        });
}
/* Initializing Function End */


// Function call to initialize app
init();
