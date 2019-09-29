// Armazena os pokémons de cada geração para filtrar

let gen1 = document.querySelector(".gen1").innerHTML; let gen2 = document.querySelector(".gen2").innerHTML
let gen3 = document.querySelector(".gen3").innerHTML; let gen4 = document.querySelector(".gen4").innerHTML
let gen5 = document.querySelector(".gen5").innerHTML; let gen6 = document.querySelector(".gen6").innerHTML
let gen7 = document.querySelector(".gen7").innerHTML; 

// Treinador aleatório sempre que a página recarregar

let treinadorAleatorio = [];
treinadorAleatorio[0] = "./images/trainers/Red.png"; treinadorAleatorio[1] = "./images/trainers/Leaf.png";
treinadorAleatorio[2] = "./images/trainers/Ethan.png"; treinadorAleatorio[3] = "./images/trainers/Lyra.png";
treinadorAleatorio[4] = "./images/trainers/Brendan.png"; treinadorAleatorio[5] = "./images/trainers/May.png";
treinadorAleatorio[6] = "./images/trainers/Lucas.png"; treinadorAleatorio[7] = "./images/trainers/Dawn.png";
treinadorAleatorio[8] = "./images/trainers/LucasP.png"; treinadorAleatorio[9] = "./images/trainers/DawnP.png";
treinadorAleatorio[10] = "./images/trainers/Hilbert.png"; treinadorAleatorio[11] = "./images/trainers/Hilda.png";
treinadorAleatorio[12] = "./images/trainers/Nate.png"; treinadorAleatorio[13] = "./images/trainers/Rosa.png";
treinadorAleatorio[14] = "./images/trainers/Calem.png"; treinadorAleatorio[15] = "./images/trainers/Serena.png";
treinadorAleatorio[16] = "./images/trainers/Elio.png"; treinadorAleatorio[17] = "./images/trainers/Selene.png";
treinadorAleatorio[18] = "./images/trainers/ElioU.png"; treinadorAleatorio[19] = "./images/trainers/SeleneU.png";
treinadorAleatorio[20] = "./images/trainers/Victor.png"; treinadorAleatorio[21] = "./images/trainers/Gloria.png";

function randOrd() {
  return (Math.round(Math.random())-0.5);
}
treinadorAleatorio.sort(randOrd)
var imgnum = randOrd()
document.getElementById("treinador").innerHTML = `<img src="${treinadorAleatorio[0]}" height="550" width="auto">`

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

function tre() {
  let treinador = document.getElementById("treinador")
  let treE = document.querySelector("#treEscolha").value

  return treinador.innerHTML = `<img src="./images/trainers/${treE}.png" height="550"; width="auto";>`
}

// Faz o filro de pokémon por geração

function filtro(filtro, gen1, gen2, gen3, gen4, gen5, gen6, gen7) {
  let cbID = filtro.value

  switch (cbID) {
    case "gen1":
      if (filtro.checked == false) {
        document.querySelector(".gen1").innerHTML = "-"
      } else {
        document.querySelector(".gen1").innerHTML = gen1
      }
      break
    case "gen2":
      if (filtro.checked == false) {
        document.querySelector(".gen2").innerHTML = "-"
      } else {
        document.querySelector(".gen2").innerHTML = gen2
      }
      break
    case "gen3":
      if (filtro.checked == false) {
        document.querySelector(".gen3").innerHTML = "-"
      } else {
        document.querySelector(".gen3").innerHTML = gen3
      }
      break
    case "gen4":
      if (filtro.checked == false) {
        document.querySelector(".gen4").innerHTML = "-"
      } else {
        document.querySelector(".gen4").innerHTML = gen4
      }
      break
    case "gen5":
      if (filtro.checked == false) {
        document.querySelector(".gen5").innerHTML = "-"
      } else {
        document.querySelector(".gen5").innerHTML = gen5
      }
      break
    case "gen6":
      if (filtro.checked == false) {
        document.querySelector(".gen6").innerHTML = "-"
      } else {
        document.querySelector(".gen6").innerHTML = gen6
      }
      break
    case "gen7":
      if (filtro.checked == false) {
        document.querySelector(".gen7").innerHTML = "-"
      } else {
        document.querySelector(".gen7").innerHTML = gen7
      }
      break
  }

  return false
}

// Termina o processo e teoricamente gera uma imagem, teoricamente.

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