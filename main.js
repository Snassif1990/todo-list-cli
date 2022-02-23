const prompt = require('prompt-sync')();

const itemArray = [];
let itemArrayComplete = [];
let itemCount = itemArray.length-1;
let decision = Number('');

while (decision !== 3) {

    console.log("\n ~ Select an action ~ \n\n[1] Create a to-do item \n[2] Complete a to-do item \n[3] Exit the program");

    let decision = Number(prompt("\n> "));

    if (decision === 1) {
        console.log("\n ~ Creating a new to-do item ~ \nWhat is this to-do item called? \n");
        let newItem = prompt("> ");
        itemArray.push(newItem);
        itemArrayComplete.push("[incomplete]")

        console.log("\n===========================================")
        for (let i = 0; i < itemArray.length; i++) {
            console.log(`${i+1}. ${itemArrayComplete[i]} ${itemArray[i]}`);
            // console.log( i + ' + ' + 1 + itemArrayComplete[i] + itemArray[i]);
        }
        console.log("===========================================");
    }
    else if (decision === 2){
        console.log("\n ~ Completing a to-do item ~ \nWhich to-do item would you like to complete?");
        let completeItem = prompt("> ")
        itemArrayComplete[completeItem -1] = "[complete]";

        console.log("\n===========================================");
        for (let i = 0; i < itemArray.length; i++) {
            console.log(`${i+1}. ${itemArrayComplete[i]} ${itemArray[i]}`);
        }
        console.log("===========================================");

    }
    else if (decision === 3) {
        console.log("You have closed the program");
    }
    else {
        console.log("\n --- ERROR PLEASE TRY AGAIN --- \n")
        break;
    }
}