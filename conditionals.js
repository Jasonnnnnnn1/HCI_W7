// Prompt the user to input their favorite art type
prompt("What is your favorite art type?");
// Use a switch statement to evaluate the user's input
// If the user enters "PT", set output to "Painting"
// If the user enters "SC", set output to "Sculpture"
// For any other input, set output to "Other"
function evaluateInput(userInput) {
    let output;

    switch (userInput) {
        case "PT":
            output = "Painting";
            break;
        case "SC":
            output = "Sculpture";
            break;
        default:
            output = "Other";
            break;
    }
// Display the result on the webpage, using <strong> to bold the art type
document.getId("result").innerHTML = "Art Type: <strong>${output}</strong>"
}
