// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "MIT": return `https://img.shields.io/badge/License-MIT-brightgreen.svg`;
    case "APACHE 2.0": return `https://img.shields.io/badge/License-APACHE_2.0-blue.svg`;
    case "BSD 3": return `https://img.shields.io/badge/License-BSD_3-yellow.svg`;
    case "GPL 3.0": return `https://img.shields.io/badge/License-GPL_3.0-red.svg`;
    default: return "";
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseBadge = renderLicenseBadge(license);
  switch(license) {
    case "MIT": return `[![License](${licenseBadge})](https://opensource.org/licenses/MIT)`
    case "APACHE 2.0": return `[![License](${licenseBadge})](https://opensource.org/licenses/Apache-2.0)`;
    case "BSD 3": return `[![License](${licenseBadge})](https://opensource.org/licenses/BSD-3-Clause)`;
    case "GPL 3.0": return `[![License](${licenseBadge})](https://opensource.org/licenses/GPL-3.0)`;
    default: return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
    return "This project is licensed under the " + license + " license";
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description} 

  ## Table of Contents
  * [Installation](#installation) 
  * [Usage](#usage) 
  * [License](#license)
  * [Contributing](#contributing) 
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation <a id="installation" />
  In order to run this app, please install the dependencies:
  ${data.dependencies}

  ## Usage <a id="usage" />
  ${data.usage}

  ## License <a id="license" />
  ${renderLicenseSection(data.license)}

  ## Contributing <a id="contributing" />
  ${data.contributing}

  ## Tests <a id="tests" />
  ${data.test}

  ## Questions <a id="questions" />
  For questions about this app, please email me at ${data.email}.
  Thank you for visiting my repo.
`;
}

module.exports = generateMarkdown;
