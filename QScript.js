const sentenceDiv = document.getElementById("sentence");
const wordsDiv = document.getElementById("words");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const hintBtn = document.getElementById("hint-btn");
const resultDiv = document.getElementById("result");
const levelSelect = document.getElementById("level-select");

let originalSentence = "";
let sentenceWords = [];
let hintCount = 0;

/* =======================
   SENTENCE DATABASE
   ======================= */

const sentences = {
  easy: [
    "I like mango",
    "She is happy",
    "We play cricket",
    "He reads book",
    "Birds can fly",
    "Sun rises east",
    "Water is life",
    "Dogs are loyal",
    "Time is money",
    "Be kind always",
    "Work hard daily",
    "School is fun",
    "Math is easy",
    "Open the door",
    "Close the window",
    "Sit on chair",
    "Stand in line",
    "Write your name",
    "Read the book",
    "Eat healthy food",
    "Drink clean water",
    "Speak the truth",
    "Help your friends",
    "Respect elders",
    "Listen carefully",
    "Wake up early",
    "Keep silence",
    "Run fast",
    "Jump high",
    "Think positive",
    "Stay focused",
    "Practice daily",
    "Study hard",
    "I am a student",
"She has a pen",
"He is my friend",
"We love our school",
"This is my book",
"That is your bag",
"The cat is small",
"The sky is blue",
"Ravi plays football",
"Anita sings well",
"The boy runs fast",
"The girl is smart",
"Open your book",
"Close the gate",
"Come here now",
"Go to school",
"Bring your notebook",
"Wash your hands",
"Keep your room clean",
"Speak politely",
"Write neatly",
"Read loudly",
"Answer correctly",
"Do your homework",
"Respect your teacher",
"Help the poor",
"Plant more trees",
"Save water daily",
"Keep smiling always",
"Try again",
"Do not worry",
"Be confident",
"Stay healthy",
"Eat fruits daily",
"Walk slowly",
"Stand straight",
"Sit properly",
"Listen to me",
"Look at board",
"Clean the table"
  ],

  medium: [
    "Practice makes a man perfect",
    "Honesty is the best policy",
    "Knowledge is power",
    "Discipline builds strong character",
    "Hard work leads to success",
    "Never give up easily",
    "Confidence comes from preparation",
    "Success needs patience and effort",
    "Education changes your future",
    "Dream big and work hard",
    "Failure teaches important lessons",
    "Believe in yourself always",
    "Time waits for no one",
    "Every problem has solution",
    "Reading improves vocabulary skills",
    "Consistency is the key to success",
    "Teachers guide students toward success",
    "Small steps lead to big results",
    "Focus on your goals daily",
    "Good habits shape bright future",
    "Stay calm under pressure",
    "Learning never stops in life",
    "Positive thinking creates positive results",
    "Effort brings achievement",
    "Hard times build strong people",
    "Self discipline leads to greatness",
    "Success requires dedication and focus",
    "Knowledge grows when shared",
    "Hard work always brings success",
"Practice improves your performance",
"Time management is very important",
"Reading books increases knowledge",
"Students must follow discipline",
"Teachers inspire young minds",
"Success demands continuous effort",
"Confidence improves communication skills",
"Every child has hidden talent",
"Education builds better future",
"Failure is the first step to success",
"Positive attitude changes everything",
"Patience is a great virtue",
"Regular practice sharpens your skills",
"Honesty builds strong relationships",
"Good manners show good character",
"Dreams require action and courage",
"Learning new things is exciting",
"Consistency brings excellent results",
"Self belief creates strong personality",
"Challenges make us stronger",
"Knowledge opens many doors",
"Respect earns respect",
"Wise people think before speaking",
"Smart work saves time",
"Great leaders inspire others",
"Success needs determination and focus",
"Reading daily improves language skills",
"Small goals lead to big achievements",
"Teamwork creates better results",
"Clear thinking solves problems",
"Strong habits build success",
"Planning helps achieve goals",
"Listening carefully avoids mistakes",
"Hard work beats talent",
"Confidence removes fear",
"Learning builds confidence",
"Education empowers individuals",
"Effort creates opportunity",
"Persistence leads to victory"
  ],

  hard: [
    "Education is the most powerful weapon which you can use to change the world",
    "Success is not final failure is not fatal it is the courage to continue that counts",
    "The future belongs to those who believe in the beauty of their dreams",
    "Discipline is the bridge between goals and accomplishment",
    "Opportunities do not happen you create them",
    "The secret of getting ahead is getting started",
    "A journey of a thousand miles begins with a single step",
    "In the middle of difficulty lies opportunity",
    "Success usually comes to those who are too busy to be looking for it",
    "Do not watch the clock do what it does keep going",
    "The harder you work for something the greater you will feel when you achieve it",
    "Your limitation is only your imagination",
    "Push yourself because no one else is going to do it for you",
    "Difficult roads often lead to beautiful destinations",
    "Great things never come from comfort zones",
    "Success does not come from what you do occasionally but from what you do consistently",
    "Small daily improvements lead to stunning results",
    "Dream it wish it do it",
    "Stay patient and trust your journey",
    "Winners are not afraid of losing",
    "Success is achieved through consistent effort and unwavering determination",
"Education plays a crucial role in shaping a responsible citizen",
"Hard work combined with smart strategy guarantees excellent results",
"Self discipline is essential for achieving long term goals",
"Every great achievement starts with a simple decision to try",
"True confidence comes from preparation and experience",
"Obstacles are opportunities in disguise for growth",
"Leadership is about inspiring others toward a common vision",
"Success requires patience perseverance and passion",
"Learning from mistakes strengthens your future decisions",
"Effective communication builds strong relationships",
"Consistency in effort leads to extraordinary achievements",
"A positive mindset transforms challenges into opportunities",
"Discipline and dedication define true success",
"Personal growth begins outside your comfort zone",
"Knowledge expands when shared with others",
"Resilience helps individuals overcome adversity",
"Great accomplishments demand continuous improvement",
"Focus and clarity bring outstanding performance",
"Success depends on your daily habits",
"Your attitude determines your altitude",
"Strategic planning increases productivity",
"Strong determination conquers fear",
"Preparation prevents poor performance",
"Hard work creates lasting success",
"Confidence grows with experience",
"Dedication separates winners from others",
"Patience is required for mastery",
"Clear goals guide meaningful actions",
"Learning is a lifelong journey",
"Success favors the prepared mind",
"Commitment drives achievement",
"Strong values build strong character",
"Vision inspires action",
"Effort fuels progress",
"Consistency strengthens results",
"Persistence overcomes obstacles",
"Focused minds achieve greatness",
"Growth requires effort and courage",
"Determination defines success"
  ]
};

/* =======================
   SCRAMBLE FUNCTION
   ======================= */

function scrambleWords(words) {
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }
  return words;
}

/* =======================
   INITIALIZE GAME
   ======================= */

function initializeGame() {
  const level = levelSelect.value;
  const levelSentences = sentences[level];

  originalSentence =
    levelSentences[Math.floor(Math.random() * levelSentences.length)];

  sentenceWords = originalSentence.split(" ");
  const scrambledWords = scrambleWords([...sentenceWords]);

  wordsDiv.innerHTML = "";
  sentenceDiv.innerHTML = "";
  resultDiv.style.display = "none";
  hintCount = 0;
  hintBtn.disabled = false;

  scrambledWords.forEach(word => {
    const span = document.createElement("span");
    span.classList.add("selectable");
    span.textContent = word;
    span.style.display = "inline-block";
    span.style.marginRight = "10px";
    span.style.padding = "6px 10px";
    span.style.border = "1px solid #333";
    span.style.borderRadius = "6px";
    span.style.cursor = "pointer";
    span.style.backgroundColor = "#f0f0f0";

    span.addEventListener("click", () => {
      span.style.display = "none";
      sentenceDiv.appendChild(document.createTextNode(word + " "));
    });

    wordsDiv.appendChild(span);
  });
}

/* =======================
   BUTTON EVENTS
   ======================= */

submitBtn.addEventListener("click", () => {
  const userSentence = sentenceDiv.textContent.trim();

  if (userSentence === originalSentence) {
    resultDiv.textContent = "Correct! 🎉";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = `Wrong! Correct sentence: "${originalSentence}"`;
    resultDiv.style.color = "red";
  }

  resultDiv.style.display = "block";
  setTimeout(initializeGame, 3000);
});

hintBtn.addEventListener("click", () => {
  if (hintCount < 1) {
    resultDiv.textContent = `Hint: First word is "${sentenceWords[0]}"`;
    resultDiv.style.display = "block";
    hintCount++;
  } else {
    hintBtn.disabled = true;
  }
});

resetBtn.addEventListener("click", initializeGame);
levelSelect.addEventListener("change", initializeGame);

window.addEventListener("load", initializeGame);