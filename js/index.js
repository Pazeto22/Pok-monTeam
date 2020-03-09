// Armazena os pokémons de cada geração para filtrar

let gen1 = document.querySelector(".gen1").innerHTML; let gen2 = document.querySelector(".gen2").innerHTML
let gen3 = document.querySelector(".gen3").innerHTML; let gen4 = document.querySelector(".gen4").innerHTML
let gen5 = document.querySelector(".gen5").innerHTML; let gen6 = document.querySelector(".gen6").innerHTML
let gen7 = document.querySelector(".gen7").innerHTML;

// Treinador aleatório sempre que a página recarregar

let treinadorAleatorio = [];
treinadorAleatorio[0] = "Red"; treinadorAleatorio[1] = "Leaf";
treinadorAleatorio[2] = "Ethan"; treinadorAleatorio[3] = "Lyra";
treinadorAleatorio[4] = "Brendan"; treinadorAleatorio[5] = "May";
treinadorAleatorio[6] = "Lucas"; treinadorAleatorio[7] = "Dawn";
treinadorAleatorio[8] = "LucasP"; treinadorAleatorio[9] = "DawnP";
treinadorAleatorio[10] = "Hilbert"; treinadorAleatorio[11] = "Hilda";
treinadorAleatorio[12] = "Nate"; treinadorAleatorio[13] = "Rosa";
treinadorAleatorio[14] = "Calem"; treinadorAleatorio[15] = "Serena";
treinadorAleatorio[16] = "Elio"; treinadorAleatorio[17] = "Selene";
treinadorAleatorio[18] = "ElioU"; treinadorAleatorio[19] = "SeleneU";
treinadorAleatorio[20] = "Victor"; treinadorAleatorio[21] = "Gloria";
treinadorAleatorio[21] = "VictorG"; treinadorAleatorio[22] = "GloriaG";

function randOrd() {
  return (Math.round(Math.random()) - 0.5);
}

treinadorAleatorio.sort(randOrd)
// var imgnum = randOrd()
document.getElementById("treinador").innerHTML = `<img src="./images/trainers/${treinadorAleatorio[0]}.png" height="550" width="auto">`
document.querySelector(`[title=${treinadorAleatorio[0]}]`).id = "miniOn"

// Adiciona os Pokémon

function pkm(Pokemon) {
  let pkm = document.getElementsByClassName("asas")
  let pkmE = Pokemon.value
  let pkmSize = Pokemon.className.split(' ')[3];
  let size = 100

  if (pkmSize == "small") {
    size = 200
  } else if (pkmSize == "medium") {
    size = 250
  } else if (pkmSize == "abig") {
    size = 275
  } else if (pkmSize == "big") {
    size = 300
  }

  if (pkm[0].innerHTML.indexOf("img") == -1) {
    return pkm[0].innerHTML = `<img class="${pkmSize}" src="./images/pkm/${pkmE}.png" height="auto"; width="${size}"; id="pok";>`
  } else if (pkm[1].innerHTML.indexOf("img") == -1) {
    return pkm[1].innerHTML = `<img class="${pkmSize}" src="./images/pkm/${pkmE}.png" height="auto"; width="${size}"; id="pok";>`
  } else if (pkm[2].innerHTML.indexOf("img") == -1) {
    return pkm[2].innerHTML = `<img class="${pkmSize}" src="./images/pkm/${pkmE}.png" height="auto"; width="${size}"; id="pok";>`
  } else if (pkm[3].innerHTML.indexOf("img") == -1) {
    return pkm[3].innerHTML = `<img class="${pkmSize}" src="./images/pkm/${pkmE}.png" height="auto"; width="${size}"; id="pok";>`
  } else if (pkm[4].innerHTML.indexOf("img") == -1) {
    return pkm[4].innerHTML = `<img class="${pkmSize}" src="./images/pkm/${pkmE}.png" height="auto"; width="${size}"; id="pok";>`
  } else if (pkm[5].innerHTML.indexOf("img") == -1) {
    return pkm[5].innerHTML = `<img class="${pkmSize}" src="./images/pkm/${pkmE}.png" height="auto"; width="${size}"; id="pok";>`
  } else {
    return false
  }
}

// Remove os Pokémon ao clicar

function remove(r1) {
  let removeimg = document.getElementById(`${r1}`)
  return removeimg.innerHTML = ``

}

// Adiciona os treinadores

function tre(Trainer) {
  let treinador = document.getElementById("treinador")
  // let treE = document.querySelector("#treEscolha").value
  let treE = Trainer.title

  // if (document.querySelector("#miniOn")) {
  //   let treOn = document.querySelector("#miniOn")
  //   treOn.id = "miniOff"
  // }

  document.querySelector("#miniOn").id = "miniOff"

  Trainer.id = "miniOn"

  return treinador.innerHTML = `<img src="./images/trainers/${treE}.png" height="550"; width="auto";>`
}

// Faz o filro de pokémon por geração, ou faria se funcionasse

// function filtro(filtro, gen1, gen2, gen3, gen4, gen5, gen6, gen7) {
//   let cbID = filtro.value

//   switch (cbID) {
//     case "gen1":
//       if (filtro.checked == false) {
//         document.querySelector(".gen1").innerHTML = "-"
//       } else {
//         document.querySelector(".gen1").innerHTML = gen1
//       }
//       break
//     case "gen2":
//       if (filtro.checked == false) {
//         document.querySelector(".gen2").innerHTML = "-"
//       } else {
//         document.querySelector(".gen2").innerHTML = gen2
//       }
//       break
//     case "gen3":
//       if (filtro.checked == false) {
//         document.querySelector(".gen3").innerHTML = "-"
//       } else {
//         document.querySelector(".gen3").innerHTML = gen3
//       }
//       break
//     case "gen4":
//       if (filtro.checked == false) {
//         document.querySelector(".gen4").innerHTML = "-"
//       } else {
//         document.querySelector(".gen4").innerHTML = gen4
//       }
//       break
//     case "gen5":
//       if (filtro.checked == false) {
//         document.querySelector(".gen5").innerHTML = "-"
//       } else {
//         document.querySelector(".gen5").innerHTML = gen5
//       }
//       break
//     case "gen6":
//       if (filtro.checked == false) {
//         document.querySelector(".gen6").innerHTML = "-"
//       } else {
//         document.querySelector(".gen6").innerHTML = gen6
//       }
//       break
//     case "gen7":
//       if (filtro.checked == false) {
//         document.querySelector(".gen7").innerHTML = "-"
//       } else {
//         document.querySelector(".gen7").innerHTML = gen7
//       }
//       break
//   }

//   return false
// }

// Termina o processo e teoricamente gera uma imagem... teoricamente.

function pronto() {
  sumiu = document.getElementsByClassName("s3")[0]
  sumiu.parentNode.removeChild(sumiu)
  body = document.body
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0;
  body.style.overflow = "hidden"
  body.style.size = "110%"
  // html2canvas(document.querySelector("#sTop")).then(canvas => {
  //   document.body.appendChild(canvas)
  // });
}