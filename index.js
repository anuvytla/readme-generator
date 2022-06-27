const fs = require('fs');

const inquirer = require('inquirer');

inquirer.prompt([
    {
        message: 'What is the title of your project?',
        name: 'title',
        type : 'input',
    },
    {
        message: 'Provide a short description explaining the what, why, and how of your project?',
        name: 'description',
        type: 'input'
    },
    {
        message: 'What are the steps required to install your project?',
        name : 'installation',
        type: 'input',
    },
    {
        message: 'Provide instructions and examples for use ',
        name: 'instructions',
        type: 'input',
    },
    {
        message: 'List your collaborators, if any.',
        name: 'collaborators',
        type: 'input',
    },
    {
        message: 'Please enter any licenses for your project.',
        name: 'license',
        type: 'input',
    }
]).then(answers => {
      console.log(answers);
      fs.writeFile('README.md',JSON.stringify(answers,null,2), err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Success');
      });
});
