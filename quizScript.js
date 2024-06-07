const quizzes = {
    indianHistory: [
        { question: "Who was the founder of the Maurya Empire?", options: ["A) Ashoka", "B) Bindusara", "C) Chandragupta Maurya", "D) Chanakya"], answer: "C) Chandragupta Maurya" },
        { question: "The Battle of Plassey was fought in?", options: ["A) 1757", "B) 1764", "C) 1761", "D) 1775"], answer: "A) 1757" },
        { question: "Who was the first Indian to be elected to the British Parliament?", options: ["A) Dadabhai Naoroji", "B) Mahatma Gandhi", "C) Bal Gangadhar Tilak", "D) Gopal Krishna Gokhale"], answer: "A) Dadabhai Naoroji" },
        { question: "The Jallianwala Bagh massacre took place in which year?", options: ["A) 1919", "B) 1920", "C) 1921", "D) 1918"], answer: "A) 1919" },
        { question: "Who wrote the book 'Indica'?", options: ["A) Megasthenes", "B) Aryabhata", "C) Kautilya", "D) Kalidasa"], answer: "A) Megasthenes" },
        { question: "Which Mughal Emperor built the Taj Mahal?", options: ["A) Akbar", "B) Jahangir", "C) Shah Jahan", "D) Aurangzeb"], answer: "C) Shah Jahan" },
        { question: "The Quit India Movement was launched in which year?", options: ["A) 1940", "B) 1941", "C) 1942", "D) 1943"], answer: "C) 1942" },
        { question: "Who was the first Governor-General of independent India?", options: ["A) C. Rajagopalachari", "B) Lord Mountbatten", "C) Dr. Rajendra Prasad", "D) Sardar Patel"], answer: "B) Lord Mountbatten" },
        { question: "The famous book 'Anandmath' was authored by?", options: ["A) Rabindranath Tagore", "B) Bankim Chandra Chatterjee", "C) Sarojini Naidu", "D) Swami Vivekananda"], answer: "B) Bankim Chandra Chatterjee" },
        { question: "Who was the first President of the Indian National Congress?", options: ["A) W.C. Bonnerjee", "B) A.O. Hume", "C) Dadabhai Naoroji", "D) Gopal Krishna Gokhale"], answer: "A) W.C. Bonnerjee" },
        { question: "In which year did India get its independence?", options: ["A) 1945", "B) 1946", "C) 1947", "D) 1948"], answer: "C) 1947" },
        { question: "The capital of the Maurya Empire was?", options: ["A) Pataliputra", "B) Taxila", "C) Kalinga", "D) Ujjain"], answer: "A) Pataliputra" },
        { question: "Who was known as the 'Iron Man of India'?", options: ["A) Jawaharlal Nehru", "B) Mahatma Gandhi", "C) Sardar Vallabhbhai Patel", "D) Subhas Chandra Bose"], answer: "C) Sardar Vallabhbhai Patel" },
        { question: "Who among the following was a founder of the Hindustan Republican Association?", options: ["A) Bhagat Singh", "B) Chandra Shekhar Azad", "C) Ram Prasad Bismil", "D) Sukhdev"], answer: "C) Ram Prasad Bismil" },
        { question: "The capital of the Pallava kings was?", options: ["A) Kanchipuram", "B) Madurai", "C) Thanjavur", "D) Trichy"], answer: "A) Kanchipuram" },
        { question: "Who introduced the Permanent Settlement in Bengal?", options: ["A) Warren Hastings", "B) Lord Wellesley", "C) Lord Cornwallis", "D) John Shore"], answer: "C) Lord Cornwallis" },
        { question: "The First Battle of Panipat was fought between?", options: ["A) Babur and Lodi", "B) Akbar and Hemu", "C) Aurangzeb and Dara Shikoh", "D) Sher Shah and Humayun"], answer: "A) Babur and Lodi" },
        { question: "Who among the following was known as the 'Parrot of India'?", options: ["A) Amir Khusro", "B) Kalidasa", "C) Bhanubhakta", "D) Surdas"], answer: "A) Amir Khusro" },
        { question: "The Simon Commission was boycotted because?", options: ["A) It did not include any Indian members", "B) It was intended to suppress Indian movements", "C) It was introduced by the British government", "D) It did not support Indian independence"], answer: "A) It did not include any Indian members" },
        { question: "Who was the first Indian woman to become the President of the Indian National Congress?", options: ["A) Sarojini Naidu", "B) Vijaya Lakshmi Pandit", "C) Annie Besant", "D) Indira Gandhi"], answer: "A) Sarojini Naidu" }
    ],
    indianGeography: [
        { question: "The Tropic of Cancer passes through how many states in India?", options: ["A) 6", "B) 7", "C) 8", "D) 9"], answer: "C) 8" },
        { question: "Which is the longest river in India?", options: ["A) Ganga", "B) Yamuna", "C) Brahmaputra", "D) Godavari"], answer: "A) Ganga" },
        { question: "The highest peak in South India is?", options: ["A) Doddabetta", "B) Anamudi", "C) Meesapulimala", "D) Mullayanagiri"], answer: "B) Anamudi" },
        { question: "The eastern coastal plain of India is also known as?", options: ["A) Coromandel Coast", "B) Malabar Coast", "C) Konkan Coast", "D) Kannad Coast"], answer: "A) Coromandel Coast" },
        { question: "Which Indian state has the longest coastline?", options: ["A) Maharashtra", "B) Tamil Nadu", "C) Gujarat", "D) Andhra Pradesh"], answer: "C) Gujarat" },
        { question: "The highest waterfall in India is?", options: ["A) Jog Falls", "B) Kunchikal Falls", "C) Dudhsagar Falls", "D) Athirappilly Falls"], answer: "B) Kunchikal Falls" },
        { question: "The Siachen Glacier is located in which mountain range?", options: ["A) Karakoram", "B) Zanskar", "C) Ladakh", "D) Pir Panjal"], answer: "A) Karakoram" },
        { question: "The largest saltwater lake in India is?", options: ["A) Chilika Lake", "B) Sambhar Lake", "C) Pulicat Lake", "D) Vembanad Lake"], answer: "A) Chilika Lake" },
        { question: "The state known as the 'Sugar Bowl of India' is?", options: ["A) Uttar Pradesh", "B) Maharashtra", "C) Karnataka", "D) Tamil Nadu"], answer: "A) Uttar Pradesh" },
        { question: "Which river is known as the 'Sorrow of Bihar'?", options: ["A) Kosi", "B) Ganga", "C) Gandak", "D) Sone"], answer: "A) Kosi" },
        { question: "The Silent Valley is located in which state?", options: ["A) Karnataka", "B) Kerala", "C) Tamil Nadu", "D) Andhra Pradesh"], answer: "B) Kerala" },
        { question: "The state with the highest literacy rate in India is?", options: ["A) Kerala", "B) Tamil Nadu", "C) Himachal Pradesh", "D) Punjab"], answer: "A) Kerala" },
        { question: "The Western Ghats are also known as?", options: ["A) Sahyadri", "B) Aravalli", "C) Vindhya", "D) Satpura"], answer: "A) Sahyadri" },
        { question: "The largest delta in India is?", options: ["A) Krishna Delta", "B) Mahanadi Delta", "C) Ganges-Brahmaputra Delta", "D) Cauvery Delta"], answer: "C) Ganges-Brahmaputra Delta" },
        { question: "The city known as the 'Manchester of India' is?", options: ["A) Ahmedabad", "B) Mumbai", "C) Surat", "D) Coimbatore"], answer: "A) Ahmedabad" },
        { question: "The state with the largest forest cover in India is?", options: ["A) Madhya Pradesh", "B) Arunachal Pradesh", "C) Chhattisgarh", "D) Maharashtra"], answer: "A) Madhya Pradesh" },
        { question: "The Konkan Railway connects which two cities?", options: ["A) Mumbai and Mangalore", "B) Mumbai and Goa", "C) Mumbai and Kochi", "D) Mumbai and Chennai"], answer: "A) Mumbai and Mangalore" },
        { question: "The longest dam in India is?", options: ["A) Hirakud Dam", "B) Bhakra Nangal Dam", "C) Tehri Dam", "D) Nagarjuna Sagar Dam"], answer: "A) Hirakud Dam" },
        { question: "Which state is known as the 'Spice Garden of India'?", options: ["A) Kerala", "B) Karnataka", "C) Tamil Nadu", "D) Andhra Pradesh"], answer: "A) Kerala" },
        { question: "The Great Indian Desert is also known as?", options: ["A) Rann of Kutch", "B) Thar Desert", "C) Deccan Plateau", "D) Ladakh Desert"], answer: "B) Thar Desert" }
    ],
    indianGK: [
        { question: "Who is known as the 'Missile Man of India'?", options: ["A) Homi J. Bhabha", "B) Vikram Sarabhai", "C) A.P.J. Abdul Kalam", "D) Dr. K. Sivan"], answer: "C) A.P.J. Abdul Kalam" },
        { question: "The first Indian to win a Nobel Prize was?", options: ["A) C.V. Raman", "B) Rabindranath Tagore", "C) Amartya Sen", "D) Kailash Satyarthi"], answer: "B) Rabindranath Tagore" },
        { question: "The Indian currency is known as?", options: ["A) Dollar", "B) Euro", "C) Rupee", "D) Yen"], answer: "C) Rupee" },
        { question: "The national animal of India is?", options: ["A) Lion", "B) Tiger", "C) Elephant", "D) Peacock"], answer: "B) Tiger" },
        { question: "Who is the first Indian woman to win an Olympic medal?", options: ["A) Mary Kom", "B) P.T. Usha", "C) Karnam Malleswari", "D) Saina Nehwal"], answer: "C) Karnam Malleswari" },
        { question: "The Indian space agency ISRO stands for?", options: ["A) Indian Scientific Research Organization", "B) Indian Space Research Organization", "C) International Space Research Organization", "D) Indian Satellite Research Organization"], answer: "B) Indian Space Research Organization" },
        { question: "The longest river bridge in India is?", options: ["A) Howrah Bridge", "B) Mahatma Gandhi Setu", "C) Bogibeel Bridge", "D) Bandra-Worli Sea Link"], answer: "C) Bogibeel Bridge" },
        { question: "The first President of India was?", options: ["A) Dr. Rajendra Prasad", "B) Dr. S. Radhakrishnan", "C) Zakir Husain", "D) V.V. Giri"], answer: "A) Dr. Rajendra Prasad" },
        { question: "The Indian state with the highest population is?", options: ["A) Maharashtra", "B) Uttar Pradesh", "C) Bihar", "D) West Bengal"], answer: "B) Uttar Pradesh" },
        { question: "The Indian film industry is popularly known as?", options: ["A) Tollywood", "B) Kollywood", "C) Bollywood", "D) Mollywood"], answer: "C) Bollywood" },
        { question: "The famous dance form Kathakali originated in which state?", options: ["A) Tamil Nadu", "B) Karnataka", "C) Kerala", "D) Andhra Pradesh"], answer: "C) Kerala" },
        { question: "The author of the book 'India Wins Freedom' is?", options: ["A) Jawaharlal Nehru", "B) Mahatma Gandhi", "C) Maulana Abul Kalam Azad", "D) Sardar Patel"], answer: "C) Maulana Abul Kalam Azad" },
        { question: "The largest coffee-producing state in India is?", options: ["A) Tamil Nadu", "B) Kerala", "C) Karnataka", "D) Andhra Pradesh"], answer: "C) Karnataka" },
        { question: "The national flower of India is?", options: ["A) Rose", "B) Lotus", "C) Marigold", "D) Sunflower"], answer: "B) Lotus" },
        { question: "Which Indian state is famous for its Bandhani sarees?", options: ["A) Maharashtra", "B) Gujarat", "C) Rajasthan", "D) Punjab"], answer: "B) Gujarat" },
        { question: "The national tree of India is?", options: ["A) Neem", "B) Banyan", "C) Peepal", "D) Mango"], answer: "B) Banyan" },
        { question: "Which Indian city is known as the 'City of Joy'?", options: ["A) Mumbai", "B) Kolkata", "C) Chennai", "D) Delhi"], answer: "B) Kolkata" },
        { question: "The Indian state known as the 'Land of Five Rivers' is?", options: ["A) Haryana", "B) Punjab", "C) Rajasthan", "D) Gujarat"], answer: "B) Punjab" },
        { question: "The national sport of India is?", options: ["A) Cricket", "B) Hockey", "C) Football", "D) Badminton"], answer: "B) Hockey" },
        { question: "The Indian state that is the largest producer of tea is?", options: ["A) West Bengal", "B) Kerala", "C) Tamil Nadu", "D) Assam"], answer: "D) Assam" }
    ],
    indianCurrentAffairs: [
        { question: "Who is the current Prime Minister of India?", options: ["A) Narendra Modi", "B) Rahul Gandhi", "C) Arvind Kejriwal", "D) Amit Shah"], answer: "A) Narendra Modi" },
        { question: "The 2023 G20 Summit was hosted by which country?", options: ["A) USA", "B) India", "C) Japan", "D) Australia"], answer: "B) India" },
        { question: "Which Indian state launched the 'Mukhyamantri Digital Seva Yojana' in 2023?", options: ["A) Uttar Pradesh", "B) Madhya Pradesh", "C) Rajasthan", "D) Gujarat"], answer: "C) Rajasthan" },
        { question: "Who won the 2023 ICC Men's Cricket World Cup?", options: ["A) India", "B) Australia", "C) England", "D) New Zealand"], answer: "A) India" },
        { question: "The current Chief Justice of India (as of 2023) is?", options: ["A) N.V. Ramana", "B) Sharad Arvind Bobde", "C) Uday Umesh Lalit", "D) D.Y. Chandrachud"], answer: "D) D.Y. Chandrachud" },
        { question: "India's first 5G network was launched in which year?", options: ["A) 2020", "B) 2021", "C) 2022", "D) 2023"], answer: "D) 2023" },
        { question: "The first Indian state to implement the 'e-Vidhan' system in its legislative assembly is?", options: ["A) Himachal Pradesh", "B) Karnataka", "C) Punjab", "D) Kerala"], answer: "A) Himachal Pradesh" },
        { question: "Who is the current President of India (as of 2023)?", options: ["A) Ram Nath Kovind", "B) Pratibha Patil", "C) Draupadi Murmu", "D) Pranab Mukherjee"], answer: "C) Draupadi Murmu" },
        { question: "The theme of the 2023 Republic Day Parade was?", options: ["A) Atmanirbhar Bharat", "B) Digital India", "C) Unity in Diversity", "D) Nari Shakti"], answer: "D) Nari Shakti" },
        { question: "The current RBI Governor (as of 2023) is?", options: ["A) Urjit Patel", "B) Shaktikanta Das", "C) Raghuram Rajan", "D) D. Subbarao"], answer: "B) Shaktikanta Das" },
        { question: "The Bharat Biotech COVID-19 vaccine is named?", options: ["A) Covishield", "B) Covaxin", "C) Sputnik V", "D) Moderna"], answer: "B) Covaxin" },
        { question: "The current Speaker of the Lok Sabha (as of 2023) is?", options: ["A) Sumitra Mahajan", "B) Om Birla", "C) Meira Kumar", "D) Manohar Joshi"], answer: "B) Om Birla" },
        { question: "Who won the 2023 Indian Premier League (IPL)?", options: ["A) Chennai Super Kings", "B) Mumbai Indians", "C) Delhi Capitals", "D) Kolkata Knight Riders"], answer: "A) Chennai Super Kings" },
        { question: "The first state in India to launch a drone delivery network is?", options: ["A) Telangana", "B) Maharashtra", "C) Karnataka", "D) Andhra Pradesh"], answer: "A) Telangana" },
        { question: "The winner of the 2023 Padma Vibhushan in the field of Public Affairs is?", options: ["A) Manohar Parrikar", "B) George Fernandes", "C) Sharad Pawar", "D) Keshubhai Patel"], answer: "C) Sharad Pawar" },
        { question: "The Indian state with the highest GST collection in 2023 is?", options: ["A) Maharashtra", "B) Karnataka", "C) Tamil Nadu", "D) Gujarat"], answer: "A) Maharashtra" },
        { question: "The 'Digital India Act' was introduced in which year?", options: ["A) 2020", "B) 2021", "C) 2022", "D) 2023"], answer: "D) 2023" },
        { question: "The new Indian Chief of Defence Staff (CDS) appointed in 2023 is?", options: ["A) Bipin Rawat", "B) Anil Chauhan", "C) Karambir Singh", "D) Rakesh Kumar Singh Bhadauria"], answer: "B) Anil Chauhan" },
        { question: "The host city for the 2023 BRICS Summit was?", options: ["A) Beijing", "B) Moscow", "C) New Delhi", "D) Johannesburg"], answer: "D) Johannesburg" },
        { question: "India's first underwater metro will be in which city?", options: ["A) Mumbai", "B) Kolkata", "C) Chennai", "D) Hyderabad"], answer: "B) Kolkata" }
    ],
    maharashtraHistory: [
        { question: "Who was the founder of the Maratha Empire?", options: ["A) Shivaji Maharaj", "B) Sambhaji", "C) Balaji Vishwanath", "D) Baji Rao I"], answer: "A) Shivaji Maharaj" },
        { question: "The Treaty of Purandar was signed in which year?", options: ["A) 1655", "B) 1665", "C) 1675", "D) 1685"], answer: "B) 1665" },
        { question: "Who was the first Peshwa of the Maratha Empire?", options: ["A) Baji Rao I", "B) Madhavrao I", "C) Balaji Vishwanath", "D) Nana Saheb"], answer: "C) Balaji Vishwanath" },
        { question: "The Battle of Panipat (1761) was fought between?", options: ["A) Marathas and Mughals", "B) Marathas and British", "C) Marathas and Afghans", "D) Marathas and Nizams"], answer: "C) Marathas and Afghans" },
        { question: "Who was the successor of Shivaji Maharaj?", options: ["A) Sambhaji", "B) Shahu", "C) Rajaram", "D) Sahu"],
            answer: "A) Sambhaji" },
        { question: "The capital of the Maratha Empire during the rule of Shivaji was?",
            options: ["A) Pune", "B) Raigad", "C) Satara", "D) Kolhapur"],
            answer: "B) Raigad" },
        { question: "Who established the Prarthana Samaj?",
            options: ["A) Jyotirao Phule", "B) Atmaram Pandurang", "C) Bal Gangadhar Tilak", "D) Gopal Krishna Gokhale"],
            answer: "B) Atmaram Pandurang" },
        { question: "The famous social reformer Jyotirao Phule founded which movement?",
            options: ["A) Arya Samaj", "B) Satyashodhak Samaj", "C) Brahmo Samaj", "D) Ramakrishna Mission"],
            answer: "B) Satyashodhak Samaj" },
        { question: "The Third Anglo-Maratha War ended with the defeat of?",
            options: ["A) British", "B) Marathas", "C) Portuguese", "D) Mughals"],
            answer: "B) Marathas" },
        { question: "The Bhakti movement in Maharashtra was initiated by?",
            options: ["A) Tukaram", "B) Dnyaneshwar", "C) Namdev", "D) Eknath"],
            answer: "B) Dnyaneshwar" },
        { question: "The first Anglo-Maratha war resulted in which treaty?",
            options: ["A) Treaty of Salbai", "B) Treaty of Purandar", "C) Treaty of Surat", "D) Treaty of Bassein"],
            answer: "A) Treaty of Salbai" },
        { question: "Who was the commander-in-chief of the Maratha army during the Battle of Panipat?",
            options: ["A) Sadashivrao Bhau", "B) Baji Rao I", "C) Madhavrao I", "D) Balaji Vishwanath"],
            answer: "A) Sadashivrao Bhau" },
        { question: "The famous rock-cut caves of Ajanta and Ellora are located in which district of Maharashtra?",
            options: ["A) Aurangabad", "B) Pune", "C) Nashik", "D) Nagpur"],
            answer: "A) Aurangabad" },
        { question: "Who was the founder of the Bhonsle dynasty in Nagpur?",
            options: ["A) Raghoji I", "B) Shivaji Maharaj", "C) Sambhaji", "D) Shahu"],
            answer: "A) Raghoji I" },
        { question: "The Peshwa rule in Maharashtra ended with which treaty?",
            options: ["A) Treaty of Salbai", "B) Treaty of Purandar", "C) Treaty of Bassein", "D) Treaty of Surat"],
            answer: "C) Treaty of Bassein" },
        { question: "The reformist movement 'Prarthana Samaj' was established in which year?",
            options: ["A) 1867", "B) 1875", "C) 1882", "D) 1890"],
            answer: "A) 1867" },
        { question: "Who was the famous Marathi poet-saint of the Bhakti movement known for 'Abhanga'?",
            options: ["A) Tukaram", "B) Dnyaneshwar", "C) Namdev", "D) Eknath"],
            answer: "A) Tukaram" },
        { question: "The capital of the Satavahana dynasty was?",
            options: ["A) Paithan", "B) Pune", "C) Nashik", "D) Nagpur"],
            answer: "A) Paithan" },
        { question: "Who founded the city of Pune?",
            options: ["A) Balaji Vishwanath", "B) Shivaji Maharaj", "C) Balaji Baji Rao", "D) Dadoji Konddeo"],
            answer: "D) Dadoji Konddeo" },
        { question: "The Maratha navy was strengthened by which Maratha ruler?",
            options: ["A) Shivaji Maharaj", "B) Sambhaji", "C) Rajaram", "D) Shahu"],
            answer: "A) Shivaji Maharaj" }
    ],
    maharashtraGeography: [
        {
            question: "The largest city in Maharashtra by area is?",
            options: ["A) Mumbai", "B) Pune", "C) Nagpur", "D) Nashik"],
            answer: "A) Mumbai"
        },
        {
            question: "The state animal of Maharashtra is?",
            options: ["A) Indian GiantSquirrel", "B) Bengal Tiger", "C) Indian Bison", "D) Leopard"],
            answer: "A) Indian Giant Squirrel"
        },
        {
            question: "Which river flows through the city of Pune?",
            options: ["A) Godavari", "B) Krishna", "C) Mula-Mutha", "D) Tapti"],
            answer: "C) Mula-Mutha"
        },
        {
            question: "The famous hill station 'Mahabaleshwar' is located in which district?",
            options: ["A) Pune", "B) Satara", "C) Nashik", "D) Nagpur"],
            answer: "B) Satara"
        },
        {
            question: "The Lonar Lake in Maharashtra was created by?",
            options: ["A) Volcanic activity", "B) Meteor impact", "C) Earthquake", "D) Glacial activity"],
            answer: "B) Meteor impact"
        },
        {
            question: "Which mountain range runs parallel to the western coast of Maharashtra?",
            options: ["A) Western Ghats", "B) Eastern Ghats", "C) Aravalli Range", "D) Vindhya Range"],
            answer: "A) Western Ghats"
        },
        {
            question: "The second capital of Maharashtra is?",
            options: ["A) Mumbai", "B) Pune", "C) Nagpur", "D) Nashik"],
            answer: "C) Nagpur"
        },
        {
            question: "The state bird of Maharashtra is?",
            options: ["A) Peacock", "B) Green Imperial Pigeon", "C) Greater Flamingo", "D) Malabar Whistling Thrush"],
            answer: "B) Green Imperial Pigeon"
        },
        {
            question: "The coastal region of Maharashtra is known as?",
            options: ["A) Malabar Coast", "B) Konkan Coast", "C) Coromandel Coast", "D) Northern Circars"],
            answer: "B) Konkan Coast"
        },
        {
            question: "Which wildlife sanctuary in Maharashtra is famous for its population of tigers?",
            options: ["A) Tadoba Andhari Tiger Reserve", "B) Sanjay Gandhi National Park", "C) Navegaon National Park", "D) Bhimashankar Wildlife Sanctuary"],
            answer: "A) Tadoba Andhari Tiger Reserve"
        },
        {
            question: "The Koyna Dam is built on which river?",
            options: ["A) Krishna", "B) Godavari", "C) Koyna", "D) Tapti"],
            answer: "C) Koyna"
        },
        {
            question: "Which fort is known as the 'Gibraltar of the East'?",
            options: ["A) Raigad Fort", "B) Pratapgad Fort", "C) Sindhudurg Fort", "D) Sinhagad Fort"],
            answer: "C) Sindhudurg Fort"
        },
        {
            question: "The highest peak in Maharashtra is?",
            options: ["A) Kalsubai", "B) Harishchandragad", "C) Rajmachi", "D) Lohagad"],
            answer: "A) Kalsubai"
        },
        {
            question: "The major port in Maharashtra is?",
            options: ["A) JNPT (Nhava Sheva)", "B) Mumbai Port", "C) Marmagao Port", "D) Vishakhapatnam Port"],
            answer: "B) Mumbai Port"
        },
        {
            question: "The Tadoba Andhari Tiger Reserve is located in which district?",
            options: ["A) Nagpur", "B) Chandrapur", "C) Gadchiroli", "D) Amravati"],
            answer: "B) Chandrapur"
        },
        {
            question: "The famous Ajanta Caves are situated near which river?",
            options: ["A) Godavari", "B) Krishna", "C) Waghur", "D) Bhima"],
            answer: "C) Waghur"
        },
        {
            question: "The state tree of Maharashtra is?",
            options: ["A) Neem", "B) Banyan", "C) Mango", "D) Coconut"],
            answer: "C) Mango"
        },
        {
            question: "Which river is known as the 'Dakshin Ganga'?",
            options: ["A) Godavari", "B) Krishna", "C) Cauvery", "D) Mahanadi"],
            answer: "A) Godavari"
        },
        {
            question: "The largest district in Maharashtra by area is?",
            options: ["A) Pune", "B) Nagpur", "C) Ahmednagar", "D) Nashik"],
            answer: "C) Ahmednagar"
        },
        {
            question: "The famous hill station 'Lonavala' is located in which district?",
            options: ["A) Pune", "B) Satara", "C) Nashik", "D) Nagpur"],
            answer: "A) Pune"
        }
    ],
    science: [
        {
            question: "Which of the following is NOT a greenhouse gas?",
            options: ["Carbon dioxide", "Methane", "Nitrous oxide", "Oxygen"],
            answer: "Oxygen"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Cu", "Fe"],
            answer: "Au"
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Liver", "Skin", "Brain", "Heart"],
            answer: "Skin"
        },
        {
            question: "Which planet is known as the 'Red Planet'?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "What is the chemical formula for water?",
            options: ["H2O2", "H2O", "CO2", "CH4"],
            answer: "H2O"
        },
        {
            question: "What is the unit of electric current?",
            options: ["Watt", "Volt", "Ampere", "Ohm"],
            answer: "Ampere"
        },
        {
            question: "Which scientist is known for his theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
            answer: "Albert Einstein"
        },
        {
            question: "What is the process by which plants make their food?",
            options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
            answer: "Photosynthesis"
        },
        {
            question: "Which element is the main component of the Earth's atmosphere?",
            options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"],
            answer: "Nitrogen"
        },
        {
            question: "What is the chemical symbol for iron?",
            options: ["Ir", "Fe", "Au", "Ag"],
            answer: "Fe"
        },
        {
            question: "What is the SI unit of force?",
            options: ["Watt", "Newton", "Joule", "Volt"],
            answer: "Newton"
        },
        {
            question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
            options: ["Mercury", "Venus", "Mars", "Jupiter"],
            answer: "Venus"
        },
        {
            question: "What is the chemical formula for methane?",
            options: ["CH4", "CO2", "H2O", "NH3"],
            answer: "CH4"
        },
        {
            question: "What is the pH value of pure water?",
            options: ["7", "1", "14", "0"],
            answer: "7"
        },
        {
            question: "What is the hardest naturally occurring substance on Earth?",
            options: ["Iron", "Diamond", "Quartz", "Graphite"],
            answer: "Diamond"
        },
        {
            question: "Which type of energy is associated with motion?",
            options: ["Potential energy", "Kinetic energy", "Thermal energy", "Chemical energy"],
            answer: "Kinetic energy"
        },
        {
            question: "What is the unit of measurement for frequency?",
            options: ["Watt", "Hertz", "Pascal", "Ampere"],
            answer: "Hertz"
        },
        {
            question: "Which gas is responsible for the depletion of the ozone layer?",
            options: ["Carbon dioxide", "Methane", "Chlorofluorocarbons (CFCs)", "Nitrous oxide"],
            answer: "Chlorofluorocarbons (CFCs)"
        },
        {
            question: "What is the study of the Earth's atmosphere called?",
            options: ["Geology", "Meteorology", "Astronomy", "Oceanography"],
            answer: "Meteorology"
        },
        {
            question: "Which subatomic particle has a positive charge?",
            options: ["Proton", "Electron", "Neutron", "Photon"],
            answer: "Proton"
        }
    ],
    math: [
        {
            question: "What is the value of π (pi) rounded to two decimal places?",
            options: ["3.14", "3.15", "3.16", "3.13"],
            answer: "3.14"
        },
        {
            question: "What is the square root of 144?",
            options: ["12", "11", "10", "13"],
            answer: "12"
        },
        {
            question: "What is the value of 5 squared?",
            options: ["10", "25", "5", "50"],
            answer: "25"
        },
        {
            question: "What is the sum of the interior angles of a triangle?",
            options: ["180 degrees", "90 degrees", "270 degrees", "360 degrees"],
            answer: "180 degrees"
        },
        {
            question: "What is the value of 10 divided by 2?",
            options: ["5", "10", "2", "20"],
            answer: "5"
        },
        {
            question: "What is the area of a square with a side length of 6 units?",
            options: ["12 square units", "24 square units", "36 square units", "18 square units"],
            answer: "36 square units"
        },
        {
            question: "What is the next prime number after 7?",
            options: ["8", "9", "10", "11"],
            answer: "11"
        },
        {
            question: "What is the perimeter of a rectangle with length 8 units and width 5 units?",
            options: ["13 units", "26 units", "40 units", "18 units"],
            answer: "26 units"
        },
        {
            question: "What is the value of 3 factorial (3!)?",
            options: ["3", "6", "9", "12"],
            answer: "6"
        },
        {
            question: "What is the value of 2 to the power of 4 (2^4)?",
            options: ["6", "8", "12", "16"],
            answer: "8"
        },
        {
            question: "If x = 5 and y = 3, what is the value of x + y?",
            options: ["15", "8", "2", "18"],
            answer: "8"
        },
        {
            question: "What is the value of the square root of 25?",
            options: ["5", "10", "2", "625"],
            answer: "5"
        },
        {
            question: "What is the value of 3 multiplied by 4?",
            options: ["7", "12", "1", "34"],
            answer: "12"
        },
        {
            question: "What is the value of 10 minus 7?",
            options: ["17", "3", "107", "70"],
            answer: "3"
        },
        {
            question: "What is the value of 3 plus 6 times 2?",
            options: ["18", "15", "12", "9"],
            answer: "15"
        },
        {
            question: "If a = 2 and b = 3, what is the value of a squared plus b squared?",
            options: ["5", "6", "7", "13"],
            answer: "13"
        },
        {
            question: "What is the value of 20 divided by 4?",
            options: ["4", "5", "6", "8"],
            answer: "5"
        },
        {
            question: "What is the value of 9 multiplied by 7?",
            options: ["16", "63", "56", "72"],
            answer: "63"
        },
        {
            question: "If x = 8 and y = 2, what is the value of x divided by y?",
            options: ["4", "10", "6", "16"],
            answer: "4"
        },
        {
            question: "What is the value of 2 to the power of 3 (2^3)?",
            options: ["6", "8", "12", "16"],
            answer: "8"
        }
    ],
    physics: [
        {
            question: "What is the SI unit of energy?",
            options: ["Watt", "Joule", "Newton", "Ampere"],
            answer: "Joule"
        },
        {
            question: "What force keeps planets in orbit around the Sun?",
            options: ["Gravitational force", "Magnetic force", "Frictional force", "Tension force"],
            answer: "Gravitational force"
        },
        {
            question: "What is the SI unit of power?",
            options: ["Joule", "Watt", "Newton", "Volt"],
            answer: "Watt"
        },
        {
            question: "Which scientist is credited with the discovery of the law of universal gravitation?",
            options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
            answer: "Isaac Newton"
        },
        {
            question: "What is the acceleration due to gravity on Earth?",
            options: ["9.8 m/s^2", "6.67 × 10^-11 N m^2/kg^2", "3 × 10^8 m/s^2", "3.14 m/s^2"],
            answer: "9.8 m/s^2"
        },
        {
            question: "What is the SI unit of force?",
            options: ["Watt", "Newton", "Joule", "Volt"],
            answer: "Newton"
        },
        {
            question: "What is the SI unit of electric charge?",
            options: ["Coulomb", "Ampere", "Ohm", "Volt"],
            answer: "Coulomb"
        },
        {
            question: "What is the SI unit of frequency?",
            options: ["Hertz", "Watt", "Ohm", "Pascal"],
            answer: "Hertz"
        },
        {
            question: "What is the SI unit of electric current?",
            options: ["Ampere", "Coulomb", "Ohm", "Watt"],
            answer: "Ampere"
        },
        {
            question: "Which law states that every object will remain at rest or in uniform motion in a straight line unless compelled to change its state by the action of an external force?",
            options: ["Newton's First Law of Motion", "Newton's Second Law of Motion", "Newton's Third Law of Motion", "Law of Universal Gravitation"],
            answer: "Newton's First Law of Motion"
        },
        {
            question: "What is the SI unit of electric potential difference?",
            options: ["Volt", "Ampere", "Watt", "Ohm"],
            answer: "Volt"
        },
        {
            question: "What is the SI unit of electric resistance?",
            options: ["Ohm", "Volt", "Ampere", "Watt"],
            answer: "Ohm"
        },
        {
            question: "What is the phenomenon where light bends as it passes through different mediums?",
            options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
            answer: "Refraction"
        },
        {
            question: "What is the SI unit of magnetic flux?",
            options: ["Tesla", "Weber", "Henry", "Gauss"],
            answer: "Weber"
        },
        {
            question: "What is the law that states that for every action, there is an equal and opposite reaction?",
            options: ["Newton's First Law of Motion", "Newton's Second Law of Motion", "Newton's Third Law of Motion", "Law of Universal Gravitation"],
            answer: "Newton's Third Law of Motion"
        },
        {
            question: "What type of lens converges light rays to a single point?",
            options: ["Concave lens", "Convex lens", "Plano-concave lens", "Plano-convex lens"],
            answer: "Convex lens"
        },
        {
            question: "What is the SI unit of work and energy?",
            options: ["Joule", "Watt", "Newton", "Ampere"],
            answer: "Joule"
        },
        {
            question: "Which type of electromagnetic radiation has the shortest wavelength?",
            options: ["Radio waves", "Microwaves", "X-rays", "Gamma rays"],
            answer: "Gamma rays"
        },
        {
            question: "What is the process by which a substance changes directly from a solid to a gas without passing through the liquid state?",
            options: ["Sublimation", "Evaporation", "Condensation", "Melting"],
            answer: "Sublimation"
        }
    ],
    biology: [
        {
            question: "Which organelle is responsible for producing energy in a cell?",
            options: ["Nucleus", "Mitochondria", "Golgi apparatus", "Endoplasmic reticulum"],
            answer: "Mitochondria"
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Liver", "Skin", "Brain", "Heart"],
            answer: "Skin"
        },
        {
            question: "Which of the following is NOT a function of the human skeleton?",
            options: ["Protection of internal organs", "Production of red blood cells", "Support for the body", "Storage of minerals"],
            answer: "Production of red blood cells"
        },
        {
            question: "What is the main function of red blood cells?",
            options: ["Carrying oxygen", "Fighting infection", "Producing antibodies", "Clotting blood"],
            answer: "Carrying oxygen"
        },
        {
            question: "Which part of the plant is responsible for photosynthesis?",
            options: ["Roots", "Leaves", "Stem", "Flowers"],
            answer: "Leaves"
        },
        {
            question: "What is the process by which plants make their food?",
            options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
            answer: "Photosynthesis"
        },
        {
            question: "Which system of the human body is responsible for pumping blood?",
            options: ["Digestive system", "Respiratory system", "Circulatory system", "Nervous system"],
            answer: "Circulatory system"
        },
        {
            question: "What is the process by which plants lose water vapor through small pores in their leaves?",
            options: ["Transpiration", "Photosynthesis", "Respiration", "Evaporation"],
            answer: "Transpiration"
        },
        {
            question: "What is the main function of the respiratory system?",
            options: ["Transportation of nutrients", "Production of hormones", "Exchange of gases", "Protection against pathogens"],
            answer: "Exchange of gases"
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Golgi apparatus", "Endoplasmic reticulum"],
            answer: "Mitochondria"
        },
        {
            question: "What is the basic unit of heredity?",
            options: ["Chromosome", "Gene", "DNA", "Protein"],
            answer: "Gene"
        },
        {
            question: "Which of the following is NOT a function of the liver?",
            options: ["Detoxification", "Production of bile", "Regulation of blood sugar", "Production of insulin"],
            answer: "Production of insulin"
        },
        {
            question: "Which part of the human brain is responsible for coordination and balance?",
            options: ["Cerebrum", "Cerebellum", "Brainstem", "Thalamus"],
            answer: "Cerebellum"
        },
        {
            question: "What is the chemical substance found in chromosomes that carries genetic information?",
            options: ["RNA", "Protein", "DNA", "Enzyme"],
            answer: "DNA"
        },
        {
            question: "What is the process by which plants and some other organisms convert light energy into chemical energy?",
            options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
            answer: "Photosynthesis"
        },
        {
            question: "What is the name of the pigment responsible for the green color of plants?",
            options: ["Chlorophyll", "Melanin", "Hemoglobin", "Carotene"],
            answer: "Chlorophyll"
        },
        {
            question: "Which of the following is NOT a type of tissue in the human body?",
            options: ["Nervous tissue", "Epithelial tissue", "Bone tissue", "Metalloid tissue"],
            answer: "Metalloid tissue"
        },
        {
            question: "What is the smallest unit of life?",
            options: ["Cell", "Tissue", "Organ", "Organism"],
            answer: "Cell"
        },
        {
            question: "What is the name of the process by which plants absorb water from the soil?",
            options: ["Photosynthesis", "Transpiration", "Respiration", "Osmosis"],
            answer: "Osmosis"
        },
        {
            question: "Which of the following is NOT a function of the human nervous system?",
            options: ["Regulation of body temperature", "Transmission of nerve impulses", "Coordination of body movements", "Control of voluntary and involuntary actions"],
            answer: "Regulation of body temperature"
        }
    ],
    chemistry: [
        {
            question: "What is the chemical symbol for oxygen?",
            options: ["O", "H", "N", "C"],
            answer: "O"
        },
        {
            question: "What is the chemical formula for water?",
            options: ["HO", "CO2", "H2O", "O2"],
            answer: "H2O"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Cu", "Fe"],
            answer: "Au"
        },
        {
            question: "What is the chemical formula for table salt?",
            options: ["NaCl", "H2O", "CO2", "HCl"],
            answer: "NaCl"
        },
        {
            question: "Which of the following elements is a noble gas?",
            options: ["Oxygen", "Nitrogen", "Helium", "Carbon"],
            answer: "Helium"
        },
        {
            question: "What is the chemical formula for hydrogen peroxide?",
            options: ["H2O2", "H2O", "CO2", "NH3"],
            answer: "H2O2"
        },
        {
            question: "Which of the following is a halogen?",
            options: ["Sodium", "Chlorine", "Calcium", "Iron"],
            answer: "Chlorine"
        },
        {
            question: "What is the chemical symbol for silver?",
            options: ["Ag", "Au", "Al", "Fe"],
            answer: "Ag"
        },
        {
            question: "What is the chemical formula for methane?",
            options: ["CH4", "CO2", "H2O", "NH3"],
            answer: "CH4"
        },
        {
            question: "Which of the following is a noble gas?",
            options: ["Neon", "Oxygen", "Hydrogen", "Nitrogen"],
            answer: "Neon"
        },
        {
            question: "What is the chemical formula for carbon dioxide?",
            options: ["CO2", "CO", "H2O", "CH4"],
            answer: "CO2"
        },
        {
            question: "Which element is commonly used in batteries?",
            options: ["Lithium", "Sodium", "Potassium", "Calcium"],
            answer: "Lithium"
        },
        {
            question: "What is the chemical formula for ammonia?",
            options: ["NH3", "H2O", "CO2", "CH4"],
            answer: "NH3"
        },
        {
            question: "What is the chemical formula for sulfuric acid?",
            options: ["H2SO4", "HCl", "H2O", "NaOH"],
            answer: "H2SO4"
        },
        {
            question: "Which of the following elements is a metalloid?",
            options: ["Silicon", "Aluminum", "Iron", "Calcium"],
            answer: "Silicon"
        },
        {
            question: "What is the chemical formula for hydrochloric acid?",
            options: ["HCl", "H2SO4", "NaOH", "H2O"],
            answer: "HCl"
        },
        {
            question: "What is the chemical symbol for iron?",
            options: ["Fe", "Au", "Ag", "Pb"],
            answer: "Fe"
        },
        {
            question: "What is the chemical formula for sodium hydroxide?",
            options: ["NaOH", "H2SO4", "HCl", "NH3"],
            answer: "NaOH"
        },
        {
            question: "Which of the following elements is a metal?",
            options: ["Copper", "Oxygen", "Fluorine", "Neon"],
            answer: "Copper"
        },
        {
            question: "What is the chemical formula for nitric acid?",
            options: ["HNO3", "H2SO4", "HCl", "NaOH"],
            answer: "HNO3"
        }
    ]    
};


let currentTopic = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

function getRandomQuestions(topic, numQuestions) {
    const questions = quizzes[topic];
    if (!questions) {
        return [];
    }
    const shuffledQuestions = [...questions];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
    return shuffledQuestions.slice(0, numQuestions);
}

function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    const questionHTML = `
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Question ${currentQuestionIndex + 1}</h5>
                <p class="card-text">${question.question}</p>
                <form id="questionForm">
                    ${question.options.map((option, index) => `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="answer" id="option${index}" value="${option}">
                            <label class="form-check-label" for="option${index}">${option}</label>
                        </div>
                    `).join('')}
                    <button type="button" class="btn btn-primary mt-3" onclick="submitAnswer()">Submit</button>
                </form>
            </div>
        </div>
    `;
    quizContainer.innerHTML = questionHTML;
}

function submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert('Please select an answer.');
        return;
    }
    userAnswers.push(selectedAnswer.value);
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    let score = 0;
    for (let i = 0; i < currentQuestions.length; i++) {
        const question = currentQuestions[i];
        const userAnswer = userAnswers[i];
        const isCorrect = question.answer === userAnswer;
        if (isCorrect) {
            score++;
        }
        const resultHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">Question ${i + 1}</h5>
                    <p class="card-text">${question.question}</p>
                    <p class="card-text">Your Answer: ${userAnswer}</p>
                    <p class="card-text">Correct Answer: ${question.answer}</p>
                    <p class="card-text">${isCorrect ? 'Correct' : 'Incorrect'}</p>
                </div>
            </div>
        `;
        quizContainer.innerHTML += resultHTML;
    }
    const scoreHTML = `
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Here's your Score!!</h5>
                <p class="card-text">You scored ${score} out of ${currentQuestions.length}</p>
                <h6> Thanks for Visiting. &#128519 &#128519 </h6>
                <h6> Regards, Shivam Yadav </h6>
            </div>
        </div>
    `;
    quizContainer.innerHTML += scoreHTML;

    const buttonsHTML = `
        <div class="mt-3">
            <button class="btn btn-primary" onclick="retest()">Retest</button>
            <button class="btn btn-secondary ms-2" onclick="changeTopic()">Change Topic</button>
        </div>
    `;
    quizContainer.innerHTML += buttonsHTML;
}

function retest() {
    currentQuestions = getRandomQuestions(currentTopic, 5);
    currentQuestionIndex = 0;
    userAnswers = [];
    displayQuestion();
}

function changeTopic() {
    currentQuestionIndex = 0;
    userAnswers = [];
    document.getElementById('quiz').innerHTML = '';
    document.getElementById('quiz-topic').value = '';
}
function loadQuiz() {
    currentTopic = document.getElementById('quiz-topic').value;
    if (currentTopic !== '') {
        currentQuestions = getRandomQuestions(currentTopic, 5);
        currentQuestionIndex = 0;
        userAnswers = [];
        displayQuestion();
    }
}
