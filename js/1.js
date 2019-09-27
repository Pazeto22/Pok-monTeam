// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
// }

function pkm() {
  let pkm = document.getElementsByClassName("asas")
  let pkmE = document.querySelector("#pkmEscolha").value

  if (pkm[0].innerHTML.indexOf("img") == -1) {
    return pkm[0].innerHTML = `<img src="./images/pkm/${pkmE}.png" height="250"; width="auto"; id="pok1";>`
  } else if (pkm[1].innerHTML.indexOf("img") == -1) {
    return pkm[1].innerHTML = `<img src="./images/pkm/${pkmE}.png" height="250"; width="auto"; id="pok2";>`
  } else if (pkm[2].innerHTML.indexOf("img") == -1) {
    return pkm[2].innerHTML = `<img src="./images/pkm/${pkmE}.png" height="250"; width="auto"; id="pok3";>`
  } else if (pkm[3].innerHTML.indexOf("img") == -1) {
    return pkm[3].innerHTML = `<img src="./images/pkm/${pkmE}.png" height="250"; width="auto"; id="pok4";>`
  } else if (pkm[4].innerHTML.indexOf("img") == -1) {
    return pkm[4].innerHTML = `<img src="./images/pkm/${pkmE}.png" height="250"; width="auto"; id="pok5";>`
  } else if (pkm[5].innerHTML.indexOf("img") == -1) {
    return pkm[5].innerHTML = `<img src="./images/pkm/${pkmE}.png" height="250"; width="auto"; id="pok6";>`
  } else {
    return alert("Foda-se")
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

function pronto(){
  body = document.body
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0;
  body.style.overflow = "hidden"
}