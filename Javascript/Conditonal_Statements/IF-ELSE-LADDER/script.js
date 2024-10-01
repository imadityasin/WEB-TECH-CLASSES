// IF-ELSE-LADDER CONDITIONAL STATEMENTS 
let num = prompt("Enter the number")
{
    if (num>0)
    {
        console.log(`${num} is a positive number`);
    }
    else if (num<0)
    {
        console.log(`${num} is a Negative Number`)
    }
    else if (num==0)
    {
        console.log(`${num} is Neither positive nor negative`)
    }
    else{
        console.log(`${num} is a Inavlid Number`)
    }
}