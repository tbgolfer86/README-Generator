const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [{
    type: 'input',
    name: 'Title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Provide a short description explaining the what, why, and how of your project.',
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed.',
  },
  {
    type: 'list',
    name: 'License',
    message: 'Enter the license used for your project.',
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
    message: 'Explain how to contribute to your project.',
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Enter any tests.',
  },
  {
    type: 'input',
    name: 'Questions',
    message: 'If you have any questions about the project, open an issue or please contact at: ',
  }];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Successfully created .md file!')
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
