export type MemoryTable = { title: string; rows: string[][] };
export type MicroQuestion = { question: string; options: Record<'A'|'B'|'C'|'D', string>; answer: 'A'|'B'|'C'|'D'; explanation: string };
export type Paper1Unit = {
  day: number;
  slug: string;
  title: string;
  section: string;
  priority: 'Very High' | 'High' | 'Medium';
  examFocus: string;
  sourceBasis: string;
  concepts: string[];
  notes: string[];
  memoryTables: MemoryTable[];
  pyqPatterns: string[];
  traps: string[];
  microQuiz: MicroQuestion[];
  keywords: string[];
};

const q = (question: string, A: string, B: string, C: string, D: string, answer: 'A'|'B'|'C'|'D', explanation: string): MicroQuestion => ({ question, options: { A, B, C, D }, answer, explanation });

export const paper1Units: Paper1Unit[] = [
  {
    day: 1,
    slug: 'art-culture-folk-performance',
    title: 'Art & Culture: folk performance',
    section: 'Rajasthan Art & Culture',
    priority: 'Very High',
    examFocus: 'Dance, music, instruments, folk drama, community links and cultural institutions. Real papers ask direct pair-matching and incorrect-pair questions here.',
    sourceBasis: 'Official Paper 1 Art & Culture bucket + 2022 118A culture questions on ornaments, handicraft, Lok Kala Mandal and folk music.',
    concepts: ['Ghoomar, Kalbeliya, Bhavai, Gair, Chari, Terah Taali, Kachhi Ghodi, Gavri', 'Maand, Panihari, Langa, Manganiyar, Bhopa-Bhopi', 'Ravanhatta, Algoza, Morchang, Khartal, Nagara', 'Khayal, Tamasha, Nautanki, Gavri, Kathputli', 'Bharatiya Lok Kala Mandal, Jawahar Kala Kendra, Rajasthan Sangeet Natak Akademi'],
    notes: [
      'Treat every folk form as a four-column fact: form, community, region and instrument. If you know only the name, you will miss match-the-following questions.',
      'Kalbeliya is tied to the Kalbeliya community and is usually tested as dance/community or UNESCO intangible heritage awareness.',
      'Terah Taali is linked with Kamadia performers and devotional practice. The trap is to confuse it with Gair or Bhavai.',
      'Bhavai is remembered for balancing pots and skilled performance, while Chari involves fire-pot style presentation.',
      'Bharatiya Lok Kala Mandal is at Udaipur and is repeatedly useful for folk art and museum/institution questions.',
      'Jawahar Kala Kendra is at Jaipur and is a modern cultural centre; do not confuse it with Lok Kala Mandal.'
    ],
    memoryTables: [
      { title: 'Dance / community / memory clue', rows: [['Ghoomar', 'Women of Rajasthan', 'circular graceful dance'], ['Kalbeliya', 'Kalbeliya community', 'snake-like movements'], ['Terah Taali', 'Kamadia', 'manjeera tied to body'], ['Kachhi Ghodi', 'Shekhawati belt', 'dummy horse dance'], ['Gavri', 'Bhil/Mewar', 'ritual folk theatre']] },
      { title: 'Institution / location / exam use', rows: [['Bharatiya Lok Kala Mandal', 'Udaipur', 'folk art, puppets, museum'], ['Jawahar Kala Kendra', 'Jaipur', 'art/culture centre'], ['Rajasthan Sangeet Natak Akademi', 'Jodhpur', 'performing arts'], ['Rajasthan Sahitya Akademi', 'Udaipur', 'literature'], ['Rajasthan Hindi Granth Akademi', 'Jaipur', 'Hindi publications']] }
    ],
    pyqPatterns: ['Which ornament is worn on which body part?', 'Late Hisamuddin was related to which handicraft?', 'Where is Lok Kala Mandal located?', 'Which singing tradition is Batool Begum related to?'],
    traps: ['Lok Kala Mandal = Udaipur, not Jaipur.', 'Terah Taali = Kamadia, not Kalbeliya.', 'Ravanhatta = Bhopa-Bhopi tradition, not classical sitar.', 'Kachhi Ghodi is dance, not a horse breed.'],
    microQuiz: [q('Bharatiya Lok Kala Mandal is located at:', 'Udaipur', 'Jaipur', 'Bikaner', 'Jodhpur', 'A', 'It is the Udaipur-based folk art institution.'), q('Terah Taali is mainly associated with:', 'Kamadia', 'Meena', 'Garasia', 'Jat', 'A', 'Kamadia community is the standard exam pairing.'), q('Ravanhatta is most strongly linked with:', 'Bhopa-Bhopi narration', 'Kathak gharana', 'Dhrupad only', 'Qawwali only', 'A', 'Bhopas use Ravanhatta in folk-deity narration.')],
    keywords: ['dance', 'music', 'instrument', 'lok kala', 'gair', 'kalbeliya', 'terah taali']
  },
  {
    day: 2,
    slug: 'art-culture-painting-craft-fairs',
    title: 'Art & Culture: paintings, crafts, fairs',
    section: 'Rajasthan Art & Culture',
    priority: 'Very High',
    examFocus: 'Painting schools, crafts, fairs, festivals, deities, temples and cultural places. This is the most table-driven Rajasthan GK section.',
    sourceBasis: 'Official art/culture checklist + 2022 pattern questions on Bewan, Rajput painting book, book-author and fair/institution pairs.',
    concepts: ['Phad, Pichwai, Mandana, Sanjhi, Bewan', 'Mewar, Marwar, Bundi, Kota, Kishangarh, Bikaner, Jaipur, Alwar painting schools', 'Thewa, Usta, Meenakari, Blue Pottery, Kota Doria, Bandhej, Leheriya', 'Pushkar, Beneshwar, Ramdevra, Gogamedi, Kaila Devi, Karni Mata, Sheetla Mata', 'Pabuji, Tejaji, Gogaji, Ramdevji, Devnarayanji, Mallinathji'],
    notes: [
      'Phad is cloth-scroll storytelling of folk deities like Pabuji and Devnarayanji. It is not a palace-wall miniature style.',
      'Pichwai is linked with Shrinathji/Nathdwara. Pair it with devotional painting and temple backdrop.',
      'Thewa = Pratapgarh; Usta = Bikaner; Blue Pottery = Jaipur; Kota Doria = Kota-Bundi. These pairs must be automatic.',
      'Kishangarh painting is famous for Bani Thani. Kota and Bundi schools often show hunting, nature and court scenes.',
      'Beneshwar fair is linked with the Mahi-Som-Jakham confluence and tribal faith; Pushkar is tied to Brahma temple and camel fair.',
      'Folk deities are tested by symbol/place/community: Tejaji snake protection, Gogaji snake deity, Ramdevji Ramdevra, Pabuji camel protector memory.'
    ],
    memoryTables: [
      { title: 'Craft / place / material', rows: [['Thewa', 'Pratapgarh', 'gold work on glass'], ['Usta', 'Bikaner', 'gold ornamental work'], ['Blue Pottery', 'Jaipur', 'glazed pottery'], ['Kota Doria', 'Kota-Bundi', 'fine woven textile'], ['Meenakari', 'Jaipur', 'enamel work']] },
      { title: 'Painting / link', rows: [['Phad', 'Pabuji/Devnarayanji scroll'], ['Pichwai', 'Shrinathji, Nathdwara'], ['Bani Thani', 'Kishangarh school'], ['Mandana', 'wall/floor folk art'], ['Bewan', 'wooden temple-like object with doors']] }
    ],
    pyqPatterns: ['Which famous folk art is life of a folk deity through paintings on a khadi cloth?', 'Which scholar made scientific division of Rajasthan painting?', 'Which pair book-author is not correct?', 'Which fair/place/deity pair is correct?'],
    traps: ['Thewa is not Bikaner; it is Pratapgarh.', 'Pichwai is not Ajmer; it is Nathdwara/Shrinathji.', 'Kishangarh = Bani Thani.', 'Beneshwar is confluence-based, not only a city fair.'],
    microQuiz: [q('Thewa craft is associated with:', 'Pratapgarh', 'Bikaner', 'Kota', 'Barmer', 'A', 'Thewa is the famous gold-on-glass craft of Pratapgarh.'), q('Pichwai painting is related to:', 'Shrinathji', 'Gogaji', 'Tejaji', 'Brahma temple', 'A', 'Pichwai is associated with Nathdwara and Shrinathji.'), q('Bani Thani belongs to which painting school?', 'Kishangarh', 'Bikaner', 'Kota', 'Alwar', 'A', 'Bani Thani is the icon of Kishangarh painting.')],
    keywords: ['phad', 'pichwai', 'craft', 'fair', 'folk deity', 'painting']
  },
  {
    day: 3,
    slug: 'history-archaeology',
    title: 'History: archaeology and ancient sites',
    section: 'Rajasthan History',
    priority: 'Very High',
    examFocus: 'Ancient sites, districts, cultures and special findings. Usually direct not-correct-pair and site-district matching.',
    sourceBasis: 'Official history bucket + 2022 questions on Sunari, Gilund, Ojiyana and Jodhpura site-district pairs.',
    concepts: ['Kalibanga, Ahar, Ganeshwar, Bairath/Viratnagar', 'Gilund, Balathal, Bagor, Tilwara, Nagari', 'Sunari, Jodhpura, Ojhiyana', 'Harappan, Chalcolithic and copper culture links', 'site-district-special finding method'],
    notes: [
      'Kalibanga is the safest Harappan-site question in Rajasthan. Remember Hanumangarh/Ghaggar belt and fire-altars/ploughed field association.',
      'Ahar is linked with Udaipur region and chalcolithic culture. Ahar-Banas is the broader memory tag.',
      'Ganeshwar is important for copper culture; connect it with Sikar/Neem ka Thana region in standard GK notes.',
      'Bairath/Viratnagar is linked with ancient Matsya region and Ashokan Buddhist remains.',
      'Bagor is important for Mesolithic evidence and early animal domestication memory.',
      'The exam often asks not-correct site-district pairs; revise a table rather than paragraphs.'
    ],
    memoryTables: [{ title: 'Site / district-region / key tag', rows: [['Kalibanga', 'Hanumangarh', 'Harappan, ploughed field'], ['Ahar', 'Udaipur', 'Ahar-Banas culture'], ['Ganeshwar', 'Sikar/Neem ka Thana belt', 'copper culture'], ['Bairath', 'Jaipur', 'Matsya, Ashokan-Buddhist remains'], ['Bagor', 'Bhilwara', 'Mesolithic']] }],
    pyqPatterns: ['Which archaeological site-related district pair is not correctly matched?', 'Which ancient place was known by a modern name?', 'Match site with finding/culture.'],
    traps: ['Gilund and Ahar are not Harappan city names like Kalibanga.', 'Ganeshwar = copper culture, not marble.', 'Bairath is also called Viratnagar.', 'Do not mix Jodhpura with Jodhpur city blindly.'],
    microQuiz: [q('Kalibanga is mainly related to:', 'Indus Valley Civilization', 'Gupta Empire', 'Delhi Sultanate', 'Maratha period', 'A', 'Kalibanga is an important Harappan site.'), q('Ahar civilisation is mainly associated with:', 'Udaipur region', 'Jaisalmer region', 'Bikaner region', 'Bharatpur region', 'A', 'Ahar is linked with the Udaipur/Ahar-Banas region.'), q('Ganeshwar is especially important for:', 'Copper culture', 'Blue pottery', 'Mughal coins', 'British railways', 'A', 'Ganeshwar is a copper-culture site.')],
    keywords: ['kalibanga', 'ahar', 'ganeshwar', 'bairath', 'archaeology']
  },
  {
    day: 4,
    slug: 'history-rulers-dynasties',
    title: 'History: dynasties, rulers and capitals',
    section: 'Rajasthan History',
    priority: 'Very High',
    examFocus: 'Ruler-dynasty-capital-work matching, titles, court achievements and city foundation facts.',
    sourceBasis: 'Official Rajasthan History checklist + 2022 questions on rulers, Jaipur/Sawai Jai Singh, and Rajput chronology style.',
    concepts: ['Guhil/Sisodia, Rathore, Chauhan, Kachwaha, Bhati, Hada', 'Bappa Rawal, Hammir, Rana Kumbha, Rana Sanga, Maharana Pratap', 'Rao Jodha, Rao Maldev, Rao Chandrasen, Durgadas Rathore', 'Man Singh, Mirza Raja Jai Singh, Sawai Jai Singh', 'forts, capitals, construction and astronomy links'],
    notes: ['Mewar questions revolve around Rana Kumbha, Rana Sanga and Maharana Pratap. Learn battle, capital and work together.', 'Rana Kumbha = Kumbhalgarh and Vijay Stambh memory. Do not confuse him with Maharana Pratap.', 'Marwar focus is Rao Jodha, Rao Maldev, Rao Chandrasen and Durgadas Rathore. Chandrasen is known for resistance to Akbar.', 'Sawai Jai Singh is linked with Jaipur city planning and Jantar Mantar astronomy.', 'Bhati = Jaisalmer memory; Hada = Bundi/Kota; Kachwaha = Amber/Jaipur.', 'Real questions often use title tags like Forgotten Hero of Marwar or ask chronological order.'],
    memoryTables: [{ title: 'Ruler / state / memory', rows: [['Rana Kumbha', 'Mewar', 'Kumbhalgarh, Vijay Stambh'], ['Maharana Pratap', 'Mewar', 'Haldighati, Chavand'], ['Rao Jodha', 'Marwar', 'Jodhpur foundation'], ['Rao Chandrasen', 'Marwar', 'resistance to Akbar'], ['Sawai Jai Singh', 'Jaipur', 'Jantar Mantar, city planning']] }],
    pyqPatterns: ['Who is the forgotten hero of Marwar?', 'Which ruler established new capital at Chavand?', 'Which fort/palace is situated in which fort?', 'Arrange Chauhan rulers chronologically.'],
    traps: ['Chavand is tied to Maharana Pratap’s later period.', 'Rao Chandrasen, not Durgadas, is usually called Forgotten Hero of Marwar.', 'Sawai Jai Singh is astronomy/Jaipur, not Mewar.', 'Kumbhalgarh = Rana Kumbha.'],
    microQuiz: [q('Kumbhalgarh Fort was built by:', 'Maharana Kumbha', 'Maharana Pratap', 'Rana Sanga', 'Rao Jodha', 'A', 'Kumbhalgarh is associated with Maharana Kumbha.'), q('Who is called Forgotten Hero of Marwar?', 'Rao Chandrasen', 'Rao Jodha', 'Rana Sanga', 'Bappa Rawal', 'A', 'Rao Chandrasen resisted Mughal power.'), q('Sawai Jai Singh is linked with:', 'Jantar Mantar', 'Haldighati', 'Kumbhalgarh', 'Kalibanga', 'A', 'Sawai Jai Singh built observatories and planned Jaipur.')],
    keywords: ['ruler', 'dynasty', 'capital', 'mewar', 'marwar', 'jaipur']
  },
  {
    day: 5,
    slug: 'history-battles-movements-integration',
    title: 'History: battles, movements and integration',
    section: 'Rajasthan History',
    priority: 'Very High',
    examFocus: 'Battle chronology, peasant movements, Praja Mandal, organisations and Rajasthan integration stages.',
    sourceBasis: 'Official history checklist + 2022 style chronology questions such as Haldighati, Khanwa and Tarain order.',
    concepts: ['Tarain, Khanwa, Haldighati, Dewair, Giri Sumel/Sammel', 'Bijolia, Begun, Shekhawati, Bhil/tribal movements', 'Rajasthan Seva Sangh, Desh Hitaishini Sabha, Veer Bharat Sabha, Sarv Hitaishini Sabha', 'Matsya Union, Greater Rajasthan, United Rajasthan, final formation', 'leaders, issues, district and date links'],
    notes: ['Chronology is a favourite because it tests concepts without lengthy facts: Tarain II 1192, Khanwa 1527, Haldighati 1576.', 'Haldighati = Maharana Pratap vs Mughal force led by Man Singh. Dewair is linked with Pratap’s comeback phase.', 'Giri Sumel/Sammel is linked with Rao Maldev and Sher Shah Suri period.', 'Bijolia was a peasant movement against feudal dues; Vijay Singh Pathik is a key name.', 'Rajasthan integration must be memorised as stages, not as one event. Learn Matsya Union and Greater Rajasthan tags.', 'Political organisations are founder-purpose match-the-following material.'],
    memoryTables: [{ title: 'Battle / year / parties', rows: [['Tarain II', '1192', 'Prithviraj Chauhan vs Muhammad Ghori'], ['Khanwa', '1527', 'Rana Sanga vs Babur'], ['Haldighati', '1576', 'Maharana Pratap vs Man Singh-led Mughal army'], ['Dewair', '1582', 'Maharana Pratap recovery phase'], ['Giri Sumel', '1544', 'Rao Maldev vs Sher Shah Suri']] }, { title: 'Movement / leader / issue', rows: [['Bijolia', 'Vijay Singh Pathik', 'peasant dues'], ['Begun', 'Ram Narayan Chaudhary link', 'peasant grievances'], ['Praja Mandal', 'various state leaders', 'responsible government'], ['Bhil movement', 'tribal leaders', 'tribal rights']] }],
    pyqPatterns: ['Identify chronology of battles.', 'Match organisation with founder.', 'Which movement was peasant/tribal?', 'Which integration stage is correctly matched?'],
    traps: ['Khanwa is before Haldighati.', 'Bijolia is peasant, not language movement.', 'Haldighati was in 1576.', 'Man Singh led the Mughal side at Haldighati.'],
    microQuiz: [q('Battle of Haldighati was fought in:', '1576', '1527', '1192', '1544', 'A', 'Haldighati was fought in 1576.'), q('Bijolia movement was mainly a:', 'Peasant movement', 'Language movement', 'Naval revolt', 'Temple movement', 'A', 'Bijolia was a peasant movement.'), q('Correct chronological order is:', 'Tarain, Khanwa, Haldighati', 'Haldighati, Tarain, Khanwa', 'Khanwa, Haldighati, Tarain', 'Dewair, Khanwa, Tarain', 'A', '1192, 1527, 1576.')],
    keywords: ['battle', 'movement', 'integration', 'bijolia', 'praja mandal']
  },
  {
    day: 6,
    slug: 'history-saints-literature-coins-institutions',
    title: 'Saints, sects, literature, coins and institutions',
    section: 'Rajasthan History',
    priority: 'High',
    examFocus: 'Founder, branch, centre, book-author, currency-state, institution-founder and academy-location matching.',
    sourceBasis: 'Official literature/saints checklist + 2022 questions on Ram Snehi branch, book-author, currency-state and institutions.',
    concepts: ['Bishnoi, Dadu Panth, Ram Snehi, Jasnathi, Nath', 'Dingal, Pingal, Rajasthani literature', 'book-author pairs', 'Akhaishahi, Jhadshahi, Vijaishahi, Gajshahi currencies', 'Rajasthan Seva Sangh, Desh Hitaishini Sabha, language and cultural academies'],
    notes: ['Bishnoi sect = Guru Jambhoji. Questions ask founder or environmental ethos.', 'Dadu Panth = Dadu Dayal. Ram Snehi has branches; Ren branch is associated with Dariyavji in common notes.', 'Dingal is heroic/martial literary style; Pingal is also used in Rajasthani literary classification.', 'Book-author questions are usually not deep reading; they are pair-recognition questions.', 'Currency-state pairs from princely states are a classic not-correct pair topic.', 'Institutions matter: Sahitya Akademi at Udaipur, Sangeet Natak Akademi at Jodhpur, JKK at Jaipur, Lok Kala Mandal at Udaipur.'],
    memoryTables: [{ title: 'Sect / founder / centre clue', rows: [['Bishnoi', 'Guru Jambhoji', '29 principles, environment'], ['Dadu Panth', 'Dadu Dayal', 'devotional sect'], ['Ram Snehi Ren branch', 'Dariyavji', 'Ren memory'], ['Jasnathi', 'Jasnathji', 'Bikaner-Nagaur belt'], ['Nath tradition', 'Gorakhnath link', 'yogi tradition']] }, { title: 'Academy / location', rows: [['Rajasthan Sahitya Akademi', 'Udaipur'], ['Rajasthan Sangeet Natak Akademi', 'Jodhpur'], ['Rajasthan Lalit Kala Akademi', 'Jaipur'], ['Jawahar Kala Kendra', 'Jaipur'], ['Bharatiya Lok Kala Mandal', 'Udaipur']] }],
    pyqPatterns: ['Founder of Ren branch of Ram Snehi sect.', 'Which book-author pair is not correctly matched?', 'Which currency-state pair is not correct?', 'Match institution with founder/location.'],
    traps: ['Bishnoi founder is not Dadu Dayal.', 'Lok Kala Mandal = Udaipur.', 'Sangeet Natak Akademi = Jodhpur.', 'Do not confuse literary academies with cultural centres.'],
    microQuiz: [q('The founder of Bishnoi sect was:', 'Guru Jambhoji', 'Dadu Dayal', 'Dariyavji', 'Meera Bai', 'A', 'Bishnoi sect was founded by Guru Jambhoji.'), q('Dadu Panth was founded by:', 'Dadu Dayal', 'Jambhoji', 'Tejaji', 'Pabuji', 'A', 'Dadu Dayal founded Dadu Panth.'), q('Rajasthan Sahitya Akademi is located at:', 'Udaipur', 'Jodhpur', 'Bikaner', 'Kota', 'A', 'The state Sahitya Akademi is at Udaipur.')],
    keywords: ['saints', 'sects', 'literature', 'coins', 'institution']
  },
  {
    day: 7,
    slug: 'geography-location-physical-soil-climate',
    title: 'Geography: location, physical divisions, climate and soil',
    section: 'Rajasthan Geography',
    priority: 'Very High',
    examFocus: 'Location, extent, boundaries, Aravalli, physical regions, climate zones and soils.',
    sourceBasis: 'Official geography checklist + 2022 questions on latitude-longitude, soil-district and climatic region matching.',
    concepts: ['latitude-longitude and extreme points', 'western desert, Aravalli, eastern plains, south-eastern plateau', 'Guru Shikhar, passes and Aravalli role', 'DBw, DAw, CAw climate-region logic', 'desert, red-yellow, black, alluvial and laterite soils'],
    notes: ['Rajasthan geography is table-heavy. Learn region-district-soil-crop in one table.', 'Aravalli divides drainage, climate and settlement patterns. Guru Shikhar is the highest peak.', 'Red-yellow soils are mainly in southern/south-eastern belt; black soil is Hadoti/Malwa influence.', 'Desert soil dominates western Rajasthan; saline/alkaline problems are common in arid zones.', 'Climate-region questions ask not-correct matching, so learn western/eastern/southern broad mapping.', 'Boundaries and extreme points are direct questions but must be revised shortly before exam.'],
    memoryTables: [{ title: 'Region / feature / exam clue', rows: [['Western desert', 'arid, dunes', 'Jaisalmer-Barmer-Bikaner belt'], ['Aravalli', 'old fold mountain', 'Guru Shikhar'], ['Eastern plains', 'Banas/Chambal influence', 'agriculture belt'], ['South-eastern plateau', 'Hadoti', 'black soil/Chambal']] }, { title: 'Soil / region / crop clue', rows: [['Desert soil', 'western Rajasthan', 'bajra, pulses'], ['Red-yellow soil', 'southern/south-eastern', 'maize, pulses'], ['Black soil', 'Hadoti', 'cotton/soybean'], ['Alluvial soil', 'eastern plains', 'wheat/mustard']] }],
    pyqPatterns: ['Match district with latitude/longitude.', 'Which soil is found in which district group?', 'Which climate region is not correctly matched?', 'Highest peak or Aravalli fact.'],
    traps: ['Guru Shikhar, not Ser/Raghunathgarh, is highest peak.', 'Red-yellow soil is not only desert.', 'CAw/DBw/DAw climate labels are match-pair traps.', 'Do not mix Hadoti plateau with western desert.'],
    microQuiz: [q('Highest peak of Aravalli is:', 'Guru Shikhar', 'Raghunathgarh', 'Ser', 'Achalgarh', 'A', 'Guru Shikhar is the highest peak of Aravalli.'), q('Red-yellow soil is mainly found in:', 'Southern/south-eastern Rajasthan', 'Only Thar dunes', 'Only Bharatpur', 'Only Ganganagar', 'A', 'Red-yellow soils are common in southern/south-eastern areas.'), q('Western Rajasthan is best known for:', 'Arid desert climate', 'Heavy evergreen forest', 'Marine climate', 'Snowfall', 'A', 'Western Rajasthan has arid/semi-arid climate.')],
    keywords: ['location', 'aravalli', 'soil', 'climate', 'physical']
  },
  {
    day: 8,
    slug: 'geography-rivers-lakes-irrigation',
    title: 'Geography: rivers, lakes and irrigation',
    section: 'Rajasthan Geography',
    priority: 'Very High',
    examFocus: 'River origin, drainage, tributaries, lakes, dams and canal projects.',
    sourceBasis: 'Official geography checklist + 2022 questions on Sambhar, Bhakra canal and irrigation statements.',
    concepts: ['Luni, Chambal, Banas, Mahi, Sabarmati, Ghaggar, Banganga', 'Sambhar, Pushkar, Rajsamand, Jaisamand, Nakki, Pachpadra, Didwana', 'Indira Gandhi Canal, Bhakra, Chambal Project, Mahi Bajaj Sagar, Bisalpur', 'saline/freshwater lake classification', 'river-project-district matching'],
    notes: ['Luni is the key inland-drainage river of western Rajasthan.', 'Chambal is the lifeline of Hadoti and linked with large multipurpose irrigation/power projects.', 'Sambhar is the largest inland saltwater lake. Jaisamand/Dhebar is a large freshwater artificial lake.', 'Indira Gandhi Canal transforms western desert agriculture; revise command districts and source memory.', 'Bisalpur is important for drinking water to Jaipur/Ajmer/Tonk belt in common GK.', 'Lake-district-type is a high-scoring table: salt/freshwater, natural/artificial.'],
    memoryTables: [{ title: 'Lake / type / district clue', rows: [['Sambhar', 'saltwater', 'Jaipur-Nagaur-Ajmer belt'], ['Didwana', 'saltwater', 'Nagaur'], ['Pachpadra', 'saltwater', 'Barmer'], ['Pushkar', 'fresh/holy', 'Ajmer'], ['Jaisamand', 'fresh/artificial', 'Udaipur']] }, { title: 'Project / river / clue', rows: [['Indira Gandhi Canal', 'Sutlej-Beas system', 'western Rajasthan'], ['Chambal Project', 'Chambal', 'Hadoti power-irrigation'], ['Mahi Bajaj Sagar', 'Mahi', 'Banswara-Dungarpur region'], ['Bisalpur', 'Banas', 'drinking water']] }],
    pyqPatterns: ['Sambhar statement correctness.', 'Bhakra Canal Project statements.', 'River/lake/dam district match.', 'Which river has inland drainage?'],
    traps: ['Sambhar latitude statements can be traps; focus on largest saltwater lake.', 'Luni has inland/saline drainage.', 'Chambal is not western desert drainage.', 'Jaisamand is freshwater, not salt lake.'],
    microQuiz: [q('Largest inland saltwater lake of Rajasthan is:', 'Sambhar', 'Pushkar', 'Nakki', 'Jaisamand', 'A', 'Sambhar is Rajasthan’s largest inland saltwater lake.'), q('Luni is known for:', 'Inland drainage', 'Himalayan origin', 'Flowing into Bay of Bengal', 'Perennial heavy flow', 'A', 'Luni has inland/saline drainage in western Rajasthan.'), q('Chambal is most associated with:', 'Hadoti region', 'Thar dunes only', 'Kachchh coast', 'Aravalli peak', 'A', 'Chambal is a key river of Hadoti.')],
    keywords: ['river', 'lake', 'canal', 'irrigation', 'dam']
  },
  {
    day: 9,
    slug: 'geography-minerals-agriculture-energy-wildlife',
    title: 'Geography: minerals, agriculture, energy, wildlife',
    section: 'Rajasthan Geography',
    priority: 'Very High',
    examFocus: 'Mine-mineral, crop-region, energy projects, industries, wildlife sanctuaries and census extremes.',
    sourceBasis: 'Official geography checklist + 2022 questions on Degana, Mando-ki-Pal, Jhamar Kotra, Goth-Manglod, thermal power and agriculture statements.',
    concepts: ['Degana, Zawar, Khetri, Jhamar Kotra, Mando-ki-Pal, Makrana, Goth-Manglod', 'crops, varieties, agriculture farms', 'thermal, solar, wind and atomic power', 'Ranthambore, Keoladeo, Sariska, Desert National Park', 'census extremes and transport/industry'],
    notes: ['Mine-mineral questions are among the easiest direct marks if revised daily.', 'Degana = tungsten; Jhamar Kotra = rock phosphate; Mando-ki-Pal = fluorite/fluorspar; Goth-Manglod = gypsum.', 'Zawar = zinc-lead; Khetri = copper; Makrana = marble. These six pairs must never be wrong.', 'Ranthambore = Sawai Madhopur; Keoladeo = Bharatpur; Desert National Park = Jaisalmer-Barmer.', 'Solar energy questions may focus on Bhadla/Bikaner-Jaisalmer belt in current geography/economy.', 'Agriculture questions ask correct/incorrect statements about crops, farms and regional suitability.'],
    memoryTables: [{ title: 'Mine / mineral', rows: [['Degana', 'Tungsten'], ['Jhamar Kotra', 'Rock phosphate'], ['Mando-ki-Pal', 'Fluorspar'], ['Goth-Manglod', 'Gypsum'], ['Zawar', 'Zinc-lead'], ['Khetri', 'Copper'], ['Makrana', 'Marble']] }, { title: 'Wildlife / district clue', rows: [['Ranthambore', 'Sawai Madhopur'], ['Keoladeo Ghana', 'Bharatpur'], ['Sariska', 'Alwar'], ['Desert National Park', 'Jaisalmer-Barmer'], ['Mukundra Hills', 'Kota-Jhalawar-Bundi-Chittorgarh belt']] }],
    pyqPatterns: ['Match mine with mineral.', 'Which is biggest thermal power station?', 'Which agriculture statement is not correct?', 'Which district has lowest/highest census indicator?'],
    traps: ['Mando-ki-Pal is not tungsten.', 'Jhamar Kotra is not copper.', 'Goth-Manglod is not rock phosphate.', 'Keoladeo is Bharatpur, not Sawai Madhopur.'],
    microQuiz: [q('Degana is famous for:', 'Tungsten', 'Gypsum', 'Rock phosphate', 'Copper', 'A', 'Degana is the classic tungsten pair.'), q('Jhamar Kotra is associated with:', 'Rock phosphate', 'Marble', 'Fluorspar', 'Lignite', 'A', 'Jhamar Kotra is famous for rock phosphate.'), q('Keoladeo National Park is located at:', 'Bharatpur', 'Sawai Madhopur', 'Jaisalmer', 'Barmer', 'A', 'Keoladeo Ghana National Park is in Bharatpur.')],
    keywords: ['mine', 'mineral', 'wildlife', 'energy', 'agriculture']
  },
  {
    day: 10,
    slug: 'current-affairs-rajasthan-it-awareness',
    title: 'Rajasthan current affairs and IT awareness',
    section: 'Current Affairs',
    priority: 'High',
    examFocus: 'Last 12-18 months Rajasthan schemes, budget, appointments, institutions, IT initiatives, AI/cybersecurity awareness and government digital projects.',
    sourceBasis: 'Official syllabus includes current affairs of Rajasthan and Paper 2 also mentions major IT developments; app keeps this Paper 1-aware and current-affairs oriented.',
    concepts: ['Chief Minister, Governor, budget, finance minister', 'Rajasthan schemes and portals', 'iStart, Jan Aadhaar, Sanstha Aadhaar-type governance identifiers', 'IndiaAI Mission, AIKosh, AI compute, FutureSkills', 'CERT-In, phishing, ransomware, malware, cyber hygiene', 'NIC, Digital India, e-governance and service delivery'],
    notes: ['Current affairs must be versioned monthly. Do not memorize old yearbooks as current facts.', 'Keep Rajasthan-first: CM, Governor, Budget, schemes, awards, sports, portals, institutes and places in news.', 'iStart is Rajasthan startup ecosystem support; Techno Hub Jaipur and iStart Nest network are good state IT-governance memory points.', 'IndiaAI Mission is a Government of India AI ecosystem initiative covering compute, datasets, skilling, innovation and safe/trusted AI themes.', 'CERT-In is the national incident response agency for cyber threats. Exam-level terms: phishing, ransomware, malware, vulnerability advisory, two-factor authentication.', 'NIC is the government technology partner for e-governance; Centre of Excellence keywords include AI, blockchain, data analytics and application security.'],
    memoryTables: [{ title: 'Current IT/governance / exam clue', rows: [['iStart Rajasthan', 'startup support'], ['Jan Aadhaar', 'resident/family identity service delivery'], ['Sanstha Aadhaar', 'institution identifier in Rajasthan governance'], ['IndiaAI Mission', 'AI compute, datasets, skilling, safe AI'], ['CERT-In', 'cyber incident response'], ['NIC', 'e-governance technology partner']] }, { title: 'Cyber term / meaning', rows: [['Phishing', 'fake message/site to steal credentials'], ['Ransomware', 'locks/encrypts data for ransom'], ['Malware', 'malicious software'], ['2FA', 'second login factor'], ['Firewall', 'network traffic protection']] }],
    pyqPatterns: ['Where will a state digital institute be established?', 'Which scheme belongs to which department?', 'Which IT development term means what?', 'Which cyber threat/advisory statement is correct?'],
    traps: ['Current affairs changes; revise from latest month before exam.', 'Do not make Paper 1 current affairs too technical; keep awareness-level.', 'CERT-In is not an antivirus company.', 'AIKosh/datasets are AI-governance terms, not general file storage.'],
    microQuiz: [q('CERT-In is mainly related to:', 'Cybersecurity incident response', 'Folk dance training', 'Census collection only', 'Forest tourism', 'A', 'CERT-In is India’s computer emergency response body.'), q('Rajasthan iStart is associated with:', 'Startup ecosystem support', 'Salt mining', 'Wildlife census', 'Classical music awards only', 'A', 'iStart supports startups in Rajasthan.'), q('IndiaAI Mission is related to:', 'Building AI ecosystem and compute capacity', 'Only sports training', 'Only railway booking', 'Only soil testing', 'A', 'IndiaAI supports AI compute, data, skilling and innovation.')],
    keywords: ['current affairs', 'scheme', 'budget', 'ai', 'cybersecurity', 'digital governance']
  },
  {
    day: 11,
    slug: 'science-biology-health',
    title: 'Science: biology and health',
    section: 'General Science',
    priority: 'High',
    examFocus: 'NCERT/Lucent-level one-liners: enzymes, hormones, vitamins, diseases, human systems and biotechnology.',
    sourceBasis: 'Official General Science bucket + 2022 questions on enzymes, adrenaline, first cloned mammal, antioxidants, brain and diseases.',
    concepts: ['digestive enzymes, pancreas, liver', 'hormones and endocrine glands', 'blood, respiration and nervous system', 'vitamins and deficiency diseases', 'disease-agent, vaccine and health programme', 'biotechnology and cloning basics'],
    notes: ['Pancreatic juice has lipase, trypsin and amylase; lipase digests fats.', 'Adrenaline is the emergency hormone. Insulin controls blood sugar and is secreted by pancreas.', 'Medulla oblongata controls involuntary actions such as vomiting, breathing and blood pressure control.', 'Tooth enamel is the hardest substance in human body.', 'Kala-azar is caused by Leishmania. DOTS is linked with tuberculosis.', 'Dolly the sheep is the first cloned mammal. This remains a standard one-liner.'],
    memoryTables: [{ title: 'Science one-liners', rows: [['Lipase', 'fat digestion'], ['Adrenaline', 'emergency hormone'], ['Medulla oblongata', 'involuntary actions'], ['Tooth enamel', 'hardest body substance'], ['Leishmania', 'Kala-azar'], ['DOTS', 'Tuberculosis']] }, { title: 'Vitamin / deficiency', rows: [['A', 'night blindness'], ['B1', 'beriberi'], ['C', 'scurvy'], ['D', 'rickets'], ['K', 'blood clotting problem']] }],
    pyqPatterns: ['Which enzyme breaks down fats?', 'Which is emergency hormone?', 'Which organism causes Kala-azar?', 'Which is hardest substance in human body?'],
    traps: ['Pancreatic lipase, not pepsin, digests fats.', 'Adrenaline not insulin = emergency hormone.', 'Kala-azar is Leishmania, not Plasmodium.', 'Medulla, not cerebrum, controls involuntary actions.'],
    microQuiz: [q('Which enzyme digests fats?', 'Lipase', 'Pepsin', 'Maltase', 'Trypsin', 'A', 'Lipase breaks down fats.'), q('Emergency hormone is:', 'Adrenaline', 'Insulin', 'Thyroxine', 'Progesterone', 'A', 'Adrenaline prepares the body for emergency response.'), q('Kala-azar is caused by:', 'Leishmania', 'Plasmodium', 'Amoeba', 'Planaria', 'A', 'Leishmania causes kala-azar.')],
    keywords: ['biology', 'vitamin', 'disease', 'hormone', 'enzyme']
  },
  {
    day: 12,
    slug: 'science-physics-chemistry-environment',
    title: 'Science: physics, chemistry and environment',
    section: 'General Science',
    priority: 'High',
    examFocus: 'Basic physics constants, everyday chemistry, environment and pollution awareness.',
    sourceBasis: 'Official General Science bucket + 2022 questions on escape velocity, greenhouse forests and antioxidant/sweetener distinction.',
    concepts: ['motion, force, gravity and escape velocity', 'light, sound, heat, electricity and magnetism', 'acid-base-salt, metals/non-metals', 'greenhouse effect, ozone, biodiversity and pollution', 'everyday science chemicals'],
    notes: ['Earth escape velocity is about 11.2 km/s. Do not confuse with 9.8 m/s² acceleration due to gravity.', 'CO2, methane and water vapour are greenhouse gases; carbon dioxide is the safest MCQ answer among common options.', 'Ozone layer absorbs harmful ultraviolet radiation.', 'Acids turn blue litmus red, bases turn red litmus blue.', 'Aspartame is an artificial sweetener, not an antioxidant. Vitamin E, selenium and lycopene are antioxidant-linked.', 'Environment questions are often one-line conceptual rather than deep ecology.'],
    memoryTables: [{ title: 'Physics/environment quick table', rows: [['Escape velocity Earth', '11.2 km/s'], ['g on Earth', '9.8 m/s²'], ['Greenhouse gas', 'CO2'], ['Ozone layer', 'absorbs UV'], ['Sound cannot travel', 'vacuum'], ['SI unit of force', 'newton']] }],
    pyqPatterns: ['Escape velocity value.', 'Which option is not an antioxidant?', 'Which forest is called lungs of planet?', 'Acid/base everyday facts.'],
    traps: ['11.2 km/s vs 9.8 m/s².', 'Aspartame is artificial sweetener.', 'Amazon rainforest is lungs of planet in common GK.', 'Sound needs medium.'],
    microQuiz: [q('Escape velocity of Earth is approximately:', '11.2 km/s', '9.8 m/s', '3 km/s', '1.5 km/s', 'A', 'Earth escape velocity is around 11.2 km/s.'), q('Major greenhouse gas among these is:', 'Carbon dioxide', 'Helium', 'Neon', 'Hydrogen', 'A', 'CO2 is a common greenhouse gas.'), q('Aspartame is mainly used as:', 'Artificial sweetener', 'Antibiotic', 'Antioxidant vitamin', 'Fertilizer', 'A', 'Aspartame is an artificial sweetener.')],
    keywords: ['physics', 'chemistry', 'environment', 'greenhouse', 'escape velocity']
  },
  {
    day: 13,
    slug: 'reasoning-series-analogy-classification',
    title: 'Reasoning: series, analogy and classification',
    section: 'Logical Reasoning',
    priority: 'Very High',
    examFocus: 'Number series, alphabet series, alphanumeric series, wrong number, analogy and odd-one-out.',
    sourceBasis: 'Official logical reasoning bucket + 2022 questions on P3C series, wrong number, odd code and alphabet positions.',
    concepts: ['number series: difference, multiplication, square/cube/prime', 'alphabet positions and gaps', 'alphanumeric series', 'wrong number', 'analogy, odd one out, classification'],
    notes: ['Always write alphabet positions A=1 to Z=26 for coding/series. Do not solve mentally when tired.', 'Wrong number series usually follows one pattern; one term breaks it. Test division/multiplication first.', 'Alphanumeric series may have three simultaneous patterns: first letter, number, last letter.', 'Odd-one-out can be based on letter positions, not word meaning.', 'Classification questions reward checking all four options under the same rule.', 'Practice speed only after concept; otherwise you will guess and lose marks.'],
    memoryTables: [{ title: 'Series pattern checklist', rows: [['Difference', '+2,+3,+4...'], ['Multiplication', 'x2+1, x3-1'], ['Squares/cubes', '1,4,9 or 1,8,27'], ['Prime', '2,3,5,7,11'], ['Alphabet gap', '+2,+3 or reverse positions']] }],
    pyqPatterns: ['P3C, R5F type alphanumeric series.', 'Find wrong number in series.', 'Find odd one out among coded pairs.', 'Which letter is 14th to right of 6th from left?'],
    traps: ['Check both letters and numbers in alphanumeric series.', 'For position problems count carefully from left/right.', 'Wrong term may not be the visually odd number.', 'Odd one may be based on reverse alphabet positions.'],
    microQuiz: [q('Next term: A, C, F, J, O, ?', 'U', 'T', 'V', 'S', 'A', 'Gaps are +2,+3,+4,+5,+6.'), q('Next number: 4, 9, 19, 39, 79, ?', '159', '149', '139', '169', 'A', 'Pattern is x2 + 1.'), q('In alphabet position, Q equals:', '17', '16', '18', '15', 'A', 'A=1 so Q=17.')],
    keywords: ['series', 'analogy', 'classification', 'wrong number']
  },
  {
    day: 14,
    slug: 'reasoning-coding-direction-blood-ranking',
    title: 'Reasoning: coding, direction, blood relation and ranking',
    section: 'Logical Reasoning',
    priority: 'Very High',
    examFocus: 'Letter/word coding, substitution coding, direction sense, shadow, blood relation and order/ranking.',
    sourceBasis: 'Official reasoning bucket + 2022 questions on substitution coding, shadows, family relation and ordering.',
    concepts: ['letter shift, reverse alphabet, position numbers', 'word substitution coding', 'direction and distance', 'shadow logic', 'blood relation family tree', 'ranking/order and age arrangement'],
    notes: ['For substitution coding, answer the real object first, then replace by coded word. Example: if water is called air, what do we drink? Answer is air.', 'Direction questions need a small diagram. East-west movements cancel; north-south movements cancel.', 'Morning sun in east, shadow falls west. Evening sun in west, shadow falls east.', 'Blood relation questions become easy if you convert sentence into family tree.', 'Ranking formula: total = left rank + right rank - 1 when same person is counted twice.', 'Order problems should be written as greater-than chains.'],
    memoryTables: [{ title: 'Mini formulas', rows: [['Ranking total', 'left + right - 1'], ['Morning shadow', 'west'], ['Evening shadow', 'east'], ['Opposite letters', 'A-Z, B-Y, C-X'], ['Direction distance', 'use Pythagoras if diagonal']] }],
    pyqPatterns: ['If sky is called sea... what do we drink?', 'Morning shadow left/right direction.', 'Pointing relation question.', 'Who is between two persons in age order?'],
    traps: ['Do not answer actual word in substitution coding; answer coded name.', 'Shadow direction depends on time.', 'Right/left changes when facing direction changes.', 'Family relation often uses only daughter/only son traps.'],
    microQuiz: [q('If water is called air, what do we drink?', 'Air', 'Water', 'Sea', 'Cloud', 'A', 'We drink water, and water is called air.'), q('Ramesh is 12th from left and 18th from right. Total?', '29', '30', '28', '31', 'A', '12+18-1=29.'), q('A person walks east 10 m, north 10 m, west 10 m. Distance from start?', '10 m', '20 m', '0 m', '30 m', 'A', 'East and west cancel; 10 m north remains.')],
    keywords: ['coding', 'direction', 'blood relation', 'ranking']
  },
  {
    day: 15,
    slug: 'reasoning-syllogism-venn-decision-data-sufficiency',
    title: 'Reasoning: syllogism, Venn, decision and sufficiency',
    section: 'Logical Reasoning',
    priority: 'High',
    examFocus: 'Statement-conclusion, Venn relation, data sufficiency and administrative/simple decision making.',
    sourceBasis: 'Official logical reasoning, decision making and problem solving buckets + 2022 questions on Venn and syllogism.',
    concepts: ['all/some/no statements', 'possibility basics', 'Venn relation of categories', 'data sufficiency statement I/II', 'ethical/simple administrative decision', 'problem solving under constraints'],
    notes: ['In syllogism, never reverse an all statement. All A are B does not mean all B are A.', 'Some conclusion often follows when a subset exists inside a larger set.', 'Venn diagrams should show real-world relations: fathers subset of males; doctors overlap.', 'Data sufficiency asks whether data is enough, not the actual value.', 'Decision making answers should be lawful, fair, practical and non-emotional.', 'Avoid extreme options such as ignore problem or punish without inquiry.'],
    memoryTables: [{ title: 'Syllogism quick logic', rows: [['All A are B', 'A inside B'], ['Some A are B', 'overlap'], ['No A is B', 'separate'], ['All fathers are males', 'father subset male'], ['Doctors and males', 'overlap possible']] }],
    pyqPatterns: ['All cakes are desks, all desks are toffees: conclusion question.', 'Venn diagram among males, fathers and doctors.', 'Statement I/II sufficiency for villagers/doctors question.', 'Classroom decision making.'],
    traps: ['Do not assume extra facts beyond statements.', 'Do not reverse universal statements.', 'Sufficiency is not solving for fun; judge enough data only.', 'Decision making should not be harsh or passive.'],
    microQuiz: [q('All cakes are desks. All desks are toffees. Which is definite?', 'Some toffees are cakes', 'All toffees are cakes', 'No cake is toffee', 'No desk is cake', 'A', 'All cakes are toffees; so some toffees are cakes.'), q('Fathers and males relation is:', 'Fathers are subset of males', 'Males are subset of fathers', 'Separate sets', 'All doctors are fathers', 'A', 'All fathers are males.'), q('Data sufficiency asks:', 'Whether given data is enough', 'Only actual answer', 'Only diagram drawing', 'Only opinion', 'A', 'The focus is adequacy of statements.')],
    keywords: ['syllogism', 'venn', 'decision', 'data sufficiency']
  },
  {
    day: 16,
    slug: 'reasoning-clock-calendar-cube-visual',
    title: 'Reasoning: clock, calendar, cube and visual reasoning',
    section: 'Logical Reasoning',
    priority: 'Very High',
    examFocus: 'Clock angles, straight hands, calendar days, painted cube, dice, mirror image, figure counting and missing figures.',
    sourceBasis: 'Official reasoning bucket + 2022 questions on clock angle, straight hands, cube, Venn, mirror/figure and triangle count.',
    concepts: ['clock angle formula', 'straight line and overlap counts', 'calendar odd days', 'painted cube formulas', 'dice opposite faces', 'mirror/water image', 'triangle/square counting'],
    notes: ['Clock angle = |30H - 5.5M|; use smaller angle if asked.', 'Hands are in a straight line 44 times in a day. They coincide 22 times in a day.', 'Painted cube n×n×n: three-face = 8 corners, two-face = 12(n-2), one-face = 6(n-2)^2.', 'For 4×4×4 cube, one-face painted cubes = 6×2² = 24.', 'Calendar questions need odd-day counting; revise month codes only if doing many questions.', 'Figure counting needs marking small triangles first, then combined triangles.'],
    memoryTables: [{ title: 'Formulas', rows: [['Clock angle', '|30H - 5.5M|'], ['Straight line in 24h', '44 times'], ['Coincide in 24h', '22 times'], ['3-face painted cubes', '8'], ['2-face painted cubes', '12(n-2)'], ['1-face painted cubes', '6(n-2)^2']] }],
    pyqPatterns: ['Angle at 3:25.', 'How many times hands are straight in a day?', 'Cube with 64 small cubes one-face coloured.', 'Mirror image/triangle counting.'],
    traps: ['Use smaller angle unless question says reflex.', '64 cubes means 4×4×4.', 'One-face and two-face cube formulas are often confused.', 'Mirror image reverses left-right, not top-bottom.'],
    microQuiz: [q('Angle between hands at 3:25 is:', '47.5°', '45°', '40°', '52.5°', 'A', 'Minute = 150°, hour = 102.5°, difference = 47.5°.'), q('Hands of clock are straight in a day:', '44 times', '22 times', '24 times', '48 times', 'A', 'Straight line occurs 44 times in 24 hours.'), q('4×4×4 cube painted all faces: one-face cubes?', '24', '8', '16', '32', 'A', '6×(4-2)^2 = 24.')],
    keywords: ['clock', 'calendar', 'cube', 'dice', 'mirror']
  },
  {
    day: 17,
    slug: 'numeracy-number-system-lcm-simplification',
    title: 'Numeracy: number system, LCM/HCF and simplification',
    section: 'Basic Numeracy',
    priority: 'Very High',
    examFocus: 'Class-X level arithmetic foundations: numbers, divisibility, remainder, LCM/HCF, surds and BODMAS.',
    sourceBasis: 'Official class-X numeracy bucket + 2022 questions on equations, LCM remainder and rational numbers.',
    concepts: ['integer, rational number and order', 'divisibility rules', 'LCM/HCF', 'common remainder', 'BODMAS', 'surds and square roots', 'basic equations'],
    notes: ['LCM common remainder question: answer = multiple of LCM + remainder. For largest four-digit, go below 10000.', 'HCF handles greatest divisor; LCM handles common multiple. Do not swap them.', 'Divisibility by 3/9 uses digit sum; by 11 uses alternating sum difference.', 'BODMAS mistakes cost easy marks. Solve on paper.', 'Surd questions often simplify nested radicals; skip if time-consuming and return later.', 'Class-X level means no advanced competitive quant depth; focus on accuracy.'],
    memoryTables: [{ title: 'Quick rules', rows: [['Divisible by 3', 'digit sum divisible by 3'], ['Divisible by 9', 'digit sum divisible by 9'], ['Divisible by 11', 'alternate sum difference multiple of 11'], ['LCM + remainder', 'N = k×LCM + r'], ['HCF', 'greatest common divisor']] }],
    pyqPatterns: ['Largest four-digit number leaving same remainder.', 'Which rational number lies between two values?', 'Equation solved on same basis.', 'Surd simplification.'],
    traps: ['Largest four-digit must be less than 10000.', 'Common remainder is added after LCM multiple.', 'Digit sum rules are for divisibility, not remainder always.', 'Do not choose approximate answer without checking.'],
    microQuiz: [q('LCM of 6, 8, 10 and 12 is:', '120', '240', '60', '180', 'A', 'Prime factor LCM is 120.'), q('Largest 4-digit number leaving remainder 4 on division by 6,8,10,12 is:', '9964', '9984', '9944', '9946', 'A', 'Number = 120k+4; largest below 10000 is 9964.'), q('A number divisible by 9 has:', 'digit sum divisible by 9', 'last digit even', 'last two digits divisible by 4', 'alternate sum zero only', 'A', 'Divisibility by 9 uses digit sum.')],
    keywords: ['number system', 'lcm', 'hcf', 'simplification', 'surds']
  },
  {
    day: 18,
    slug: 'numeracy-percentage-ratio-average-profit-interest',
    title: 'Numeracy: percentage, ratio, average, profit and interest',
    section: 'Basic Numeracy',
    priority: 'Very High',
    examFocus: 'Most frequent arithmetic: percentage equations, ratio, averages, profit-loss, discount, SI and CI.',
    sourceBasis: 'Official class-X numeracy bucket + 2022 questions on average, percentage equation, tournament combinations and expenditure percentage.',
    concepts: ['percentage increase/decrease', 'successive percentage', 'ratio and proportion', 'average and combined average', 'profit/loss/discount', 'simple and compound interest'],
    notes: ['Average = total/number. In combined average, calculate totals first; never average averages blindly.', 'Successive change: a + b + ab/100. +20% then -20% gives -4%.', 'Profit percentage is based on cost price, not selling price.', 'Simple Interest = PRT/100. Compound annual amount = P(1+r/100)^n.', 'Ratio sum questions: add parts, find one part, then required share.', 'Percentage equation questions become linear equations; write x first.'],
    memoryTables: [{ title: 'Formula sheet', rows: [['Average', 'total / number'], ['Profit %', 'profit / CP × 100'], ['Loss %', 'loss / CP × 100'], ['SI', 'PRT/100'], ['CI Amount', 'P(1+r/100)^n'], ['Successive %', 'a+b+ab/100']] }],
    pyqPatterns: ['Average of 25 results with first and last 12 averages.', '70 + 70% of number equals 70% of 150.', 'Profit/loss and interest direct questions.', 'Family expenditure and pie chart percentages.'],
    traps: ['Average of averages trap.', 'Profit/loss denominator is CP.', 'Successive increase/decrease is not zero if percentages are equal.', 'Compound interest amount, not only interest, may be given.'],
    microQuiz: [q('70 added to 70% of a number equals 70% of 150. Number?', '50', '70', '35', '100', 'A', '0.7x+70=105, x=50.'), q('A number increased by 20% then decreased by 20% has net:', '4% decrease', 'No change', '4% increase', '2% decrease', 'A', 'Net = -20×20/100 = -4%.'), q('SI on Rs 5000 at 8% for 2 years:', 'Rs 800', 'Rs 600', 'Rs 700', 'Rs 900', 'A', 'SI=5000×8×2/100=800.')],
    keywords: ['percentage', 'ratio', 'average', 'profit', 'interest']
  },
  {
    day: 19,
    slug: 'numeracy-time-work-speed-age-algebra-mensuration',
    title: 'Numeracy: work, speed, age, algebra and mensuration',
    section: 'Basic Numeracy',
    priority: 'Very High',
    examFocus: 'Work-time, speed-distance, age, equations, quadratic equal roots, area/volume and AP/GP basics.',
    sourceBasis: 'Official class-X numeracy bucket + 2022 questions on trip time, quadratic equal roots, age and geometry/figure area.',
    concepts: ['time and work efficiency', 'time-speed-distance and average speed', 'age equations', 'linear and quadratic equations', 'mensuration of square, rectangle, triangle, circle, cube, cuboid', 'AP/GP and sequence basics'],
    notes: ['Work = men × days when efficiency is same. If 6 men do in 12 days, total = 72 man-days.', 'For equal distances, average speed = 2xy/(x+y). But direct split-distance questions can be solved by time = distance/speed.', 'Age questions are linear equations; translate sentence directly.', 'Quadratic equal roots means discriminant b² - 4ac = 0.', 'Area square = side²; perimeter square = 4×side. Do not confuse perimeter and area.', 'Mensuration is class-X level; learn formulas, not advanced geometry.'],
    memoryTables: [{ title: 'Formulas', rows: [['Work', 'men × days'], ['Speed', 'distance / time'], ['Equal-distance avg speed', '2xy/(x+y)'], ['Quadratic equal roots', 'b² - 4ac = 0'], ['Square area', 'side²'], ['Circle area', 'πr²']] }],
    pyqPatterns: ['Half trip at 30 mph and half at 60 mph.', 'Age of father is 5 more than three times son.', 'Quadratic equal roots.', 'Minimum straight lines for given figure.'],
    traps: ['Average speed for equal distance is not simple average.', 'Quadratic equal roots uses discriminant zero.', 'Age sentence “5 more than three times” = 3x+5.', 'Mensuration units: cm vs sq cm vs cubic cm.'],
    microQuiz: [q('6 men complete work in 12 days. 9 men take:', '8 days', '6 days', '9 days', '10 days', 'A', 'Total work=72 man-days; 72/9=8.'), q('A 20-mile trip: 10 miles at 30 mph and 10 at 60 mph. Time?', '30 minutes', '45 minutes', '60 minutes', '75 minutes', 'A', '20 min + 10 min = 30 min.'), q('Perimeter of square is 48 cm. Area?', '144 sq cm', '121 sq cm', '169 sq cm', '196 sq cm', 'A', 'Side=12, area=144.')],
    keywords: ['time work', 'speed', 'age', 'algebra', 'mensuration']
  },
  {
    day: 20,
    slug: 'data-interpretation',
    title: 'Data Interpretation',
    section: 'Data Interpretation',
    priority: 'High',
    examFocus: 'Tables, bar graphs, line charts, pie charts, percentage growth, ratio, average and data sufficiency.',
    sourceBasis: 'Official class-X DI bucket + 2022 questions using pie chart, table, registered vehicles and expenditure data.',
    concepts: ['table totals and averages', 'bar/line chart comparison', 'pie chart central angle', 'percentage increase/decrease', 'ratio from data', 'DI data sufficiency'],
    notes: ['DI is formula application, not theory. Read units first: lakh, percent, degree, number.', 'Pie chart central angle = percentage × 360/100. For 20%, angle = 72°.', 'Percentage increase = change/original × 100. Do not divide by final value.', 'For table DI, calculate only what is asked; do not waste time filling the whole table.', 'Growth-factor questions: multiply current value by same ratio when “same growth factor continues.”', 'DI mistakes usually come from unit confusion, not hard math.'],
    memoryTables: [{ title: 'DI formulas', rows: [['Central angle', 'percent × 3.6'], ['Percentage increase', 'change/original × 100'], ['Average', 'total/items'], ['Ratio', 'divide by common factor'], ['Difference', 'larger - smaller'], ['Growth factor', 'new/old']] }],
    pyqPatterns: ['Pie chart central angle.', 'Vehicle registration table growth projection.', 'Family expenditure percentage.', 'Average from monthly sales table.'],
    traps: ['Percentage point vs percentage increase.', 'Central angle uses 360 degrees.', 'Check whether data is in lakh or actual number.', 'Do not round too early.'],
    microQuiz: [q('20% sector in pie chart has central angle:', '72°', '90°', '60°', '36°', 'A', '20% of 360 = 72.'), q('Average of 120,150,180,210 is:', '165', '170', '160', '175', 'A', 'Total 660/4 = 165.'), q('Increase from 62% to 74% is:', '12 percentage points', '19.35 percentage points', '8 percentage points', '10 percentage points', 'A', '74-62 = 12 percentage points.')],
    keywords: ['di', 'table', 'pie chart', 'bar chart', 'data interpretation']
  }
];

export function getUnitBySlug(slug: string) {
  return paper1Units.find((unit) => unit.slug === slug);
}

export function getUnitForDay(day: number) {
  return paper1Units[(Math.max(1, day) - 1) % paper1Units.length];
}

export function searchUnits(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return paper1Units;
  return paper1Units.filter((unit) => [unit.title, unit.section, unit.examFocus, unit.keywords.join(' '), unit.concepts.join(' ')].join(' ').toLowerCase().includes(q));
}
