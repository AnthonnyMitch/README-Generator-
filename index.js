
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
    type: "checkbox",
    message: "Enter technologies used on this project",
    name:"Technologies",
    choices:[
        "HTML", "CSS", "JAVASCRIPT", "JQUERY","NOBE","JAVA","PYTHON","C++","OTHERS"
    ],
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
    
    message: "License MIT",
    name:"License",
    default: "![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)",
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

},
])

.then(function(answers){
    
    const generateFile = generateMarkdown(answers)

    
    fs.writeFile("README.md", generateFile,function (err){
        console.log(err);
    })
console.log("You have successfully create a README.md file");
})
