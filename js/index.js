let gen1 = document.querySelector(".gen1").innerHTML
let gen2 = document.querySelector(".gen2").innerHTML
let gen3 = document.querySelector(".gen3").innerHTML
let gen4 = document.querySelector(".gen4").innerHTML
let gen5 = document.querySelector(".gen5").innerHTML
let gen6 = document.querySelector(".gen6").innerHTML
let gen7 = document.querySelector(".gen7").innerHTML

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
    return alert("Equipe cheia")
  }
}

function tre() {
  let treinador = document.getElementById("treinador")
  let treE = document.querySelector("#treEscolha").value

  return treinador.innerHTML = `<img src="./images/trainers/${treE}.png" height="550"; width="auto";>`
}

function remove(r1) {
  let removeimg = document.getElementById(`${r1}`)
  return removeimg.innerHTML = ``

}

function pronto() {
  body = document.body
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0;
  body.style.overflow = "hidden"
}

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