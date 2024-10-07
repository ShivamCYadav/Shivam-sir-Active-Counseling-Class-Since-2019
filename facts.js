
const facts = [
  {
    title: 'History: Ancient Indian Universities',
    content: 'India was home to some of the world\'s first universities. Nalanda, one of the oldest universities, attracted students from all over the world in ancient times.'
  },
  {
    title: 'Geography: Largest Salt Desert',
    content: 'India is home to the largest salt desert in the world – the Great Rann of Kutch in Gujarat, which stretches over 7,505 square miles.'
  },
  {
    title: 'Science: Zero Invention',
    content: 'The concept of zero as a number and its operations was first defined by Indian mathematician Aryabhata in 5th century CE.'
  },
  {
    title: 'History: Indus Valley Civilization',
    content: 'The Indus Valley Civilization, one of the world\'s oldest urban civilizations, existed in northwest India and Pakistan around 2500 BCE.'
  },
  {
    title: 'Geography: Wettest Place on Earth',
    content: 'Mawsynram, located in Meghalaya, India, holds the record for the highest average annual rainfall, making it the wettest place on Earth.'
  },
  {
    title: 'Science: Ayurveda - World\'s Oldest Medical System',
    content: 'Ayurveda, an ancient Indian system of medicine, is considered one of the world’s oldest medical systems and is still practiced today.'
  },
  {
    title: 'History: Indian Independence',
    content: 'India gained independence from British rule on August 15, 1947, through peaceful resistance led by Mahatma Gandhi and other leaders.'
  },
  {
    title: 'Geography: India’s Coastline',
    content: 'India has a coastline that stretches over 7,500 kilometers, making it one of the longest coastlines in the world, along the Arabian Sea and Bay of Bengal.'
  },
  {
    title: 'Science: Chandrayaan-2',
    content: 'India\'s space agency ISRO launched Chandrayaan-2 in 2019, aiming to land a rover on the Moon’s south pole – a significant achievement in space exploration.'
  },
  {
    title: 'History: Ashoka the Great',
    content: 'Emperor Ashoka, after the Kalinga War, embraced Buddhism and spread its principles of non-violence across India and neighboring regions.'
  },
  {
    title: 'History: First Emperor of India',
    content: 'Chandragupta Maurya was the founder of the Maurya Empire and the first emperor to unify most of Greater India.'
  },
  {
    title: 'Geography: Largest River Island',
    content: 'Majuli in Assam is the largest river island in the world, situated in the Brahmaputra River.'
  },
  {
    title: 'Science: India’s Mars Mission',
    content: 'India’s Mars Orbiter Mission (Mangalyaan) was the first successful attempt by any nation to reach Mars on its first attempt in 2013.'
  },
  {
    title: 'History: Gupta Golden Age',
    content: 'The Gupta Empire is often referred to as the Golden Age of India due to its advancements in science, art, and literature.'
  },
  {
    title: 'Geography: Thar Desert',
    content: 'The Thar Desert is the largest desert in India, located in the northwest, and extends into Pakistan.'
  },
  {
    title: 'Science: Ancient Indian Surgery',
    content: 'Sushruta, an ancient Indian physician, is known as the “Father of Surgery” and authored the Sushruta Samhita, which contains detailed surgical procedures.'
  },
  {
    title: 'History: Harappa and Mohenjo-Daro',
    content: 'Harappa and Mohenjo-Daro were major cities of the Indus Valley Civilization, one of the world’s earliest urban cultures.'
  },
  {
    title: 'Geography: Himalayan Mountain Range',
    content: 'The Himalayas, home to the highest peaks on Earth, including Mount Everest, act as a natural barrier between India and China.'
  },
  {
    title: 'Science: India’s Atomic Energy',
    content: 'India’s first nuclear reactor, Apsara, was commissioned in 1956, making India one of the early nations to harness nuclear power.'
  },
  {
    title: 'History: Mughal Empire',
    content: 'The Mughal Empire ruled most of India from the 16th to the 18th century, known for its architectural marvels like the Taj Mahal.'
  },
  {
    title: 'Geography: Longest River in India',
    content: 'The Ganges (Ganga) is the longest river in India, stretching over 2,500 kilometers from the Himalayas to the Bay of Bengal.'
  },
  {
    title: 'Science: Plastic Surgery in Ancient India',
    content: 'The first mention of plastic surgery dates back to ancient India in the Sushruta Samhita, where skin grafting techniques were described.'
  },
  {
    title: 'History: Battle of Panipat',
    content: 'The First Battle of Panipat in 1526 marked the beginning of Mughal rule in India after Babur defeated the Lodi dynasty.'
  },
  {
    title: 'Geography: Sundarbans',
    content: 'The Sundarbans in West Bengal is the largest mangrove forest in the world and is home to the Bengal tiger.'
  },
  {
    title: 'Science: Decimal System',
    content: 'The modern decimal system, including the use of the numeral zero, was developed in ancient India and later transmitted to the Arab world.'
  },
  {
    title: 'History: Indian Independence Movement',
    content: 'The Indian Independence Movement, led by figures like Mahatma Gandhi, resulted in India gaining independence from British rule in 1947.'
  },
  {
    title: 'Geography: Western Ghats',
    content: 'The Western Ghats, a UNESCO World Heritage site, is a mountain range rich in biodiversity and runs parallel to India’s western coast.'
  },
  {
    title: 'Science: Indian Space Research',
    content: 'The Indian Space Research Organisation (ISRO) was established in 1969 and has since launched numerous satellites and interplanetary missions.'
  },
  {
    title: 'History: Ashoka’s Edicts',
    content: 'Ashoka the Great, after converting to Buddhism, erected edicts across his empire promoting non-violence and welfare for all beings.'
  },
  {
    title: 'Geography: Andaman and Nicobar Islands',
    content: 'The Andaman and Nicobar Islands, located in the Bay of Bengal, are known for their natural beauty, coral reefs, and indigenous tribes.'
  },
  {
    title: 'Science: Yoga',
    content: 'Yoga, an ancient practice originating in India over 5,000 years ago, combines physical, mental, and spiritual exercises for well-being.'
  },
  {
    title: 'History: Vijayanagara Empire',
    content: 'The Vijayanagara Empire in South India was one of the last great Hindu empires, known for its contributions to art, literature, and architecture.'
  },
  {
    title: 'Geography: Deccan Plateau',
    content: 'The Deccan Plateau covers most of southern India and is known for its rich mineral resources and unique landscapes.'
  },
  {
    title: 'Science: Indian Mathematicians',
    content: 'Brahmagupta and Bhaskara were two famous Indian mathematicians who made groundbreaking contributions to algebra and trigonometry.'
  },
  {
    title: 'History: Maratha Empire',
    content: 'The Maratha Empire, founded by Shivaji in the 17th century, played a key role in ending Mughal dominance in India.'
  },
  {
    title: 'Geography: Eastern Ghats',
    content: 'The Eastern Ghats are a discontinuous mountain range running along India’s eastern coast, known for their scenic beauty and wildlife.'
  },
  {
    title: 'Science: Indian Medicinal Plants',
    content: 'India has a rich history of using medicinal plants like neem, tulsi, and turmeric, which are still used in traditional medicine today.'
  },
  {
    title: 'History: Battle of Plassey',
    content: 'The Battle of Plassey in 1757 marked the beginning of British colonial rule in India, following the defeat of the Nawab of Bengal.'
  },
  {
    title: 'Geography: India’s Climate Zones',
    content: 'India has a diverse range of climate zones, including tropical, arid, temperate, and alpine regions, making it one of the most climatically diverse countries in the world.'
  },
  {
    title: 'Science: Indian Astronomers',
    content: 'Ancient Indian astronomers like Aryabhata and Varahamihira made significant contributions to the understanding of planetary movements and eclipses.'
  },
  {
    title: 'History: Bhimbetka Rock Shelters',
    content: 'The Bhimbetka Rock Shelters in Madhya Pradesh contain some of the earliest known traces of human life in India, with prehistoric paintings over 30,000 years old.'
  },
  {
    title: 'Geography: River Brahmaputra',
    content: 'The Brahmaputra River, which flows through Tibet, India, and Bangladesh, is one of the major rivers of the Indian subcontinent and is prone to seasonal flooding.'
  },
  {
    title: 'Science: Ayurveda',
    content: 'Ayurveda, the ancient Indian system of medicine, is one of the oldest forms of holistic healthcare, focusing on balancing the mind, body, and spirit.'
  },
  {
    title: 'History: Indian Partition',
    content: 'The partition of India in 1947 led to the creation of two independent nations, India and Pakistan, resulting in the largest mass migration in history.'
  },
  {
    title: 'Geography: Monsoon',
    content: 'The Indian monsoon is a major climatic event, bringing heavy rainfall to much of the country from June to September, essential for agriculture.'
  },
  {
    title: 'Science: India’s IT Industry',
    content: 'India is known for its booming IT industry, with cities like Bengaluru and Hyderabad serving as global hubs for software development and tech innovation.'
  },
  {
    title: 'History: Jallianwala Bagh Massacre',
    content: 'The Jallianwala Bagh Massacre in 1919 was a turning point in the Indian Independence Movement, where British troops opened fire on a peaceful gathering.'
  },
  {
    title: 'Geography: River Ganges Basin',
    content: 'The Ganges River Basin is one of the most fertile and densely populated areas in the world, supporting millions of people across northern India.'
  },
  {
    title: 'Science: Indian Innovations in Textiles',
    content: 'India has been a center for textile innovation for centuries, producing fine cotton and silk fabrics like muslin and khadi, known for their quality.'
  },
  {
    title: 'History: The Great Indian Mutiny of 1857',
    content: 'The Indian Rebellion of 1857, also known as the First War of Independence, was a widespread uprising against British rule in India.'
  },
  {
    title: 'Geography: India’s Biodiversity',
    content: 'India is one of the world’s most biodiverse countries, home to over 45,000 species of plants and 90,000 species of animals, including endangered species like the Bengal tiger.'
  },
  { 
title: 'History: Kalinga War', 
content: 'The Kalinga War, fought in 261 BCE, was a major turning point in Emperor Ashoka’s reign, after which he embraced Buddhism and non-violence.'
},
{ 
title: 'Geography: India’s Coastline', 
content: 'India has a coastline of about 7,516 kilometers, making it one of the longest in the world, touching the Arabian Sea, Indian Ocean, and Bay of Bengal.'
},
{ 
title: 'Science: Nobel Prize in Physics', 
content: 'C.V. Raman, an Indian physicist, was awarded the Nobel Prize in Physics in 1930 for his work on light scattering, now known as the Raman Effect.'
},
{ 
title: 'History: The Sepoy Mutiny', 
content: 'The Sepoy Mutiny of 1857 was the first large-scale rebellion against British rule in India, leading to the end of the East India Company’s control.'
},
{ 
title: 'Geography: Largest Salt Desert', 
content: 'The Great Rann of Kutch in Gujarat is the largest salt desert in the world, covering an area of around 7,500 square kilometers.'
},
{ 
title: 'Science: Indian Innovation in Agriculture', 
content: 'India introduced the “Green Revolution” in the 1960s, which dramatically improved agricultural productivity through new techniques and hybrid crops.'
},
{ 
title: 'History: Satyagraha Movement', 
content: 'Mahatma Gandhi’s Satyagraha movement was a non-violent method of protest that became a key strategy in India’s struggle for independence.'
},
{ 
title: 'Geography: Highest Point in India', 
content: 'Kangchenjunga, located on the border between India and Nepal, is the highest mountain peak in India, standing at 8,586 meters.'
},
{ 
title: 'Science: Indian Space Missions', 
content: 'India’s Chandrayaan-2 mission, launched in 2019, aimed to explore the south pole of the Moon, and placed India in the global space race.'
},
{ 
title: 'History: Jantar Mantar', 
content: 'Jantar Mantar, built in Jaipur in the 18th century, is a collection of astronomical instruments used for calculating time and predicting celestial events.'
},
{ 
title: 'Geography: Indian Plate', 
content: 'The Indian Plate is a tectonic plate that is moving northward and is responsible for the formation of the Himalayas by colliding with the Eurasian Plate.'
},
{ 
title: 'Science: Zero in Mathematics', 
content: 'The concept of zero as a number was first developed in India by mathematicians like Aryabhata, and it revolutionized mathematics worldwide.'
},
{ 
title: 'History: Chola Dynasty', 
content: 'The Chola Dynasty, which ruled South India for centuries, was known for its naval power and the spread of Tamil culture and architecture across Southeast Asia.'
},
{ 
title: 'Geography: Western Desert', 
content: 'The Thar Desert, also known as the Great Indian Desert, is a vast arid region that stretches across northwestern India and into eastern Pakistan.'
},
{ 
title: 'Science: Vedic Mathematics', 
content: 'Vedic Mathematics is an ancient system of calculation based on techniques from the Vedas, used to simplify complex arithmetic and algebraic operations.'
},
{ 
title: 'History: Quit India Movement', 
content: 'The Quit India Movement was launched by Mahatma Gandhi in 1942, calling for an end to British rule in India and leading to mass protests.'
},
{ 
title: 'Geography: The Tropic of Cancer', 
content: 'The Tropic of Cancer passes through eight states in India, marking the northernmost point where the Sun appears directly overhead at noon.'
},
{ 
title: 'Science: Indian Medicine and Surgery', 
content: 'Ayurveda, the ancient Indian system of medicine, includes detailed knowledge of surgery, such as cataract removal, which was practiced by ancient Indian physicians.'
},
{ 
title: 'History: Akbar the Great', 
content: 'Akbar, the third Mughal emperor, was known for his policies of religious tolerance and the administrative reforms that strengthened the Mughal Empire.'
},
{ 
title: 'Geography: Ghaggar-Hakra River', 
content: 'The Ghaggar-Hakra River is considered to be the possible remains of the ancient Sarasvati River mentioned in the Rigveda, a major river of ancient India.'
},
{ 
title: 'Science: India’s Solar Power Initiatives', 
content: 'India is one of the world’s leaders in solar power production and aims to produce 100 GW of solar energy by 2022 as part of its commitment to renewable energy.'
},
{ 
title: 'History: Ancient Universities', 
content: 'Nalanda and Takshashila were among the world’s first universities, where scholars from all over the world came to study science, mathematics, philosophy, and literature.'
},
{ 
title: 'Geography: Chilika Lake', 
content: 'Chilika Lake in Odisha is the largest coastal lagoon in India and a major wintering ground for migratory birds, making it a significant wetland ecosystem.'
},
{ 
title: 'Science: India’s First Satellite', 
content: 'Aryabhata, India’s first satellite, was launched by the Soviet Union in 1975, marking India’s entry into space exploration.'
},
{ 
title: 'History: The Dandi March', 
content: 'The Dandi March, led by Mahatma Gandhi in 1930, was a direct action campaign against the British salt monopoly in colonial India.'
},
{ 
title: 'Geography: Siachen Glacier', 
content: 'Siachen Glacier, located in the eastern Karakoram range, is the highest battlefield in the world where Indian and Pakistani forces have faced off since 1984.'
},
{ 
title: 'Science: Indian Environmental Movements', 
content: 'The Chipko Movement in the 1970s was one of the first environmental movements in India, aimed at preventing deforestation through non-violent protest.'
},
{ 
title: 'History: Battle of Buxar', 
content: 'The Battle of Buxar, fought in 1764, solidified British East India Company’s control over Bengal, Bihar, and Odisha, leading to colonial dominance in India.'
},
{ 
title: 'Geography: Largest Coral Reef in India', 
content: 'The Lakshadweep Islands are home to the largest coral reefs in India, with stunning marine biodiversity and important ecosystems.'
},
{ 
title: 'Science: Agricultural Research in India', 
content: 'The Indian Council of Agricultural Research (ICAR), established in 1929, leads research and innovation in agriculture, helping India become self-sufficient in food production.'
},
{ 
title: 'History: Battle of Haldighati', 
content: 'The Battle of Haldighati in 1576 was a famous conflict between Maharana Pratap of Mewar and the Mughal Emperor Akbar, symbolizing Rajput resistance.'
},
{ 
title: 'Geography: India’s Tallest Waterfall', 
content: 'Jog Falls in Karnataka is the tallest waterfall in India, with a height of 830 feet, attracting tourists and nature enthusiasts from around the world.'
},
{ 
title: 'Science: India’s Supercomputers', 
content: 'India developed one of its first supercomputers, PARAM, in the 1990s, and continues to make advancements in high-performance computing for scientific research.'
},
{ 
title: 'History: Vijayanagara Empire’s Achievements', 
content: 'The Vijayanagara Empire, flourishing between the 14th and 16th centuries, was known for its architectural brilliance, especially in Hampi.'
},
{ 
title: 'Geography: India’s Monsoons', 
content: 'India’s summer monsoon season, which occurs between June and September, brings much-needed rainfall to the country and supports its agriculture-based economy.'
},
{ 
title: 'Science: Ancient Indian Astronomy', 
content: 'Indian astronomers like Aryabhata and Bhaskara made significant contributions to the understanding of planetary movements and eclipses in ancient times.'
},
{ 
title: 'History: Indian Constitution', 
content: 'The Constitution of India, adopted in 1950, is the longest written constitution in the world and sets the framework for the country’s democratic governance.'
},
{ 
title: 'Geography: The Eastern and Western Ghats', 
content: 'The Eastern and Western Ghats are two mountain ranges that run parallel to India’s coasts, creating unique ecosystems and rich biodiversity.'
}
];

let currentFactIndex = 0;
let shuffledIndices = [];

// Function to shuffle an array
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
return array;
}

// Initialize shuffledIndices with a shuffled version of the facts' indices
function initializeShuffledIndices() {
shuffledIndices = shuffleArray([...Array(facts.length).keys()]);
}

// Display the current fact
function displayFact() {
const fact = facts[shuffledIndices[currentFactIndex]];
document.getElementById('factTitle').innerText = fact.title;
document.getElementById('factContent').innerText = fact.content;
}

// Display the next random fact
function nextFact() {
if (currentFactIndex < shuffledIndices.length - 1) {
currentFactIndex++;
displayFact();
} else {
currentFactIndex = 0; // Loop back to the beginning if at the end
displayFact();
}
}

// Display the previous random fact
function prevFact() {
if (currentFactIndex > 0) {
currentFactIndex--;
displayFact();
} else {
currentFactIndex = shuffledIndices.length - 1; // Loop back to the end if at the beginning
displayFact();
}
}

// Initialize with shuffled facts and display the first fact
initializeShuffledIndices();
displayFact();
