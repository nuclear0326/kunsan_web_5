const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");
let inputWord = document.getElementById("inp-word");
let audio = "";
let audioSource = "";

btn.addEventListener("click", () => {getDictionaryWord(inputWord.value); audioSource = ""; });

inputWord.addEventListener("keypress", (event) => {if (event.key === "Enter") {getDictionaryWord(inputWord.value);} audioSource = "";});

async function getDictionaryWord(inputWord) {
  await fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
      <div class="word">
           <h3>${inputWord}</h3>
           <button onclick="playSound()">
           <input type="image" src="media/sound.png">
           </button>
         </div>
         <div class="details">
           <p>${data[0].meanings[0].partOfSpeech}</p>
           <p>${data[0].phonetic}</p>
         </div>
         <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
         <p class="word-example">${data[0].meanings[0].definitions[0].example || ""}</p>
     `;
      console.log(data[0]);

      data[0].phonetics.forEach((data) => {
        if (data.audio !== "" && audioSource == "") {
          audioSource = data.audio;
        }
      });
    })
    .catch(() => {
      result.innerHTML = `<h3 class="error">단어를 찾을 수 없습니다.</h3>`;
    });
}

function playSound() {
  if (audioSource !== "") {
    audio = new Audio(audioSource);
    console.log(audio);
    audio.play();
  } else {
    alert("오디오 소스가 없어서 재생이 불가능합니다.");
  }
}