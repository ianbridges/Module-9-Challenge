/* Function that Displays Licensing Badge Start */
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
/* Function that Displays Licensing Badge End */



/* Function that Returns License Link Start */
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
/* Function that Returns License Link Start */


/* Function that Returns License Section of README Start */
function renderLicenseSection(license) {
    if (license) {
        return "<h2> License </h2>\n" + renderLicenseBadge(license) + renderLicenseLink(license);
    } else {
        return "";
    }
}
/* Function that Returns License Section of README Start */


/* Function that Generates Markdown for README Start */
function generateMarkdown(data) {
  return "## <h1>" + data.title + "</h1>" +
    renderLicenseSection(data.license) +

    "<h2> Table of Contents </h2> \n" +
    "- [License](#license)" + "\n" +
    "- [Description](#description)" + "\n" +
    "- [Installation](#installation)" + "\n" +
    "- [Usage](#usage)" + "\n" +
    "- [Contributers](#contributers)" + "\n" +
    "- [Testing](#testing)" + "\n" +
    "- [Github](#github)" + "\n" +
    "- [Email](#email)" + "\n" +

    "<h2>Description</h2>" +
    "<p>" + data.description + "</p>" +

    "<h2>Installation</h2>" +
    "<p>" + data.installation + "</p>" +

    "<h2>Usage</h2>" +
    "<p>" + data.usage + "</p>" +

    "<h2>Contributers</h2>" +
    "<p>" + data.contributing + "</p>" +

    "<h2>Tests</h2>" +
    "<p>" + data.tests + "</p>" +

    "<h2>Github</h2>" +
    "<p>" + data.github + "</p>" +

    "<h2>Email</h2>" +
    "<p>" + data.email + "</p>";
}
/* Function that Generates Markdown for README End */


module.exports = generateMarkdown;
