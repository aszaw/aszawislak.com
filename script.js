const words = [
  "boo!",
  "start mp2 early",
  "6.022*10^23 mols of salt",
  "be gay do funny",
  "follow me @galacticvgc",
  "well",
  "stuck in eceb for 40hrs again",
  "rush the lodge!",
  "fighting with css again"
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function animateWords() {
  while (true) {
    const changeTextButton = document.querySelector("#changetext");

    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    let stringBuilder = "";
    changeTextButton.textContent = stringBuilder;

    for (let i = 0; i < randomWord.length; i++) {
      stringBuilder += randomWord[i];
      changeTextButton.textContent = stringBuilder;
      await wait(50);
    }

    await wait(1000);

    for (let i = randomWord.length; i >= 0; i--) {
      stringBuilder = stringBuilder.substring(0, i);
      changeTextButton.textContent = stringBuilder;
      await wait(50);
    }

    await wait(1000);
  }
}

window.addEventListener("load", () => {
  document.documentElement.classList.add("loaded");
});

animateWords();
