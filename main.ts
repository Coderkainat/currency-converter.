import  inquirer from "inquirer"

const currency :any ={
  USD: 1,
 PKR: 278,
 EUR:0.91,
 LKR :200,
};

let user_answer = await inquirer.prompt(
    [
        {
    name:"from",
    message:"Enter from currency",
    type:"list",
    choices:['USD','PKR','EUR','LKR']
        },
        {
            name:"to",
            message:"Enter to currency",
            type:"list",
            choices:['USD','PKR','EUR','LKR']
        },
        {
            name:"amount",
            message:'Enter your Amount',
            type:'number',
        }
    ])
    console.log(user_answer)

    let from_amount = currency[user_answer.from] 
    let to_amount = currency[user_answer.to]
    let amount = user_answer.amount
    let baseAmount = amount /from_amount
    let covertedAmount =baseAmount * to_amount
    console.log(covertedAmount)
    console.log(from_amount)
    console.log(to_amount)
    console.log(amount)