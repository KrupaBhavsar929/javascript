divEle=document.querySelector('div');
console.log(divEle);
className=divEle.getAttribute("class");
console.log(className);
classId=divEle.getAttribute("id");

const backgroundColor = window.getComputedStyle(document.getElementById('box')).getPropertyValue('background-color');
    

console.log(backgroundColor);


function rgbToHex(rgb) {
    // Extract the RGB values using a regular expression
    const result = rgb.match(/\d+/g);
    if (result) {
        const r = parseInt(result[0]);
        const g = parseInt(result[1]);
        const b = parseInt(result[2]);
        
        // Convert each value to hexadecimal and pad with zeros if necessary
        const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
        return hex;
    }
    return null;
}

const hexColor = rgbToHex(backgroundColor);
console.log("Hex Value:", hexColor);
// working with para

para=document.querySelectorAll("p");
console.log(para[1].getAttribute("class"));




 let b=document.querySelectorAll("div");
console.log(b[1]);
console.log(b[1].setAttribute("class","para2"));
// Select the last <div> element
let lastDiv = document.querySelector('div.para1:last-of-type');

// Change the classname


console.log(lastDiv.className = 'para2');
console.log(lastDiv.setAttribute("class","para3"));

 let a=document.querySelector('div.boxClass');
 console.log(a);
 a.style.backgroundColor="orange";

 a.innerText="hello";
 a.fontStyle="italic";
 a.style.borderRight='5px solid red';
 a.style.visibility="hidden"; 
//  create heading element using js

 let head=document.createElement("h1");
  head.innerHTML="Bio Data";
  body=document.querySelector("body");
  body.prepend(head);


let btn=document.createElement("button");
btn.innerText="Click me";
btn.style.backgroundColor="red";
btn.style.color="white";
document.querySelector("body").prepend(btn);



let p=document.querySelector("p");

p.classList.add("textColor","fontStyle");
