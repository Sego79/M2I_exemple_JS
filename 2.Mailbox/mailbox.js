function exampleFunction(){
    console.log("Execution de ExampleFunction");
}

exampleFunction();

function changeTitleColor(){
    let h1 = document.querySelector('h1');
    console.log(h1);
    h1.style.color = 'red';
}
changeTitleColor();


let btn = document.querySelector('button');
console.log(btn.innerText);
const img = document.querySelector('img');

btn.addEventListener('click', function (e)
   {
    console.log(btn.innerText);
    if(btn.innerText === "Poster une lettre"){
        img.src = "mailbox_full.png";
        btn.innerText = "Vider le courrier";
    }
    else if(btn.innerText === "Vider le courrier"){
        img.src =  "mailbox_empty.png";
        btn.innerText = "Poster une lettre";
    }
})
