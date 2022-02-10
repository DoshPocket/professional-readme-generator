// packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer'); 

// a function to write README file
const generatePage = require('./utils/generateMarkdown.js');

// an array of questions for user input
const questions = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your project name.');
                return false; 
            }
        } 
    },

        {
            type: 'input',
            name: 'description',
            message: 'Please write a description of your project',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please write a description of your project.');
                    return false; 
                }
            } 
        },

            {
                type: 'checkbox',
                name: 'license',
                message: 'What license is your project protected under?',
                choices: ['APACHE', 'MIT'],
                default: ["APACHE"],
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please choose a license.');
                        return false; 
                    }
                } 
            },

            {
                type: 'input',
                name: 'installation',
                message: 'How is your project installed?',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please describe how your project is installed.');
                        return false; 
                    }
            } 
        },

        {
            type: 'input',
            name: 'usage',
            message: 'How is your project used?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please describe how your project is used.');
                    return false; 
                }
        } 
    },

    {
        type: 'input',
        name: 'testing',
        message: 'What tests can be run on your project?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please describe what tests can be run.');
                return false; 
            }
    } 
},

{
    type: 'input',
    name: 'contributing',
    message: 'How can other developers contribute to your project?',
    validate: userInput => {
        if (userInput) {
            return true;
        } else {
            console.log('Please describe how other developers can contribute.');
            return false; 
        }
} 
},

{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    validate: userInput => {
        if (userInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username.');
            return false; 
        }
    } 
},

{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: userInput => {
        if (userInput) {
            return true;
        } else {
            console.log('Please enter your email address.');
            return false; 
        }
    } 
},
// write to markdown document
]).then(data=>{
    fs.writeFileSync('README.md', generatePage(data))
}) 
};
// run initial code
questions();
