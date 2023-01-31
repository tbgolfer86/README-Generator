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

function renderLicenseLink(License) {
  if (License == 'GNU AGPLv3') {
    return `[GNU AGPLv3 license](https://opensource.org/licenses/AGPL-3.0)`;
  }
  if (License == 'GNU GPLv3') {
    return `[GNU GPLv3 license](https://opensource.org/licenses/GPL-3.0)`;
  }
  if (License == 'GNU LGPLv3') {
    return `[GNU LGPLv3 license](https://opensource.org/licenses/LGPL-3.0)`;
  }
  if (License == 'Mozilla') {
    return `[Mozilla license](https://opensource.org/licenses/MPL-2.0)`;
  }
  if (License == 'MIT') {
    return `[MIT license](https://opensource.org/licenses/MIT)`;
  }
  if (License == 'Apache') {
    return `[Apache license](https://opensource.org/licenses/Apache-2.0)`;
  } 
  if (License == 'Boost') {
    return `[Boost license](https://opensource.org/licenses/BSL-1.0)`;
  } else {
    return '';
  }
}

function renderLicenseSection(License) {
  if (License == 'GNU AGPLv3') {
    return 'This application is licensed under the ' + renderLicenseLink(License);
  }
  if (License == 'GNU GPLv3') {
    return 'This application is licensed under the ' + renderLicenseLink(License);
  }
  if (License == 'GNU LGPLv3') {
    return 'This application is licensed under the ' + renderLicenseLink(License);
  }
  if (License == 'Mozilla') {
    return 'This application is licensed under the ' + renderLicenseLink(License);
  }
  if (License == 'MIT') {
    return 'This application is licensed under the ' + renderLicenseLink(License);
  }
  if (License == 'Apache') {
    return 'This application is licensed under the ' + renderLicenseLink(License);
  } 
  if (License == 'Boost') {
    return 'This application is licensed under the ' + renderLicenseLink(License);
  } else {
    return '';
  }
}

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
  ${renderLicenseSection(data.License)}
  
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
