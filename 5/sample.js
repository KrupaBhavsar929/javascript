function sample(x,y)
{
    s=x+y;
    console.log("before calling");
    return s;
}
let val=sample(3,5);

console.log(val);

// create arrow function

const mul=(a,b)=>
{
    console.log("multiplcation", a*b);
}

mul(10,10);


let counter=0;
function countVowels(str)
{
    str="hello";
    
    for(let c in str)
        {
         
            // console.log("str and c: ",str[c]);
            if(str[c] =='a' || str[c] =='e' || str[c] =='i' || str[c] =='o' || str[c] =='u' )
                {
                    counter++;
                }
            
        }
        console.log(counter);
}


let multi=(a,b)=>
    {
        console.log(a*b);
    }


let city=['baroda','mumbai','goa','ahmedabad'];
city.forEach(function print(val)
{
    console.log(val);
});

city.forEach((val,i)=>
{
    console.log(val.toUpperCase(),i);
})
// square number using for each loop

let square=[1,2,3,4,5];

square.forEach(function print(val){

console.log("square: ",val*val);
})


// map function

let a=square.map(n=>n*n);
{
    console.log(a);
}

// transform into uppercase 
const fruits = [ 
    { name: 'apple', color: 'red' }, 
    { name: 'banana', color: 'yellow' }, 
    { name: 'kiwi', color: 'green' }, 
    { name: 'orange', color: 'orange' }, 
    { name: 'pineapple', color: 'yellow' } 
]; 

let f=fruits.map(n =>(
    {
    name:n.name.toUpperCase(),
    color:n.color.toUpperCase()
    }
));
console.log(f);

// filter


let f1=fruits.filter(n =>(n.name=='apple' || n.color=='green'));
console.log(f1);
//  even number using filter

let values=[1,2,3,4,5,6,7,8];
// console.log(values.filter(n=>
//     {
//         return n%2==0;
//     }
// ));
// console.log(values);

const total=values.reduce((previous,current)=>
{
    previous=previous+current;
    return previous;
});
console.log("total:", total);
// find maximum element using reduce method


const max=values.reduce((max,b)=>
{
    return max>b?max:b;
    
});
console.log("maximum: ",max);

// finding student marks that score above 90
let student=[50,90,93,57,89,90,100];
marks=student.filter(n =>{

    return n>=90;
});
console.log(marks);

let n=prompt("enter number");
let originalArray=[];

for (let i=1;i<=n;i++)
    {
        originalArray[i-1]=i;
    }
    console.log(originalArray);


sum1=originalArray.reduce((previous,current)=>
    {
        previous=previous+current;
        
        return previous;
    }

)
console.log("sum: ", sum1);
mul1=originalArray.reduce((previous,current)=>
    {
        previous=previous*current;
        
        return previous;
    }

)
console.log("mul: ", mul1);
