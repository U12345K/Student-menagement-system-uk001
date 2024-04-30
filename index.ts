#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber: number =Math.floor(10000 + Math.random() *9000)
 
let myBalance: number = 0

let answer = await inquirer.prompt(
    [
        {
            name:"student",
            type:"input",
            message:"Enter Student Name",
            validate: function(value){
                if(value.trim()!==""){
                    return true;
                }
                return "Please Enter a Name";
            }
        },
        {
            name:"cources",
            type:"list",
            message:"Select the course you want to enroll",
            choices:["HTL","CSS","Typescript","Javascript","Python"]
        }
    ]
);

const tutionFee:{[key:string]:number}={
    "HTL":3000,
    "CSS":4500,
    "Typescript":7000,
    "Javascript":7000,
    "Python":8500,
};
console.log(`\nTution Fees: ${tutionFee[answer.cources]}/-\n`);
console.log(`Balance:${myBalance}\n`);

let paymentType = await inquirer.prompt([
    {
        name:"payment",
        type:"list",
        message:"Select Payment Method",
        choices:["Bank Transfer","Easypaisa","Jazzcash"]
    },
    {
        name:"amount",
        type:"input",
        message:"Transfer Money",
        validate: function(value){
            if(value.trim()!==""){
                return true;
            }
            return "Please Enter Your Amount";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}\n`);

const tutionFees = tutionFee[answer.cources];
const paymentAmount = parseFloat(paymentType.amount)

if (tutionFees === paymentAmount){
    console.log(`congratulations! you have succesfully enrolled in ${answer.cources}.\n`);

let ans = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:"Would You like to do Next?",
        choices:["view status","Exit"]
    }
]);

if(ans.select === "view status"){
    console.log("\n*******STATUS*******\n");
    console.log(`STUDENT NAME: ${answer.student}`);
    console.log(`STUDENT ID: ${randomNumber}`);
    console.log(`COURSE: ${answer.cources}`);
    console.log(`TUTION FEES: ${paymentAmount}`);
    console.log(`BALANCE: ${myBalance += paymentAmount}`);
}else{
    console.log("\n=====Exiting Student Management System=====\n");
}

}else{
    console.log(`Invalid amount due to course \n`);
}    

