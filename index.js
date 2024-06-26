
// 1.
let titre = document.createElement("h1")
titre.innerHTML =  `<small>${chanson.auteur} -</small> ${chanson.titre}`
document.body.appendChild(titre)

let label1 = document.createElement("label")
label1.innerHTML = `
<input type="checkbox" name="refrain" id="masquer-refrains" /> Masquer
      les refrains`
document.body.append(label1)

let label2 = document.createElement("label")
label2.innerHTML = `
<input type="checkbox" name="refrain" id="masquer-paroles" /> Masquer les
      paroles`
document.body.append(label2)
label2.className = "paroles"
console.log(label2);


// 2.
// const body = document.getElementsByName("body")
let parole = document.createElement("div");
parole.className = "paroles";
document.body.append(parole)

chanson.paroles.forEach(element => {
    let paragraphe = document.createElement("p")
    parole.appendChild(paragraphe)
    let lignes = element.contenu.map(ligne => ligne + "<br />").join("")
    paragraphe.innerHTML = lignes

});

// 3.

let footer = document.createElement("footer")
footer.textContent = " © Copyright 2023 - Codeloccol"
document.body.append(footer)


// 4.
const checkboxParoles = document.getElementById("masquer-paroles"); 
const divParoles = document.getElementById("paroles");
let noeux = checkboxParoles.nextSibling
let ligne = document.querySelector("hr")
console.log(checkboxParoles);
  
// Attache une fonction à l'évènement "click" sur checkboxParoles
checkboxParoles.addEventListener('click', function (event) {
 
  if (event.target.checked) {
   divParoles.style.display = "none"
   noeux.textContent = "Afficher les paroles"
   ligne.style.display = "none"

  } else {
    divParoles.style.display = "block"
   noeux.textContent = "Masquer les paroles"

  }
});