const section = document.querySelector("section");
const elem = document.querySelector("input");

//Input event listener
elem.addEventListener("input", handleInput);

//Create a new div for the output
const outputDiv = document.createElement("div");
outputDiv.setAttribute("id", "output");
section.append(outputDiv);

//Handle the event listener
function handleInput(event) {
  event.preventDefault();
  const input = event.target.value;
  let reverseInput = input.split("").reverse().join("");
  console.log(input);

  if (input < 0) {
    outputDiv.style.color = "red";
    outputDiv.textContent = "Please enter a positive number.";
    return;
  }
  if (input === "") {
    outputDiv.style.color = "red";
    outputDiv.textContent = "Please enter a number.";
    return;
  }
  if (input === reverseInput) {
    outputDiv.style.color = "green";
    outputDiv.textContent = "Yes. This is a palindrome!";
  } else {
    outputDiv.style.color = "red";
    outputDiv.textContent = "No. Try again.";
  }
}
