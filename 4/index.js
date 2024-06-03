let marks = [100,93,56,34];
console.log(marks);
// console.log("hello");

for (let i=0;i<marks.length;i++)
    {
        console.log(marks[i]);
    }

let hero=["ironmane","thor","shaktiman"];
for (let h=0;h<hero.length;h++)
    {
        console.log(hero[h]);
    }
for(let h of hero)
    {
        console.log(hero);
        console.log("index",hero.indexOf(h),"value",h);
    }

    for(let h in hero)
        {
            console.log(hero);
            console.log("index",hero.indexOf(h),"value",h);
        }

// find avg


let s_marks=[85,97,44,37,76,60];
let sum=0;
for (let i=0;i<s_marks.length-1;i++)
    {
        sum=sum+s_marks[i];  
    }
    console.log(sum/6);
    
    // find individual element of 10% off
    {
        let item=[250,645,300,900,50];
        for (let i of item)
            {
                let off=(i-((10/100)*i));
                let output=`original price: ${i} after 10% of discount: ${off} `;
                console.log(output);
            }

    }

let food=["dosa","idli","sandwich"];
console.log(typeof(food));
console.log(food);
 let a=food.toString();
console.log(a);

console.log(typeof(toString(food)));

console.log(food.slice(1))
console.log(food.splice(2,1,"burger","vadapav","panipuri"));
console.log(food.length)
console.log(food);

// create array to store companies

let company=["uber","google","microsoft","ibm","netflix"];
console.log(company.shift());
console.log(company.splice(2,0,"ola"));
console.log(company);
console.log(company.push("amazon"));
console.log(company);   

