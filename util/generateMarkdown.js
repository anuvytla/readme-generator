// Helper function to generate markdown text from project info.
function generateMarkdown(projectInfo) {
  // Get the license badge.
  var licenseBadge = generateLicenseBadge(projectInfo.license)
  // Get the url for the full license terms.
  var licenseUrl = generateLicenseUrl(projectInfo.license)

  var readMeMarkdown = (`# ${projectInfo.title} ![License](${licenseBadge})
                        \n ${projectInfo.description}
                        \n## Table of Contents
                        \n* [Installation](#Installation)
                        \n* [Instructions](#Instructions)
                        \n* [Collaborators](#Collaborators)
                        \n* [License](#License)
                        \n## Installation
                        \n${projectInfo.installation}
                        \n## Instructions
                        \n${projectInfo.instructions}
                        \n## Collaborators
                        \n${projectInfo.collaborators}
                        \n## License
                        \nThis project is licensed under the [${projectInfo.license}](${licenseUrl}).`)

  return readMeMarkdown ;
}

// Helper function that returns URL for the license.
function generateLicenseUrl(license) {
  switch(license) {
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU AGPL v3':
      return 'https://www.gnu.org/licenses/agpl-3.0';
    case 'MIT OpenSource':
      return 'https://opensource.org/licenses/MIT';
    case 'Creative Commons CC0-1.0':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
    default:
      return'';
  }
}

// Helper function that returns the badge for the license.
function generateLicenseBadge(license) {
  switch(license) {
    case 'Apache 2.0':
      return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
    case 'GNU AGPL v3':
      return 'https://img.shields.io/badge/License-AGPL_v3-blue.svg';
    case 'MIT OpenSource':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case 'Creative Commons CC0-1.0':
      return 'https://licensebuttons.net/l/zero/1.0/80x15.png';
    default:
      return '';
  }
}

module.exports = generateMarkdown;