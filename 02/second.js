console.log("hello");
let a=4;
let b=2;
let s="4";
console.log("addition: ", a+b);
console.log("a == b: ", a == b);
console.log("check equality",a==s);
console.log("check strict equality",a===s);
console.log("(4)>(2)",a>b);

// checking age

age=20;
if(age>18)
{
    console.log("you can vote");
}
else
{
    console.log("you can't vote");
}

// dark mode or light mode

let mode="light";
let color;
if(mode=='dark')
    {
        color="dark theme";
    }
else{
        color="light theme";
}
console.log("final color: ", color);

// odd and even
 let n=0;

if(n%2 == 3)
    {
        console.log("even")
    }
else{
    console.log("odd no");
}

// check multiple of 5
let p=prompt("enter no");
if(p%5 === 0)
    console.log("multiple of 5")
else
    console.log("not multiple of 5")
        
// program of grade
let score=prompt("enter score (0-100)");
if(score>=80 && score<=100)
    console.log("A")
else if(score>=70 && score<=89)
    console.log("B")
else if(score>=60 && score<=69)
    console.log("C")
else if(score>=50 && score<=59)
    console.log("D")
else 
console.log("F")
