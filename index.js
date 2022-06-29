// Import file system and inquirer modules.
const fs = require('fs');
const inquirer = require('inquirer');

// Utility module with helper functions for generating markdown text.
const generateMarkdown = require('./util/generateMarkdown.js');

// Series of questions prompted to the user to gather project info.
// Also validates that title and description can not be empty.
inquirer.prompt([
    {
        message: 'What is the title of your project?',
        name: 'title',
        type : 'input',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        message: 'Provide a short description explaining the what, why, and how of your project?',
        name: 'description',
        type: 'input',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        message: 'What are the steps required to install your project?',
        name : 'installation',
        type: 'editor',
    },
    {
        message: 'Provide instructions on how to use your project',
        name: 'instructions',
        type: 'input',
    },
    {
        message: 'How can other developers contribute to this project?',
        name: 'collaborators',
        type: 'input',
    },
    {
        message: 'Please choose a license for your project',
        name: 'license',
        type: 'list',
        choices: ['Creative Commons CC0-1.0' , 'MIT OpenSource' , 'GNU AGPL v3' , 'Apache 2.0'],
    }
]).then(projectInfo => {
      // Generate the markdown text string from user input. 
      let markdownText = generateMarkdown(projectInfo);
      // Create a README.md file and write the markdown text to it.
      fs.writeFile('README.md', markdownText, err => {
        if (err) {
            // Display if there is an error.
            console.log(err);
            return;
        }
        // Display success message to the user.
        console.log('Success. Your README is ready.');
      });
});
