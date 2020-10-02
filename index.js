
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require("./utils/generateMarkdown");


inquirer.prompt([
{
    type:"input",
    message: "Enter Project title",
    name: "Title",
},
{
    type: "input",
    message: "Enter project description",
    name:"Description",
},

{
    type: "input",
    message: "Enter technologies used on this project",
    name:"Technologies",
},


{
    type:"input",
    message:"Enter necessary dependencies to run project",
    name:"Installation",
},

{
    type:"input",
    message:"Enter instructions and examples for use",
    name:"Usage",
},

{
    type:"input",
    message:"List your collaborators wiht GitHub profile links and third-party assets that require attribution",
    name:"Credits",
},

{
   default: "/conda/l/:channel/:package",
    message: "License MIT",
    name:"License",
},



{
    type:"input",
    message:"Enter your phone number for any questions about this project",
    name:"Phone",
},
{
    type:"input",
    message: "Enter your email for any questions about this project",
    name: "Email",

}
])

.then(function(answers){
    
    const generateFile = generateMarkdown(answers)
//. Crea la function para crear el README file fs.writeFile y estas listo papi
console.log(generateFile);
})