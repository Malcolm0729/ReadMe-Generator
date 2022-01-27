const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'usernname',
    },
    {
        type: 'input',
        message: 'What is the title of your ptoject?',
        name: 'title',    
    },
    {
        type: 'input',
        message:'Type a descriptive overview of the project goal',
        name: "description",
    },
    {
        type: 'list',
        message: 'Which licensing is included in your project?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'ISC', 'NONE'],
    },
    {
        type: 'input',
        message: 'What is the projects command',
        default: 'npm i',
    },
    {
        type: 'input',
        messge: 'What is the projects run command?',
        name: 'runCmd',
        default: 'node index.js',
    },
    {
        type: 'input',
        message: 'How do you contribute to this project?',
        name: 'contribute',
    },

];

const makeUsageBullets = async (inputs = []) => {
    constsetupPrompts = [
        {
            type: 'input',
            message: 'Add a setup instuction bullet',
            name: 'usageBullet',
        },
        {
            type: 'confirm',
            message: 'would you like to add another?',
            name: 'repeat',
            default: 'true',
        },
    ];

    const { repeat, ...answers } = await inquirer.prompt(setupPrompts);
    const newInputs = [...inputs];
    for (const ans in answers) {
        newInputs.push(answers[ans]);
    }
    return repeat ? makeUsageBullets(newInputs) : newInputs;
};

inquirer
.prompt(prompts)
.then(async (answers) => {
    const next = await makeUsageBullets();
    answers.usageBullets = next;
    const mdText = makeMarkdown(answers);

    fs.writeFile('README.md', mdText, (err)
    err ? console.log(err) : console.log('Successfully created readme!!!')
    );
})
.catch((err) => console.error(err));

