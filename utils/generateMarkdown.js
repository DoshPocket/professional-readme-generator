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

  ## License
  This project is licensed under ${data.license[0].toLowerCase} license.
`;
}

module.exports = generateMarkdown;
