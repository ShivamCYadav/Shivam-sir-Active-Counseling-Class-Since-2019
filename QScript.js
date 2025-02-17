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
    if (sentence.length >= 3 && sentence.length <= 10) {
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

  // Display the scrambled words as blocks
  wordsDiv.innerHTML = "";
  scrambledWords.forEach(word => {
    const wordSpan = document.createElement("span");
    wordSpan.classList.add("selectable");
    wordSpan.textContent = word;
    wordSpan.style.display = "inline-block";
    wordSpan.style.marginRight = "10px";
    wordSpan.style.padding = "5px";
    wordSpan.style.border = "1px solid #000";
    wordSpan.style.cursor = "pointer";
    wordsDiv.appendChild(wordSpan);
  });

  // Add click functionality
  const selectables = wordsDiv.querySelectorAll(".selectable");

  selectables.forEach(selectable => {
    selectable.addEventListener("click", selectWord);
  });

  resultDiv.style.display = "none";
  sentenceDiv.innerHTML = "";
  hintCount = 0;
  hintBtn.disabled = false;
}

// Function to handle word selection
function selectWord(event) {
  const selectedWord = event.target.textContent;
  event.target.style.display = "none";
  sentenceDiv.appendChild(document.createTextNode(selectedWord + " "));
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
  setTimeout(initializeGame, 2000); // Reset the game after 2 seconds
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

function openPDF() {
  var pdfViewer = document.getElementById('pdfViewer');
  pdfViewer.src = 'https://shivamcyadav.github.io/Shivam-sir-Active-Counseling-Class-Since-2019/subjects/Bhagavad-gita-hindi.pdf#toolbar=0&navpanes=0&scrollbar=0';
  pdfViewer.style.display = 'block';
}
