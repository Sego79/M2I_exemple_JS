function exampleFunction(){
    console.log("Execution de ExampleFunction");
}

exampleFunction();

function changeTitleColor(){
    let h1 = document.querySelector('h1');
    console.log(h1);
    h1.style.color = 'red';
}


let btn = document.querySelector('button');
btn.addEventListener('click', function (e){
    changeTitleColor();
    btn.classList.toggle('btn');
});