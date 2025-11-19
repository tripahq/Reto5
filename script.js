const btn = document.getElementById("counterBtn");
const btnText = document.getElementById("btnText");
const countEl = document.getElementById("count");

let count = 0;

function randomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 90%, 55%)`;
}

function randomGradient() {
  return `linear-gradient(135deg, ${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

function render() {
  countEl.textContent = count;
}


function bounceText() {

  btnText.classList.remove("bouncing");


  void btnText.offsetWidth;


  btnText.classList.add("bouncing");
}

btn.addEventListener("click", () => {
  count++;
  render();

  // Cambia el texto por el número ascendente
  btnText.textContent = count;

  // Cambiar color del botón
  btn.style.background = randomGradient();

  // Rebote
  bounceText();
});


render();
