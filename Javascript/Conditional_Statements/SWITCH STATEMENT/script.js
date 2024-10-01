// SWITCH STATEMENT
let color = prompt("Enter the color")
switch(color) {
    case "red": console.log(`${color} should be used on Monday`)
    break;

    case "blue": console.log(`${color} Should be used on Tuesday`)
    break;

    case "white": console.log(`${color} Should be used on Wednesday`)
    break;

    case "yellow": console.log(`${color} Should be used on Thrusday`);
    break;

    case "green": console.log(`${color} Should be used on Friday`);
    break;
    
    case "voilet": console.log(`${color} Should be used on Saturday`);
    break;

    default: console.log(`${color} IS NOT ACCEPTED`);
    break;
}