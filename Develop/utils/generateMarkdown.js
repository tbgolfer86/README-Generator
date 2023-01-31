function renderLicenseBadge(License) {
  if (License == 'GNU AGPLv3') {
    return `![GNU AGPLv3 license](https://img.shields.io/badge/license-GNU_AGPLv3-blue.svg)`;
  }
  if (License == 'GNU GPLv3') {
    return `![GNU GPLv3 license](https://img.shields.io/badge/license-GNU_GPLv3-blue.svg)`;
  }
  if (License == 'GNU LGPLv3') {
    return `![GNU LGPLv3 license](https://img.shields.io/badge/license-GNU_LGPLv3-blue.svg)`;
  }
  if (License == 'Mozilla') {
    return `![Mozilla license](https://img.shields.io/badge/license-Mozilla-blue.svg)`;
  }
  if (License == 'MIT') {
    return `![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)`;
  }
  if (License == 'Apache') {
    return `![Apache license](https://img.shields.io/badge/license-Apache-blue.svg)`;
  } 
  if (License == 'Boost') {
    return `![Boost license](https://img.shields.io/badge/license-Boost-blue.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {}


function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}
  ## Description
  ${data.Description}

---

  ## Table of Contents  

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)

---

  ## Installation
  ${data.Installation}

---

  ## Usage
  ${data.Usage}

---

  ## License
  ${data.License}

---

  ## How to Contribute
  ${data.Contributing}

---

  ## Tests 
  ${data.Tests}

---

  ## Questions
  If you have any questions about the project, open an issue at [${data.Github}](https://www.github.com/${data.Github}) or send an email to ${data.Email}.

`;
};

module.exports = generateMarkdown;
