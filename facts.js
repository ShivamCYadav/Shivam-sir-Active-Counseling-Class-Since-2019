
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
},
{
    title: 'History: Indus Valley Civilization',
    content: 'The Indus Valley Civilization (3300–1300 BCE) is one of the world’s oldest urban cultures, with advanced architecture, sanitation, and city planning.'
  },
  {
    title: 'Geography: India’s Northernmost Point',
    content: 'The northernmost point of India is located in the state of Jammu and Kashmir at the Siachen Glacier.'
  },
  {
    title: 'Science: India’s First Mars Mission',
    content: 'India’s Mars Orbiter Mission (Mangalyaan) made India the first country to successfully reach Mars orbit on its first attempt in 2014.'
  },
  {
    title: 'History: Gupta Period’s Golden Age',
    content: 'The Gupta Empire (320–550 CE) is considered the “Golden Age of India” due to achievements in arts, science, literature, and mathematics.'
  },
  {
    title: 'Geography: Largest Mangrove Forest',
    content: 'The Sundarbans, shared between India and Bangladesh, is the largest mangrove forest in the world and home to the endangered Bengal tiger.'
  },
  {
    title: 'Science: India’s Polar Research Station',
    content: 'India’s first Antarctic research station, Dakshin Gangotri, was established in 1983, followed by Maitri and Bharati stations.'
  },
  {
    title: 'History: Khajuraho Temples',
    content: 'The Khajuraho group of temples in Madhya Pradesh are famous for their stunning erotic sculptures, dating back to the Chandela dynasty between 950 and 1050 CE.'
  },
  {
    title: 'Geography: Longest River in India',
    content: 'The Ganges (Ganga) is the longest river in India, flowing over 2,525 kilometers from the Himalayas to the Bay of Bengal.'
  },
  {
    title: 'Science: India’s Role in Optics',
    content: 'The concept of the “law of refraction” was first documented by the Indian mathematician and physicist Ibn Sahl around the year 984 CE.'
  },
  {
    title: 'History: The Mughal Gardens',
    content: 'The Mughal gardens, especially the Shalimar Bagh in Kashmir, are a blend of Persian, Islamic, and Indian architecture and landscape design.'
  },
  {
    title: 'Geography: Southernmost Point of India',
    content: 'Indira Point, located in the Andaman and Nicobar Islands, is the southernmost point of India’s territory.'
  },
  {
    title: 'Science: Indian Contributions to Algebra',
    content: 'The mathematician Brahmagupta (598–668 CE) is credited with some of the earliest works on algebra and the use of zero in equations.'
  },
  {
    title: 'History: Ashoka’s Pillars',
    content: 'The Ashoka Pillars, erected by Emperor Ashoka in the 3rd century BCE, are inscribed with edicts promoting non-violence and moral values.'
  },
  {
    title: 'Geography: Largest State by Area',
    content: 'Rajasthan is the largest state in India by area, covering 342,239 square kilometers.'
  },
  {
    title: 'Science: India’s Role in Chemistry',
    content: 'The ancient text “Rasashastra” deals with the chemistry of medicinal compounds and alchemy, forming the foundation of Ayurveda.'
  },
  {
    title: 'History: Vijayanagara’s Wealth',
    content: 'The city of Vijayanagara, during its peak in the 14th century, was one of the richest cities in the world due to its thriving trade and economy.'
  },
  {
    title: 'Geography: Andaman and Nicobar Islands',
    content: 'The Andaman and Nicobar Islands are home to several indigenous tribes and are known for their pristine beaches and biodiversity.'
  },
  {
    title: 'Science: Rocketry in India',
    content: 'The medieval scholar Tipu Sultan and his Mysorean army developed and used advanced rockets during the Anglo-Mysore Wars.'
  },
  {
    title: 'History: The Bhakti Movement',
    content: 'The Bhakti Movement, which emerged in medieval India, promoted the idea of devotion to one god and played a crucial role in shaping Indian spirituality.'
  },
  {
    title: 'Geography: Western Ghats',
    content: 'The Western Ghats are one of the world’s biodiversity hotspots, home to over 7,400 species of plants, animals, and fungi.'
  },
  {
    title: 'Science: Ayurveda’s Contributions',
    content: 'Ayurveda, an ancient Indian medical system, has roots going back 5,000 years and includes holistic treatments like yoga, herbal remedies, and meditation.'
  },
  {
    title: 'History: Akshardham Temple',
    content: 'The Akshardham Temple in Delhi, opened in 2005, is one of the largest Hindu temples in the world and an architectural marvel.'
  },
  {
    title: 'Geography: The Deccan Plateau',
    content: 'The Deccan Plateau covers most of southern India and is known for its rich mineral resources like coal, iron ore, and mica.'
  },
  {
    title: 'Science: Fibonacci Numbers and India',
    content: 'Fibonacci numbers were first documented in ancient Indian mathematics as “matra meru,” used in Sanskrit poetry and chandas.'
  },
  {
    title: 'History: Ashoka’s Conversion to Buddhism',
    content: 'Emperor Ashoka embraced Buddhism after witnessing the horrors of the Kalinga War, leading to his promotion of peace and Buddhism throughout his empire.'
  },
  {
    title: 'Geography: Rivers that Don’t Meet the Sea',
    content: 'India has many rivers that do not meet the sea, such as the Luni River, which flows into the Thar Desert, forming inland deltas.'
  },
  {
    title: 'Science: Plastic Surgery in Ancient India',
    content: 'The ancient Indian surgeon Sushruta is considered the father of plastic surgery and documented procedures like rhinoplasty (nose jobs) around 600 BCE.'
  },
  {
    title: 'History: The Rani of Jhansi',
    content: 'Rani Lakshmibai, the queen of Jhansi, became a symbol of resistance during the Indian Rebellion of 1857 and is remembered as one of India’s greatest freedom fighters.'
  },
  {
    title: 'Geography: The Indian Monsoon',
    content: 'India’s monsoon season is a lifeline for its agriculture, with more than 70% of annual rainfall occurring between June and September.'
  },
  {
    title: 'Science: Snake Venom Research',
    content: 'India leads the world in snake venom research, as it is home to some of the world’s most venomous species like cobras, kraits, and vipers.'
  },
  {
    title: 'History: The Mauryan Empire',
    content: 'The Mauryan Empire (322–185 BCE) under Chandragupta Maurya was the first empire to unify most of the Indian subcontinent under one ruler.'
  },
  {
    title: 'Geography: India’s National Parks',
    content: 'India has over 100 national parks and more than 500 wildlife sanctuaries, including famous ones like Jim Corbett National Park and Kaziranga National Park.'
  },
  {
    title: 'Science: Decimal System Origin',
    content: 'The modern decimal system, including the use of a dot to represent the decimal point, originated in India and was adopted worldwide.'
  },
  {
    title: 'History: Maratha Navy',
    content: 'The Maratha Navy, under the leadership of Shivaji Maharaj, played a key role in securing the western coast of India and challenging European colonizers.'
  },
  {
    title: 'Geography: India’s Tea Industry',
    content: 'India is the second-largest producer of tea in the world, with the majority of plantations located in Assam, West Bengal, and Tamil Nadu.'
  },
  {
    title: 'Science: Pioneers in Metallurgy',
    content: 'Ancient Indians were pioneers in metallurgy, with the Iron Pillar of Delhi, dating to the 4th century CE, still rust-free after 1,600 years.'
  },
  {
    title: 'History: Tipu Sultan’s Innovations',
    content: 'Tipu Sultan, the ruler of Mysore, was known for his innovations in rocketry and modern weaponry during his fight against British colonization.'
  },
  {
    title: 'Geography: Andaman’s Indigenous Tribes',
    content: 'The Andaman Islands are home to indigenous tribes such as the Sentinelese, who have lived in isolation for thousands of years.'
  },
  {
    title: 'Science: ISRO’s Successes',
    content: 'ISRO’s (Indian Space Research Organisation) 104-satellite launch in 2017 set a world record for the most satellites launched on a single mission.'
  },
  {
    title: 'History: Ancient Stepwells',
    content: 'Stepwells like Rani ki Vav in Gujarat, a UNESCO World Heritage site, were built to store water in the arid regions of India and serve as temples.'
  },
  {
    title: 'Geography: Largest Delta',
    content: 'The Sundarbans Delta, formed by the Ganges, Brahmaputra, and Meghna rivers, is the largest delta in the world.'
  },
  {
    title: 'Science: Nobel Laureates in India',
    content: 'Indian scientists like C.V. Raman (1930) and Hargobind Khorana (1968) have won the Nobel Prize for their groundbreaking work in physics and medicine, respectively.'
  },
  {
    title: 'Geography: Highest Peak in India',
    content: 'Kangchenjunga is the highest mountain peak in India, standing at 8,586 meters (28,169 feet) above sea level.'
  },
  {
    title: 'History: India’s First Emperor',
    content: 'Chandragupta Maurya founded the Mauryan Empire in 322 BCE and is considered the first emperor to unify most of India under one rule.'
  },
  {
    title: 'Science: India’s Zero Contribution',
    content: 'The concept of zero as a number was first introduced by Indian mathematician Brahmagupta in the 7th century CE.'
  },
  {
    title: 'Geography: Indian Ocean',
    content: 'India gives its name to the Indian Ocean, the third-largest ocean in the world, covering about 70.56 million square kilometers.'
  },
  {
    title: 'History: India’s First War of Independence',
    content: 'The Revolt of 1857, also called India’s First War of Independence, was a major uprising against British rule.'
  },
  {
    title: 'Science: Chandrayaan-2',
    content: 'India’s Chandrayaan-2 mission, launched in 2019, aimed to explore the moon’s south polar region for water ice.'
  },
  {
    title: 'Geography: Wettest Place on Earth',
    content: 'Mawsynram, located in the state of Meghalaya, is the wettest place on Earth, receiving an annual average rainfall of 467.4 inches.'
  },
  {
    title: 'History: Ajanta Caves',
    content: 'The Ajanta Caves in Maharashtra are ancient Buddhist cave temples dating back to the 2nd century BCE and are a UNESCO World Heritage site.'
  },
  {
    title: 'Science: India’s Green Revolution',
    content: 'The Green Revolution in India, led by M.S. Swaminathan in the 1960s, transformed Indian agriculture and made the country self-sufficient in food grains.'
  },
  {
    title: 'Geography: Largest Salt Desert',
    content: 'The Great Rann of Kutch in Gujarat is the largest salt desert in the world, spreading over 30,000 square kilometers.'
  },
  {
    title: 'History: Indian Independence',
    content: 'India gained independence from British rule on August 15, 1947, after a long non-violent struggle led by Mahatma Gandhi and other freedom fighters.'
  },
  {
    title: 'Science: Largest Solar Park',
    content: 'India is home to the world’s largest solar park, the Bhadla Solar Park in Rajasthan, which has a capacity of 2,245 megawatts.'
  },
  {
    title: 'Geography: Largest River Island',
    content: 'Majuli, located in the Brahmaputra River in Assam, is the world’s largest river island, with an area of around 880 square kilometers.'
  },
  {
    title: 'History: The Rajput Kingdoms',
    content: 'The Rajputs were powerful warrior clans in India who ruled over several kingdoms, such as Mewar and Marwar, during the medieval period.'
  },
  {
    title: 'Science: Indian Innovation in Fiber Optics',
    content: 'Indian-American physicist Narinder Singh Kapany is considered the father of fiber optics, having coined the term in 1956.'
  },
  {
    title: 'Geography: The Thar Desert',
    content: 'The Thar Desert, located in northwest India, is the 17th-largest desert in the world and is known for its vast sand dunes and extreme temperatures.'
  },
  {
    title: 'History: The Maratha Confederacy',
    content: 'The Maratha Confederacy, led by leaders like Shivaji and the Peshwas, challenged Mughal rule and expanded across much of India in the 18th century.'
  },
  {
    title: 'Science: Ayurveda in Modern Medicine',
    content: 'Ayurveda, an ancient Indian system of medicine, has influenced modern wellness trends, including the use of herbal remedies and holistic health approaches.'
  },
  {
    title: 'Geography: Largest Freshwater Lake',
    content: 'Wular Lake, located in Jammu and Kashmir, is one of the largest freshwater lakes in India and a key habitat for migratory birds.'
  },
  {
    title: 'History: The Battle of Panipat',
    content: 'The three Battles of Panipat, fought between 1526 and 1761, were pivotal in shaping the political landscape of northern India.'
  },
  {
    title: 'Science: Indian Atomic Energy',
    content: 'Homi J. Bhabha is considered the father of India’s nuclear program, leading efforts to establish India as a nuclear power.'
  },
  {
    title: 'Geography: Coastal Length of India',
    content: 'India has a coastline of over 7,500 kilometers, with coastal states such as Gujarat, Kerala, and Tamil Nadu playing a vital role in trade and tourism.'
  },
  {
    title: 'History: The Delhi Sultanate',
    content: 'The Delhi Sultanate (1206–1526 CE) was a Muslim kingdom that ruled large parts of India before the Mughal Empire.'
  },
  {
    title: 'Science: Space Mission to Venus',
    content: 'India is planning its first mission to Venus, Shukrayaan-1, set to explore the planet’s atmosphere and geology.'
  },
  {
    title: 'Geography: Seven Sisters of India',
    content: 'The Seven Sister States—Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, and Tripura—are located in northeastern India and are known for their rich cultural diversity.'
  },
  {
    title: 'History: Sanchi Stupa',
    content: 'The Sanchi Stupa in Madhya Pradesh, built by Emperor Ashoka in the 3rd century BCE, is one of the oldest stone structures in India and a UNESCO World Heritage site.'
  },
  {
    title: 'Science: India’s Role in Yoga',
    content: 'Yoga, an ancient physical, mental, and spiritual practice, originated in India more than 5,000 years ago and has since spread across the world.'
  },
  {
    title: 'Geography: India’s Largest Glacier',
    content: 'The Siachen Glacier in the Karakoram range is the largest glacier in India and is the highest battleground in the world due to its strategic location.'
  },
  {
    title: 'History: Vijayanagara Empire',
    content: 'The Vijayanagara Empire, founded in the 14th century, was known for its prosperity, rich cultural heritage, and architectural achievements such as the Hampi monuments.'
  },
  {
    title: 'Science: Indian Space Tourism',
    content: 'India is planning to enter the space tourism sector, with ISRO (Indian Space Research Organisation) exploring possibilities for sending tourists into space.'
  },
  {
    title: 'Geography: India’s National River',
    content: 'The Ganges River is the national river of India and is considered sacred by millions of Hindus, playing a central role in religious rituals.'
  },
  {
    title: 'History: The Chola Dynasty',
    content: 'The Chola Dynasty, which ruled southern India for centuries, was known for its naval power, temple architecture, and contribution to Tamil culture.'
  },
  {
    title: 'Science: Indian Institute of Science',
    content: 'Founded in 1909, the Indian Institute of Science (IISc) in Bangalore is one of India’s premier research institutions in the field of science and engineering.'
  },
  {
    title: 'Geography: India’s Rich Biodiversity',
    content: 'India is one of the 17 megadiverse countries in the world, with over 90,000 species of animals and 47,000 species of plants.'
  },
  {
    title: 'History: Harappan Writing',
    content: 'The writing system of the Harappan (Indus Valley) civilization remains undeciphered to this day, adding to the mystery of this ancient culture.'
  },
  {
    title: 'Science: Mission Shakti',
    content: 'In 2019, India successfully conducted Mission Shakti, an anti-satellite missile test that demonstrated India’s space defense capabilities.'
  },
  {
    title: 'Geography: Longest Coastline State',
    content: 'Gujarat has the longest coastline of any Indian state, stretching over 1,600 kilometers along the Arabian Sea.'
  },
  {
    title: 'History: The Vedic Period',
    content: 'The Vedic period (c. 1500–500 BCE) laid the foundation for much of Indian philosophy, religion, and social structures, with texts like the Rigveda emerging during this time.'
  },
  {
    title: 'Science: ISRO’s PSLV Success',
    content: 'India’s Polar Satellite Launch Vehicle (PSLV) has been a workhorse for ISRO, launching over 300 satellites into space from 1993 to the present.'
  },
  {
    title: 'Geography: Largest Freshwater Island',
    content: 'The island of Umananda in the Brahmaputra River is considered the world’s smallest inhabited river island.'
  },
  {
    title: 'History: The Battle of Plassey',
    content: 'The Battle of Plassey in 1757 marked the beginning of British dominance in India after the East India Company’s forces defeated Nawab Siraj-ud-Daulah.'
  },
  {
    title: 'Science: India’s Biotech Growth',
    content: 'India is rapidly emerging as a global hub for biotechnology, with its biotech industry projected to reach $150 billion by 2025.'
  },
  {
    title: 'Geography: Himalayan Biodiversity Hotspot',
    content: 'The Eastern Himalayas are one of the richest biodiversity hotspots in the world, with many endemic species and diverse ecosystems.'
  },
  {
    title: 'History: Ashoka’s Edicts',
    content: 'Ashoka’s edicts, inscribed on pillars and rocks across India, are one of the earliest examples of writing that promote moral and ethical values.'
  },
  {
    title: 'Science: ISRO’s Gaganyaan Mission',
    content: 'India is preparing to launch its first manned space mission, Gaganyaan, which aims to send Indian astronauts into space by 2024.'
  },
  {
    title: 'Geography: Indian Magnetic Hill',
    content: 'The Magnetic Hill in Ladakh defies gravity, causing cars to seemingly roll uphill without any force. This optical illusion is a major tourist attraction.'
  },
  {
    title: 'History: Chandrayaan’s Water Discovery',
    content: 'In 2009, India’s Chandrayaan-1 spacecraft discovered water molecules on the moon, reshaping our understanding of Earth’s satellite.'
  },
  {
    title: 'Science: The Largest Sundial',
    content: 'India’s Jantar Mantar in Jaipur is home to the world’s largest sundial, which is accurate to within two seconds!'
  },
  {
    title: 'History: India’s Oldest City',
    content: 'Varanasi, also known as Benares, is one of the world’s oldest continuously inhabited cities, dating back over 5,000 years.'
  },
  {
    title: 'Geography: The Lonar Lake Mystery',
    content: 'Lonar Lake in Maharashtra is the world’s only saltwater lake formed by a hyper-velocity meteor impact around 52,000 years ago.'
  },
  {
    title: 'History: The Indian Temple of Secrets',
    content: 'Padmanabhaswamy Temple in Kerala is believed to hold secret chambers with treasures worth billions. Only one of the six chambers has been opened to date.'
  },
  {
    title: 'Science: Largest Producer of Milk',
    content: 'India is the largest producer of milk in the world, contributing over 22% of the global milk production, thanks to initiatives like the White Revolution.'
  },
  {
    title: 'Geography: India’s Underwater City',
    content: 'The ancient city of Dwarka, which is submerged off the coast of Gujarat, is believed to be over 9,000 years old, making it one of the world’s oldest known underwater sites.'
  },
  {
    title: 'History: The Siege of Chittorgarh',
    content: 'The Siege of Chittorgarh in 1568 was one of the most devastating sieges in Indian history, where Rajput women performed Jauhar (self-immolation) to avoid capture.'
  },
  {
    title: 'Science: World’s Longest Railway Platform',
    content: 'The world’s longest railway platform is located in Gorakhpur, Uttar Pradesh, stretching over 1.3 kilometers!'
  },
  {
    title: 'History: Tipu Sultan’s Rocket Technology',
    content: 'Tipu Sultan’s army was one of the first in the world to use rockets in warfare against the British during the Anglo-Mysore Wars.'
  },
  {
    title: 'Geography: Floating Post Office',
    content: 'India has the only floating post office in the world, located on the Dal Lake in Srinagar, Kashmir. It’s a major tourist attraction.'
  },
  {
    title: 'Science: The World’s First Plastic Surgery',
    content: 'Ancient Indian physician Sushruta, often referred to as the "Father of Surgery," performed the world’s first documented rhinoplasty (nose job) in 600 BCE.'
  },
  {
    title: 'History: The Invisible Queen',
    content: 'Queen Ahilyabai Holkar of Indore is hailed as one of the greatest female rulers in Indian history, but she’s often overshadowed by other historical figures.'
  },
  {
    title: 'Geography: The Valley of Flowers',
    content: 'India’s Valley of Flowers in Uttarakhand is a UNESCO World Heritage Site, home to over 500 species of flowers, many of which are found nowhere else on Earth.'
  },
  {
    title: 'Science: ISRO’s Budget Space Missions',
    content: 'ISRO’s Mars Orbiter Mission (Mangalyaan) cost less than the Hollywood movie "Gravity," showcasing India’s cost-effective approach to space exploration.'
  },
  {
    title: 'History: Nalanda University',
    content: 'Nalanda University, established in the 5th century CE, was one of the world’s first residential universities, attracting scholars from as far as China and Greece.'
  },
  {
    title: 'Geography: Largest Volcanic Island Chain',
    content: 'India’s Andaman and Nicobar Islands are part of an underwater volcanic mountain range that includes the active volcano Barren Island.'
  },
  {
    title: 'Science: Largest Vaccine Producer',
    content: 'India is the largest producer of vaccines in the world, manufacturing more than 60% of the global supply, including those for polio, diphtheria, and COVID-19.'
  },
  {
    title: 'History: Emperor Ashoka’s Conversion',
    content: 'After the brutal Kalinga War, Emperor Ashoka converted to Buddhism and spread its teachings across Asia, influencing millions of people.'
  },
  {
    title: 'Geography: Shani Shingnapur Village',
    content: 'In Shani Shingnapur, a village in Maharashtra, houses have no doors, as residents believe that the deity Shani (Saturn) will protect them from theft.'
  },
  {
    title: 'Science: World’s Largest Religious Gathering',
    content: 'The Kumbh Mela is the world’s largest religious gathering, attracting over 100 million people during the festival held every 12 years at various locations.'
  },
  {
    title: 'History: The Kohinoor Diamond',
    content: 'The Kohinoor, one of the world’s largest and most famous diamonds, originated in India and has passed through the hands of many rulers before ending up with the British crown.'
  },
  {
    title: 'Geography: Highest Cricket Ground',
    content: 'Chail Cricket Ground in Himachal Pradesh, located at an altitude of 2,444 meters, is the highest cricket ground in the world.'
  },
  {
    title: 'Science: India’s Space Debris Cleanup Plan',
    content: 'ISRO is developing plans to mitigate space debris through advanced satellite tracking and cleanup missions, positioning India at the forefront of space sustainability.'
  },
  {
    title: 'History: The Dabbawalas of Mumbai',
    content: 'Mumbai’s Dabbawalas deliver over 200,000 lunchboxes daily with incredible precision, using a coding system that has intrigued management experts worldwide.'
  },
  {
    title: 'Geography: Silent Valley’s Unique Ecosystem',
    content: 'Silent Valley National Park in Kerala is one of the last unspoiled tracts of tropical rainforest in India, home to endangered species like the lion-tailed macaque.'
  },
  {
    title: 'Science: India’s Stem Cell Research',
    content: 'India is a leader in stem cell research, making significant strides in regenerative medicine and therapeutic cloning.'
  },
  {
    title: 'History: Operation Polo',
    content: 'Operation Polo, conducted in 1948, led to the integration of Hyderabad into India after it was a princely state that sought to remain independent post-partition.'
  },
  {
    title: 'Geography: The Sundarbans Mangrove Forest',
    content: 'The Sundarbans, located in the Bay of Bengal, is the world’s largest mangrove forest and home to the elusive Bengal tiger.'
  },
  {
    title: 'Science: The Jaipur Foot',
    content: 'The Jaipur Foot, an affordable and flexible prosthetic limb developed in India, has restored mobility to millions of people around the world.'
  },
  {
    title: 'History: The Bengal Renaissance',
    content: 'The Bengal Renaissance (19th century) was a cultural and intellectual movement that led to the modernization of Bengal and influenced all of India.'
  },
  {
    title: 'Geography: Unique Double-Decker Bridges',
    content: 'In Meghalaya, living root bridges are grown from the roots of rubber trees, with some forming double-decker bridges that are hundreds of years old.'
  },
  {
    title: 'Science: India’s Hyperloop Dream',
    content: 'India is exploring the implementation of Hyperloop technology, which could revolutionize transportation by enabling travel at speeds over 1,000 km/h.'
  },
  {
    title: 'History: The Salt March',
    content: 'Mahatma Gandhi’s Salt March in 1930 was a key moment in India’s struggle for independence, symbolizing civil disobedience against British colonial rule.'
  },
  {
    title: 'Geography: The Khasi Tribe’s Matrilineal Society',
    content: 'In Meghalaya, the Khasi tribe follows a matrilineal system where lineage and inheritance are passed down through the female line.'
  },
  {
    title: 'Science: India’s Green Energy Mission',
    content: 'India is leading the way in renewable energy, with ambitious plans to achieve 175 GW of renewable energy capacity by 2022 and become a global leader in solar power.'
  },
  {
    title: 'History: The First Indian Woman to Fly an Aircraft',
    content: 'Sarla Thakral became the first Indian woman to fly an aircraft in 1936 at the age of 21, breaking gender barriers in the aviation industry.'
  },
  {
    title: 'Geography: The Western Ghats',
    content: 'The Western Ghats, a UNESCO World Heritage Site, is one of the eight hottest biodiversity hotspots in the world, hosting thousands of endemic species.'
  },
  {
    title: 'Science: ISRO’s Heaviest Satellite',
    content: 'In 2017, ISRO launched its heaviest satellite, the GSAT-19, aboard the GSLV Mk III, marking India’s entry into the heavy-lift space race.'
  },
  {
    title: 'History: The Indus Valley Plumbing System',
    content: 'The Indus Valley Civilization had one of the earliest known urban sanitation systems, with well-planned drainage and plumbing dating back to 2500 BCE.'
  },
  {
    title: 'Geography: The World’s Wettest Place',
    content: 'Mawsynram in Meghalaya holds the record for the highest average annual rainfall, making it the wettest place on Earth.'
  },
  {
    title: 'Science: The Aryabhata Satellite',
    content: 'India’s first satellite, Aryabhata, was launched in 1975. It marked the country’s entry into space exploration.'
  },
  {
    title: 'History: The First University in the World',
    content: 'The ancient Nalanda University in India, founded in the 5th century, is considered one of the first universities in the world.'
  },
  {
    title: 'Geography: India’s River Island',
    content: 'Majuli in Assam is the largest river island in the world and is known for its rich cultural heritage and traditional Assamese villages.'
  },
  {
    title: 'Science: World’s Largest Solar Park',
    content: 'India is home to the world’s largest solar park, Bhadla Solar Park in Rajasthan, which spans 14,000 acres and has a capacity of 2,245 MW.'
  },
  {
    title: 'History: Battle of Plassey and British Rule',
    content: 'The Battle of Plassey in 1757 marked the beginning of British colonial rule in India after the British East India Company defeated the Nawab of Bengal.'
  },
  {
    title: 'Geography: India’s Cold Desert',
    content: 'Ladakh is a cold desert in India, located in the northernmost region of the country, known for its stark landscapes and high-altitude lakes.'
  },
  {
    title: 'Science: India’s First Supercomputer',
    content: 'India’s first supercomputer, PARAM 8000, was developed in 1991, making India a self-reliant nation in high-performance computing.'
  },
  {
    title: 'History: The Non-Cooperation Movement',
    content: 'The Non-Cooperation Movement of 1920, led by Mahatma Gandhi, was a pivotal event in India’s fight for independence through non-violent resistance.'
  },
  {
    title: 'Geography: The Sundarbans Mangrove Forest',
    content: 'The Sundarbans is the largest mangrove forest in the world and is home to the Royal Bengal tiger and a diverse ecosystem.'
  },
  {
    title: 'Science: India’s Largest Telescope',
    content: 'The Giant Metrewave Radio Telescope (GMRT) in Pune is one of the world’s largest radio telescopes and is used to study celestial phenomena.'
  },
  {
    title: 'History: The Chola Empire’s Naval Power',
    content: 'The Chola Empire had one of the most powerful navies in the world during the 9th to 12th centuries, extending its influence across Southeast Asia.'
  },
  {
    title: 'Geography: India’s Living Root Bridges',
    content: 'In Meghalaya, the Khasi tribe grows “living root bridges” by training tree roots to form natural, strong bridges over rivers and streams.'
  },
  {
    title: 'Science: India’s Green Revolution',
    content: 'The Green Revolution in the 1960s transformed India from a food-deficient country to one of the world’s leading agricultural producers.'
  },
  {
    title: 'History: The Delhi Sultanate’s Architectural Legacy',
    content: 'The Delhi Sultanate left a rich architectural legacy in India, including iconic structures like the Qutub Minar and the Alai Darwaza.'
  },
  {
    title: 'Geography: The Great Indian Thar Desert',
    content: 'The Thar Desert, also known as the Great Indian Desert, spans over 200,000 square kilometers and is one of the world’s most densely populated deserts.'
  },
  {
    title: 'Science: India’s Atomic Energy Program',
    content: 'India is one of the few countries with an indigenous atomic energy program, with its first nuclear reactor, Apsara, commissioned in 1956.'
  },
  {
    title: 'History: The Jallianwala Bagh Massacre',
    content: 'The Jallianwala Bagh massacre in 1919, where British troops killed hundreds of unarmed Indians, was a turning point in India’s struggle for independence.'
  },
  {
    title: 'Geography: India’s Coral Reefs',
    content: 'India has several coral reefs, including those in the Lakshadweep Islands and the Andaman and Nicobar Islands, which are rich in marine biodiversity.'
  },
  {
    title: 'Science: India’s Role in Vaccine Production',
    content: 'India is the world’s largest producer of vaccines, including those for polio, measles, and COVID-19, making it a key player in global health.'
  },
  {
    title: 'History: The Vijayanagara Empire’s Golden Age',
    content: 'The Vijayanagara Empire (14th to 16th centuries) was known for its prosperity, extensive trade networks, and architectural marvels like Hampi.'
  },
  {
    title: 'Geography: India’s Sacred Rivers',
    content: 'India’s major rivers, such as the Ganges, Yamuna, and Brahmaputra, hold immense cultural and religious significance for millions of people.'
  },
  {
    title: 'Science: India’s Meteor Impact Crater',
    content: 'The Lonar Lake in Maharashtra is the world’s only hyper-velocity impact crater in basalt rock, formed over 52,000 years ago.'
  },
  {
    title: 'History: The First War of Indian Independence',
    content: 'The Indian Rebellion of 1857, also known as the First War of Indian Independence, marked a major uprising against British rule.'
  },
  {
    title: 'Geography: India’s Forest Cover',
    content: 'India’s forests cover nearly 24% of the country’s land area, with the Western Ghats and the Himalayas being biodiversity hotspots.'
  },
  {
    title: 'Science: India’s Chandrayaan-2 Mission',
    content: 'In 2019, ISRO launched Chandrayaan-2, India’s second lunar exploration mission, aiming to explore the moon’s south pole region.'
  },
  {
    title: 'History: The Mauryan Empire’s Influence',
    content: 'The Mauryan Empire, under Emperor Ashoka, was one of the largest and most powerful empires in ancient India, known for spreading Buddhism across Asia.'
  },
  {
    title: 'Geography: The Seven Sister States',
    content: 'Northeast India’s Seven Sister States are known for their diverse cultures, languages, and landscapes, from the Brahmaputra Valley to the Eastern Himalayas.'
  },
  {
    title: 'Science: The Clean India Mission',
    content: 'India’s Swachh Bharat Abhiyan, launched in 2014, is one of the world’s largest cleanliness drives, aimed at making India open defecation-free.'
  },
  {
    title: 'History: The Mughal Empire’s Golden Age',
    content: 'The Mughal Empire, particularly under Akbar, saw a golden age of art, architecture, and cultural integration, with masterpieces like the Taj Mahal.'
  },
  {
    title: 'Geography: India’s Eastern and Western Ghats',
    content: 'The Eastern and Western Ghats are two mountain ranges that run along India’s coastlines, forming rich biodiversity zones and rainforests.'
  },
  {
    title: 'Science: India’s Affordable Medicine',
    content: 'India is known as the "pharmacy of the world" for producing affordable generic medicines that are exported to over 200 countries.'
  },
  {
    title: 'History: The Battle of Panipat',
    content: 'The Third Battle of Panipat in 1761 was one of the largest and bloodiest fought in India, marking the decline of the Maratha Empire.'
  },
  {
    title: 'Geography: India’s Hill Stations',
    content: 'India is home to numerous hill stations like Shimla, Darjeeling, and Ooty, which were developed by the British as summer retreats.'
  },
  {
    title: 'Science: The Mars Orbiter Mission (Mangalyaan)',
    content: 'India became the first Asian nation to reach Mars orbit and the first nation globally to do so in its first attempt with the Mars Orbiter Mission in 2014.'
  },
  {
    title: 'History: The Partition of India',
    content: 'In 1947, the partition of India and Pakistan led to one of the largest mass migrations in history, with millions displaced and widespread violence.'
  },
  {
    title: 'Geography: India’s Coastline',
    content: 'India has a coastline that stretches over 7,500 kilometers, with major ports like Mumbai, Chennai, and Kochi facilitating global trade.'
  },
  {
    title: 'Science: India’s Role in Climate Change Mitigation',
    content: 'India is a key player in global climate change mitigation efforts, with a focus on renewable energy and the Paris Agreement commitments.'
  },
  {
    title: 'History: The Bengal Famine',
    content: 'The Bengal Famine of 1943, during British rule, led to the death of millions due to starvation and disease, highlighting the mismanagement of resources.'
  },
  {
    title: 'Geography: India’s Volcano',
    content: 'Barren Island in the Andaman Sea is home to India’s only active volcano, which has been erupting intermittently since 1787.'
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
