// main function
function playTheGame() {
    let resp = confirm("Do you want to play ?");
    if (!resp) {
        alert("No problem, Goodbye");
        return;
    }

    let val = prompt("Enter a number between 0 and 10");

    if (isNaN(val)) {
        alert("Sorry Not a number, Goodbye"); 
        return;
    }

    if ( !isNaN(val) && (Number(val) < 0 || Number(val) > 10) ) {
        alert("Sorry it’s not a good number, Goodbye"); 
        return;
    } else {
        let computerNumber  = (Math.random() * (10 - 0) + 0).toFixed(0);
        compareNumbers(val, computerNumber);
    }
}

// function to compare numbers
function compareNumbers(userNumber,computerNumber) {
    let chance = 1;

    while (chance < 4) {
        if (Number(userNumber) == Number(computerNumber)) {
            alert("WINNER");
            return;
        }

        if (Number(userNumber) > Number(computerNumber)) {
            alert("Your number is bigger then the computer’s, guess again");
        }

        if (Number(userNumber) < Number(computerNumber)) {
            alert("Your number is smaller then the computer’s, guess again");
        }

        let choice = prompt("Enter a new number");
        while ( isNaN(choice) ) {
            choice = prompt("Incorrect value, enter another number");
        }
        userNumber = Number(choice);

        chance++;
    }

    // End of the game
    alert("out of chances");
    return;
}