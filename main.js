const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const sonido = document.getElementById("sound");
const result = document.getElementById("result");
const boton = document.getElementById("search-btn");

boton.addEventListener("click", () => {
  let palabra = document.getElementById("palabra").value;
  fetch(`${url}${palabra}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
      <div class="word">
          <h3>${palabra}</h3>
          <button><i class="fa-solid fa-volume-high" onclick="playSound()"></i></button>
        </div>
        <div class="detalles">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <p>${data[0].phonetic || " "}</p>
        </div>
        <p class="word-meaning">
          ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
          ${data[0].meanings[0].definitions[0].example || " "}
          
        </p>`;
      sonido.setAttribute("src", `${data[0].phonetics[1].audio}`);
      console.log(sonido);
    })
    .catch(() => {
      result.innerHTML = `<br><h4>couldn't find the word </h4>`;

      console.log();
    });
});

function playSound() {
  sonido.play();
}
