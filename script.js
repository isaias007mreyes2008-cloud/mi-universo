// Aquí construiremos nuestra lógica JavaScript// Frases comunes (aparecen con más frecuencia)
const frasesComunes = [
    "Mi chinita 😘",
    "Mi cachetona 🥺🥺",
    "Mi amor ❤️",
    "Mi mujercita ❤️👑",
    "Mi novia 💞",
    "Mi tiquita 🥺",
    "Te amooo❤️",
    "Mi todo 💞",
    "Silvestreee 🥺",
    "Buddy 💛",
    "Betitosssss 😚😚"
];

const frasesEspeciales = [
    "La niña más importante de mi vida 🥹💞",
    "Nuestro futuro 💍❤️",
    "Siempre tú ❤️",
    "Siempre nosotros ♾️💞",
    "Mi universo entero 🌌❤️",
    "Te escogería una y mil veces ❤️🥺",
    "Eres mi lugar seguro 🥹"
];


function crearFrase(){

    const palabra = document.createElement("div");

    const especial = Math.random() < 0.20;


    palabra.className = "floating-word";


    if(especial){

        palabra.innerHTML =
        frasesEspeciales[
            Math.floor(Math.random()*frasesEspeciales.length)
        ];

        palabra.style.fontSize="25px";
        palabra.style.fontWeight="900";

    }else{

        palabra.innerHTML =
        frasesComunes[
            Math.floor(Math.random()*frasesComunes.length)
        ];
    }


    palabra.style.left =
    (5 + Math.random()*90)+"vw";


    palabra.style.top =
    (20 + Math.random()*70)+"vh";


    palabra.style.animationDuration =
    (8 + Math.random()*4)+"s";


    document.body.appendChild(palabra);


    setTimeout(()=>{
        palabra.remove();
    },12000);

}



// Palabras flotando
setInterval(crearFrase,1800);




// CORAZONES FLOTANTES 💞

function crearCorazon(){

    const corazon=document.createElement("div");

    corazon.innerHTML="❤️";

    corazon.className="corazon";


    corazon.style.left=
    Math.random()*100+"vw";


    corazon.style.fontSize=
    (15+Math.random()*25)+"px";


    document.body.appendChild(corazon);


    setTimeout(()=>{
        corazon.remove();
    },7000);

}


setInterval(crearCorazon,900);