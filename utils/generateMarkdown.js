// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // creates variable to use for each badge link in switch case
    let badge = '';
    switch(license){
      // case for each potential license prompted to the user
      case 'MIT':
        // var for badge link
        badge = 'https://img.shields.io/badge/license-MIT-red.svg';
        break;
      case 'APACHE 2.0':
        badge = 'https://img.shields.io/badge/license-Apache_2.0-blue.svg';
        break;
      case 'GPL 3.0':
        badge = "https://img.shields.io/badge/license-GPLv3-brightgreen.svg";
        break;
      case 'BSD 3':
        badge = "https://img.shields.io/badge/license-BSD_3--Clause-blueviolet.svg";
        break;    
      case 'None':
        badge = '';
    };
    
    // logic to return the badge link after the switch case is decided
    if(badge === '') {
      return ``;
    } else {
      return `[![License](${badge})](${renderLicenseLink(license)})`;
    };
  
  };
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    switch(license) {
      case 'MIT':
        return `https://opensource.org/licenses/MIT`;
      case 'APACHE 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
      case 'GPL 3.0':
        return `https://www.gnu.org/licenses/gpl-3.0`;
      case 'BSD 3':
        return `https://img.shields.io/badge/license-BSD_3--Clause-blueviolet.svg`;
    };
  };
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if(license === 'None'){
      return `This project does not have a license`
    } else {
      return `This project is licensed under the \`${license}\` license`
    };
  };
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `
    # ${data.title}
    ${renderLicenseBadge(data.license)}
    
    # Description
    
    - ${data.description}
    
    # Table of Contents
    
    * [Installation](#installation)
    
    * [Usage](#usage)
    
    * [License](#license)
    
    * [Contributing](#contributing)
    
    * [Tests](#tests)
    
    * [Questions](#questions)
    
    # Installation
    To install necessary dependencies, run the following command:
    
    \`\`\`bash
    ${data.dependencies}
    \`\`\`
    # Usage
    
    \`\`\`md
    ${data.usage}
    \`\`\`
    # License
    ${renderLicenseSection(data.license)}
    # Contributing
    
    \`\`\`md
    ${data.contributing}
    \`\`\`
    
    # Tests
    
    \`\`\`bash
    ${data.tests}
    \`\`\`
    # Questions
    If you have any questions feel free to contact me at either [Github](https://github.com/${data.github}), or [${data.email}](${data.email})  
  `;
  }
  
  // exports the generateMarkdown function
  module.exports = generateMarkdown;