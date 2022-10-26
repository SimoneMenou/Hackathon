// Identification du bouton commencer
const btn = document.querySelector("#btn");
const main = document.querySelector(".container");
btn.onclick = () =>{
    main.textContent = "ok,le bouton marche :)";
}

// je veux récupérer mon json je vais utiliser l'assync function pour acceder au fichier et obtenir une réponse
async function accesFichier(){
    //1. je crée ma fonction accesFichier
    const requeteURL = "./qb.json";
    //2. je crée ma requête qui va localiser mon fichier (qui sur mon bureau jusqu'a présent)

    const requete = new Request(requeteURL);
    //3. je crée un objet de type requete qui va pointer sur mon url
  
    const reponse = await fetch(requete);
    //4. je vais chercher l'url à l'aide de fetch quand la requete est prête (await)
    const questions = await reponse.json();
    //5. je rentre dans mon url et j'attends la reponse de mon fichier json (await)
    return await questions;
    //6. je suis sur mon json je demande de récupérer les infos du json lorsqu'elle sont prête (await)
}
/*
accesFichier().then(q => console.log(q.Questions[0].question));
//7. Je veux affiher mon objet Questions qui est q en paramètre je vais pointer sur l'index voulu (faire une boucle) :
accesFichier().then(q => console.log(JSON.stringify(q)));
//8. J'affiche mon objet json en "simple chaîne de caractère".
*/
//9. je vais crée une fonction qui va parcourir mes questions
// je vais traiter les questions
let questions = document.querySelectorAll('div');
// Je vais selection dans l'html l'élèment div qui affichera les questions 
//?const slide = pics.length;
// je gére le slider 
const next = document.querySelector('.right');
// je crée mon index de compteur
let count = 0;

// On va mant parcourir les questions grâce au tableau 
function nextquest(){
    // ici je vais aller chercher l'objet questions et boucler count pour parcourir 
    accesFichier().then(q => console.log(q.Questions[count].question));
    // on enleve la classe active lorsque l'on appuie sur next et on affiche la prochaine question.
   
}
next.addEventListener('click',nextquest);


//10. Il faudra mettre 1 point si juste 0 si faux 
//11. En fonction du total des 4 catégories les points les plus élevés vont a la catégorie qui a le plus de point
//12.Si par contre il y'a égalité entre front et back alors afficher full stack 
//13.Si par contre il y'a égalité entre game et asr game ou asr 
//14.Si juste partout  : Vous avez l'embarras du choix.

