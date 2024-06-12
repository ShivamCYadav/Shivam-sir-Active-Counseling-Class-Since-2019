const sentenceDiv = document.getElementById("sentence");
const wordsDiv = document.getElementById("words");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const hintBtn = document.getElementById("hint-btn");
const resultDiv = document.getElementById("result");
let originalSentence = "";
let sentenceWords = [];
let hintCount = 0;

// Function to fetch a sentence from an API
async function fetchSentence() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    const sentence = data.content.split(" ");
    if (sentence.length >= 8 && sentence.length <= 10) {
      return data.content;
    }
    return fetchSentence(); // Fetch another sentence if it doesn't meet the criteria
  } catch (error) {
    console.error("Error fetching sentence:", error);
    return "An error occurred while fetching the sentence.";
  }
}

// Function to scramble the words
function scrambleWords(words) {
  return words.sort(() => Math.random() - 0.5);
}

// Function to initialize the game
async function initializeGame() {
  // Fetch a new sentence
  originalSentence = await fetchSentence();
  sentenceWords = originalSentence.split(" ");
  const scrambledWords = scrambleWords([...sentenceWords]);

  // Display the scrambled words
  wordsDiv.innerHTML = "";
  scrambledWords.forEach(word => {
    const wordSpan = document.createElement("span");
    wordSpan.classList.add("draggable");
    wordSpan.textContent = word;
    wordsDiv.appendChild(wordSpan);
  });

  // Add drag and drop functionality
  const draggables = wordsDiv.querySelectorAll(".draggable");

  draggables.forEach(draggable => {
    draggable.setAttribute("draggable", true);
    draggable.addEventListener("dragstart", dragStart);
  });

  sentenceDiv.addEventListener("dragover", dragOver);
  sentenceDiv.addEventListener("drop", drop);
  resultDiv.style.display = "none";
  sentenceDiv.innerHTML = "";
  hintCount = 0;
  hintBtn.disabled = false;
}

// Drag and drop event handlers
function dragStart(event) {
  event.dataTransfer.setData("text", event.target.textContent);
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const droppedText = event.dataTransfer.getData("text");
  const wordElement = Array.from(wordsDiv.querySelectorAll(".draggable"))
    .find(word => word.textContent === droppedText);
  if (wordElement) {
    wordElement.style.display = "none";
    sentenceDiv.appendChild(document.createTextNode(droppedText + " "));
  }
}

// Submit button event handler
submitBtn.addEventListener("click", () => {
  const userSentence = sentenceDiv.textContent.trim();
  if (userSentence === originalSentence) {
    resultDiv.textContent = "Correct!";
  } else {
    resultDiv.textContent = `Wrong. The correct sentence is: "${originalSentence}"`;
  }
  resultDiv.style.display = "block";
  setTimeout(initializeGame, 5000); // Reset the game after 5 seconds
});

// Hint button event handler
hintBtn.addEventListener("click", () => {
  if (hintCount < 2) {
    resultDiv.textContent = `Hint: ${originalSentence}`;
    resultDiv.style.display = "block";
    hintCount++;
    setTimeout(() => {
      resultDiv.style.display = "none";
      if (hintCount >= 2) {
        hintBtn.disabled = true;
      }
    }, 3000);
  }
});

// Reset button event handler
resetBtn.addEventListener("click", initializeGame);

// Initialize the game on page load
window.addEventListener("load", initializeGame);
