let divs=document.querySelector('div');

divs.onclick=()=>
    {
        divs.style.backgroundColor="red";
    }

const div2= document.getElementById('hi');
div2.ondblclick=(evt)=>
    {
        div2.style.backgroundColor="green";
        div2.style.innerText="Text change";
        div2.style.color="white";
        console.log(evt.type);//dbtclick
        console.log(evt.target);//return class , id, style
        console.log(evt);//return all methods and  class
      
    }

    // toggle button which convert the screen into dark and light
let Btn1 = document.querySelector(".Btn");
let currentMode="light";
Btn1.addEventListener("click",() =>
{
        if(currentMode==="light")
            {   
                currentMode="dark";
                document.querySelector("body").classList.add("dark");
                document.querySelector("body").classList.remove("light"); 
            }
        else
            {
                currentMode="light";
                document.querySelector("body").classList.add("light");
                document.querySelector("body").classList.remove("dark");
            }
    
   
});

