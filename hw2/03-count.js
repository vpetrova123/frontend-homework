// Add your code here
const text = document.getElementById('text').innerHTML;
const input = document.querySelector('input');

input.addEventListener('keyup', handleKeyUp);

function handleKeyUp(event) {
  const keyword = event.target.value;
  if (keyword === '') {
    document.getElementById('text').innerHTML = text;
    return;
  }
  const newText = text.replaceAll(keyword, `<mark>${keyword}</mark>`);
  document.getElementById('text').innerHTML = newText;
}
