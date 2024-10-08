// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/license-${license}-blue`;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `https://choosealicense.com/licenses/${license}`;
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License`;
  } else {
    return "";
  }
}  
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title} 
  ![License](${renderLicenseBadge(data.license)})                        
  
  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Contribution](#contribution)
  * [Credits](#credits)
  * [License](#license)
  * [Test](#test)
  * [Questions](#questions)
   
## Description
${data.description}

## Usage
${data.usage}

## Installation
${data.installation}

## Contribution
${data.contribution}

## Credits
${data.credits}

${renderLicenseSection(data.license)}
${data.license}
${renderLicenseLink(data.license)}

## Test
${data.test}

## Questions
${data.questions}
`;
}
module.exports = generateMarkdown;
