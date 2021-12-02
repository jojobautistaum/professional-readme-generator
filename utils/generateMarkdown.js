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
  return `
  # ${data.project}

  ## Description
  ${data.description} 

  ## Table of Contents
  * [Installation](#installation) 
  * [Usage](#usage) 
  * [License](#license)
  * [Contributing](#contributing) 
  * [Tests](#tests)

  ## Installation <a id="installation" />
  In order to run this app, please install the dependencies:
  ${data.dependencies}

    ## Usage <a id="usage" />
  ${data.usage}

  ## License <a id="license"/>
  ${data.license}

  ## Contributing <a id="contributing" />
  ${data.contributing}

  ## Tests <a id="tests" />
  ${data.test}

`;
}

module.exports = generateMarkdown;
