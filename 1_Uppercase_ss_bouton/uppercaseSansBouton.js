let texteLowerCase = document.getElementById('lowerCaseText');
let result=document.getElementById('resultat');

texteLowerCase.addEventListener('input', function (e){
    console.log(event.target.value); //pour récupérer la valeur de l'événement dans la console
   // result.value = event.target.value.toUpperCase(); //Fonctionne aussi
    result.value = texteLowerCase.value.toUpperCase();

});