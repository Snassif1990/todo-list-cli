const prompt = require('prompt-sync')();

const itemArray = [];

let itemCount = itemArray.length-1;

decision = Number(prompt("\n ~ Select an action ~ \n\n[1] Create a to-do item \n[2] Complete a to-do item \n[3] Show to-do list \n[4] End the program \n\n> "));

while(decision !== 4) {


    if (!itemArray.length) {
        console.log("\nYour to-do list is empty.\n")
    }
    
    // else if (itemArray > 0){
    //     for (let i = 0; i < itemArray.length; i++){
    //     console.log(itemArray[i])
    //     }
    // }

    if (decision === 1){
        console.log(" ~ Creating a new to-do item ~ \nWhat is this to-do item called? \n");
        let newItem = prompt("> ");
        itemArray.push("[incomplete] " + newItem);
                
        for (let i = 0; i < itemArray.length; i++){
            console.log("\n" + itemArray[i])
        }

        decision = Number(prompt("\n ~ Select an action ~ \n\n[1] Create a to-do item \n[2] Complete a to-do item \n[3] Show to-do list \n[4] End the program \n\n> "));
    }

    else if (decision === 2){
        let itemArrayComplete = prompt("Select to-do item to complete: \n\n> ");
            if(itemArray.includes(itenArrayComplete)){
                
                for (const char of str) {
                    complete += char === 'incomplete'? 'complete' : char;
                }
            console.log("\n You have " + itemCount + " to-do item(s).\n\n" + itemArray[i]);
            }
            // decision = Number(prompt("\n ~ Select an action ~ \n\n[1] Create a to-do item \n[2] Complete a to-do item \n[3] Show to-do list \n[4] End the program \n\n> "))
    
    }

    else if (decision === 3){
        if (!itemArray.length) {
            console.log("\nYour to-do list is empty.\n")
        }
        if (itemArray > 0){
            for (let i = 0; i < itemArray.length; i++){
            console.log(itemArray[i])
            }
        }
    }

    else if (decision === 4){
        console.log("You have closed the program.")
    }

    else {
        console.log("ERROR")
    }
}