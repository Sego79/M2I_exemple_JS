function changeCase(){
  //  let texteLowerCase = document.querySelector("textarea");
    let texteLowerCase = document.getElementById('lowerCaseText')
    console.log("essai");
    console.log(texteLowerCase.value);
    texteLowerCase.value.toUpperCase();
    console.log(texteLowerCase.value.toUpperCase());
    return texteLowerCase.value.toUpperCase();
}

let btnConvert = document.querySelector('button');
btnConvert.addEventListener('click', function (e)
    {
    let result=document.getElementById('resultat');
    result.value = changeCase();
    });



