// alert("hello dear !!!");

// console.dir(document.head);
//  let a=document.getElementsByClassName("heading");
 
// console.dir(a);
// console.log(a);

let p1=document.getElementsByTagName("p");
console.dir(p1);

let firstEle = document.querySelector("#button");
console.dir(firstEle);

let Ele = document.querySelector(".heading");
console.dir(Ele);

let allEle = document.querySelectorAll(".heading");
console.dir(allEle);

 let f=document.querySelector(".fruits")


//  exclude hidden content
 console.dir(f.innerText);
 console.dir(f.innerHTML);
 console.dir(f.textContent);
h3=document.querySelector("h3")
console.log(h3);
console.log(h3.innerHTML);
console.log(h3.innerText);
 
hello=document.getElementById("hello");
console.log(hello.innerText +" from Apna College students");


div=document.getElementsByClassName("box");
for(d of div)
    {
        console.log(d.innerText);
    }