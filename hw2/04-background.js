// Add your code here
window.addEventListener('load', (event) => {
  if (!nIntervId) {
    nIntervId = setInterval(changeBackground, 3000);
  }
});

function getRGBA() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.4)`;
}

let nIntervId;

function changeColor(input) {
  if (!nIntervId) {
    nIntervId = setInterval(changeBackground, input * 1000);
  }
}

function changeBackground() {
  document.body.style.backgroundColor = getRGBA();
}

function stopColor() {
  clearInterval(nIntervId);
  nIntervId = null;
}

const button = document.querySelector('button');
button.addEventListener('click', handleClick);

function handleClick(event) {
  const input = document.getElementById('input').value;
  if (Number.isNaN(input)) {
    console.log('ERROR: A non number value was provided.');
    return;
  }
  if (input === '' || input === null) {
    console.log('ERROR: Empty input.');
    return;
  }
  if (input < 1) {
    console.log('ERROR: An input less than 1 was provided.');
    return;
  }

  if (button.classList.contains('start')) {
    changeColor(input);
    button.className = 'stop btn btn-danger';
    button.innerHTML = 'Stop';
  } else {
    stopColor();
    button.className = 'start btn btn-primary';
    button.innerHTML = 'Start';
  }
}
