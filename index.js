
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
console.log(footer)

// 4.
let input1 = document.getElementById("masquer-refrains");
console.log(input1);
