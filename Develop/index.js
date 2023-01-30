const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [{
    type: 'input',
    name: 'Title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Provide a short description explaining the what, why, and how of your project:',
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Provide instructions on how to use your application:',
  },
  {
    type: 'list',
    name: 'License',
    message: 'Select the license used for your project:',
    choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla",
        "MIT",
        "Apache",
        "Boost"
    ]
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'Explain how to contribute to your project:',
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Enter any test instructions:',
  },
  {
    type: 'input',
    name: 'Github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'Email',
    message: 'Enter the best Email address for users to contact you about the project:',
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Successfully created your .md file!')
  );
}

function init() {
    inquirer
      .prompt(questions)
      .then((data) => {
        readmeContent = generateMarkdown(data);
        writeToFile('README.md', readmeContent);
  });
}

init();
