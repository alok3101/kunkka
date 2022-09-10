function init_page() {}

function reveal_letters() {
  const letters = document.querySelectorAll(".letter");
  letters.forEach((letter) => {
    const i = +letter.dataset.value;
    letter.style.opacity = "0";
    letter.style.display = "inline-block";
    letter.style.animationName = "myanimation";
    letter.style.animationDuration = "2s";
    letter.style.animationDelay = `${0.1 * (i - 1)}s`;
    letter.style.animationFillMode = "forwards";
  });
}

init_page();
reveal_letters();
