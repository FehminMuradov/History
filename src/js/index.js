import myData from './okey3Data.js'

let qutu = document.querySelector("#qutu");
let okey3 = document.querySelector("#okey3");
let isVideoPlaying = false;

qutu.addEventListener("mouseover", function () {
  if (!isVideoPlaying) {
    qutu.innerHTML = `
      <video class="videoQutu" loop controls autoplay muted>
          <source src="./src/vid/video1.mp4">
          <p class="yaz7">Mehmed 2 the Conqueror</p>
      </video>
    `;
    isVideoPlaying = true;
  }
});

qutu.addEventListener("mouseout", function () {
  if (isVideoPlaying) {
    qutu.innerHTML = `
          <img src="./src/images/image11.jpg" alt="Picture1">
          <p class="yaz7">Mehmed 2 the Conqueror</p>
      `;
    isVideoPlaying = false;
  }
});

for (let i = 0; i < myData.length; i++) {
  okey3.innerHTML += `
  <div class="blok">
    <img src="${myData[i].image}" alt="Picture1">
    <h3 class="yaz">${myData[i].text}</h3>
  </div>
  `;
}
