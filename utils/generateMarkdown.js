const apache = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

const mit = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

const badges = {
  APACHE: apache,
  MIT: mit,
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `${badges[data.license[0]]}
  # ${data.projectName}

  ## Description 

  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 

  ${data.installation}

  ## Usage 

  ${data.usage}

  ## License
  This project is licensed under ${data.license} license.

  ## Contribute
  ${data.contributing}

  ## Tests
  ${data.testing}

  ## Questions

  For any questions about this generator, please contact me at ${data.email}. 

  Visit https://github.com/${data.github} to access more of my projects.
`;
}

module.exports = generateMarkdown;
