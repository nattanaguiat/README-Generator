// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import path from 'path';

// TODO: Create an array of questions for user input
const questions = [
  { type: 'input',
    name: 'title',
    message: 'Please name your proyect',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe the purpose and fucntionality of your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license for the project',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please describe the installation process for the project',
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Please describe the usage of the project',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Write your GitHub username',
  },

  {
    type: 'input',
    name: 'email',
    message: 'Write your email address',
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Describe the contribution guidelines for the project',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'List any tests for the project',
  }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return fs.promises.writeFile((fileName), data)
}

// TODO: Create a function to initialize app
const init = () => {
    //PROMPT - QUESTIONS - CALLBACK => - WRITE TO FILE => (FILE NAME, DATA (GENERATE MARKDOWN =>)) -
    inquirer.prompt(questions)
      .then((answers) => {
          const markDown = generateMarkdown(answers)
        return writeToFile("README.md", markDown)
      })
      .then(() => {
        console.log('Successfully wrote to README.md');
      })
      .catch((err) => {
        console.error(err)
      })
}

// Function call to initialize app
init();
