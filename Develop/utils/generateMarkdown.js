// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description
  ${data.Description}

  ## Table of Contents  

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## License
  ${data.License}
  ## How to Contribute
  ${data.Contributing}
  ## Tests 
  ${data.Tests}
  ## Questions
  ${data.Questions}
`;
};

module.exports = generateMarkdown;
