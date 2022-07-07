// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'Eclipse') {
        return "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    } else if (license === 'IBM') {
        return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    } else if (license === 'MIT') {
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'Eclipse') {
        return "[  Eclipse](https://www.eclipse.org/legal/epl-2.0/)";
    } else if (license === 'IBM') {
        return "[  IBM](https://www.ibm.com/about/software-licensing/licensing/license_information_documents)";
    } else if (license === 'MIT') {
        return "[  MIT](https://opensource.org/licenses/MIT)";
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
