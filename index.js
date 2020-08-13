const inquirer = require('inquirer');
const fs = require('fs');

const generate = () =>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'githubUser',
            message: 'GitHub Email:'
        },
        {
            type: 'input',
            name: 'title',
            message: 'Project Name:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description:'
        },
        {
            type: 'confirm',
            name: 'contents',
            message: 'Include a Table of Contents?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'License:',
            choices: ['MIT','Creative Commons','Apache','BSD','IBM','Mozilla']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How to contribute:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Tests:'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Questions:'
        }
    ])
    .then((answer) => {
        console.log('', answer);

        let badgeUrl = ''
        if (answer.license === "Creative Commons") {
            badgeUrl = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
        } else if (answer.license === "Eclipse") {
            badgeUrl = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
        } else if (answer.license === "IBM") {
            badgeUrl = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
        } else if (answer.license === "Mozilla") {
            badgeUrl = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        }
        
        const readMeString = `
            # Title: ${answer.title}
            ## Description: ${answer.description}
            ## Table of Contents: ${answer.contents}
            ## Installation: ${answer.installation}
            ## Usage: ${answer.usage}
            ## License:${badgeUrl}
            ## Contributing: ${answer.contributing}
            ## Tests: ${answer.tests}
            ## Questions: ${answer.questions}
        `

        fs.writeFile('README.md', readMeString, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });
}

generate();
