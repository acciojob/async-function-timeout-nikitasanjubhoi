//your JS code here. If required.
// Get references to DOM elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

// Utility function to simulate a delay using a Promise
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Main async function to handle form submission
async function handleSubmit() {
  const text = textInput.value;
  const delay = Number(delayInput.value); // Convert to number

  // Optional: basic input validation
  if (!text || isNaN(delay) || delay < 0) {
    output.innerText = "Please enter valid text and delay.";
    return;
  }

  // Clear previous output and wait
  output.innerText = ""; // Clear while waiting
  await wait(delay);

  // Show the message after delay
  output.innerText = text;
}

// Attach event listener to the button
btn.addEventListener("click", handleSubmit);
