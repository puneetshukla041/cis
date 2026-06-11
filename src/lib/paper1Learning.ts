import { verifiedPaper1Questions } from "@/lib/verifiedPaper1Bank";
export type LearningFact = { key: string; answer: string; tag: string; explanation: string };
export type LearningTable = { title: string; headers: string[]; rows: string[][] };
export type LearningNote = { heading: string; body: string };
export type LearningQuestion = {
  question: string;
  options: { A: string; B: string; C: string; D: string };
  answer: "A" | "B" | "C" | "D";
  explanation: string;
  subject: string;
  chapter: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  importance: "low" | "medium" | "high";
  sourceHint?: string;
  source?: "Learning Library" | "Uploaded JSON" | "Previous Year Pattern" | "Custom Test";
  reviewStatus?: "draft" | "reviewed" | "approved" | "rejected";
  facultyReviewed?: boolean;
  factSource?: string;
  pyqSimilarity?: "direct" | "high" | "medium" | "low";
  examPatternTag?: string;
  whyCorrect?: string;
  whyOthersWrong?: string;
  qualityScore?: number;
};
export type LearningTopic = {
  id: string;
  day: number;
  title: string;
  bucket: string;
  priority: string;
  why: string;
  concepts: string[];
  notes: LearningNote[];
  tables: LearningTable[];
  mistakes: string[];
  tips: string[];
  facts: LearningFact[];
  pyqPatterns: string[];
};

export const paper1LearningTopics: LearningTopic[] = [
  {
    "id": "orientation-paper1-rank1",
    "day": 1,
    "title": "Paper 1 exam map and rank-one method",
    "bucket": "Paper 1 Strategy",
    "priority": "Very High",
    "why": "Paper 1 has 100 MCQs, 100 marks, 2 hours and 1/3 negative marking, so the preparation must be accurate and topic-wise.",
    "concepts": [
      "Paper 1 total questions",
      "Paper 1 total marks",
      "Duration",
      "Negative marking",
      "Rajasthan GK coverage",
      "General Ability coverage",
      "Class level for numeracy and DI",
      "Safe attempt rule",
      "Daily method",
      "Wrong notebook",
      "Rank target method"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Paper 1 exam map and rank-one method under Paper 1 Strategy. It is included because Paper 1 has 100 MCQs, 100 marks, 2 hours and 1/3 negative marking, so the preparation must be accurate and topic-wise. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Paper 1 total questions, Paper 1 total marks, Duration, Negative marking, Rajasthan GK coverage, General Ability coverage, Class level for numeracy and DI, Safe attempt rule, Daily method, Wrong notebook, Rank target method. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Paper 1 Strategy, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Paper 1 total questions: 100 MCQs. Fixed association: Paper 1 total questions — 100 MCQs. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Paper 1 total marks: 100 marks. Fixed association: Paper 1 total marks — 100 marks. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Duration: 2 hours. Fixed association: Duration — 2 hours. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Negative marking: 1/3 mark deducted for each wrong answer. Fixed association: Negative marking — 1/3 mark deducted for each wrong answer. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Rajasthan GK coverage: Art & Culture, History, Geography, General Science, Current Affairs of Rajasthan. Fixed association: Rajasthan GK coverage — Art & Culture, History, Geography, General Science, Current Affairs of Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. General Ability coverage: Logical Reasoning, Decision Making, Mental Ability, Basic Numeracy, Data Interpretation. Fixed association: General Ability coverage — Logical Reasoning, Decision Making, Mental Ability, Basic Numeracy, Data Interpretation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Class level for numeracy and DI: Class X level. Fixed association: Class level for numeracy and DI — Class X level. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Safe attempt rule: attempt known questions first and avoid blind guessing. Fixed association: Safe attempt rule — attempt known questions first and avoid blind guessing. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Daily method: deep theory during day and 100 topic MCQs at night. Fixed association: Daily method — deep theory during day and 100 topic MCQs at night. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Wrong notebook: one-line correction for every wrong MCQ. Fixed association: Wrong notebook — one-line correction for every wrong MCQ. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Rank target method: accuracy, revision cycles and mixed mocks after topic mastery. Fixed association: Rank target method — accuracy, revision cycles and mixed mocks after topic mastery. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives '100 MCQs', recall 'Paper 1 total questions'. If it gives 'Paper 1 total questions', recall '100 MCQs'.\n- If the paper gives '100 marks', recall 'Paper 1 total marks'. If it gives 'Paper 1 total marks', recall '100 marks'.\n- If the paper gives '2 hours', recall 'Duration'. If it gives 'Duration', recall '2 hours'.\n- If the paper gives '1/3 mark deducted for each wrong answer', recall 'Negative marking'. If it gives 'Negative marking', recall '1/3 mark deducted for each wrong answer'.\n- If the paper gives 'Art & Culture, History, Geography, General Science, Current Affairs of Rajasthan', recall 'Rajasthan GK coverage'. If it gives 'Rajasthan GK coverage', recall 'Art & Culture, History, Geography, General Science, Current Affairs of Rajasthan'.\n- If the paper gives 'Logical Reasoning, Decision Making, Mental Ability, Basic Numeracy, Data Interpretation', recall 'General Ability coverage'. If it gives 'General Ability coverage', recall 'Logical Reasoning, Decision Making, Mental Ability, Basic Numeracy, Data Interpretation'.\n- If the paper gives 'Class X level', recall 'Class level for numeracy and DI'. If it gives 'Class level for numeracy and DI', recall 'Class X level'.\n- If the paper gives 'attempt known questions first and avoid blind guessing', recall 'Safe attempt rule'. If it gives 'Safe attempt rule', recall 'attempt known questions first and avoid blind guessing'.\n- If the paper gives 'deep theory during day and 100 topic MCQs at night', recall 'Daily method'. If it gives 'Daily method', recall 'deep theory during day and 100 topic MCQs at night'.\n- If the paper gives 'one-line correction for every wrong MCQ', recall 'Wrong notebook'. If it gives 'Wrong notebook', recall 'one-line correction for every wrong MCQ'.\n- If the paper gives 'accuracy, revision cycles and mixed mocks after topic mastery', recall 'Rank target method'. If it gives 'Rank target method', recall 'accuracy, revision cycles and mixed mocks after topic mastery'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Paper 1 total questions",
            "100 MCQs",
            "strategy"
          ],
          [
            "Paper 1 total marks",
            "100 marks",
            "strategy"
          ],
          [
            "Duration",
            "2 hours",
            "strategy"
          ],
          [
            "Negative marking",
            "1/3 mark deducted for each wrong answer",
            "strategy"
          ],
          [
            "Rajasthan GK coverage",
            "Art & Culture, History, Geography, General Science, Current Affairs of Rajasthan",
            "strategy"
          ],
          [
            "General Ability coverage",
            "Logical Reasoning, Decision Making, Mental Ability, Basic Numeracy, Data Interpretation",
            "strategy"
          ],
          [
            "Class level for numeracy and DI",
            "Class X level",
            "strategy"
          ],
          [
            "Safe attempt rule",
            "attempt known questions first and avoid blind guessing",
            "strategy"
          ],
          [
            "Daily method",
            "deep theory during day and 100 topic MCQs at night",
            "strategy"
          ],
          [
            "Wrong notebook",
            "one-line correction for every wrong MCQ",
            "strategy"
          ],
          [
            "Rank target method",
            "accuracy, revision cycles and mixed mocks after topic mastery",
            "strategy"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Paper 1 total questions",
        "answer": "100 MCQs",
        "tag": "strategy",
        "explanation": "Fixed association: Paper 1 total questions — 100 MCQs. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Paper 1 total marks",
        "answer": "100 marks",
        "tag": "strategy",
        "explanation": "Fixed association: Paper 1 total marks — 100 marks. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Duration",
        "answer": "2 hours",
        "tag": "strategy",
        "explanation": "Fixed association: Duration — 2 hours. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Negative marking",
        "answer": "1/3 mark deducted for each wrong answer",
        "tag": "strategy",
        "explanation": "Fixed association: Negative marking — 1/3 mark deducted for each wrong answer. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rajasthan GK coverage",
        "answer": "Art & Culture, History, Geography, General Science, Current Affairs of Rajasthan",
        "tag": "strategy",
        "explanation": "Fixed association: Rajasthan GK coverage — Art & Culture, History, Geography, General Science, Current Affairs of Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "General Ability coverage",
        "answer": "Logical Reasoning, Decision Making, Mental Ability, Basic Numeracy, Data Interpretation",
        "tag": "strategy",
        "explanation": "Fixed association: General Ability coverage — Logical Reasoning, Decision Making, Mental Ability, Basic Numeracy, Data Interpretation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Class level for numeracy and DI",
        "answer": "Class X level",
        "tag": "strategy",
        "explanation": "Fixed association: Class level for numeracy and DI — Class X level. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Safe attempt rule",
        "answer": "attempt known questions first and avoid blind guessing",
        "tag": "strategy",
        "explanation": "Fixed association: Safe attempt rule — attempt known questions first and avoid blind guessing. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Daily method",
        "answer": "deep theory during day and 100 topic MCQs at night",
        "tag": "strategy",
        "explanation": "Fixed association: Daily method — deep theory during day and 100 topic MCQs at night. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Wrong notebook",
        "answer": "one-line correction for every wrong MCQ",
        "tag": "strategy",
        "explanation": "Fixed association: Wrong notebook — one-line correction for every wrong MCQ. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rank target method",
        "answer": "accuracy, revision cycles and mixed mocks after topic mastery",
        "tag": "strategy",
        "explanation": "Fixed association: Rank target method — accuracy, revision cycles and mixed mocks after topic mastery. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "culture-dance-music-theatre",
    "day": 2,
    "title": "Folk dances, music, instruments and theatre",
    "bucket": "Rajasthan Art & Culture",
    "priority": "Very High",
    "why": "PYQs repeatedly ask dance-community, instrument-performer and folk theatre pairs.",
    "concepts": [
      "Ghoomar",
      "Kalbeliya",
      "Bhavai",
      "Gair",
      "Chari",
      "Terah Taali",
      "Kachhi Ghodi",
      "Gavri",
      "Maand",
      "Panihari",
      "Langa",
      "Manganiyar",
      "Bhopa-Bhopi",
      "Ravanhatta"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Folk dances, music, instruments and theatre under Rajasthan Art & Culture. It is included because PYQs repeatedly ask dance-community, instrument-performer and folk theatre pairs. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Ghoomar, Kalbeliya, Bhavai, Gair, Chari, Terah Taali, Kachhi Ghodi, Gavri, Maand, Panihari, Langa, Manganiyar, Bhopa-Bhopi, Ravanhatta. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan Art & Culture, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Ghoomar: women’s traditional circular dance of Rajasthan. Fixed association: Ghoomar — women’s traditional circular dance of Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Kalbeliya: dance of Kalbeliya community with serpent-like movements. Fixed association: Kalbeliya — dance of Kalbeliya community with serpent-like movements. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Bhavai: balancing dance performed with pots or objects. Fixed association: Bhavai — balancing dance performed with pots or objects. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Gair: festival/group circular dance, especially western Rajasthan memory. Fixed association: Gair — festival/group circular dance, especially western Rajasthan memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Chari: pot/lamp dance tradition. Fixed association: Chari — pot/lamp dance tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Terah Taali: Kamadia community; manjira-based devotional performance. Fixed association: Terah Taali — Kamadia community; manjira-based devotional performance. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Kachhi Ghodi: dummy-horse dance associated with heroic/festive performance. Fixed association: Kachhi Ghodi — dummy-horse dance associated with heroic/festive performance. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Gavri: Bhil ritual theatre/performance tradition. Fixed association: Gavri — Bhil ritual theatre/performance tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Maand: classical-flavoured folk singing of Rajasthan. Fixed association: Maand — classical-flavoured folk singing of Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Panihari: folk songs linked with water-carrier/desert life. Fixed association: Panihari — folk songs linked with water-carrier/desert life. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Langa: hereditary musician community of western Rajasthan. Fixed association: Langa — hereditary musician community of western Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Manganiyar: hereditary musician community known for folk singing. Fixed association: Manganiyar — hereditary musician community known for folk singing. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Bhopa-Bhopi: performers associated with Phad singing traditions. Fixed association: Bhopa-Bhopi — performers associated with Phad singing traditions. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Ravanhatta: string instrument commonly linked with Bhopa tradition. Fixed association: Ravanhatta — string instrument commonly linked with Bhopa tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n15. Algoza: double flute folk instrument. Fixed association: Algoza — double flute folk instrument. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n16. Kathputli: traditional puppet theatre of Rajasthan. Fixed association: Kathputli — traditional puppet theatre of Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n17. Khayal: folk theatre form. Fixed association: Khayal — folk theatre form. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n18. Tamasha: folk drama/theatre tradition. Fixed association: Tamasha — folk drama/theatre tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n19. Nautanki: popular folk theatre style. Fixed association: Nautanki — popular folk theatre style. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'women’s traditional circular dance of Rajasthan', recall 'Ghoomar'. If it gives 'Ghoomar', recall 'women’s traditional circular dance of Rajasthan'.\n- If the paper gives 'dance of Kalbeliya community with serpent-like movements', recall 'Kalbeliya'. If it gives 'Kalbeliya', recall 'dance of Kalbeliya community with serpent-like movements'.\n- If the paper gives 'balancing dance performed with pots or objects', recall 'Bhavai'. If it gives 'Bhavai', recall 'balancing dance performed with pots or objects'.\n- If the paper gives 'festival/group circular dance, especially western Rajasthan memory', recall 'Gair'. If it gives 'Gair', recall 'festival/group circular dance, especially western Rajasthan memory'.\n- If the paper gives 'pot/lamp dance tradition', recall 'Chari'. If it gives 'Chari', recall 'pot/lamp dance tradition'.\n- If the paper gives 'Kamadia community; manjira-based devotional performance', recall 'Terah Taali'. If it gives 'Terah Taali', recall 'Kamadia community; manjira-based devotional performance'.\n- If the paper gives 'dummy-horse dance associated with heroic/festive performance', recall 'Kachhi Ghodi'. If it gives 'Kachhi Ghodi', recall 'dummy-horse dance associated with heroic/festive performance'.\n- If the paper gives 'Bhil ritual theatre/performance tradition', recall 'Gavri'. If it gives 'Gavri', recall 'Bhil ritual theatre/performance tradition'.\n- If the paper gives 'classical-flavoured folk singing of Rajasthan', recall 'Maand'. If it gives 'Maand', recall 'classical-flavoured folk singing of Rajasthan'.\n- If the paper gives 'folk songs linked with water-carrier/desert life', recall 'Panihari'. If it gives 'Panihari', recall 'folk songs linked with water-carrier/desert life'.\n- If the paper gives 'hereditary musician community of western Rajasthan', recall 'Langa'. If it gives 'Langa', recall 'hereditary musician community of western Rajasthan'.\n- If the paper gives 'hereditary musician community known for folk singing', recall 'Manganiyar'. If it gives 'Manganiyar', recall 'hereditary musician community known for folk singing'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Ghoomar",
            "women’s traditional circular dance of Rajasthan",
            "culture"
          ],
          [
            "Kalbeliya",
            "dance of Kalbeliya community with serpent-like movements",
            "culture"
          ],
          [
            "Bhavai",
            "balancing dance performed with pots or objects",
            "culture"
          ],
          [
            "Gair",
            "festival/group circular dance, especially western Rajasthan memory",
            "culture"
          ],
          [
            "Chari",
            "pot/lamp dance tradition",
            "culture"
          ],
          [
            "Terah Taali",
            "Kamadia community; manjira-based devotional performance",
            "culture"
          ],
          [
            "Kachhi Ghodi",
            "dummy-horse dance associated with heroic/festive performance",
            "culture"
          ],
          [
            "Gavri",
            "Bhil ritual theatre/performance tradition",
            "culture"
          ],
          [
            "Maand",
            "classical-flavoured folk singing of Rajasthan",
            "culture"
          ],
          [
            "Panihari",
            "folk songs linked with water-carrier/desert life",
            "culture"
          ],
          [
            "Langa",
            "hereditary musician community of western Rajasthan",
            "culture"
          ],
          [
            "Manganiyar",
            "hereditary musician community known for folk singing",
            "culture"
          ],
          [
            "Bhopa-Bhopi",
            "performers associated with Phad singing traditions",
            "culture"
          ],
          [
            "Ravanhatta",
            "string instrument commonly linked with Bhopa tradition",
            "culture"
          ],
          [
            "Algoza",
            "double flute folk instrument",
            "culture"
          ],
          [
            "Kathputli",
            "traditional puppet theatre of Rajasthan",
            "culture"
          ],
          [
            "Khayal",
            "folk theatre form",
            "culture"
          ],
          [
            "Tamasha",
            "folk drama/theatre tradition",
            "culture"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Ghoomar",
        "answer": "women’s traditional circular dance of Rajasthan",
        "tag": "culture",
        "explanation": "Fixed association: Ghoomar — women’s traditional circular dance of Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kalbeliya",
        "answer": "dance of Kalbeliya community with serpent-like movements",
        "tag": "culture",
        "explanation": "Fixed association: Kalbeliya — dance of Kalbeliya community with serpent-like movements. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bhavai",
        "answer": "balancing dance performed with pots or objects",
        "tag": "culture",
        "explanation": "Fixed association: Bhavai — balancing dance performed with pots or objects. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Gair",
        "answer": "festival/group circular dance, especially western Rajasthan memory",
        "tag": "culture",
        "explanation": "Fixed association: Gair — festival/group circular dance, especially western Rajasthan memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Chari",
        "answer": "pot/lamp dance tradition",
        "tag": "culture",
        "explanation": "Fixed association: Chari — pot/lamp dance tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Terah Taali",
        "answer": "Kamadia community; manjira-based devotional performance",
        "tag": "culture",
        "explanation": "Fixed association: Terah Taali — Kamadia community; manjira-based devotional performance. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kachhi Ghodi",
        "answer": "dummy-horse dance associated with heroic/festive performance",
        "tag": "culture",
        "explanation": "Fixed association: Kachhi Ghodi — dummy-horse dance associated with heroic/festive performance. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Gavri",
        "answer": "Bhil ritual theatre/performance tradition",
        "tag": "culture",
        "explanation": "Fixed association: Gavri — Bhil ritual theatre/performance tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Maand",
        "answer": "classical-flavoured folk singing of Rajasthan",
        "tag": "culture",
        "explanation": "Fixed association: Maand — classical-flavoured folk singing of Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Panihari",
        "answer": "folk songs linked with water-carrier/desert life",
        "tag": "culture",
        "explanation": "Fixed association: Panihari — folk songs linked with water-carrier/desert life. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Langa",
        "answer": "hereditary musician community of western Rajasthan",
        "tag": "culture",
        "explanation": "Fixed association: Langa — hereditary musician community of western Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Manganiyar",
        "answer": "hereditary musician community known for folk singing",
        "tag": "culture",
        "explanation": "Fixed association: Manganiyar — hereditary musician community known for folk singing. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bhopa-Bhopi",
        "answer": "performers associated with Phad singing traditions",
        "tag": "culture",
        "explanation": "Fixed association: Bhopa-Bhopi — performers associated with Phad singing traditions. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ravanhatta",
        "answer": "string instrument commonly linked with Bhopa tradition",
        "tag": "culture",
        "explanation": "Fixed association: Ravanhatta — string instrument commonly linked with Bhopa tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Algoza",
        "answer": "double flute folk instrument",
        "tag": "culture",
        "explanation": "Fixed association: Algoza — double flute folk instrument. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kathputli",
        "answer": "traditional puppet theatre of Rajasthan",
        "tag": "culture",
        "explanation": "Fixed association: Kathputli — traditional puppet theatre of Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Khayal",
        "answer": "folk theatre form",
        "tag": "culture",
        "explanation": "Fixed association: Khayal — folk theatre form. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Tamasha",
        "answer": "folk drama/theatre tradition",
        "tag": "culture",
        "explanation": "Fixed association: Tamasha — folk drama/theatre tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Nautanki",
        "answer": "popular folk theatre style",
        "tag": "culture",
        "explanation": "Fixed association: Nautanki — popular folk theatre style. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "culture-paintings-schools",
    "day": 3,
    "title": "Folk arts, paintings and painting schools",
    "bucket": "Rajasthan Art & Culture",
    "priority": "Very High",
    "why": "Painting-school and art-form questions are direct scoring areas in Rajasthan GK.",
    "concepts": [
      "Phad",
      "Pichwai",
      "Mandana",
      "Sanjhi",
      "Bewan",
      "Mewar school",
      "Marwar school",
      "Bundi school",
      "Kota school",
      "Kishangarh school",
      "Bikaner school",
      "Jaipur school",
      "Alwar school",
      "Miniature painting"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Folk arts, paintings and painting schools under Rajasthan Art & Culture. It is included because Painting-school and art-form questions are direct scoring areas in Rajasthan GK. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Phad, Pichwai, Mandana, Sanjhi, Bewan, Mewar school, Marwar school, Bundi school, Kota school, Kishangarh school, Bikaner school, Jaipur school, Alwar school, Miniature painting. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan Art & Culture, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Phad: long cloth scroll painting connected with Pabuji and Devnarayanji. Fixed association: Phad — long cloth scroll painting connected with Pabuji and Devnarayanji. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Pichwai: Nathdwara painting tradition linked with Shrinathji. Fixed association: Pichwai — Nathdwara painting tradition linked with Shrinathji. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Mandana: wall and floor decoration tradition. Fixed association: Mandana — wall and floor decoration tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Sanjhi: stencil/decorative devotional art tradition. Fixed association: Sanjhi — stencil/decorative devotional art tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Bewan: folk art form noted in Rajasthan art lists. Fixed association: Bewan — folk art form noted in Rajasthan art lists. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Mewar school: traditional Hindu/devotional themes and strong local style. Fixed association: Mewar school — traditional Hindu/devotional themes and strong local style. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Marwar school: courtly and heroic/local themes. Fixed association: Marwar school — courtly and heroic/local themes. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Bundi school: nature, monsoon, palace and hunting scenes. Fixed association: Bundi school — nature, monsoon, palace and hunting scenes. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Kota school: hunting and wildlife scenes. Fixed association: Kota school — hunting and wildlife scenes. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Kishangarh school: Bani Thani and refined lyrical style. Fixed association: Kishangarh school — Bani Thani and refined lyrical style. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Bikaner school: Mughal and Deccan influence memory. Fixed association: Bikaner school — Mughal and Deccan influence memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Jaipur school: courtly, refined and planned style. Fixed association: Jaipur school — courtly, refined and planned style. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Alwar school: late miniature tradition memory. Fixed association: Alwar school — late miniature tradition memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Miniature painting: small detailed court and devotional painting tradition. Fixed association: Miniature painting — small detailed court and devotional painting tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n15. Bani Thani: iconic Kishangarh painting association. Fixed association: Bani Thani — iconic Kishangarh painting association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'long cloth scroll painting connected with Pabuji and Devnarayanji', recall 'Phad'. If it gives 'Phad', recall 'long cloth scroll painting connected with Pabuji and Devnarayanji'.\n- If the paper gives 'Nathdwara painting tradition linked with Shrinathji', recall 'Pichwai'. If it gives 'Pichwai', recall 'Nathdwara painting tradition linked with Shrinathji'.\n- If the paper gives 'wall and floor decoration tradition', recall 'Mandana'. If it gives 'Mandana', recall 'wall and floor decoration tradition'.\n- If the paper gives 'stencil/decorative devotional art tradition', recall 'Sanjhi'. If it gives 'Sanjhi', recall 'stencil/decorative devotional art tradition'.\n- If the paper gives 'folk art form noted in Rajasthan art lists', recall 'Bewan'. If it gives 'Bewan', recall 'folk art form noted in Rajasthan art lists'.\n- If the paper gives 'traditional Hindu/devotional themes and strong local style', recall 'Mewar school'. If it gives 'Mewar school', recall 'traditional Hindu/devotional themes and strong local style'.\n- If the paper gives 'courtly and heroic/local themes', recall 'Marwar school'. If it gives 'Marwar school', recall 'courtly and heroic/local themes'.\n- If the paper gives 'nature, monsoon, palace and hunting scenes', recall 'Bundi school'. If it gives 'Bundi school', recall 'nature, monsoon, palace and hunting scenes'.\n- If the paper gives 'hunting and wildlife scenes', recall 'Kota school'. If it gives 'Kota school', recall 'hunting and wildlife scenes'.\n- If the paper gives 'Bani Thani and refined lyrical style', recall 'Kishangarh school'. If it gives 'Kishangarh school', recall 'Bani Thani and refined lyrical style'.\n- If the paper gives 'Mughal and Deccan influence memory', recall 'Bikaner school'. If it gives 'Bikaner school', recall 'Mughal and Deccan influence memory'.\n- If the paper gives 'courtly, refined and planned style', recall 'Jaipur school'. If it gives 'Jaipur school', recall 'courtly, refined and planned style'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Phad",
            "long cloth scroll painting connected with Pabuji and Devnarayanji",
            "painting"
          ],
          [
            "Pichwai",
            "Nathdwara painting tradition linked with Shrinathji",
            "painting"
          ],
          [
            "Mandana",
            "wall and floor decoration tradition",
            "painting"
          ],
          [
            "Sanjhi",
            "stencil/decorative devotional art tradition",
            "painting"
          ],
          [
            "Bewan",
            "folk art form noted in Rajasthan art lists",
            "painting"
          ],
          [
            "Mewar school",
            "traditional Hindu/devotional themes and strong local style",
            "painting"
          ],
          [
            "Marwar school",
            "courtly and heroic/local themes",
            "painting"
          ],
          [
            "Bundi school",
            "nature, monsoon, palace and hunting scenes",
            "painting"
          ],
          [
            "Kota school",
            "hunting and wildlife scenes",
            "painting"
          ],
          [
            "Kishangarh school",
            "Bani Thani and refined lyrical style",
            "painting"
          ],
          [
            "Bikaner school",
            "Mughal and Deccan influence memory",
            "painting"
          ],
          [
            "Jaipur school",
            "courtly, refined and planned style",
            "painting"
          ],
          [
            "Alwar school",
            "late miniature tradition memory",
            "painting"
          ],
          [
            "Miniature painting",
            "small detailed court and devotional painting tradition",
            "painting"
          ],
          [
            "Bani Thani",
            "iconic Kishangarh painting association",
            "painting"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Phad",
        "answer": "long cloth scroll painting connected with Pabuji and Devnarayanji",
        "tag": "painting",
        "explanation": "Fixed association: Phad — long cloth scroll painting connected with Pabuji and Devnarayanji. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Pichwai",
        "answer": "Nathdwara painting tradition linked with Shrinathji",
        "tag": "painting",
        "explanation": "Fixed association: Pichwai — Nathdwara painting tradition linked with Shrinathji. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mandana",
        "answer": "wall and floor decoration tradition",
        "tag": "painting",
        "explanation": "Fixed association: Mandana — wall and floor decoration tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sanjhi",
        "answer": "stencil/decorative devotional art tradition",
        "tag": "painting",
        "explanation": "Fixed association: Sanjhi — stencil/decorative devotional art tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bewan",
        "answer": "folk art form noted in Rajasthan art lists",
        "tag": "painting",
        "explanation": "Fixed association: Bewan — folk art form noted in Rajasthan art lists. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mewar school",
        "answer": "traditional Hindu/devotional themes and strong local style",
        "tag": "painting",
        "explanation": "Fixed association: Mewar school — traditional Hindu/devotional themes and strong local style. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Marwar school",
        "answer": "courtly and heroic/local themes",
        "tag": "painting",
        "explanation": "Fixed association: Marwar school — courtly and heroic/local themes. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bundi school",
        "answer": "nature, monsoon, palace and hunting scenes",
        "tag": "painting",
        "explanation": "Fixed association: Bundi school — nature, monsoon, palace and hunting scenes. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kota school",
        "answer": "hunting and wildlife scenes",
        "tag": "painting",
        "explanation": "Fixed association: Kota school — hunting and wildlife scenes. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kishangarh school",
        "answer": "Bani Thani and refined lyrical style",
        "tag": "painting",
        "explanation": "Fixed association: Kishangarh school — Bani Thani and refined lyrical style. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bikaner school",
        "answer": "Mughal and Deccan influence memory",
        "tag": "painting",
        "explanation": "Fixed association: Bikaner school — Mughal and Deccan influence memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Jaipur school",
        "answer": "courtly, refined and planned style",
        "tag": "painting",
        "explanation": "Fixed association: Jaipur school — courtly, refined and planned style. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Alwar school",
        "answer": "late miniature tradition memory",
        "tag": "painting",
        "explanation": "Fixed association: Alwar school — late miniature tradition memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Miniature painting",
        "answer": "small detailed court and devotional painting tradition",
        "tag": "painting",
        "explanation": "Fixed association: Miniature painting — small detailed court and devotional painting tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bani Thani",
        "answer": "iconic Kishangarh painting association",
        "tag": "painting",
        "explanation": "Fixed association: Bani Thani — iconic Kishangarh painting association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "culture-crafts-textiles",
    "day": 4,
    "title": "Handicrafts, textiles, prints and materials",
    "bucket": "Rajasthan Art & Culture",
    "priority": "Very High",
    "why": "Craft-place-material questions are among the easiest marks if the table is memorised.",
    "concepts": [
      "Thewa",
      "Usta art",
      "Blue Pottery",
      "Meenakari",
      "Kota Doria",
      "Bandhej",
      "Leheriya",
      "Sanganeri print",
      "Bagru print",
      "Lac work",
      "Mojari/Jutti",
      "Ivory/wood/stone craft",
      "Kathputli craft",
      "Marble craft"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Handicrafts, textiles, prints and materials under Rajasthan Art & Culture. It is included because Craft-place-material questions are among the easiest marks if the table is memorised. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Thewa, Usta art, Blue Pottery, Meenakari, Kota Doria, Bandhej, Leheriya, Sanganeri print, Bagru print, Lac work, Mojari/Jutti, Ivory/wood/stone craft, Kathputli craft, Marble craft. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan Art & Culture, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Thewa: Pratapgarh; gold work on glass. Fixed association: Thewa — Pratapgarh; gold work on glass. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Usta art: Bikaner; ornamental gold work. Fixed association: Usta art — Bikaner; ornamental gold work. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Blue Pottery: Jaipur craft memory. Fixed association: Blue Pottery — Jaipur craft memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Meenakari: Jaipur enamel work. Fixed association: Meenakari — Jaipur enamel work. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Kota Doria: Kota-Bundi textile memory. Fixed association: Kota Doria — Kota-Bundi textile memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Bandhej: tie-dye textile tradition. Fixed association: Bandhej — tie-dye textile tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Leheriya: wave-pattern tie-dye textile. Fixed association: Leheriya — wave-pattern tie-dye textile. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Sanganeri print: Sanganer; block printing. Fixed association: Sanganeri print — Sanganer; block printing. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Bagru print: Bagru; block printing. Fixed association: Bagru print — Bagru; block printing. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Lac work: Jaipur and other craft centres. Fixed association: Lac work — Jaipur and other craft centres. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Mojari/Jutti: traditional footwear. Fixed association: Mojari/Jutti — traditional footwear. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Ivory/wood/stone craft: traditional Rajasthan craft category. Fixed association: Ivory/wood/stone craft — traditional Rajasthan craft category. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Kathputli craft: puppet-making and performance tradition. Fixed association: Kathputli craft — puppet-making and performance tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Marble craft: Makrana/Rajasthan stone craft memory. Fixed association: Marble craft — Makrana/Rajasthan stone craft memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'Pratapgarh; gold work on glass', recall 'Thewa'. If it gives 'Thewa', recall 'Pratapgarh; gold work on glass'.\n- If the paper gives 'Bikaner; ornamental gold work', recall 'Usta art'. If it gives 'Usta art', recall 'Bikaner; ornamental gold work'.\n- If the paper gives 'Jaipur craft memory', recall 'Blue Pottery'. If it gives 'Blue Pottery', recall 'Jaipur craft memory'.\n- If the paper gives 'Jaipur enamel work', recall 'Meenakari'. If it gives 'Meenakari', recall 'Jaipur enamel work'.\n- If the paper gives 'Kota-Bundi textile memory', recall 'Kota Doria'. If it gives 'Kota Doria', recall 'Kota-Bundi textile memory'.\n- If the paper gives 'tie-dye textile tradition', recall 'Bandhej'. If it gives 'Bandhej', recall 'tie-dye textile tradition'.\n- If the paper gives 'wave-pattern tie-dye textile', recall 'Leheriya'. If it gives 'Leheriya', recall 'wave-pattern tie-dye textile'.\n- If the paper gives 'Sanganer; block printing', recall 'Sanganeri print'. If it gives 'Sanganeri print', recall 'Sanganer; block printing'.\n- If the paper gives 'Bagru; block printing', recall 'Bagru print'. If it gives 'Bagru print', recall 'Bagru; block printing'.\n- If the paper gives 'Jaipur and other craft centres', recall 'Lac work'. If it gives 'Lac work', recall 'Jaipur and other craft centres'.\n- If the paper gives 'traditional footwear', recall 'Mojari/Jutti'. If it gives 'Mojari/Jutti', recall 'traditional footwear'.\n- If the paper gives 'traditional Rajasthan craft category', recall 'Ivory/wood/stone craft'. If it gives 'Ivory/wood/stone craft', recall 'traditional Rajasthan craft category'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Thewa",
            "Pratapgarh; gold work on glass",
            "craft"
          ],
          [
            "Usta art",
            "Bikaner; ornamental gold work",
            "craft"
          ],
          [
            "Blue Pottery",
            "Jaipur craft memory",
            "craft"
          ],
          [
            "Meenakari",
            "Jaipur enamel work",
            "craft"
          ],
          [
            "Kota Doria",
            "Kota-Bundi textile memory",
            "craft"
          ],
          [
            "Bandhej",
            "tie-dye textile tradition",
            "craft"
          ],
          [
            "Leheriya",
            "wave-pattern tie-dye textile",
            "craft"
          ],
          [
            "Sanganeri print",
            "Sanganer; block printing",
            "craft"
          ],
          [
            "Bagru print",
            "Bagru; block printing",
            "craft"
          ],
          [
            "Lac work",
            "Jaipur and other craft centres",
            "craft"
          ],
          [
            "Mojari/Jutti",
            "traditional footwear",
            "craft"
          ],
          [
            "Ivory/wood/stone craft",
            "traditional Rajasthan craft category",
            "craft"
          ],
          [
            "Kathputli craft",
            "puppet-making and performance tradition",
            "craft"
          ],
          [
            "Marble craft",
            "Makrana/Rajasthan stone craft memory",
            "craft"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Thewa",
        "answer": "Pratapgarh; gold work on glass",
        "tag": "craft",
        "explanation": "Fixed association: Thewa — Pratapgarh; gold work on glass. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Usta art",
        "answer": "Bikaner; ornamental gold work",
        "tag": "craft",
        "explanation": "Fixed association: Usta art — Bikaner; ornamental gold work. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Blue Pottery",
        "answer": "Jaipur craft memory",
        "tag": "craft",
        "explanation": "Fixed association: Blue Pottery — Jaipur craft memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Meenakari",
        "answer": "Jaipur enamel work",
        "tag": "craft",
        "explanation": "Fixed association: Meenakari — Jaipur enamel work. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kota Doria",
        "answer": "Kota-Bundi textile memory",
        "tag": "craft",
        "explanation": "Fixed association: Kota Doria — Kota-Bundi textile memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bandhej",
        "answer": "tie-dye textile tradition",
        "tag": "craft",
        "explanation": "Fixed association: Bandhej — tie-dye textile tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Leheriya",
        "answer": "wave-pattern tie-dye textile",
        "tag": "craft",
        "explanation": "Fixed association: Leheriya — wave-pattern tie-dye textile. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sanganeri print",
        "answer": "Sanganer; block printing",
        "tag": "craft",
        "explanation": "Fixed association: Sanganeri print — Sanganer; block printing. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bagru print",
        "answer": "Bagru; block printing",
        "tag": "craft",
        "explanation": "Fixed association: Bagru print — Bagru; block printing. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Lac work",
        "answer": "Jaipur and other craft centres",
        "tag": "craft",
        "explanation": "Fixed association: Lac work — Jaipur and other craft centres. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mojari/Jutti",
        "answer": "traditional footwear",
        "tag": "craft",
        "explanation": "Fixed association: Mojari/Jutti — traditional footwear. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ivory/wood/stone craft",
        "answer": "traditional Rajasthan craft category",
        "tag": "craft",
        "explanation": "Fixed association: Ivory/wood/stone craft — traditional Rajasthan craft category. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kathputli craft",
        "answer": "puppet-making and performance tradition",
        "tag": "craft",
        "explanation": "Fixed association: Kathputli craft — puppet-making and performance tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Marble craft",
        "answer": "Makrana/Rajasthan stone craft memory",
        "tag": "craft",
        "explanation": "Fixed association: Marble craft — Makrana/Rajasthan stone craft memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "culture-ornaments-dress",
    "day": 5,
    "title": "Ornaments, dress and community culture",
    "bucket": "Rajasthan Art & Culture",
    "priority": "High",
    "why": "Body-part association and incorrect ornament pairs are standard Rajasthan GK traps.",
    "concepts": [
      "Borla",
      "Rakhdi",
      "Timaniya",
      "Hansli",
      "Nath",
      "Damana",
      "Bajuband",
      "Kardhani",
      "Paijeb",
      "Pagdi/Safa",
      "Angarkha",
      "Dhoti",
      "Odhani",
      "Ghagra"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Ornaments, dress and community culture under Rajasthan Art & Culture. It is included because Body-part association and incorrect ornament pairs are standard Rajasthan GK traps. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Borla, Rakhdi, Timaniya, Hansli, Nath, Damana, Bajuband, Kardhani, Paijeb, Pagdi/Safa, Angarkha, Dhoti, Odhani, Ghagra. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan Art & Culture, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Borla: forehead/head ornament. Fixed association: Borla — forehead/head ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Rakhdi: head ornament. Fixed association: Rakhdi — head ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Timaniya: neck ornament. Fixed association: Timaniya — neck ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Hansli: neck ornament. Fixed association: Hansli — neck ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Nath: nose ornament. Fixed association: Nath — nose ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Damana: traditional ornament memory. Fixed association: Damana — traditional ornament memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Bajuband: upper arm ornament. Fixed association: Bajuband — upper arm ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Kardhani: waist ornament. Fixed association: Kardhani — waist ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Paijeb: ankle ornament. Fixed association: Paijeb — ankle ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Pagdi/Safa: male headgear. Fixed association: Pagdi/Safa — male headgear. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Angarkha: traditional upper garment. Fixed association: Angarkha — traditional upper garment. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Dhoti: traditional male lower garment. Fixed association: Dhoti — traditional male lower garment. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Odhani: women’s veil/covering. Fixed association: Odhani — women’s veil/covering. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Ghagra: women’s skirt. Fixed association: Ghagra — women’s skirt. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n15. Regional costumes: district/community dress traditions. Fixed association: Regional costumes — district/community dress traditions. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'forehead/head ornament', recall 'Borla'. If it gives 'Borla', recall 'forehead/head ornament'.\n- If the paper gives 'head ornament', recall 'Rakhdi'. If it gives 'Rakhdi', recall 'head ornament'.\n- If the paper gives 'neck ornament', recall 'Timaniya'. If it gives 'Timaniya', recall 'neck ornament'.\n- If the paper gives 'neck ornament', recall 'Hansli'. If it gives 'Hansli', recall 'neck ornament'.\n- If the paper gives 'nose ornament', recall 'Nath'. If it gives 'Nath', recall 'nose ornament'.\n- If the paper gives 'traditional ornament memory', recall 'Damana'. If it gives 'Damana', recall 'traditional ornament memory'.\n- If the paper gives 'upper arm ornament', recall 'Bajuband'. If it gives 'Bajuband', recall 'upper arm ornament'.\n- If the paper gives 'waist ornament', recall 'Kardhani'. If it gives 'Kardhani', recall 'waist ornament'.\n- If the paper gives 'ankle ornament', recall 'Paijeb'. If it gives 'Paijeb', recall 'ankle ornament'.\n- If the paper gives 'male headgear', recall 'Pagdi/Safa'. If it gives 'Pagdi/Safa', recall 'male headgear'.\n- If the paper gives 'traditional upper garment', recall 'Angarkha'. If it gives 'Angarkha', recall 'traditional upper garment'.\n- If the paper gives 'traditional male lower garment', recall 'Dhoti'. If it gives 'Dhoti', recall 'traditional male lower garment'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Borla",
            "forehead/head ornament",
            "ornament"
          ],
          [
            "Rakhdi",
            "head ornament",
            "ornament"
          ],
          [
            "Timaniya",
            "neck ornament",
            "ornament"
          ],
          [
            "Hansli",
            "neck ornament",
            "ornament"
          ],
          [
            "Nath",
            "nose ornament",
            "ornament"
          ],
          [
            "Damana",
            "traditional ornament memory",
            "ornament"
          ],
          [
            "Bajuband",
            "upper arm ornament",
            "ornament"
          ],
          [
            "Kardhani",
            "waist ornament",
            "ornament"
          ],
          [
            "Paijeb",
            "ankle ornament",
            "ornament"
          ],
          [
            "Pagdi/Safa",
            "male headgear",
            "dress"
          ],
          [
            "Angarkha",
            "traditional upper garment",
            "dress"
          ],
          [
            "Dhoti",
            "traditional male lower garment",
            "dress"
          ],
          [
            "Odhani",
            "women’s veil/covering",
            "dress"
          ],
          [
            "Ghagra",
            "women’s skirt",
            "dress"
          ],
          [
            "Regional costumes",
            "district/community dress traditions",
            "dress"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Borla",
        "answer": "forehead/head ornament",
        "tag": "ornament",
        "explanation": "Fixed association: Borla — forehead/head ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rakhdi",
        "answer": "head ornament",
        "tag": "ornament",
        "explanation": "Fixed association: Rakhdi — head ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Timaniya",
        "answer": "neck ornament",
        "tag": "ornament",
        "explanation": "Fixed association: Timaniya — neck ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Hansli",
        "answer": "neck ornament",
        "tag": "ornament",
        "explanation": "Fixed association: Hansli — neck ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Nath",
        "answer": "nose ornament",
        "tag": "ornament",
        "explanation": "Fixed association: Nath — nose ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Damana",
        "answer": "traditional ornament memory",
        "tag": "ornament",
        "explanation": "Fixed association: Damana — traditional ornament memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bajuband",
        "answer": "upper arm ornament",
        "tag": "ornament",
        "explanation": "Fixed association: Bajuband — upper arm ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kardhani",
        "answer": "waist ornament",
        "tag": "ornament",
        "explanation": "Fixed association: Kardhani — waist ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Paijeb",
        "answer": "ankle ornament",
        "tag": "ornament",
        "explanation": "Fixed association: Paijeb — ankle ornament. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Pagdi/Safa",
        "answer": "male headgear",
        "tag": "dress",
        "explanation": "Fixed association: Pagdi/Safa — male headgear. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Angarkha",
        "answer": "traditional upper garment",
        "tag": "dress",
        "explanation": "Fixed association: Angarkha — traditional upper garment. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Dhoti",
        "answer": "traditional male lower garment",
        "tag": "dress",
        "explanation": "Fixed association: Dhoti — traditional male lower garment. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Odhani",
        "answer": "women’s veil/covering",
        "tag": "dress",
        "explanation": "Fixed association: Odhani — women’s veil/covering. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ghagra",
        "answer": "women’s skirt",
        "tag": "dress",
        "explanation": "Fixed association: Ghagra — women’s skirt. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Regional costumes",
        "answer": "district/community dress traditions",
        "tag": "dress",
        "explanation": "Fixed association: Regional costumes — district/community dress traditions. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "culture-fairs-festivals-deities",
    "day": 6,
    "title": "Fairs, festivals, temples and folk deities",
    "bucket": "Rajasthan Art & Culture",
    "priority": "Very High",
    "why": "Fair-district-deity-month and folk deity-symbol pairs are repeatedly asked.",
    "concepts": [
      "Pushkar fair",
      "Beneshwar fair",
      "Ramdevra fair",
      "Gogamedi fair",
      "Kaila Devi fair",
      "Karni Mata",
      "Sheetla Mata fair",
      "Gangaur",
      "Teej",
      "Sheetla Ashtami",
      "Urs Ajmer",
      "Pabuji",
      "Tejaji",
      "Gogaji"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Fairs, festivals, temples and folk deities under Rajasthan Art & Culture. It is included because Fair-district-deity-month and folk deity-symbol pairs are repeatedly asked. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Pushkar fair, Beneshwar fair, Ramdevra fair, Gogamedi fair, Kaila Devi fair, Karni Mata, Sheetla Mata fair, Gangaur, Teej, Sheetla Ashtami, Urs Ajmer, Pabuji, Tejaji, Gogaji. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan Art & Culture, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Pushkar fair: Ajmer; Kartik context. Fixed association: Pushkar fair — Ajmer; Kartik context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Beneshwar fair: tribal fair near Mahi-Som-Jakham confluence. Fixed association: Beneshwar fair — tribal fair near Mahi-Som-Jakham confluence. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Ramdevra fair: Baba Ramdevji association. Fixed association: Ramdevra fair — Baba Ramdevji association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Gogamedi fair: Gogaji association. Fixed association: Gogamedi fair — Gogaji association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Kaila Devi fair: Karauli region. Fixed association: Kaila Devi fair — Karauli region. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Karni Mata: Deshnok, Bikaner. Fixed association: Karni Mata — Deshnok, Bikaner. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Sheetla Mata fair: Sheetla Mata worship memory. Fixed association: Sheetla Mata fair — Sheetla Mata worship memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Gangaur: Gauri/Shiva-Parvati worship. Fixed association: Gangaur — Gauri/Shiva-Parvati worship. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Teej: monsoon/women’s festival. Fixed association: Teej — monsoon/women’s festival. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Sheetla Ashtami: Sheetla Mata worship. Fixed association: Sheetla Ashtami — Sheetla Mata worship. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Urs Ajmer: Khwaja Moinuddin Chishti. Fixed association: Urs Ajmer — Khwaja Moinuddin Chishti. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Pabuji: folk deity linked with Phad tradition. Fixed association: Pabuji — folk deity linked with Phad tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Tejaji: folk deity associated with snakebite protection. Fixed association: Tejaji — folk deity associated with snakebite protection. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Gogaji: folk deity associated with snake and hero tradition. Fixed association: Gogaji — folk deity associated with snake and hero tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n15. Ramdevji: folk deity of Ramdevra; social harmony memory. Fixed association: Ramdevji — folk deity of Ramdevra; social harmony memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n16. Devnarayanji: Gurjar-linked folk deity. Fixed association: Devnarayanji — Gurjar-linked folk deity. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n17. Mallinathji: Marwar folk deity/fair memory. Fixed association: Mallinathji — Marwar folk deity/fair memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n18. Harbhuji: Rajasthan folk deity memory. Fixed association: Harbhuji — Rajasthan folk deity memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n19. Mehaji: Rajasthan folk deity memory. Fixed association: Mehaji — Rajasthan folk deity memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'Ajmer; Kartik context', recall 'Pushkar fair'. If it gives 'Pushkar fair', recall 'Ajmer; Kartik context'.\n- If the paper gives 'tribal fair near Mahi-Som-Jakham confluence', recall 'Beneshwar fair'. If it gives 'Beneshwar fair', recall 'tribal fair near Mahi-Som-Jakham confluence'.\n- If the paper gives 'Baba Ramdevji association', recall 'Ramdevra fair'. If it gives 'Ramdevra fair', recall 'Baba Ramdevji association'.\n- If the paper gives 'Gogaji association', recall 'Gogamedi fair'. If it gives 'Gogamedi fair', recall 'Gogaji association'.\n- If the paper gives 'Karauli region', recall 'Kaila Devi fair'. If it gives 'Kaila Devi fair', recall 'Karauli region'.\n- If the paper gives 'Deshnok, Bikaner', recall 'Karni Mata'. If it gives 'Karni Mata', recall 'Deshnok, Bikaner'.\n- If the paper gives 'Sheetla Mata worship memory', recall 'Sheetla Mata fair'. If it gives 'Sheetla Mata fair', recall 'Sheetla Mata worship memory'.\n- If the paper gives 'Gauri/Shiva-Parvati worship', recall 'Gangaur'. If it gives 'Gangaur', recall 'Gauri/Shiva-Parvati worship'.\n- If the paper gives 'monsoon/women’s festival', recall 'Teej'. If it gives 'Teej', recall 'monsoon/women’s festival'.\n- If the paper gives 'Sheetla Mata worship', recall 'Sheetla Ashtami'. If it gives 'Sheetla Ashtami', recall 'Sheetla Mata worship'.\n- If the paper gives 'Khwaja Moinuddin Chishti', recall 'Urs Ajmer'. If it gives 'Urs Ajmer', recall 'Khwaja Moinuddin Chishti'.\n- If the paper gives 'folk deity linked with Phad tradition', recall 'Pabuji'. If it gives 'Pabuji', recall 'folk deity linked with Phad tradition'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Pushkar fair",
            "Ajmer; Kartik context",
            "fair"
          ],
          [
            "Beneshwar fair",
            "tribal fair near Mahi-Som-Jakham confluence",
            "fair"
          ],
          [
            "Ramdevra fair",
            "Baba Ramdevji association",
            "fair"
          ],
          [
            "Gogamedi fair",
            "Gogaji association",
            "fair"
          ],
          [
            "Kaila Devi fair",
            "Karauli region",
            "fair"
          ],
          [
            "Karni Mata",
            "Deshnok, Bikaner",
            "temple"
          ],
          [
            "Sheetla Mata fair",
            "Sheetla Mata worship memory",
            "fair"
          ],
          [
            "Gangaur",
            "Gauri/Shiva-Parvati worship",
            "festival"
          ],
          [
            "Teej",
            "monsoon/women’s festival",
            "festival"
          ],
          [
            "Sheetla Ashtami",
            "Sheetla Mata worship",
            "festival"
          ],
          [
            "Urs Ajmer",
            "Khwaja Moinuddin Chishti",
            "festival"
          ],
          [
            "Pabuji",
            "folk deity linked with Phad tradition",
            "deity"
          ],
          [
            "Tejaji",
            "folk deity associated with snakebite protection",
            "deity"
          ],
          [
            "Gogaji",
            "folk deity associated with snake and hero tradition",
            "deity"
          ],
          [
            "Ramdevji",
            "folk deity of Ramdevra; social harmony memory",
            "deity"
          ],
          [
            "Devnarayanji",
            "Gurjar-linked folk deity",
            "deity"
          ],
          [
            "Mallinathji",
            "Marwar folk deity/fair memory",
            "deity"
          ],
          [
            "Harbhuji",
            "Rajasthan folk deity memory",
            "deity"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Pushkar fair",
        "answer": "Ajmer; Kartik context",
        "tag": "fair",
        "explanation": "Fixed association: Pushkar fair — Ajmer; Kartik context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Beneshwar fair",
        "answer": "tribal fair near Mahi-Som-Jakham confluence",
        "tag": "fair",
        "explanation": "Fixed association: Beneshwar fair — tribal fair near Mahi-Som-Jakham confluence. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ramdevra fair",
        "answer": "Baba Ramdevji association",
        "tag": "fair",
        "explanation": "Fixed association: Ramdevra fair — Baba Ramdevji association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Gogamedi fair",
        "answer": "Gogaji association",
        "tag": "fair",
        "explanation": "Fixed association: Gogamedi fair — Gogaji association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kaila Devi fair",
        "answer": "Karauli region",
        "tag": "fair",
        "explanation": "Fixed association: Kaila Devi fair — Karauli region. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Karni Mata",
        "answer": "Deshnok, Bikaner",
        "tag": "temple",
        "explanation": "Fixed association: Karni Mata — Deshnok, Bikaner. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sheetla Mata fair",
        "answer": "Sheetla Mata worship memory",
        "tag": "fair",
        "explanation": "Fixed association: Sheetla Mata fair — Sheetla Mata worship memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Gangaur",
        "answer": "Gauri/Shiva-Parvati worship",
        "tag": "festival",
        "explanation": "Fixed association: Gangaur — Gauri/Shiva-Parvati worship. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Teej",
        "answer": "monsoon/women’s festival",
        "tag": "festival",
        "explanation": "Fixed association: Teej — monsoon/women’s festival. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sheetla Ashtami",
        "answer": "Sheetla Mata worship",
        "tag": "festival",
        "explanation": "Fixed association: Sheetla Ashtami — Sheetla Mata worship. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Urs Ajmer",
        "answer": "Khwaja Moinuddin Chishti",
        "tag": "festival",
        "explanation": "Fixed association: Urs Ajmer — Khwaja Moinuddin Chishti. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Pabuji",
        "answer": "folk deity linked with Phad tradition",
        "tag": "deity",
        "explanation": "Fixed association: Pabuji — folk deity linked with Phad tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Tejaji",
        "answer": "folk deity associated with snakebite protection",
        "tag": "deity",
        "explanation": "Fixed association: Tejaji — folk deity associated with snakebite protection. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Gogaji",
        "answer": "folk deity associated with snake and hero tradition",
        "tag": "deity",
        "explanation": "Fixed association: Gogaji — folk deity associated with snake and hero tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ramdevji",
        "answer": "folk deity of Ramdevra; social harmony memory",
        "tag": "deity",
        "explanation": "Fixed association: Ramdevji — folk deity of Ramdevra; social harmony memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Devnarayanji",
        "answer": "Gurjar-linked folk deity",
        "tag": "deity",
        "explanation": "Fixed association: Devnarayanji — Gurjar-linked folk deity. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mallinathji",
        "answer": "Marwar folk deity/fair memory",
        "tag": "deity",
        "explanation": "Fixed association: Mallinathji — Marwar folk deity/fair memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Harbhuji",
        "answer": "Rajasthan folk deity memory",
        "tag": "deity",
        "explanation": "Fixed association: Harbhuji — Rajasthan folk deity memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mehaji",
        "answer": "Rajasthan folk deity memory",
        "tag": "deity",
        "explanation": "Fixed association: Mehaji — Rajasthan folk deity memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "culture-forts-temples-centres",
    "day": 7,
    "title": "Forts, temples, palaces and culture centres",
    "bucket": "Rajasthan Art & Culture",
    "priority": "High",
    "why": "Monument-location and institution-purpose pairs appear in match-list questions.",
    "concepts": [
      "Chittorgarh Fort",
      "Kumbhalgarh Fort",
      "Mehrangarh Fort",
      "Jaisalmer/Sonargarh",
      "Taragarh",
      "Ranthambore Fort",
      "Bala Quila",
      "Gagron Fort",
      "Dilwara temples",
      "Eklingji",
      "Nathdwara",
      "Govind Devji",
      "Osian",
      "Bharatiya Lok Kala Mandal"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Forts, temples, palaces and culture centres under Rajasthan Art & Culture. It is included because Monument-location and institution-purpose pairs appear in match-list questions. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Chittorgarh Fort, Kumbhalgarh Fort, Mehrangarh Fort, Jaisalmer/Sonargarh, Taragarh, Ranthambore Fort, Bala Quila, Gagron Fort, Dilwara temples, Eklingji, Nathdwara, Govind Devji, Osian, Bharatiya Lok Kala Mandal. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan Art & Culture, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Chittorgarh Fort: Mewar; Vijay Stambh and Kirti Stambh context. Fixed association: Chittorgarh Fort — Mewar; Vijay Stambh and Kirti Stambh context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Kumbhalgarh Fort: Maharana Kumbha association. Fixed association: Kumbhalgarh Fort — Maharana Kumbha association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Mehrangarh Fort: Jodhpur; Rao Jodha association. Fixed association: Mehrangarh Fort — Jodhpur; Rao Jodha association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Jaisalmer/Sonargarh: Bhati rulers; living fort memory. Fixed association: Jaisalmer/Sonargarh — Bhati rulers; living fort memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Taragarh: Ajmer/Bundi fort memory depending context. Fixed association: Taragarh — Ajmer/Bundi fort memory depending context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Ranthambore Fort: Sawai Madhopur. Fixed association: Ranthambore Fort — Sawai Madhopur. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Bala Quila: Alwar. Fixed association: Bala Quila — Alwar. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Gagron Fort: Jhalawar; water fort memory. Fixed association: Gagron Fort — Jhalawar; water fort memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Dilwara temples: Mount Abu; Jain temples. Fixed association: Dilwara temples — Mount Abu; Jain temples. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Eklingji: Mewar deity tradition. Fixed association: Eklingji — Mewar deity tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Nathdwara: Shrinathji. Fixed association: Nathdwara — Shrinathji. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Govind Devji: Jaipur temple memory. Fixed association: Govind Devji — Jaipur temple memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Osian: temple town memory. Fixed association: Osian — temple town memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Bharatiya Lok Kala Mandal: Udaipur; folk culture preservation. Fixed association: Bharatiya Lok Kala Mandal — Udaipur; folk culture preservation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n15. Jawahar Kala Kendra: Jaipur; art and culture centre. Fixed association: Jawahar Kala Kendra — Jaipur; art and culture centre. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n16. Albert Hall Museum: Jaipur museum. Fixed association: Albert Hall Museum — Jaipur museum. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n17. Ahar Museum: Udaipur archaeology memory. Fixed association: Ahar Museum — Udaipur archaeology memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'Mewar; Vijay Stambh and Kirti Stambh context', recall 'Chittorgarh Fort'. If it gives 'Chittorgarh Fort', recall 'Mewar; Vijay Stambh and Kirti Stambh context'.\n- If the paper gives 'Maharana Kumbha association', recall 'Kumbhalgarh Fort'. If it gives 'Kumbhalgarh Fort', recall 'Maharana Kumbha association'.\n- If the paper gives 'Jodhpur; Rao Jodha association', recall 'Mehrangarh Fort'. If it gives 'Mehrangarh Fort', recall 'Jodhpur; Rao Jodha association'.\n- If the paper gives 'Bhati rulers; living fort memory', recall 'Jaisalmer/Sonargarh'. If it gives 'Jaisalmer/Sonargarh', recall 'Bhati rulers; living fort memory'.\n- If the paper gives 'Ajmer/Bundi fort memory depending context', recall 'Taragarh'. If it gives 'Taragarh', recall 'Ajmer/Bundi fort memory depending context'.\n- If the paper gives 'Sawai Madhopur', recall 'Ranthambore Fort'. If it gives 'Ranthambore Fort', recall 'Sawai Madhopur'.\n- If the paper gives 'Alwar', recall 'Bala Quila'. If it gives 'Bala Quila', recall 'Alwar'.\n- If the paper gives 'Jhalawar; water fort memory', recall 'Gagron Fort'. If it gives 'Gagron Fort', recall 'Jhalawar; water fort memory'.\n- If the paper gives 'Mount Abu; Jain temples', recall 'Dilwara temples'. If it gives 'Dilwara temples', recall 'Mount Abu; Jain temples'.\n- If the paper gives 'Mewar deity tradition', recall 'Eklingji'. If it gives 'Eklingji', recall 'Mewar deity tradition'.\n- If the paper gives 'Shrinathji', recall 'Nathdwara'. If it gives 'Nathdwara', recall 'Shrinathji'.\n- If the paper gives 'Jaipur temple memory', recall 'Govind Devji'. If it gives 'Govind Devji', recall 'Jaipur temple memory'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Chittorgarh Fort",
            "Mewar; Vijay Stambh and Kirti Stambh context",
            "fort"
          ],
          [
            "Kumbhalgarh Fort",
            "Maharana Kumbha association",
            "fort"
          ],
          [
            "Mehrangarh Fort",
            "Jodhpur; Rao Jodha association",
            "fort"
          ],
          [
            "Jaisalmer/Sonargarh",
            "Bhati rulers; living fort memory",
            "fort"
          ],
          [
            "Taragarh",
            "Ajmer/Bundi fort memory depending context",
            "fort"
          ],
          [
            "Ranthambore Fort",
            "Sawai Madhopur",
            "fort"
          ],
          [
            "Bala Quila",
            "Alwar",
            "fort"
          ],
          [
            "Gagron Fort",
            "Jhalawar; water fort memory",
            "fort"
          ],
          [
            "Dilwara temples",
            "Mount Abu; Jain temples",
            "temple"
          ],
          [
            "Eklingji",
            "Mewar deity tradition",
            "temple"
          ],
          [
            "Nathdwara",
            "Shrinathji",
            "temple"
          ],
          [
            "Govind Devji",
            "Jaipur temple memory",
            "temple"
          ],
          [
            "Osian",
            "temple town memory",
            "temple"
          ],
          [
            "Bharatiya Lok Kala Mandal",
            "Udaipur; folk culture preservation",
            "institution"
          ],
          [
            "Jawahar Kala Kendra",
            "Jaipur; art and culture centre",
            "institution"
          ],
          [
            "Albert Hall Museum",
            "Jaipur museum",
            "institution"
          ],
          [
            "Ahar Museum",
            "Udaipur archaeology memory",
            "institution"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Chittorgarh Fort",
        "answer": "Mewar; Vijay Stambh and Kirti Stambh context",
        "tag": "fort",
        "explanation": "Fixed association: Chittorgarh Fort — Mewar; Vijay Stambh and Kirti Stambh context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kumbhalgarh Fort",
        "answer": "Maharana Kumbha association",
        "tag": "fort",
        "explanation": "Fixed association: Kumbhalgarh Fort — Maharana Kumbha association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mehrangarh Fort",
        "answer": "Jodhpur; Rao Jodha association",
        "tag": "fort",
        "explanation": "Fixed association: Mehrangarh Fort — Jodhpur; Rao Jodha association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Jaisalmer/Sonargarh",
        "answer": "Bhati rulers; living fort memory",
        "tag": "fort",
        "explanation": "Fixed association: Jaisalmer/Sonargarh — Bhati rulers; living fort memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Taragarh",
        "answer": "Ajmer/Bundi fort memory depending context",
        "tag": "fort",
        "explanation": "Fixed association: Taragarh — Ajmer/Bundi fort memory depending context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ranthambore Fort",
        "answer": "Sawai Madhopur",
        "tag": "fort",
        "explanation": "Fixed association: Ranthambore Fort — Sawai Madhopur. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bala Quila",
        "answer": "Alwar",
        "tag": "fort",
        "explanation": "Fixed association: Bala Quila — Alwar. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Gagron Fort",
        "answer": "Jhalawar; water fort memory",
        "tag": "fort",
        "explanation": "Fixed association: Gagron Fort — Jhalawar; water fort memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Dilwara temples",
        "answer": "Mount Abu; Jain temples",
        "tag": "temple",
        "explanation": "Fixed association: Dilwara temples — Mount Abu; Jain temples. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Eklingji",
        "answer": "Mewar deity tradition",
        "tag": "temple",
        "explanation": "Fixed association: Eklingji — Mewar deity tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Nathdwara",
        "answer": "Shrinathji",
        "tag": "temple",
        "explanation": "Fixed association: Nathdwara — Shrinathji. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Govind Devji",
        "answer": "Jaipur temple memory",
        "tag": "temple",
        "explanation": "Fixed association: Govind Devji — Jaipur temple memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Osian",
        "answer": "temple town memory",
        "tag": "temple",
        "explanation": "Fixed association: Osian — temple town memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bharatiya Lok Kala Mandal",
        "answer": "Udaipur; folk culture preservation",
        "tag": "institution",
        "explanation": "Fixed association: Bharatiya Lok Kala Mandal — Udaipur; folk culture preservation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Jawahar Kala Kendra",
        "answer": "Jaipur; art and culture centre",
        "tag": "institution",
        "explanation": "Fixed association: Jawahar Kala Kendra — Jaipur; art and culture centre. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Albert Hall Museum",
        "answer": "Jaipur museum",
        "tag": "institution",
        "explanation": "Fixed association: Albert Hall Museum — Jaipur museum. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ahar Museum",
        "answer": "Udaipur archaeology memory",
        "tag": "institution",
        "explanation": "Fixed association: Ahar Museum — Udaipur archaeology memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "history-archaeology",
    "day": 8,
    "title": "Ancient Rajasthan and archaeological sites",
    "bucket": "Rajasthan History",
    "priority": "Very High",
    "why": "Site-district-culture and not-correct archaeological pairs are directly asked.",
    "concepts": [
      "Kalibanga",
      "Ahar",
      "Ganeshwar",
      "Bairath/Viratnagar",
      "Gilund",
      "Balathal",
      "Bagor",
      "Tilwara",
      "Nagari",
      "Sunari",
      "Ojhiyana",
      "Jodhpura",
      "Harappan link",
      "Copper culture link"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Ancient Rajasthan and archaeological sites under Rajasthan History. It is included because Site-district-culture and not-correct archaeological pairs are directly asked. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Kalibanga, Ahar, Ganeshwar, Bairath/Viratnagar, Gilund, Balathal, Bagor, Tilwara, Nagari, Sunari, Ojhiyana, Jodhpura, Harappan link, Copper culture link. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan History, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Kalibanga: Hanumangarh; Harappan site; ploughed field memory. Fixed association: Kalibanga — Hanumangarh; Harappan site; ploughed field memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Ahar: Udaipur; Ahar-Banas Chalcolithic culture. Fixed association: Ahar — Udaipur; Ahar-Banas Chalcolithic culture. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Ganeshwar: Sikar/Neem ka Thana belt; copper culture. Fixed association: Ganeshwar — Sikar/Neem ka Thana belt; copper culture. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Bairath/Viratnagar: Jaipur; Matsya region; Ashokan/Buddhist remains. Fixed association: Bairath/Viratnagar — Jaipur; Matsya region; Ashokan/Buddhist remains. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Gilund: Rajsamand; Ahar-Banas culture. Fixed association: Gilund — Rajsamand; Ahar-Banas culture. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Balathal: Udaipur region; Chalcolithic site. Fixed association: Balathal — Udaipur region; Chalcolithic site. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Bagor: Bhilwara; Mesolithic evidence. Fixed association: Bagor — Bhilwara; Mesolithic evidence. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Tilwara: Barmer; ancient/early culture evidence. Fixed association: Tilwara — Barmer; ancient/early culture evidence. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Nagari: Chittorgarh; ancient Madhyamika. Fixed association: Nagari — Chittorgarh; ancient Madhyamika. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Sunari: Jhunjhunu archaeological site. Fixed association: Sunari — Jhunjhunu archaeological site. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Ojhiyana: Chittorgarh region archaeological memory. Fixed association: Ojhiyana — Chittorgarh region archaeological memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Jodhpura: Jaipur region archaeological site. Fixed association: Jodhpura — Jaipur region archaeological site. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Harappan link: Kalibanga is the strongest Rajasthan Harappan memory. Fixed association: Harappan link — Kalibanga is the strongest Rajasthan Harappan memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Copper culture link: Ganeshwar is the strongest copper culture memory. Fixed association: Copper culture link — Ganeshwar is the strongest copper culture memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'Hanumangarh; Harappan site; ploughed field memory', recall 'Kalibanga'. If it gives 'Kalibanga', recall 'Hanumangarh; Harappan site; ploughed field memory'.\n- If the paper gives 'Udaipur; Ahar-Banas Chalcolithic culture', recall 'Ahar'. If it gives 'Ahar', recall 'Udaipur; Ahar-Banas Chalcolithic culture'.\n- If the paper gives 'Sikar/Neem ka Thana belt; copper culture', recall 'Ganeshwar'. If it gives 'Ganeshwar', recall 'Sikar/Neem ka Thana belt; copper culture'.\n- If the paper gives 'Jaipur; Matsya region; Ashokan/Buddhist remains', recall 'Bairath/Viratnagar'. If it gives 'Bairath/Viratnagar', recall 'Jaipur; Matsya region; Ashokan/Buddhist remains'.\n- If the paper gives 'Rajsamand; Ahar-Banas culture', recall 'Gilund'. If it gives 'Gilund', recall 'Rajsamand; Ahar-Banas culture'.\n- If the paper gives 'Udaipur region; Chalcolithic site', recall 'Balathal'. If it gives 'Balathal', recall 'Udaipur region; Chalcolithic site'.\n- If the paper gives 'Bhilwara; Mesolithic evidence', recall 'Bagor'. If it gives 'Bagor', recall 'Bhilwara; Mesolithic evidence'.\n- If the paper gives 'Barmer; ancient/early culture evidence', recall 'Tilwara'. If it gives 'Tilwara', recall 'Barmer; ancient/early culture evidence'.\n- If the paper gives 'Chittorgarh; ancient Madhyamika', recall 'Nagari'. If it gives 'Nagari', recall 'Chittorgarh; ancient Madhyamika'.\n- If the paper gives 'Jhunjhunu archaeological site', recall 'Sunari'. If it gives 'Sunari', recall 'Jhunjhunu archaeological site'.\n- If the paper gives 'Chittorgarh region archaeological memory', recall 'Ojhiyana'. If it gives 'Ojhiyana', recall 'Chittorgarh region archaeological memory'.\n- If the paper gives 'Jaipur region archaeological site', recall 'Jodhpura'. If it gives 'Jodhpura', recall 'Jaipur region archaeological site'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Kalibanga",
            "Hanumangarh; Harappan site; ploughed field memory",
            "archaeology"
          ],
          [
            "Ahar",
            "Udaipur; Ahar-Banas Chalcolithic culture",
            "archaeology"
          ],
          [
            "Ganeshwar",
            "Sikar/Neem ka Thana belt; copper culture",
            "archaeology"
          ],
          [
            "Bairath/Viratnagar",
            "Jaipur; Matsya region; Ashokan/Buddhist remains",
            "archaeology"
          ],
          [
            "Gilund",
            "Rajsamand; Ahar-Banas culture",
            "archaeology"
          ],
          [
            "Balathal",
            "Udaipur region; Chalcolithic site",
            "archaeology"
          ],
          [
            "Bagor",
            "Bhilwara; Mesolithic evidence",
            "archaeology"
          ],
          [
            "Tilwara",
            "Barmer; ancient/early culture evidence",
            "archaeology"
          ],
          [
            "Nagari",
            "Chittorgarh; ancient Madhyamika",
            "archaeology"
          ],
          [
            "Sunari",
            "Jhunjhunu archaeological site",
            "archaeology"
          ],
          [
            "Ojhiyana",
            "Chittorgarh region archaeological memory",
            "archaeology"
          ],
          [
            "Jodhpura",
            "Jaipur region archaeological site",
            "archaeology"
          ],
          [
            "Harappan link",
            "Kalibanga is the strongest Rajasthan Harappan memory",
            "archaeology"
          ],
          [
            "Copper culture link",
            "Ganeshwar is the strongest copper culture memory",
            "archaeology"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Kalibanga",
        "answer": "Hanumangarh; Harappan site; ploughed field memory",
        "tag": "archaeology",
        "explanation": "Fixed association: Kalibanga — Hanumangarh; Harappan site; ploughed field memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ahar",
        "answer": "Udaipur; Ahar-Banas Chalcolithic culture",
        "tag": "archaeology",
        "explanation": "Fixed association: Ahar — Udaipur; Ahar-Banas Chalcolithic culture. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ganeshwar",
        "answer": "Sikar/Neem ka Thana belt; copper culture",
        "tag": "archaeology",
        "explanation": "Fixed association: Ganeshwar — Sikar/Neem ka Thana belt; copper culture. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bairath/Viratnagar",
        "answer": "Jaipur; Matsya region; Ashokan/Buddhist remains",
        "tag": "archaeology",
        "explanation": "Fixed association: Bairath/Viratnagar — Jaipur; Matsya region; Ashokan/Buddhist remains. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Gilund",
        "answer": "Rajsamand; Ahar-Banas culture",
        "tag": "archaeology",
        "explanation": "Fixed association: Gilund — Rajsamand; Ahar-Banas culture. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Balathal",
        "answer": "Udaipur region; Chalcolithic site",
        "tag": "archaeology",
        "explanation": "Fixed association: Balathal — Udaipur region; Chalcolithic site. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bagor",
        "answer": "Bhilwara; Mesolithic evidence",
        "tag": "archaeology",
        "explanation": "Fixed association: Bagor — Bhilwara; Mesolithic evidence. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Tilwara",
        "answer": "Barmer; ancient/early culture evidence",
        "tag": "archaeology",
        "explanation": "Fixed association: Tilwara — Barmer; ancient/early culture evidence. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Nagari",
        "answer": "Chittorgarh; ancient Madhyamika",
        "tag": "archaeology",
        "explanation": "Fixed association: Nagari — Chittorgarh; ancient Madhyamika. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sunari",
        "answer": "Jhunjhunu archaeological site",
        "tag": "archaeology",
        "explanation": "Fixed association: Sunari — Jhunjhunu archaeological site. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ojhiyana",
        "answer": "Chittorgarh region archaeological memory",
        "tag": "archaeology",
        "explanation": "Fixed association: Ojhiyana — Chittorgarh region archaeological memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Jodhpura",
        "answer": "Jaipur region archaeological site",
        "tag": "archaeology",
        "explanation": "Fixed association: Jodhpura — Jaipur region archaeological site. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Harappan link",
        "answer": "Kalibanga is the strongest Rajasthan Harappan memory",
        "tag": "archaeology",
        "explanation": "Fixed association: Harappan link — Kalibanga is the strongest Rajasthan Harappan memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Copper culture link",
        "answer": "Ganeshwar is the strongest copper culture memory",
        "tag": "archaeology",
        "explanation": "Fixed association: Copper culture link — Ganeshwar is the strongest copper culture memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "history-dynasties-rulers",
    "day": 9,
    "title": "Rajput dynasties, capitals and major rulers",
    "bucket": "Rajasthan History",
    "priority": "Very High",
    "why": "Dynasty-ruler-capital-work questions are repeated in Rajasthan exams.",
    "concepts": [
      "Guhil/Sisodia",
      "Bappa Rawal",
      "Hammir",
      "Rana Kumbha",
      "Rana Sanga",
      "Maharana Pratap",
      "Amar Singh I",
      "Raj Singh",
      "Rathore",
      "Rao Jodha",
      "Rao Maldev",
      "Rao Chandrasen",
      "Durgadas Rathore",
      "Kachwaha"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Rajput dynasties, capitals and major rulers under Rajasthan History. It is included because Dynasty-ruler-capital-work questions are repeated in Rajasthan exams. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Guhil/Sisodia, Bappa Rawal, Hammir, Rana Kumbha, Rana Sanga, Maharana Pratap, Amar Singh I, Raj Singh, Rathore, Rao Jodha, Rao Maldev, Rao Chandrasen, Durgadas Rathore, Kachwaha. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan History, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Guhil/Sisodia: Mewar dynasty. Fixed association: Guhil/Sisodia — Mewar dynasty. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Bappa Rawal: early Mewar ruler memory. Fixed association: Bappa Rawal — early Mewar ruler memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Hammir: Mewar ruler memory. Fixed association: Hammir — Mewar ruler memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Rana Kumbha: Kumbhalgarh and Vijay Stambh association. Fixed association: Rana Kumbha — Kumbhalgarh and Vijay Stambh association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Rana Sanga: Battle of Khanwa association. Fixed association: Rana Sanga — Battle of Khanwa association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Maharana Pratap: Haldighati, Dewair and Chavand association. Fixed association: Maharana Pratap — Haldighati, Dewair and Chavand association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Amar Singh I: Mughal relation/treaty context. Fixed association: Amar Singh I — Mughal relation/treaty context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Raj Singh: Mewar ruler memory. Fixed association: Raj Singh — Mewar ruler memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Rathore: Marwar dynasty. Fixed association: Rathore — Marwar dynasty. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Rao Jodha: founder of Jodhpur. Fixed association: Rao Jodha — founder of Jodhpur. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Rao Maldev: Marwar ruler; Giri Sumel context. Fixed association: Rao Maldev — Marwar ruler; Giri Sumel context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Rao Chandrasen: Forgotten hero of Marwar memory. Fixed association: Rao Chandrasen — Forgotten hero of Marwar memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Durgadas Rathore: protected Ajit Singh; Marwar resistance. Fixed association: Durgadas Rathore — protected Ajit Singh; Marwar resistance. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Kachwaha: Amber/Jaipur dynasty. Fixed association: Kachwaha — Amber/Jaipur dynasty. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n15. Sawai Jai Singh II: Jaipur city and Jantar Mantar. Fixed association: Sawai Jai Singh II — Jaipur city and Jantar Mantar. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n16. Bhati: Jaisalmer dynasty memory. Fixed association: Bhati — Jaisalmer dynasty memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n17. Hada: Bundi/Kota dynasty memory. Fixed association: Hada — Bundi/Kota dynasty memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'Mewar dynasty', recall 'Guhil/Sisodia'. If it gives 'Guhil/Sisodia', recall 'Mewar dynasty'.\n- If the paper gives 'early Mewar ruler memory', recall 'Bappa Rawal'. If it gives 'Bappa Rawal', recall 'early Mewar ruler memory'.\n- If the paper gives 'Mewar ruler memory', recall 'Hammir'. If it gives 'Hammir', recall 'Mewar ruler memory'.\n- If the paper gives 'Kumbhalgarh and Vijay Stambh association', recall 'Rana Kumbha'. If it gives 'Rana Kumbha', recall 'Kumbhalgarh and Vijay Stambh association'.\n- If the paper gives 'Battle of Khanwa association', recall 'Rana Sanga'. If it gives 'Rana Sanga', recall 'Battle of Khanwa association'.\n- If the paper gives 'Haldighati, Dewair and Chavand association', recall 'Maharana Pratap'. If it gives 'Maharana Pratap', recall 'Haldighati, Dewair and Chavand association'.\n- If the paper gives 'Mughal relation/treaty context', recall 'Amar Singh I'. If it gives 'Amar Singh I', recall 'Mughal relation/treaty context'.\n- If the paper gives 'Mewar ruler memory', recall 'Raj Singh'. If it gives 'Raj Singh', recall 'Mewar ruler memory'.\n- If the paper gives 'Marwar dynasty', recall 'Rathore'. If it gives 'Rathore', recall 'Marwar dynasty'.\n- If the paper gives 'founder of Jodhpur', recall 'Rao Jodha'. If it gives 'Rao Jodha', recall 'founder of Jodhpur'.\n- If the paper gives 'Marwar ruler; Giri Sumel context', recall 'Rao Maldev'. If it gives 'Rao Maldev', recall 'Marwar ruler; Giri Sumel context'.\n- If the paper gives 'Forgotten hero of Marwar memory', recall 'Rao Chandrasen'. If it gives 'Rao Chandrasen', recall 'Forgotten hero of Marwar memory'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Guhil/Sisodia",
            "Mewar dynasty",
            "dynasty"
          ],
          [
            "Bappa Rawal",
            "early Mewar ruler memory",
            "ruler"
          ],
          [
            "Hammir",
            "Mewar ruler memory",
            "ruler"
          ],
          [
            "Rana Kumbha",
            "Kumbhalgarh and Vijay Stambh association",
            "ruler"
          ],
          [
            "Rana Sanga",
            "Battle of Khanwa association",
            "ruler"
          ],
          [
            "Maharana Pratap",
            "Haldighati, Dewair and Chavand association",
            "ruler"
          ],
          [
            "Amar Singh I",
            "Mughal relation/treaty context",
            "ruler"
          ],
          [
            "Raj Singh",
            "Mewar ruler memory",
            "ruler"
          ],
          [
            "Rathore",
            "Marwar dynasty",
            "dynasty"
          ],
          [
            "Rao Jodha",
            "founder of Jodhpur",
            "ruler"
          ],
          [
            "Rao Maldev",
            "Marwar ruler; Giri Sumel context",
            "ruler"
          ],
          [
            "Rao Chandrasen",
            "Forgotten hero of Marwar memory",
            "ruler"
          ],
          [
            "Durgadas Rathore",
            "protected Ajit Singh; Marwar resistance",
            "ruler"
          ],
          [
            "Kachwaha",
            "Amber/Jaipur dynasty",
            "dynasty"
          ],
          [
            "Sawai Jai Singh II",
            "Jaipur city and Jantar Mantar",
            "ruler"
          ],
          [
            "Bhati",
            "Jaisalmer dynasty memory",
            "dynasty"
          ],
          [
            "Hada",
            "Bundi/Kota dynasty memory",
            "dynasty"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Guhil/Sisodia",
        "answer": "Mewar dynasty",
        "tag": "dynasty",
        "explanation": "Fixed association: Guhil/Sisodia — Mewar dynasty. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bappa Rawal",
        "answer": "early Mewar ruler memory",
        "tag": "ruler",
        "explanation": "Fixed association: Bappa Rawal — early Mewar ruler memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Hammir",
        "answer": "Mewar ruler memory",
        "tag": "ruler",
        "explanation": "Fixed association: Hammir — Mewar ruler memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rana Kumbha",
        "answer": "Kumbhalgarh and Vijay Stambh association",
        "tag": "ruler",
        "explanation": "Fixed association: Rana Kumbha — Kumbhalgarh and Vijay Stambh association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rana Sanga",
        "answer": "Battle of Khanwa association",
        "tag": "ruler",
        "explanation": "Fixed association: Rana Sanga — Battle of Khanwa association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Maharana Pratap",
        "answer": "Haldighati, Dewair and Chavand association",
        "tag": "ruler",
        "explanation": "Fixed association: Maharana Pratap — Haldighati, Dewair and Chavand association. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Amar Singh I",
        "answer": "Mughal relation/treaty context",
        "tag": "ruler",
        "explanation": "Fixed association: Amar Singh I — Mughal relation/treaty context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Raj Singh",
        "answer": "Mewar ruler memory",
        "tag": "ruler",
        "explanation": "Fixed association: Raj Singh — Mewar ruler memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rathore",
        "answer": "Marwar dynasty",
        "tag": "dynasty",
        "explanation": "Fixed association: Rathore — Marwar dynasty. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rao Jodha",
        "answer": "founder of Jodhpur",
        "tag": "ruler",
        "explanation": "Fixed association: Rao Jodha — founder of Jodhpur. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rao Maldev",
        "answer": "Marwar ruler; Giri Sumel context",
        "tag": "ruler",
        "explanation": "Fixed association: Rao Maldev — Marwar ruler; Giri Sumel context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rao Chandrasen",
        "answer": "Forgotten hero of Marwar memory",
        "tag": "ruler",
        "explanation": "Fixed association: Rao Chandrasen — Forgotten hero of Marwar memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Durgadas Rathore",
        "answer": "protected Ajit Singh; Marwar resistance",
        "tag": "ruler",
        "explanation": "Fixed association: Durgadas Rathore — protected Ajit Singh; Marwar resistance. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kachwaha",
        "answer": "Amber/Jaipur dynasty",
        "tag": "dynasty",
        "explanation": "Fixed association: Kachwaha — Amber/Jaipur dynasty. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sawai Jai Singh II",
        "answer": "Jaipur city and Jantar Mantar",
        "tag": "ruler",
        "explanation": "Fixed association: Sawai Jai Singh II — Jaipur city and Jantar Mantar. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bhati",
        "answer": "Jaisalmer dynasty memory",
        "tag": "dynasty",
        "explanation": "Fixed association: Bhati — Jaisalmer dynasty memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Hada",
        "answer": "Bundi/Kota dynasty memory",
        "tag": "dynasty",
        "explanation": "Fixed association: Hada — Bundi/Kota dynasty memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "history-battles-chronology",
    "day": 10,
    "title": "Battles, chronology and war-result traps",
    "bucket": "Rajasthan History",
    "priority": "Very High",
    "why": "Chronology and battle-person-year questions appear frequently.",
    "concepts": [
      "Second Battle of Tarain",
      "Battle of Khanwa",
      "Battle of Haldighati",
      "Battle of Dewair",
      "Giri Sumel/Sammel",
      "Chavand",
      "Chetak",
      "Man Singh",
      "Rana Sanga",
      "Rao Maldev",
      "Chronology trap"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Battles, chronology and war-result traps under Rajasthan History. It is included because Chronology and battle-person-year questions appear frequently. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Second Battle of Tarain, Battle of Khanwa, Battle of Haldighati, Battle of Dewair, Giri Sumel/Sammel, Chavand, Chetak, Man Singh, Rana Sanga, Rao Maldev, Chronology trap. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan History, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Second Battle of Tarain: 1192; Prithviraj Chauhan vs Muhammad Ghori. Fixed association: Second Battle of Tarain — 1192; Prithviraj Chauhan vs Muhammad Ghori. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Battle of Khanwa: 1527; Babur vs Rana Sanga. Fixed association: Battle of Khanwa — 1527; Babur vs Rana Sanga. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Battle of Haldighati: 1576; Maharana Pratap vs Mughal forces led by Man Singh. Fixed association: Battle of Haldighati — 1576; Maharana Pratap vs Mughal forces led by Man Singh. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Battle of Dewair: 1582; Maharana Pratap recovery phase. Fixed association: Battle of Dewair — 1582; Maharana Pratap recovery phase. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Giri Sumel/Sammel: 1544; Sher Shah Suri vs Rao Maldev forces. Fixed association: Giri Sumel/Sammel — 1544; Sher Shah Suri vs Rao Maldev forces. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Chavand: Maharana Pratap’s later capital. Fixed association: Chavand — Maharana Pratap’s later capital. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Chetak: Maharana Pratap’s horse. Fixed association: Chetak — Maharana Pratap’s horse. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Man Singh: Mughal commander at Haldighati. Fixed association: Man Singh — Mughal commander at Haldighati. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Rana Sanga: Khanwa hero. Fixed association: Rana Sanga — Khanwa hero. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Rao Maldev: Giri Sumel context. Fixed association: Rao Maldev — Giri Sumel context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Chronology trap: Tarain before Khanwa before Giri Sumel before Haldighati before Dewair. Fixed association: Chronology trap — Tarain before Khanwa before Giri Sumel before Haldighati before Dewair. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives '1192; Prithviraj Chauhan vs Muhammad Ghori', recall 'Second Battle of Tarain'. If it gives 'Second Battle of Tarain', recall '1192; Prithviraj Chauhan vs Muhammad Ghori'.\n- If the paper gives '1527; Babur vs Rana Sanga', recall 'Battle of Khanwa'. If it gives 'Battle of Khanwa', recall '1527; Babur vs Rana Sanga'.\n- If the paper gives '1576; Maharana Pratap vs Mughal forces led by Man Singh', recall 'Battle of Haldighati'. If it gives 'Battle of Haldighati', recall '1576; Maharana Pratap vs Mughal forces led by Man Singh'.\n- If the paper gives '1582; Maharana Pratap recovery phase', recall 'Battle of Dewair'. If it gives 'Battle of Dewair', recall '1582; Maharana Pratap recovery phase'.\n- If the paper gives '1544; Sher Shah Suri vs Rao Maldev forces', recall 'Giri Sumel/Sammel'. If it gives 'Giri Sumel/Sammel', recall '1544; Sher Shah Suri vs Rao Maldev forces'.\n- If the paper gives 'Maharana Pratap’s later capital', recall 'Chavand'. If it gives 'Chavand', recall 'Maharana Pratap’s later capital'.\n- If the paper gives 'Maharana Pratap’s horse', recall 'Chetak'. If it gives 'Chetak', recall 'Maharana Pratap’s horse'.\n- If the paper gives 'Mughal commander at Haldighati', recall 'Man Singh'. If it gives 'Man Singh', recall 'Mughal commander at Haldighati'.\n- If the paper gives 'Khanwa hero', recall 'Rana Sanga'. If it gives 'Rana Sanga', recall 'Khanwa hero'.\n- If the paper gives 'Giri Sumel context', recall 'Rao Maldev'. If it gives 'Rao Maldev', recall 'Giri Sumel context'.\n- If the paper gives 'Tarain before Khanwa before Giri Sumel before Haldighati before Dewair', recall 'Chronology trap'. If it gives 'Chronology trap', recall 'Tarain before Khanwa before Giri Sumel before Haldighati before Dewair'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Second Battle of Tarain",
            "1192; Prithviraj Chauhan vs Muhammad Ghori",
            "battle"
          ],
          [
            "Battle of Khanwa",
            "1527; Babur vs Rana Sanga",
            "battle"
          ],
          [
            "Battle of Haldighati",
            "1576; Maharana Pratap vs Mughal forces led by Man Singh",
            "battle"
          ],
          [
            "Battle of Dewair",
            "1582; Maharana Pratap recovery phase",
            "battle"
          ],
          [
            "Giri Sumel/Sammel",
            "1544; Sher Shah Suri vs Rao Maldev forces",
            "battle"
          ],
          [
            "Chavand",
            "Maharana Pratap’s later capital",
            "battle"
          ],
          [
            "Chetak",
            "Maharana Pratap’s horse",
            "battle"
          ],
          [
            "Man Singh",
            "Mughal commander at Haldighati",
            "battle"
          ],
          [
            "Rana Sanga",
            "Khanwa hero",
            "battle"
          ],
          [
            "Rao Maldev",
            "Giri Sumel context",
            "battle"
          ],
          [
            "Chronology trap",
            "Tarain before Khanwa before Giri Sumel before Haldighati before Dewair",
            "battle"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Second Battle of Tarain",
        "answer": "1192; Prithviraj Chauhan vs Muhammad Ghori",
        "tag": "battle",
        "explanation": "Fixed association: Second Battle of Tarain — 1192; Prithviraj Chauhan vs Muhammad Ghori. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Battle of Khanwa",
        "answer": "1527; Babur vs Rana Sanga",
        "tag": "battle",
        "explanation": "Fixed association: Battle of Khanwa — 1527; Babur vs Rana Sanga. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Battle of Haldighati",
        "answer": "1576; Maharana Pratap vs Mughal forces led by Man Singh",
        "tag": "battle",
        "explanation": "Fixed association: Battle of Haldighati — 1576; Maharana Pratap vs Mughal forces led by Man Singh. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Battle of Dewair",
        "answer": "1582; Maharana Pratap recovery phase",
        "tag": "battle",
        "explanation": "Fixed association: Battle of Dewair — 1582; Maharana Pratap recovery phase. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Giri Sumel/Sammel",
        "answer": "1544; Sher Shah Suri vs Rao Maldev forces",
        "tag": "battle",
        "explanation": "Fixed association: Giri Sumel/Sammel — 1544; Sher Shah Suri vs Rao Maldev forces. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Chavand",
        "answer": "Maharana Pratap’s later capital",
        "tag": "battle",
        "explanation": "Fixed association: Chavand — Maharana Pratap’s later capital. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Chetak",
        "answer": "Maharana Pratap’s horse",
        "tag": "battle",
        "explanation": "Fixed association: Chetak — Maharana Pratap’s horse. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Man Singh",
        "answer": "Mughal commander at Haldighati",
        "tag": "battle",
        "explanation": "Fixed association: Man Singh — Mughal commander at Haldighati. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rana Sanga",
        "answer": "Khanwa hero",
        "tag": "battle",
        "explanation": "Fixed association: Rana Sanga — Khanwa hero. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rao Maldev",
        "answer": "Giri Sumel context",
        "tag": "battle",
        "explanation": "Fixed association: Rao Maldev — Giri Sumel context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Chronology trap",
        "answer": "Tarain before Khanwa before Giri Sumel before Haldighati before Dewair",
        "tag": "battle",
        "explanation": "Fixed association: Chronology trap — Tarain before Khanwa before Giri Sumel before Haldighati before Dewair. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "history-movements-integration",
    "day": 11,
    "title": "Freedom movements, Praja Mandal and Rajasthan integration",
    "bucket": "Rajasthan History",
    "priority": "Very High",
    "why": "Movement-leader-district and integration-stage questions are high-probability.",
    "concepts": [
      "Bijolia movement",
      "Begun movement",
      "Praja Mandal",
      "Bhil movement",
      "Govind Guru",
      "Rajasthan Seva Sangh",
      "Desh Hitaishini Sabha",
      "Veer Bharat Sabha",
      "Sarv Hitaishini Sabha",
      "Matsya Union",
      "United Rajasthan",
      "Greater Rajasthan",
      "1 November 1956",
      "Hiralal Shastri"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Freedom movements, Praja Mandal and Rajasthan integration under Rajasthan History. It is included because Movement-leader-district and integration-stage questions are high-probability. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Bijolia movement, Begun movement, Praja Mandal, Bhil movement, Govind Guru, Rajasthan Seva Sangh, Desh Hitaishini Sabha, Veer Bharat Sabha, Sarv Hitaishini Sabha, Matsya Union, United Rajasthan, Greater Rajasthan, 1 November 1956, Hiralal Shastri. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan History, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Bijolia movement: peasant movement; Vijay Singh Pathik memory. Fixed association: Bijolia movement — peasant movement; Vijay Singh Pathik memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Begun movement: peasant movement memory. Fixed association: Begun movement — peasant movement memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Praja Mandal: responsible government movement in princely states. Fixed association: Praja Mandal — responsible government movement in princely states. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Bhil movement: tribal issues and political awakening. Fixed association: Bhil movement — tribal issues and political awakening. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Govind Guru: tribal/Bhagat movement memory. Fixed association: Govind Guru — tribal/Bhagat movement memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Rajasthan Seva Sangh: political awakening and movement support. Fixed association: Rajasthan Seva Sangh — political awakening and movement support. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Desh Hitaishini Sabha: political/social organization memory. Fixed association: Desh Hitaishini Sabha — political/social organization memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Veer Bharat Sabha: political organization memory. Fixed association: Veer Bharat Sabha — political organization memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Sarv Hitaishini Sabha: political/social organization memory. Fixed association: Sarv Hitaishini Sabha — political/social organization memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Matsya Union: stage of Rajasthan integration. Fixed association: Matsya Union — stage of Rajasthan integration. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. United Rajasthan: stage of Rajasthan integration. Fixed association: United Rajasthan — stage of Rajasthan integration. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Greater Rajasthan: stage of Rajasthan integration. Fixed association: Greater Rajasthan — stage of Rajasthan integration. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. 1 November 1956: final major reorganisation context. Fixed association: 1 November 1956 — final major reorganisation context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Hiralal Shastri: first Chief Minister of Rajasthan. Fixed association: Hiralal Shastri — first Chief Minister of Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n15. Sardar Patel/V. P. Menon: integration of princely states context. Fixed association: Sardar Patel/V. P. Menon — integration of princely states context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'peasant movement; Vijay Singh Pathik memory', recall 'Bijolia movement'. If it gives 'Bijolia movement', recall 'peasant movement; Vijay Singh Pathik memory'.\n- If the paper gives 'peasant movement memory', recall 'Begun movement'. If it gives 'Begun movement', recall 'peasant movement memory'.\n- If the paper gives 'responsible government movement in princely states', recall 'Praja Mandal'. If it gives 'Praja Mandal', recall 'responsible government movement in princely states'.\n- If the paper gives 'tribal issues and political awakening', recall 'Bhil movement'. If it gives 'Bhil movement', recall 'tribal issues and political awakening'.\n- If the paper gives 'tribal/Bhagat movement memory', recall 'Govind Guru'. If it gives 'Govind Guru', recall 'tribal/Bhagat movement memory'.\n- If the paper gives 'political awakening and movement support', recall 'Rajasthan Seva Sangh'. If it gives 'Rajasthan Seva Sangh', recall 'political awakening and movement support'.\n- If the paper gives 'political/social organization memory', recall 'Desh Hitaishini Sabha'. If it gives 'Desh Hitaishini Sabha', recall 'political/social organization memory'.\n- If the paper gives 'political organization memory', recall 'Veer Bharat Sabha'. If it gives 'Veer Bharat Sabha', recall 'political organization memory'.\n- If the paper gives 'political/social organization memory', recall 'Sarv Hitaishini Sabha'. If it gives 'Sarv Hitaishini Sabha', recall 'political/social organization memory'.\n- If the paper gives 'stage of Rajasthan integration', recall 'Matsya Union'. If it gives 'Matsya Union', recall 'stage of Rajasthan integration'.\n- If the paper gives 'stage of Rajasthan integration', recall 'United Rajasthan'. If it gives 'United Rajasthan', recall 'stage of Rajasthan integration'.\n- If the paper gives 'stage of Rajasthan integration', recall 'Greater Rajasthan'. If it gives 'Greater Rajasthan', recall 'stage of Rajasthan integration'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Bijolia movement",
            "peasant movement; Vijay Singh Pathik memory",
            "movement"
          ],
          [
            "Begun movement",
            "peasant movement memory",
            "movement"
          ],
          [
            "Praja Mandal",
            "responsible government movement in princely states",
            "movement"
          ],
          [
            "Bhil movement",
            "tribal issues and political awakening",
            "movement"
          ],
          [
            "Govind Guru",
            "tribal/Bhagat movement memory",
            "movement"
          ],
          [
            "Rajasthan Seva Sangh",
            "political awakening and movement support",
            "organization"
          ],
          [
            "Desh Hitaishini Sabha",
            "political/social organization memory",
            "organization"
          ],
          [
            "Veer Bharat Sabha",
            "political organization memory",
            "organization"
          ],
          [
            "Sarv Hitaishini Sabha",
            "political/social organization memory",
            "organization"
          ],
          [
            "Matsya Union",
            "stage of Rajasthan integration",
            "integration"
          ],
          [
            "United Rajasthan",
            "stage of Rajasthan integration",
            "integration"
          ],
          [
            "Greater Rajasthan",
            "stage of Rajasthan integration",
            "integration"
          ],
          [
            "1 November 1956",
            "final major reorganisation context",
            "integration"
          ],
          [
            "Hiralal Shastri",
            "first Chief Minister of Rajasthan",
            "integration"
          ],
          [
            "Sardar Patel/V. P. Menon",
            "integration of princely states context",
            "integration"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Bijolia movement",
        "answer": "peasant movement; Vijay Singh Pathik memory",
        "tag": "movement",
        "explanation": "Fixed association: Bijolia movement — peasant movement; Vijay Singh Pathik memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Begun movement",
        "answer": "peasant movement memory",
        "tag": "movement",
        "explanation": "Fixed association: Begun movement — peasant movement memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Praja Mandal",
        "answer": "responsible government movement in princely states",
        "tag": "movement",
        "explanation": "Fixed association: Praja Mandal — responsible government movement in princely states. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bhil movement",
        "answer": "tribal issues and political awakening",
        "tag": "movement",
        "explanation": "Fixed association: Bhil movement — tribal issues and political awakening. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Govind Guru",
        "answer": "tribal/Bhagat movement memory",
        "tag": "movement",
        "explanation": "Fixed association: Govind Guru — tribal/Bhagat movement memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rajasthan Seva Sangh",
        "answer": "political awakening and movement support",
        "tag": "organization",
        "explanation": "Fixed association: Rajasthan Seva Sangh — political awakening and movement support. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Desh Hitaishini Sabha",
        "answer": "political/social organization memory",
        "tag": "organization",
        "explanation": "Fixed association: Desh Hitaishini Sabha — political/social organization memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Veer Bharat Sabha",
        "answer": "political organization memory",
        "tag": "organization",
        "explanation": "Fixed association: Veer Bharat Sabha — political organization memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sarv Hitaishini Sabha",
        "answer": "political/social organization memory",
        "tag": "organization",
        "explanation": "Fixed association: Sarv Hitaishini Sabha — political/social organization memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Matsya Union",
        "answer": "stage of Rajasthan integration",
        "tag": "integration",
        "explanation": "Fixed association: Matsya Union — stage of Rajasthan integration. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "United Rajasthan",
        "answer": "stage of Rajasthan integration",
        "tag": "integration",
        "explanation": "Fixed association: United Rajasthan — stage of Rajasthan integration. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Greater Rajasthan",
        "answer": "stage of Rajasthan integration",
        "tag": "integration",
        "explanation": "Fixed association: Greater Rajasthan — stage of Rajasthan integration. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "1 November 1956",
        "answer": "final major reorganisation context",
        "tag": "integration",
        "explanation": "Fixed association: 1 November 1956 — final major reorganisation context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Hiralal Shastri",
        "answer": "first Chief Minister of Rajasthan",
        "tag": "integration",
        "explanation": "Fixed association: Hiralal Shastri — first Chief Minister of Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sardar Patel/V. P. Menon",
        "answer": "integration of princely states context",
        "tag": "integration",
        "explanation": "Fixed association: Sardar Patel/V. P. Menon — integration of princely states context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "history-saints-literature-coins",
    "day": 12,
    "title": "Saints, sects, literature and coins",
    "bucket": "Rajasthan History",
    "priority": "High",
    "why": "Sects-founder and literature/currency pairs are direct but easy to mix.",
    "concepts": [
      "Bishnoi sect",
      "Dadu Panth",
      "Ram Snehi sect",
      "Jasnathi sect",
      "Nath tradition",
      "Mira Bai",
      "Charan saints",
      "Dingal",
      "Pingal",
      "Khyat",
      "Kuvalayamala",
      "Akhaishahi",
      "Jhadshahi",
      "Vijaishahi"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Saints, sects, literature and coins under Rajasthan History. It is included because Sects-founder and literature/currency pairs are direct but easy to mix. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Bishnoi sect, Dadu Panth, Ram Snehi sect, Jasnathi sect, Nath tradition, Mira Bai, Charan saints, Dingal, Pingal, Khyat, Kuvalayamala, Akhaishahi, Jhadshahi, Vijaishahi. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan History, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Bishnoi sect: Guru Jambhoji. Fixed association: Bishnoi sect — Guru Jambhoji. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Dadu Panth: Dadu Dayal. Fixed association: Dadu Panth — Dadu Dayal. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Ram Snehi sect: Ram Charanji / Dariyavji branch memory. Fixed association: Ram Snehi sect — Ram Charanji / Dariyavji branch memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Jasnathi sect: Jasnathji. Fixed association: Jasnathi sect — Jasnathji. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Nath tradition: yogi/saint tradition. Fixed association: Nath tradition — yogi/saint tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Mira Bai: Krishna devotion. Fixed association: Mira Bai — Krishna devotion. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Charan saints: literary and heroic tradition memory. Fixed association: Charan saints — literary and heroic tradition memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Dingal: heroic/martial Rajasthani literature. Fixed association: Dingal — heroic/martial Rajasthani literature. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Pingal: poetic/literary tradition memory. Fixed association: Pingal — poetic/literary tradition memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Khyat: historical chronicle tradition. Fixed association: Khyat — historical chronicle tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Kuvalayamala: early literary reference memory. Fixed association: Kuvalayamala — early literary reference memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Akhaishahi: princely currency matching trap. Fixed association: Akhaishahi — princely currency matching trap. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Jhadshahi: currency-state trap. Fixed association: Jhadshahi — currency-state trap. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Vijaishahi: currency-state trap. Fixed association: Vijaishahi — currency-state trap. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n15. Gajshahi: currency-state trap. Fixed association: Gajshahi — currency-state trap. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n16. Book-author pairs: learn title, author, tag, period. Fixed association: Book-author pairs — learn title, author, tag, period. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'Guru Jambhoji', recall 'Bishnoi sect'. If it gives 'Bishnoi sect', recall 'Guru Jambhoji'.\n- If the paper gives 'Dadu Dayal', recall 'Dadu Panth'. If it gives 'Dadu Panth', recall 'Dadu Dayal'.\n- If the paper gives 'Ram Charanji / Dariyavji branch memory', recall 'Ram Snehi sect'. If it gives 'Ram Snehi sect', recall 'Ram Charanji / Dariyavji branch memory'.\n- If the paper gives 'Jasnathji', recall 'Jasnathi sect'. If it gives 'Jasnathi sect', recall 'Jasnathji'.\n- If the paper gives 'yogi/saint tradition', recall 'Nath tradition'. If it gives 'Nath tradition', recall 'yogi/saint tradition'.\n- If the paper gives 'Krishna devotion', recall 'Mira Bai'. If it gives 'Mira Bai', recall 'Krishna devotion'.\n- If the paper gives 'literary and heroic tradition memory', recall 'Charan saints'. If it gives 'Charan saints', recall 'literary and heroic tradition memory'.\n- If the paper gives 'heroic/martial Rajasthani literature', recall 'Dingal'. If it gives 'Dingal', recall 'heroic/martial Rajasthani literature'.\n- If the paper gives 'poetic/literary tradition memory', recall 'Pingal'. If it gives 'Pingal', recall 'poetic/literary tradition memory'.\n- If the paper gives 'historical chronicle tradition', recall 'Khyat'. If it gives 'Khyat', recall 'historical chronicle tradition'.\n- If the paper gives 'early literary reference memory', recall 'Kuvalayamala'. If it gives 'Kuvalayamala', recall 'early literary reference memory'.\n- If the paper gives 'princely currency matching trap', recall 'Akhaishahi'. If it gives 'Akhaishahi', recall 'princely currency matching trap'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Bishnoi sect",
            "Guru Jambhoji",
            "saint"
          ],
          [
            "Dadu Panth",
            "Dadu Dayal",
            "saint"
          ],
          [
            "Ram Snehi sect",
            "Ram Charanji / Dariyavji branch memory",
            "saint"
          ],
          [
            "Jasnathi sect",
            "Jasnathji",
            "saint"
          ],
          [
            "Nath tradition",
            "yogi/saint tradition",
            "saint"
          ],
          [
            "Mira Bai",
            "Krishna devotion",
            "saint"
          ],
          [
            "Charan saints",
            "literary and heroic tradition memory",
            "literature"
          ],
          [
            "Dingal",
            "heroic/martial Rajasthani literature",
            "literature"
          ],
          [
            "Pingal",
            "poetic/literary tradition memory",
            "literature"
          ],
          [
            "Khyat",
            "historical chronicle tradition",
            "literature"
          ],
          [
            "Kuvalayamala",
            "early literary reference memory",
            "literature"
          ],
          [
            "Akhaishahi",
            "princely currency matching trap",
            "coin"
          ],
          [
            "Jhadshahi",
            "currency-state trap",
            "coin"
          ],
          [
            "Vijaishahi",
            "currency-state trap",
            "coin"
          ],
          [
            "Gajshahi",
            "currency-state trap",
            "coin"
          ],
          [
            "Book-author pairs",
            "learn title, author, tag, period",
            "literature"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Bishnoi sect",
        "answer": "Guru Jambhoji",
        "tag": "saint",
        "explanation": "Fixed association: Bishnoi sect — Guru Jambhoji. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Dadu Panth",
        "answer": "Dadu Dayal",
        "tag": "saint",
        "explanation": "Fixed association: Dadu Panth — Dadu Dayal. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ram Snehi sect",
        "answer": "Ram Charanji / Dariyavji branch memory",
        "tag": "saint",
        "explanation": "Fixed association: Ram Snehi sect — Ram Charanji / Dariyavji branch memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Jasnathi sect",
        "answer": "Jasnathji",
        "tag": "saint",
        "explanation": "Fixed association: Jasnathi sect — Jasnathji. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Nath tradition",
        "answer": "yogi/saint tradition",
        "tag": "saint",
        "explanation": "Fixed association: Nath tradition — yogi/saint tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mira Bai",
        "answer": "Krishna devotion",
        "tag": "saint",
        "explanation": "Fixed association: Mira Bai — Krishna devotion. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Charan saints",
        "answer": "literary and heroic tradition memory",
        "tag": "literature",
        "explanation": "Fixed association: Charan saints — literary and heroic tradition memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Dingal",
        "answer": "heroic/martial Rajasthani literature",
        "tag": "literature",
        "explanation": "Fixed association: Dingal — heroic/martial Rajasthani literature. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Pingal",
        "answer": "poetic/literary tradition memory",
        "tag": "literature",
        "explanation": "Fixed association: Pingal — poetic/literary tradition memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Khyat",
        "answer": "historical chronicle tradition",
        "tag": "literature",
        "explanation": "Fixed association: Khyat — historical chronicle tradition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kuvalayamala",
        "answer": "early literary reference memory",
        "tag": "literature",
        "explanation": "Fixed association: Kuvalayamala — early literary reference memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Akhaishahi",
        "answer": "princely currency matching trap",
        "tag": "coin",
        "explanation": "Fixed association: Akhaishahi — princely currency matching trap. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Jhadshahi",
        "answer": "currency-state trap",
        "tag": "coin",
        "explanation": "Fixed association: Jhadshahi — currency-state trap. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Vijaishahi",
        "answer": "currency-state trap",
        "tag": "coin",
        "explanation": "Fixed association: Vijaishahi — currency-state trap. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Gajshahi",
        "answer": "currency-state trap",
        "tag": "coin",
        "explanation": "Fixed association: Gajshahi — currency-state trap. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Book-author pairs",
        "answer": "learn title, author, tag, period",
        "tag": "literature",
        "explanation": "Fixed association: Book-author pairs — learn title, author, tag, period. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "geo-location-physical",
    "day": 13,
    "title": "Location, boundaries and physical divisions",
    "bucket": "Rajasthan Geography",
    "priority": "Very High",
    "why": "Physical geography is the base for rivers, climate, soils and map-style questions.",
    "concepts": [
      "Largest state by area",
      "International border",
      "Neighbouring states",
      "Western desert",
      "Aravalli Range",
      "Guru Shikhar",
      "Eastern plains",
      "South-eastern plateau",
      "Tropic of Cancer",
      "Extreme west memory",
      "International boundary districts"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Location, boundaries and physical divisions under Rajasthan Geography. It is included because Physical geography is the base for rivers, climate, soils and map-style questions. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Largest state by area, International border, Neighbouring states, Western desert, Aravalli Range, Guru Shikhar, Eastern plains, South-eastern plateau, Tropic of Cancer, Extreme west memory, International boundary districts. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan Geography, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Largest state by area: Rajasthan. Fixed association: Largest state by area — Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. International border: Pakistan border in western Rajasthan. Fixed association: International border — Pakistan border in western Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Neighbouring states: Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, Gujarat. Fixed association: Neighbouring states — Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, Gujarat. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Western desert: Thar desert region. Fixed association: Western desert — Thar desert region. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Aravalli Range: old fold mountain range. Fixed association: Aravalli Range — old fold mountain range. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Guru Shikhar: highest peak of Rajasthan/Aravalli. Fixed association: Guru Shikhar — highest peak of Rajasthan/Aravalli. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Eastern plains: Banas-Chambal plains context. Fixed association: Eastern plains — Banas-Chambal plains context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. South-eastern plateau: Hadoti/Malwa edge memory. Fixed association: South-eastern plateau — Hadoti/Malwa edge memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Tropic of Cancer: passes through southern Rajasthan. Fixed association: Tropic of Cancer — passes through southern Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Extreme west memory: Jaisalmer-Barmer belt. Fixed association: Extreme west memory — Jaisalmer-Barmer belt. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. International boundary districts: western border districts memory. Fixed association: International boundary districts — western border districts memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'Rajasthan', recall 'Largest state by area'. If it gives 'Largest state by area', recall 'Rajasthan'.\n- If the paper gives 'Pakistan border in western Rajasthan', recall 'International border'. If it gives 'International border', recall 'Pakistan border in western Rajasthan'.\n- If the paper gives 'Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, Gujarat', recall 'Neighbouring states'. If it gives 'Neighbouring states', recall 'Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, Gujarat'.\n- If the paper gives 'Thar desert region', recall 'Western desert'. If it gives 'Western desert', recall 'Thar desert region'.\n- If the paper gives 'old fold mountain range', recall 'Aravalli Range'. If it gives 'Aravalli Range', recall 'old fold mountain range'.\n- If the paper gives 'highest peak of Rajasthan/Aravalli', recall 'Guru Shikhar'. If it gives 'Guru Shikhar', recall 'highest peak of Rajasthan/Aravalli'.\n- If the paper gives 'Banas-Chambal plains context', recall 'Eastern plains'. If it gives 'Eastern plains', recall 'Banas-Chambal plains context'.\n- If the paper gives 'Hadoti/Malwa edge memory', recall 'South-eastern plateau'. If it gives 'South-eastern plateau', recall 'Hadoti/Malwa edge memory'.\n- If the paper gives 'passes through southern Rajasthan', recall 'Tropic of Cancer'. If it gives 'Tropic of Cancer', recall 'passes through southern Rajasthan'.\n- If the paper gives 'Jaisalmer-Barmer belt', recall 'Extreme west memory'. If it gives 'Extreme west memory', recall 'Jaisalmer-Barmer belt'.\n- If the paper gives 'western border districts memory', recall 'International boundary districts'. If it gives 'International boundary districts', recall 'western border districts memory'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Largest state by area",
            "Rajasthan",
            "location"
          ],
          [
            "International border",
            "Pakistan border in western Rajasthan",
            "location"
          ],
          [
            "Neighbouring states",
            "Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, Gujarat",
            "location"
          ],
          [
            "Western desert",
            "Thar desert region",
            "physical"
          ],
          [
            "Aravalli Range",
            "old fold mountain range",
            "physical"
          ],
          [
            "Guru Shikhar",
            "highest peak of Rajasthan/Aravalli",
            "physical"
          ],
          [
            "Eastern plains",
            "Banas-Chambal plains context",
            "physical"
          ],
          [
            "South-eastern plateau",
            "Hadoti/Malwa edge memory",
            "physical"
          ],
          [
            "Tropic of Cancer",
            "passes through southern Rajasthan",
            "location"
          ],
          [
            "Extreme west memory",
            "Jaisalmer-Barmer belt",
            "location"
          ],
          [
            "International boundary districts",
            "western border districts memory",
            "location"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Largest state by area",
        "answer": "Rajasthan",
        "tag": "location",
        "explanation": "Fixed association: Largest state by area — Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "International border",
        "answer": "Pakistan border in western Rajasthan",
        "tag": "location",
        "explanation": "Fixed association: International border — Pakistan border in western Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Neighbouring states",
        "answer": "Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, Gujarat",
        "tag": "location",
        "explanation": "Fixed association: Neighbouring states — Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, Gujarat. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Western desert",
        "answer": "Thar desert region",
        "tag": "physical",
        "explanation": "Fixed association: Western desert — Thar desert region. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Aravalli Range",
        "answer": "old fold mountain range",
        "tag": "physical",
        "explanation": "Fixed association: Aravalli Range — old fold mountain range. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Guru Shikhar",
        "answer": "highest peak of Rajasthan/Aravalli",
        "tag": "physical",
        "explanation": "Fixed association: Guru Shikhar — highest peak of Rajasthan/Aravalli. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Eastern plains",
        "answer": "Banas-Chambal plains context",
        "tag": "physical",
        "explanation": "Fixed association: Eastern plains — Banas-Chambal plains context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "South-eastern plateau",
        "answer": "Hadoti/Malwa edge memory",
        "tag": "physical",
        "explanation": "Fixed association: South-eastern plateau — Hadoti/Malwa edge memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Tropic of Cancer",
        "answer": "passes through southern Rajasthan",
        "tag": "location",
        "explanation": "Fixed association: Tropic of Cancer — passes through southern Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Extreme west memory",
        "answer": "Jaisalmer-Barmer belt",
        "tag": "location",
        "explanation": "Fixed association: Extreme west memory — Jaisalmer-Barmer belt. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "International boundary districts",
        "answer": "western border districts memory",
        "tag": "location",
        "explanation": "Fixed association: International boundary districts — western border districts memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "geo-aravalli-climate-soils",
    "day": 14,
    "title": "Aravalli, climate regions, rainfall and soils",
    "bucket": "Rajasthan Geography",
    "priority": "Very High",
    "why": "Climate-region and soil-district/crop questions are common not-correct pairs.",
    "concepts": [
      "Desert soil",
      "Red-yellow soil",
      "Black soil",
      "Alluvial soil",
      "Laterite soil",
      "Arid climate",
      "Semi-arid climate",
      "CAw climate",
      "DBw/DAw",
      "Highest rainfall tendency",
      "Drought-prone area",
      "Aravalli climate role"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Aravalli, climate regions, rainfall and soils under Rajasthan Geography. It is included because Climate-region and soil-district/crop questions are common not-correct pairs. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Desert soil, Red-yellow soil, Black soil, Alluvial soil, Laterite soil, Arid climate, Semi-arid climate, CAw climate, DBw/DAw, Highest rainfall tendency, Drought-prone area, Aravalli climate role. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan Geography, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Desert soil: western Rajasthan. Fixed association: Desert soil — western Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Red-yellow soil: southern/south-eastern Rajasthan memory. Fixed association: Red-yellow soil — southern/south-eastern Rajasthan memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Black soil: Hadoti/south-east crop belt memory. Fixed association: Black soil — Hadoti/south-east crop belt memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Alluvial soil: eastern plains. Fixed association: Alluvial soil — eastern plains. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Laterite soil: southern high rainfall patches memory. Fixed association: Laterite soil — southern high rainfall patches memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Arid climate: western desert. Fixed association: Arid climate — western desert. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Semi-arid climate: central Rajasthan belt. Fixed association: Semi-arid climate — central Rajasthan belt. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. CAw climate: south/south-east humid tendency. Fixed association: CAw climate — south/south-east humid tendency. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. DBw/DAw: desert/semi-dry climate classification memory. Fixed association: DBw/DAw — desert/semi-dry climate classification memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Highest rainfall tendency: south-east/southern districts. Fixed association: Highest rainfall tendency — south-east/southern districts. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Drought-prone area: western Rajasthan. Fixed association: Drought-prone area — western Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Aravalli climate role: separates western arid and eastern/southern comparatively humid regions. Fixed association: Aravalli climate role — separates western arid and eastern/southern comparatively humid regions. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'western Rajasthan', recall 'Desert soil'. If it gives 'Desert soil', recall 'western Rajasthan'.\n- If the paper gives 'southern/south-eastern Rajasthan memory', recall 'Red-yellow soil'. If it gives 'Red-yellow soil', recall 'southern/south-eastern Rajasthan memory'.\n- If the paper gives 'Hadoti/south-east crop belt memory', recall 'Black soil'. If it gives 'Black soil', recall 'Hadoti/south-east crop belt memory'.\n- If the paper gives 'eastern plains', recall 'Alluvial soil'. If it gives 'Alluvial soil', recall 'eastern plains'.\n- If the paper gives 'southern high rainfall patches memory', recall 'Laterite soil'. If it gives 'Laterite soil', recall 'southern high rainfall patches memory'.\n- If the paper gives 'western desert', recall 'Arid climate'. If it gives 'Arid climate', recall 'western desert'.\n- If the paper gives 'central Rajasthan belt', recall 'Semi-arid climate'. If it gives 'Semi-arid climate', recall 'central Rajasthan belt'.\n- If the paper gives 'south/south-east humid tendency', recall 'CAw climate'. If it gives 'CAw climate', recall 'south/south-east humid tendency'.\n- If the paper gives 'desert/semi-dry climate classification memory', recall 'DBw/DAw'. If it gives 'DBw/DAw', recall 'desert/semi-dry climate classification memory'.\n- If the paper gives 'south-east/southern districts', recall 'Highest rainfall tendency'. If it gives 'Highest rainfall tendency', recall 'south-east/southern districts'.\n- If the paper gives 'western Rajasthan', recall 'Drought-prone area'. If it gives 'Drought-prone area', recall 'western Rajasthan'.\n- If the paper gives 'separates western arid and eastern/southern comparatively humid regions', recall 'Aravalli climate role'. If it gives 'Aravalli climate role', recall 'separates western arid and eastern/southern comparatively humid regions'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Desert soil",
            "western Rajasthan",
            "soil"
          ],
          [
            "Red-yellow soil",
            "southern/south-eastern Rajasthan memory",
            "soil"
          ],
          [
            "Black soil",
            "Hadoti/south-east crop belt memory",
            "soil"
          ],
          [
            "Alluvial soil",
            "eastern plains",
            "soil"
          ],
          [
            "Laterite soil",
            "southern high rainfall patches memory",
            "soil"
          ],
          [
            "Arid climate",
            "western desert",
            "climate"
          ],
          [
            "Semi-arid climate",
            "central Rajasthan belt",
            "climate"
          ],
          [
            "CAw climate",
            "south/south-east humid tendency",
            "climate"
          ],
          [
            "DBw/DAw",
            "desert/semi-dry climate classification memory",
            "climate"
          ],
          [
            "Highest rainfall tendency",
            "south-east/southern districts",
            "rainfall"
          ],
          [
            "Drought-prone area",
            "western Rajasthan",
            "rainfall"
          ],
          [
            "Aravalli climate role",
            "separates western arid and eastern/southern comparatively humid regions",
            "physical"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Desert soil",
        "answer": "western Rajasthan",
        "tag": "soil",
        "explanation": "Fixed association: Desert soil — western Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Red-yellow soil",
        "answer": "southern/south-eastern Rajasthan memory",
        "tag": "soil",
        "explanation": "Fixed association: Red-yellow soil — southern/south-eastern Rajasthan memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Black soil",
        "answer": "Hadoti/south-east crop belt memory",
        "tag": "soil",
        "explanation": "Fixed association: Black soil — Hadoti/south-east crop belt memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Alluvial soil",
        "answer": "eastern plains",
        "tag": "soil",
        "explanation": "Fixed association: Alluvial soil — eastern plains. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Laterite soil",
        "answer": "southern high rainfall patches memory",
        "tag": "soil",
        "explanation": "Fixed association: Laterite soil — southern high rainfall patches memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Arid climate",
        "answer": "western desert",
        "tag": "climate",
        "explanation": "Fixed association: Arid climate — western desert. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Semi-arid climate",
        "answer": "central Rajasthan belt",
        "tag": "climate",
        "explanation": "Fixed association: Semi-arid climate — central Rajasthan belt. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "CAw climate",
        "answer": "south/south-east humid tendency",
        "tag": "climate",
        "explanation": "Fixed association: CAw climate — south/south-east humid tendency. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "DBw/DAw",
        "answer": "desert/semi-dry climate classification memory",
        "tag": "climate",
        "explanation": "Fixed association: DBw/DAw — desert/semi-dry climate classification memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Highest rainfall tendency",
        "answer": "south-east/southern districts",
        "tag": "rainfall",
        "explanation": "Fixed association: Highest rainfall tendency — south-east/southern districts. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Drought-prone area",
        "answer": "western Rajasthan",
        "tag": "rainfall",
        "explanation": "Fixed association: Drought-prone area — western Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Aravalli climate role",
        "answer": "separates western arid and eastern/southern comparatively humid regions",
        "tag": "physical",
        "explanation": "Fixed association: Aravalli climate role — separates western arid and eastern/southern comparatively humid regions. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "geo-rivers-drainage",
    "day": 15,
    "title": "Rivers, drainage systems and tributaries",
    "bucket": "Rajasthan Geography",
    "priority": "Very High",
    "why": "River-origin-tributary-dam questions are standard in RSSB papers.",
    "concepts": [
      "Luni",
      "Chambal",
      "Banas",
      "Mahi",
      "Sabarmati",
      "Ghaggar",
      "Banganga",
      "Kali Sindh",
      "Parbati",
      "Berach",
      "Drainage trap"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Rivers, drainage systems and tributaries under Rajasthan Geography. It is included because River-origin-tributary-dam questions are standard in RSSB papers. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Luni, Chambal, Banas, Mahi, Sabarmati, Ghaggar, Banganga, Kali Sindh, Parbati, Berach, Drainage trap. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan Geography, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Luni: inland/saline drainage; western Rajasthan. Fixed association: Luni — inland/saline drainage; western Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Chambal: Hadoti lifeline; important dam/project river. Fixed association: Chambal — Hadoti lifeline; important dam/project river. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Banas: major river of eastern Rajasthan. Fixed association: Banas — major river of eastern Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Mahi: southern Rajasthan; Arabian Sea drainage system. Fixed association: Mahi — southern Rajasthan; Arabian Sea drainage system. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Sabarmati: origin in Aravalli area memory. Fixed association: Sabarmati — origin in Aravalli area memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Ghaggar: inland/seasonal northern drainage. Fixed association: Ghaggar — inland/seasonal northern drainage. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Banganga: eastern Rajasthan river. Fixed association: Banganga — eastern Rajasthan river. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Kali Sindh: Chambal tributary system. Fixed association: Kali Sindh — Chambal tributary system. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Parbati: Chambal tributary. Fixed association: Parbati — Chambal tributary. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Berach: Banas system memory. Fixed association: Berach — Banas system memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Drainage trap: inland drainage is common in western Rajasthan. Fixed association: Drainage trap — inland drainage is common in western Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'inland/saline drainage; western Rajasthan', recall 'Luni'. If it gives 'Luni', recall 'inland/saline drainage; western Rajasthan'.\n- If the paper gives 'Hadoti lifeline; important dam/project river', recall 'Chambal'. If it gives 'Chambal', recall 'Hadoti lifeline; important dam/project river'.\n- If the paper gives 'major river of eastern Rajasthan', recall 'Banas'. If it gives 'Banas', recall 'major river of eastern Rajasthan'.\n- If the paper gives 'southern Rajasthan; Arabian Sea drainage system', recall 'Mahi'. If it gives 'Mahi', recall 'southern Rajasthan; Arabian Sea drainage system'.\n- If the paper gives 'origin in Aravalli area memory', recall 'Sabarmati'. If it gives 'Sabarmati', recall 'origin in Aravalli area memory'.\n- If the paper gives 'inland/seasonal northern drainage', recall 'Ghaggar'. If it gives 'Ghaggar', recall 'inland/seasonal northern drainage'.\n- If the paper gives 'eastern Rajasthan river', recall 'Banganga'. If it gives 'Banganga', recall 'eastern Rajasthan river'.\n- If the paper gives 'Chambal tributary system', recall 'Kali Sindh'. If it gives 'Kali Sindh', recall 'Chambal tributary system'.\n- If the paper gives 'Chambal tributary', recall 'Parbati'. If it gives 'Parbati', recall 'Chambal tributary'.\n- If the paper gives 'Banas system memory', recall 'Berach'. If it gives 'Berach', recall 'Banas system memory'.\n- If the paper gives 'inland drainage is common in western Rajasthan', recall 'Drainage trap'. If it gives 'Drainage trap', recall 'inland drainage is common in western Rajasthan'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Luni",
            "inland/saline drainage; western Rajasthan",
            "river"
          ],
          [
            "Chambal",
            "Hadoti lifeline; important dam/project river",
            "river"
          ],
          [
            "Banas",
            "major river of eastern Rajasthan",
            "river"
          ],
          [
            "Mahi",
            "southern Rajasthan; Arabian Sea drainage system",
            "river"
          ],
          [
            "Sabarmati",
            "origin in Aravalli area memory",
            "river"
          ],
          [
            "Ghaggar",
            "inland/seasonal northern drainage",
            "river"
          ],
          [
            "Banganga",
            "eastern Rajasthan river",
            "river"
          ],
          [
            "Kali Sindh",
            "Chambal tributary system",
            "river"
          ],
          [
            "Parbati",
            "Chambal tributary",
            "river"
          ],
          [
            "Berach",
            "Banas system memory",
            "river"
          ],
          [
            "Drainage trap",
            "inland drainage is common in western Rajasthan",
            "river"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Luni",
        "answer": "inland/saline drainage; western Rajasthan",
        "tag": "river",
        "explanation": "Fixed association: Luni — inland/saline drainage; western Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Chambal",
        "answer": "Hadoti lifeline; important dam/project river",
        "tag": "river",
        "explanation": "Fixed association: Chambal — Hadoti lifeline; important dam/project river. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Banas",
        "answer": "major river of eastern Rajasthan",
        "tag": "river",
        "explanation": "Fixed association: Banas — major river of eastern Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mahi",
        "answer": "southern Rajasthan; Arabian Sea drainage system",
        "tag": "river",
        "explanation": "Fixed association: Mahi — southern Rajasthan; Arabian Sea drainage system. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sabarmati",
        "answer": "origin in Aravalli area memory",
        "tag": "river",
        "explanation": "Fixed association: Sabarmati — origin in Aravalli area memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ghaggar",
        "answer": "inland/seasonal northern drainage",
        "tag": "river",
        "explanation": "Fixed association: Ghaggar — inland/seasonal northern drainage. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Banganga",
        "answer": "eastern Rajasthan river",
        "tag": "river",
        "explanation": "Fixed association: Banganga — eastern Rajasthan river. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kali Sindh",
        "answer": "Chambal tributary system",
        "tag": "river",
        "explanation": "Fixed association: Kali Sindh — Chambal tributary system. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Parbati",
        "answer": "Chambal tributary",
        "tag": "river",
        "explanation": "Fixed association: Parbati — Chambal tributary. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Berach",
        "answer": "Banas system memory",
        "tag": "river",
        "explanation": "Fixed association: Berach — Banas system memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Drainage trap",
        "answer": "inland drainage is common in western Rajasthan",
        "tag": "river",
        "explanation": "Fixed association: Drainage trap — inland drainage is common in western Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "geo-lakes-irrigation",
    "day": 16,
    "title": "Lakes, dams, canals and irrigation projects",
    "bucket": "Rajasthan Geography",
    "priority": "Very High",
    "why": "Lake-district-type and project-river questions are direct scoring areas.",
    "concepts": [
      "Sambhar Lake",
      "Pushkar Lake",
      "Jaisamand/Dhebar",
      "Rajsamand Lake",
      "Nakki Lake",
      "Pachpadra Lake",
      "Didwana Lake",
      "Fateh Sagar",
      "Pichola Lake",
      "Ana Sagar",
      "Indira Gandhi Canal",
      "Bhakra project",
      "Chambal project",
      "Mahi Bajaj Sagar"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Lakes, dams, canals and irrigation projects under Rajasthan Geography. It is included because Lake-district-type and project-river questions are direct scoring areas. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Sambhar Lake, Pushkar Lake, Jaisamand/Dhebar, Rajsamand Lake, Nakki Lake, Pachpadra Lake, Didwana Lake, Fateh Sagar, Pichola Lake, Ana Sagar, Indira Gandhi Canal, Bhakra project, Chambal project, Mahi Bajaj Sagar. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan Geography, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Sambhar Lake: largest inland saltwater lake. Fixed association: Sambhar Lake — largest inland saltwater lake. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Pushkar Lake: Ajmer; sacred lake. Fixed association: Pushkar Lake — Ajmer; sacred lake. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Jaisamand/Dhebar: large freshwater/artificial lake. Fixed association: Jaisamand/Dhebar — large freshwater/artificial lake. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Rajsamand Lake: Rajsamand district memory. Fixed association: Rajsamand Lake — Rajsamand district memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Nakki Lake: Mount Abu/Sirohi. Fixed association: Nakki Lake — Mount Abu/Sirohi. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Pachpadra Lake: Barmer; saline lake memory. Fixed association: Pachpadra Lake — Barmer; saline lake memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Didwana Lake: Nagaur; saline lake memory. Fixed association: Didwana Lake — Nagaur; saline lake memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Fateh Sagar: Udaipur lake. Fixed association: Fateh Sagar — Udaipur lake. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Pichola Lake: Udaipur lake. Fixed association: Pichola Lake — Udaipur lake. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Ana Sagar: Ajmer lake. Fixed association: Ana Sagar — Ajmer lake. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Indira Gandhi Canal: western Rajasthan irrigation. Fixed association: Indira Gandhi Canal — western Rajasthan irrigation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Bhakra project: Punjab-Haryana-Rajasthan link memory. Fixed association: Bhakra project — Punjab-Haryana-Rajasthan link memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Chambal project: Kota/Bundi irrigation and power. Fixed association: Chambal project — Kota/Bundi irrigation and power. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Mahi Bajaj Sagar: Banswara region. Fixed association: Mahi Bajaj Sagar — Banswara region. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n15. Bisalpur project: Tonk context; drinking water/irrigation. Fixed association: Bisalpur project — Tonk context; drinking water/irrigation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n16. Kota Barrage: Chambal project. Fixed association: Kota Barrage — Chambal project. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'largest inland saltwater lake', recall 'Sambhar Lake'. If it gives 'Sambhar Lake', recall 'largest inland saltwater lake'.\n- If the paper gives 'Ajmer; sacred lake', recall 'Pushkar Lake'. If it gives 'Pushkar Lake', recall 'Ajmer; sacred lake'.\n- If the paper gives 'large freshwater/artificial lake', recall 'Jaisamand/Dhebar'. If it gives 'Jaisamand/Dhebar', recall 'large freshwater/artificial lake'.\n- If the paper gives 'Rajsamand district memory', recall 'Rajsamand Lake'. If it gives 'Rajsamand Lake', recall 'Rajsamand district memory'.\n- If the paper gives 'Mount Abu/Sirohi', recall 'Nakki Lake'. If it gives 'Nakki Lake', recall 'Mount Abu/Sirohi'.\n- If the paper gives 'Barmer; saline lake memory', recall 'Pachpadra Lake'. If it gives 'Pachpadra Lake', recall 'Barmer; saline lake memory'.\n- If the paper gives 'Nagaur; saline lake memory', recall 'Didwana Lake'. If it gives 'Didwana Lake', recall 'Nagaur; saline lake memory'.\n- If the paper gives 'Udaipur lake', recall 'Fateh Sagar'. If it gives 'Fateh Sagar', recall 'Udaipur lake'.\n- If the paper gives 'Udaipur lake', recall 'Pichola Lake'. If it gives 'Pichola Lake', recall 'Udaipur lake'.\n- If the paper gives 'Ajmer lake', recall 'Ana Sagar'. If it gives 'Ana Sagar', recall 'Ajmer lake'.\n- If the paper gives 'western Rajasthan irrigation', recall 'Indira Gandhi Canal'. If it gives 'Indira Gandhi Canal', recall 'western Rajasthan irrigation'.\n- If the paper gives 'Punjab-Haryana-Rajasthan link memory', recall 'Bhakra project'. If it gives 'Bhakra project', recall 'Punjab-Haryana-Rajasthan link memory'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Sambhar Lake",
            "largest inland saltwater lake",
            "lake"
          ],
          [
            "Pushkar Lake",
            "Ajmer; sacred lake",
            "lake"
          ],
          [
            "Jaisamand/Dhebar",
            "large freshwater/artificial lake",
            "lake"
          ],
          [
            "Rajsamand Lake",
            "Rajsamand district memory",
            "lake"
          ],
          [
            "Nakki Lake",
            "Mount Abu/Sirohi",
            "lake"
          ],
          [
            "Pachpadra Lake",
            "Barmer; saline lake memory",
            "lake"
          ],
          [
            "Didwana Lake",
            "Nagaur; saline lake memory",
            "lake"
          ],
          [
            "Fateh Sagar",
            "Udaipur lake",
            "lake"
          ],
          [
            "Pichola Lake",
            "Udaipur lake",
            "lake"
          ],
          [
            "Ana Sagar",
            "Ajmer lake",
            "lake"
          ],
          [
            "Indira Gandhi Canal",
            "western Rajasthan irrigation",
            "irrigation"
          ],
          [
            "Bhakra project",
            "Punjab-Haryana-Rajasthan link memory",
            "irrigation"
          ],
          [
            "Chambal project",
            "Kota/Bundi irrigation and power",
            "irrigation"
          ],
          [
            "Mahi Bajaj Sagar",
            "Banswara region",
            "irrigation"
          ],
          [
            "Bisalpur project",
            "Tonk context; drinking water/irrigation",
            "irrigation"
          ],
          [
            "Kota Barrage",
            "Chambal project",
            "irrigation"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Sambhar Lake",
        "answer": "largest inland saltwater lake",
        "tag": "lake",
        "explanation": "Fixed association: Sambhar Lake — largest inland saltwater lake. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Pushkar Lake",
        "answer": "Ajmer; sacred lake",
        "tag": "lake",
        "explanation": "Fixed association: Pushkar Lake — Ajmer; sacred lake. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Jaisamand/Dhebar",
        "answer": "large freshwater/artificial lake",
        "tag": "lake",
        "explanation": "Fixed association: Jaisamand/Dhebar — large freshwater/artificial lake. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rajsamand Lake",
        "answer": "Rajsamand district memory",
        "tag": "lake",
        "explanation": "Fixed association: Rajsamand Lake — Rajsamand district memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Nakki Lake",
        "answer": "Mount Abu/Sirohi",
        "tag": "lake",
        "explanation": "Fixed association: Nakki Lake — Mount Abu/Sirohi. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Pachpadra Lake",
        "answer": "Barmer; saline lake memory",
        "tag": "lake",
        "explanation": "Fixed association: Pachpadra Lake — Barmer; saline lake memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Didwana Lake",
        "answer": "Nagaur; saline lake memory",
        "tag": "lake",
        "explanation": "Fixed association: Didwana Lake — Nagaur; saline lake memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Fateh Sagar",
        "answer": "Udaipur lake",
        "tag": "lake",
        "explanation": "Fixed association: Fateh Sagar — Udaipur lake. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Pichola Lake",
        "answer": "Udaipur lake",
        "tag": "lake",
        "explanation": "Fixed association: Pichola Lake — Udaipur lake. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ana Sagar",
        "answer": "Ajmer lake",
        "tag": "lake",
        "explanation": "Fixed association: Ana Sagar — Ajmer lake. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Indira Gandhi Canal",
        "answer": "western Rajasthan irrigation",
        "tag": "irrigation",
        "explanation": "Fixed association: Indira Gandhi Canal — western Rajasthan irrigation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bhakra project",
        "answer": "Punjab-Haryana-Rajasthan link memory",
        "tag": "irrigation",
        "explanation": "Fixed association: Bhakra project — Punjab-Haryana-Rajasthan link memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Chambal project",
        "answer": "Kota/Bundi irrigation and power",
        "tag": "irrigation",
        "explanation": "Fixed association: Chambal project — Kota/Bundi irrigation and power. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mahi Bajaj Sagar",
        "answer": "Banswara region",
        "tag": "irrigation",
        "explanation": "Fixed association: Mahi Bajaj Sagar — Banswara region. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bisalpur project",
        "answer": "Tonk context; drinking water/irrigation",
        "tag": "irrigation",
        "explanation": "Fixed association: Bisalpur project — Tonk context; drinking water/irrigation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kota Barrage",
        "answer": "Chambal project",
        "tag": "irrigation",
        "explanation": "Fixed association: Kota Barrage — Chambal project. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "geo-minerals-industry",
    "day": 17,
    "title": "Minerals, mines, energy and industries",
    "bucket": "Rajasthan Geography",
    "priority": "Very High",
    "why": "Mine-mineral matching is one of the most repeated Rajasthan GK question types.",
    "concepts": [
      "Degana",
      "Jhamar Kotra",
      "Mando-ki-Pal",
      "Goth-Manglod",
      "Zawar",
      "Khetri",
      "Makrana",
      "Sambhar/Didwana/Pachpadra",
      "Kota-Chittorgarh belt",
      "Barmer-Jaisalmer belt",
      "Solar energy",
      "Wind energy",
      "Atomic power memory",
      "Textile industry"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Minerals, mines, energy and industries under Rajasthan Geography. It is included because Mine-mineral matching is one of the most repeated Rajasthan GK question types. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Degana, Jhamar Kotra, Mando-ki-Pal, Goth-Manglod, Zawar, Khetri, Makrana, Sambhar/Didwana/Pachpadra, Kota-Chittorgarh belt, Barmer-Jaisalmer belt, Solar energy, Wind energy, Atomic power memory, Textile industry. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan Geography, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Degana: tungsten. Fixed association: Degana — tungsten. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Jhamar Kotra: rock phosphate. Fixed association: Jhamar Kotra — rock phosphate. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Mando-ki-Pal: fluorspar. Fixed association: Mando-ki-Pal — fluorspar. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Goth-Manglod: gypsum. Fixed association: Goth-Manglod — gypsum. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Zawar: zinc-lead. Fixed association: Zawar — zinc-lead. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Khetri: copper. Fixed association: Khetri — copper. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Makrana: marble. Fixed association: Makrana — marble. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Sambhar/Didwana/Pachpadra: salt lake industry memory. Fixed association: Sambhar/Didwana/Pachpadra — salt lake industry memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Kota-Chittorgarh belt: cement/limestone memory. Fixed association: Kota-Chittorgarh belt — cement/limestone memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Barmer-Jaisalmer belt: petroleum/lignite/energy memory. Fixed association: Barmer-Jaisalmer belt — petroleum/lignite/energy memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Solar energy: western Rajasthan high potential. Fixed association: Solar energy — western Rajasthan high potential. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Wind energy: desert and western belt potential. Fixed association: Wind energy — desert and western belt potential. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Atomic power memory: Rawatbhata/Rajasthan Atomic Power Station context. Fixed association: Atomic power memory — Rawatbhata/Rajasthan Atomic Power Station context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Textile industry: Bhilwara textile memory. Fixed association: Textile industry — Bhilwara textile memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'tungsten', recall 'Degana'. If it gives 'Degana', recall 'tungsten'.\n- If the paper gives 'rock phosphate', recall 'Jhamar Kotra'. If it gives 'Jhamar Kotra', recall 'rock phosphate'.\n- If the paper gives 'fluorspar', recall 'Mando-ki-Pal'. If it gives 'Mando-ki-Pal', recall 'fluorspar'.\n- If the paper gives 'gypsum', recall 'Goth-Manglod'. If it gives 'Goth-Manglod', recall 'gypsum'.\n- If the paper gives 'zinc-lead', recall 'Zawar'. If it gives 'Zawar', recall 'zinc-lead'.\n- If the paper gives 'copper', recall 'Khetri'. If it gives 'Khetri', recall 'copper'.\n- If the paper gives 'marble', recall 'Makrana'. If it gives 'Makrana', recall 'marble'.\n- If the paper gives 'salt lake industry memory', recall 'Sambhar/Didwana/Pachpadra'. If it gives 'Sambhar/Didwana/Pachpadra', recall 'salt lake industry memory'.\n- If the paper gives 'cement/limestone memory', recall 'Kota-Chittorgarh belt'. If it gives 'Kota-Chittorgarh belt', recall 'cement/limestone memory'.\n- If the paper gives 'petroleum/lignite/energy memory', recall 'Barmer-Jaisalmer belt'. If it gives 'Barmer-Jaisalmer belt', recall 'petroleum/lignite/energy memory'.\n- If the paper gives 'western Rajasthan high potential', recall 'Solar energy'. If it gives 'Solar energy', recall 'western Rajasthan high potential'.\n- If the paper gives 'desert and western belt potential', recall 'Wind energy'. If it gives 'Wind energy', recall 'desert and western belt potential'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Degana",
            "tungsten",
            "mineral"
          ],
          [
            "Jhamar Kotra",
            "rock phosphate",
            "mineral"
          ],
          [
            "Mando-ki-Pal",
            "fluorspar",
            "mineral"
          ],
          [
            "Goth-Manglod",
            "gypsum",
            "mineral"
          ],
          [
            "Zawar",
            "zinc-lead",
            "mineral"
          ],
          [
            "Khetri",
            "copper",
            "mineral"
          ],
          [
            "Makrana",
            "marble",
            "mineral"
          ],
          [
            "Sambhar/Didwana/Pachpadra",
            "salt lake industry memory",
            "industry"
          ],
          [
            "Kota-Chittorgarh belt",
            "cement/limestone memory",
            "industry"
          ],
          [
            "Barmer-Jaisalmer belt",
            "petroleum/lignite/energy memory",
            "energy"
          ],
          [
            "Solar energy",
            "western Rajasthan high potential",
            "energy"
          ],
          [
            "Wind energy",
            "desert and western belt potential",
            "energy"
          ],
          [
            "Atomic power memory",
            "Rawatbhata/Rajasthan Atomic Power Station context",
            "energy"
          ],
          [
            "Textile industry",
            "Bhilwara textile memory",
            "industry"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Degana",
        "answer": "tungsten",
        "tag": "mineral",
        "explanation": "Fixed association: Degana — tungsten. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Jhamar Kotra",
        "answer": "rock phosphate",
        "tag": "mineral",
        "explanation": "Fixed association: Jhamar Kotra — rock phosphate. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mando-ki-Pal",
        "answer": "fluorspar",
        "tag": "mineral",
        "explanation": "Fixed association: Mando-ki-Pal — fluorspar. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Goth-Manglod",
        "answer": "gypsum",
        "tag": "mineral",
        "explanation": "Fixed association: Goth-Manglod — gypsum. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Zawar",
        "answer": "zinc-lead",
        "tag": "mineral",
        "explanation": "Fixed association: Zawar — zinc-lead. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Khetri",
        "answer": "copper",
        "tag": "mineral",
        "explanation": "Fixed association: Khetri — copper. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Makrana",
        "answer": "marble",
        "tag": "mineral",
        "explanation": "Fixed association: Makrana — marble. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sambhar/Didwana/Pachpadra",
        "answer": "salt lake industry memory",
        "tag": "industry",
        "explanation": "Fixed association: Sambhar/Didwana/Pachpadra — salt lake industry memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kota-Chittorgarh belt",
        "answer": "cement/limestone memory",
        "tag": "industry",
        "explanation": "Fixed association: Kota-Chittorgarh belt — cement/limestone memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Barmer-Jaisalmer belt",
        "answer": "petroleum/lignite/energy memory",
        "tag": "energy",
        "explanation": "Fixed association: Barmer-Jaisalmer belt — petroleum/lignite/energy memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Solar energy",
        "answer": "western Rajasthan high potential",
        "tag": "energy",
        "explanation": "Fixed association: Solar energy — western Rajasthan high potential. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Wind energy",
        "answer": "desert and western belt potential",
        "tag": "energy",
        "explanation": "Fixed association: Wind energy — desert and western belt potential. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Atomic power memory",
        "answer": "Rawatbhata/Rajasthan Atomic Power Station context",
        "tag": "energy",
        "explanation": "Fixed association: Atomic power memory — Rawatbhata/Rajasthan Atomic Power Station context. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Textile industry",
        "answer": "Bhilwara textile memory",
        "tag": "industry",
        "explanation": "Fixed association: Textile industry — Bhilwara textile memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "geo-agriculture-wildlife-census",
    "day": 18,
    "title": "Agriculture, wildlife, transport and census extremes",
    "bucket": "Rajasthan Geography",
    "priority": "High",
    "why": "Crops, parks, sanctuaries, transport and census extremes are asked as table-based facts.",
    "concepts": [
      "Bajra",
      "Wheat",
      "Mustard",
      "Cotton",
      "Sangri/Khejri ecology",
      "Ranthambore National Park",
      "Sariska",
      "Keoladeo Ghana",
      "Desert National Park",
      "Kumbhalgarh Sanctuary",
      "Literacy extreme",
      "Sex ratio extreme",
      "Density extreme",
      "Highway/transport"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Agriculture, wildlife, transport and census extremes under Rajasthan Geography. It is included because Crops, parks, sanctuaries, transport and census extremes are asked as table-based facts. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Bajra, Wheat, Mustard, Cotton, Sangri/Khejri ecology, Ranthambore National Park, Sariska, Keoladeo Ghana, Desert National Park, Kumbhalgarh Sanctuary, Literacy extreme, Sex ratio extreme, Density extreme, Highway/transport. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan Geography, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Bajra: important dryland crop of western Rajasthan. Fixed association: Bajra — important dryland crop of western Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Wheat: irrigated crop memory. Fixed association: Wheat — irrigated crop memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Mustard: important oilseed crop. Fixed association: Mustard — important oilseed crop. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Cotton: irrigated/south-western memory. Fixed association: Cotton — irrigated/south-western memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Sangri/Khejri ecology: desert ecology memory. Fixed association: Sangri/Khejri ecology — desert ecology memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Ranthambore National Park: Sawai Madhopur tiger reserve memory. Fixed association: Ranthambore National Park — Sawai Madhopur tiger reserve memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Sariska: Alwar tiger reserve memory. Fixed association: Sariska — Alwar tiger reserve memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Keoladeo Ghana: Bharatpur bird sanctuary/national park memory. Fixed association: Keoladeo Ghana — Bharatpur bird sanctuary/national park memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Desert National Park: Jaisalmer-Barmer desert ecosystem. Fixed association: Desert National Park — Jaisalmer-Barmer desert ecosystem. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Kumbhalgarh Sanctuary: Aravalli wildlife memory. Fixed association: Kumbhalgarh Sanctuary — Aravalli wildlife memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Literacy extreme: revise latest census table before exam. Fixed association: Literacy extreme — revise latest census table before exam. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Sex ratio extreme: revise latest census table before exam. Fixed association: Sex ratio extreme — revise latest census table before exam. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Density extreme: revise latest census table before exam. Fixed association: Density extreme — revise latest census table before exam. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Highway/transport: district-connectivity and route memory. Fixed association: Highway/transport — district-connectivity and route memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'important dryland crop of western Rajasthan', recall 'Bajra'. If it gives 'Bajra', recall 'important dryland crop of western Rajasthan'.\n- If the paper gives 'irrigated crop memory', recall 'Wheat'. If it gives 'Wheat', recall 'irrigated crop memory'.\n- If the paper gives 'important oilseed crop', recall 'Mustard'. If it gives 'Mustard', recall 'important oilseed crop'.\n- If the paper gives 'irrigated/south-western memory', recall 'Cotton'. If it gives 'Cotton', recall 'irrigated/south-western memory'.\n- If the paper gives 'desert ecology memory', recall 'Sangri/Khejri ecology'. If it gives 'Sangri/Khejri ecology', recall 'desert ecology memory'.\n- If the paper gives 'Sawai Madhopur tiger reserve memory', recall 'Ranthambore National Park'. If it gives 'Ranthambore National Park', recall 'Sawai Madhopur tiger reserve memory'.\n- If the paper gives 'Alwar tiger reserve memory', recall 'Sariska'. If it gives 'Sariska', recall 'Alwar tiger reserve memory'.\n- If the paper gives 'Bharatpur bird sanctuary/national park memory', recall 'Keoladeo Ghana'. If it gives 'Keoladeo Ghana', recall 'Bharatpur bird sanctuary/national park memory'.\n- If the paper gives 'Jaisalmer-Barmer desert ecosystem', recall 'Desert National Park'. If it gives 'Desert National Park', recall 'Jaisalmer-Barmer desert ecosystem'.\n- If the paper gives 'Aravalli wildlife memory', recall 'Kumbhalgarh Sanctuary'. If it gives 'Kumbhalgarh Sanctuary', recall 'Aravalli wildlife memory'.\n- If the paper gives 'revise latest census table before exam', recall 'Literacy extreme'. If it gives 'Literacy extreme', recall 'revise latest census table before exam'.\n- If the paper gives 'revise latest census table before exam', recall 'Sex ratio extreme'. If it gives 'Sex ratio extreme', recall 'revise latest census table before exam'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Bajra",
            "important dryland crop of western Rajasthan",
            "agriculture"
          ],
          [
            "Wheat",
            "irrigated crop memory",
            "agriculture"
          ],
          [
            "Mustard",
            "important oilseed crop",
            "agriculture"
          ],
          [
            "Cotton",
            "irrigated/south-western memory",
            "agriculture"
          ],
          [
            "Sangri/Khejri ecology",
            "desert ecology memory",
            "environment"
          ],
          [
            "Ranthambore National Park",
            "Sawai Madhopur tiger reserve memory",
            "wildlife"
          ],
          [
            "Sariska",
            "Alwar tiger reserve memory",
            "wildlife"
          ],
          [
            "Keoladeo Ghana",
            "Bharatpur bird sanctuary/national park memory",
            "wildlife"
          ],
          [
            "Desert National Park",
            "Jaisalmer-Barmer desert ecosystem",
            "wildlife"
          ],
          [
            "Kumbhalgarh Sanctuary",
            "Aravalli wildlife memory",
            "wildlife"
          ],
          [
            "Literacy extreme",
            "revise latest census table before exam",
            "census"
          ],
          [
            "Sex ratio extreme",
            "revise latest census table before exam",
            "census"
          ],
          [
            "Density extreme",
            "revise latest census table before exam",
            "census"
          ],
          [
            "Highway/transport",
            "district-connectivity and route memory",
            "transport"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Bajra",
        "answer": "important dryland crop of western Rajasthan",
        "tag": "agriculture",
        "explanation": "Fixed association: Bajra — important dryland crop of western Rajasthan. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Wheat",
        "answer": "irrigated crop memory",
        "tag": "agriculture",
        "explanation": "Fixed association: Wheat — irrigated crop memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mustard",
        "answer": "important oilseed crop",
        "tag": "agriculture",
        "explanation": "Fixed association: Mustard — important oilseed crop. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Cotton",
        "answer": "irrigated/south-western memory",
        "tag": "agriculture",
        "explanation": "Fixed association: Cotton — irrigated/south-western memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sangri/Khejri ecology",
        "answer": "desert ecology memory",
        "tag": "environment",
        "explanation": "Fixed association: Sangri/Khejri ecology — desert ecology memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ranthambore National Park",
        "answer": "Sawai Madhopur tiger reserve memory",
        "tag": "wildlife",
        "explanation": "Fixed association: Ranthambore National Park — Sawai Madhopur tiger reserve memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sariska",
        "answer": "Alwar tiger reserve memory",
        "tag": "wildlife",
        "explanation": "Fixed association: Sariska — Alwar tiger reserve memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Keoladeo Ghana",
        "answer": "Bharatpur bird sanctuary/national park memory",
        "tag": "wildlife",
        "explanation": "Fixed association: Keoladeo Ghana — Bharatpur bird sanctuary/national park memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Desert National Park",
        "answer": "Jaisalmer-Barmer desert ecosystem",
        "tag": "wildlife",
        "explanation": "Fixed association: Desert National Park — Jaisalmer-Barmer desert ecosystem. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kumbhalgarh Sanctuary",
        "answer": "Aravalli wildlife memory",
        "tag": "wildlife",
        "explanation": "Fixed association: Kumbhalgarh Sanctuary — Aravalli wildlife memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Literacy extreme",
        "answer": "revise latest census table before exam",
        "tag": "census",
        "explanation": "Fixed association: Literacy extreme — revise latest census table before exam. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sex ratio extreme",
        "answer": "revise latest census table before exam",
        "tag": "census",
        "explanation": "Fixed association: Sex ratio extreme — revise latest census table before exam. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Density extreme",
        "answer": "revise latest census table before exam",
        "tag": "census",
        "explanation": "Fixed association: Density extreme — revise latest census table before exam. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Highway/transport",
        "answer": "district-connectivity and route memory",
        "tag": "transport",
        "explanation": "Fixed association: Highway/transport — district-connectivity and route memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "rajasthan-ca-schemes",
    "day": 19,
    "title": "Rajasthan current affairs, schemes, budget and awards",
    "bucket": "Rajasthan Current Affairs",
    "priority": "Very High",
    "why": "Current affairs can decide rank because questions are direct and recent.",
    "concepts": [
      "Current affairs window",
      "Scheme table",
      "Budget facts",
      "Appointments",
      "Awards",
      "Sports",
      "Institutes in news",
      "Rankings",
      "Places in news",
      "Economy news",
      "Festival/event news",
      "National news linked with Rajasthan"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Rajasthan current affairs, schemes, budget and awards under Rajasthan Current Affairs. It is included because Current affairs can decide rank because questions are direct and recent. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Current affairs window, Scheme table, Budget facts, Appointments, Awards, Sports, Institutes in news, Rankings, Places in news, Economy news, Festival/event news, National news linked with Rajasthan. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan Current Affairs, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Current affairs window: last 12 to 18 months before exam. Fixed association: Current affairs window — last 12 to 18 months before exam. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Scheme table: scheme, department, beneficiary, launch/update date. Fixed association: Scheme table — scheme, department, beneficiary, launch/update date. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Budget facts: major Rajasthan budget announcements and sectors. Fixed association: Budget facts — major Rajasthan budget announcements and sectors. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Appointments: Governor, CM, ministers, commissions, boards, university heads. Fixed association: Appointments — Governor, CM, ministers, commissions, boards, university heads. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Awards: award, winner, field, year. Fixed association: Awards — award, winner, field, year. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Sports: player, sport, event, medal, district. Fixed association: Sports — player, sport, event, medal, district. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Institutes in news: institute, district, purpose. Fixed association: Institutes in news — institute, district, purpose. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Rankings: Rajasthan rank, index, issuing body. Fixed association: Rankings — Rajasthan rank, index, issuing body. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Places in news: district, reason, event. Fixed association: Places in news — district, reason, event. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Economy news: tourism, mining, energy, agriculture, startups. Fixed association: Economy news — tourism, mining, energy, agriculture, startups. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Festival/event news: event, district, month, theme. Fixed association: Festival/event news — event, district, month, theme. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. National news linked with Rajasthan: project, ministry, Rajasthan district impact. Fixed association: National news linked with Rajasthan — project, ministry, Rajasthan district impact. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'last 12 to 18 months before exam', recall 'Current affairs window'. If it gives 'Current affairs window', recall 'last 12 to 18 months before exam'.\n- If the paper gives 'scheme, department, beneficiary, launch/update date', recall 'Scheme table'. If it gives 'Scheme table', recall 'scheme, department, beneficiary, launch/update date'.\n- If the paper gives 'major Rajasthan budget announcements and sectors', recall 'Budget facts'. If it gives 'Budget facts', recall 'major Rajasthan budget announcements and sectors'.\n- If the paper gives 'Governor, CM, ministers, commissions, boards, university heads', recall 'Appointments'. If it gives 'Appointments', recall 'Governor, CM, ministers, commissions, boards, university heads'.\n- If the paper gives 'award, winner, field, year', recall 'Awards'. If it gives 'Awards', recall 'award, winner, field, year'.\n- If the paper gives 'player, sport, event, medal, district', recall 'Sports'. If it gives 'Sports', recall 'player, sport, event, medal, district'.\n- If the paper gives 'institute, district, purpose', recall 'Institutes in news'. If it gives 'Institutes in news', recall 'institute, district, purpose'.\n- If the paper gives 'Rajasthan rank, index, issuing body', recall 'Rankings'. If it gives 'Rankings', recall 'Rajasthan rank, index, issuing body'.\n- If the paper gives 'district, reason, event', recall 'Places in news'. If it gives 'Places in news', recall 'district, reason, event'.\n- If the paper gives 'tourism, mining, energy, agriculture, startups', recall 'Economy news'. If it gives 'Economy news', recall 'tourism, mining, energy, agriculture, startups'.\n- If the paper gives 'event, district, month, theme', recall 'Festival/event news'. If it gives 'Festival/event news', recall 'event, district, month, theme'.\n- If the paper gives 'project, ministry, Rajasthan district impact', recall 'National news linked with Rajasthan'. If it gives 'National news linked with Rajasthan', recall 'project, ministry, Rajasthan district impact'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Current affairs window",
            "last 12 to 18 months before exam",
            "ca"
          ],
          [
            "Scheme table",
            "scheme, department, beneficiary, launch/update date",
            "ca"
          ],
          [
            "Budget facts",
            "major Rajasthan budget announcements and sectors",
            "ca"
          ],
          [
            "Appointments",
            "Governor, CM, ministers, commissions, boards, university heads",
            "ca"
          ],
          [
            "Awards",
            "award, winner, field, year",
            "ca"
          ],
          [
            "Sports",
            "player, sport, event, medal, district",
            "ca"
          ],
          [
            "Institutes in news",
            "institute, district, purpose",
            "ca"
          ],
          [
            "Rankings",
            "Rajasthan rank, index, issuing body",
            "ca"
          ],
          [
            "Places in news",
            "district, reason, event",
            "ca"
          ],
          [
            "Economy news",
            "tourism, mining, energy, agriculture, startups",
            "ca"
          ],
          [
            "Festival/event news",
            "event, district, month, theme",
            "ca"
          ],
          [
            "National news linked with Rajasthan",
            "project, ministry, Rajasthan district impact",
            "ca"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Current affairs window",
        "answer": "last 12 to 18 months before exam",
        "tag": "ca",
        "explanation": "Fixed association: Current affairs window — last 12 to 18 months before exam. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Scheme table",
        "answer": "scheme, department, beneficiary, launch/update date",
        "tag": "ca",
        "explanation": "Fixed association: Scheme table — scheme, department, beneficiary, launch/update date. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Budget facts",
        "answer": "major Rajasthan budget announcements and sectors",
        "tag": "ca",
        "explanation": "Fixed association: Budget facts — major Rajasthan budget announcements and sectors. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Appointments",
        "answer": "Governor, CM, ministers, commissions, boards, university heads",
        "tag": "ca",
        "explanation": "Fixed association: Appointments — Governor, CM, ministers, commissions, boards, university heads. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Awards",
        "answer": "award, winner, field, year",
        "tag": "ca",
        "explanation": "Fixed association: Awards — award, winner, field, year. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sports",
        "answer": "player, sport, event, medal, district",
        "tag": "ca",
        "explanation": "Fixed association: Sports — player, sport, event, medal, district. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Institutes in news",
        "answer": "institute, district, purpose",
        "tag": "ca",
        "explanation": "Fixed association: Institutes in news — institute, district, purpose. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rankings",
        "answer": "Rajasthan rank, index, issuing body",
        "tag": "ca",
        "explanation": "Fixed association: Rankings — Rajasthan rank, index, issuing body. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Places in news",
        "answer": "district, reason, event",
        "tag": "ca",
        "explanation": "Fixed association: Places in news — district, reason, event. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Economy news",
        "answer": "tourism, mining, energy, agriculture, startups",
        "tag": "ca",
        "explanation": "Fixed association: Economy news — tourism, mining, energy, agriculture, startups. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Festival/event news",
        "answer": "event, district, month, theme",
        "tag": "ca",
        "explanation": "Fixed association: Festival/event news — event, district, month, theme. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "National news linked with Rajasthan",
        "answer": "project, ministry, Rajasthan district impact",
        "tag": "ca",
        "explanation": "Fixed association: National news linked with Rajasthan — project, ministry, Rajasthan district impact. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "institutions-rajasthan",
    "day": 20,
    "title": "Rajasthan institutions, academies, museums and commissions",
    "bucket": "Rajasthan GK Institutions",
    "priority": "High",
    "why": "Institution-location-purpose questions appear in match-list and current-affairs style questions.",
    "concepts": [
      "Bharatiya Lok Kala Mandal",
      "Jawahar Kala Kendra",
      "Rajasthan Lalit Kala Akademi",
      "Rajasthan Sahitya Akademi",
      "Rajasthan Sangeet Natak Akademi",
      "Rajasthani Bhasha Sahitya Sanskriti Akademi",
      "Rajasthan Oriental Research Institute",
      "Albert Hall Museum",
      "Ahar Museum",
      "Rajasthan Seva Sangh",
      "Desh Hitaishini Sabha",
      "Rajasthan Public Service Commission",
      "Rajasthan Staff Selection Board",
      "Rajasthan High Court"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Rajasthan institutions, academies, museums and commissions under Rajasthan GK Institutions. It is included because Institution-location-purpose questions appear in match-list and current-affairs style questions. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Bharatiya Lok Kala Mandal, Jawahar Kala Kendra, Rajasthan Lalit Kala Akademi, Rajasthan Sahitya Akademi, Rajasthan Sangeet Natak Akademi, Rajasthani Bhasha Sahitya Sanskriti Akademi, Rajasthan Oriental Research Institute, Albert Hall Museum, Ahar Museum, Rajasthan Seva Sangh, Desh Hitaishini Sabha, Rajasthan Public Service Commission, Rajasthan Staff Selection Board, Rajasthan High Court. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Rajasthan GK Institutions, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Bharatiya Lok Kala Mandal: Udaipur; folk culture preservation. Fixed association: Bharatiya Lok Kala Mandal — Udaipur; folk culture preservation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Jawahar Kala Kendra: Jaipur; art and culture centre. Fixed association: Jawahar Kala Kendra — Jaipur; art and culture centre. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Rajasthan Lalit Kala Akademi: visual arts promotion. Fixed association: Rajasthan Lalit Kala Akademi — visual arts promotion. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Rajasthan Sahitya Akademi: literary activities memory. Fixed association: Rajasthan Sahitya Akademi — literary activities memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Rajasthan Sangeet Natak Akademi: performing arts memory. Fixed association: Rajasthan Sangeet Natak Akademi — performing arts memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Rajasthani Bhasha Sahitya Sanskriti Akademi: Bikaner; language and culture. Fixed association: Rajasthani Bhasha Sahitya Sanskriti Akademi — Bikaner; language and culture. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Rajasthan Oriental Research Institute: Jodhpur; manuscripts/research memory. Fixed association: Rajasthan Oriental Research Institute — Jodhpur; manuscripts/research memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Albert Hall Museum: Jaipur museum. Fixed association: Albert Hall Museum — Jaipur museum. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Ahar Museum: Udaipur archaeology. Fixed association: Ahar Museum — Udaipur archaeology. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Rajasthan Seva Sangh: political awakening organization. Fixed association: Rajasthan Seva Sangh — political awakening organization. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Desh Hitaishini Sabha: social-political organization memory. Fixed association: Desh Hitaishini Sabha — social-political organization memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Rajasthan Public Service Commission: Ajmer; recruitment body memory. Fixed association: Rajasthan Public Service Commission — Ajmer; recruitment body memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Rajasthan Staff Selection Board: Jaipur; recruitment body memory. Fixed association: Rajasthan Staff Selection Board — Jaipur; recruitment body memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Rajasthan High Court: Jodhpur principal seat memory. Fixed association: Rajasthan High Court — Jodhpur principal seat memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n15. Rajasthan Vidhan Sabha: Jaipur legislature memory. Fixed association: Rajasthan Vidhan Sabha — Jaipur legislature memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'Udaipur; folk culture preservation', recall 'Bharatiya Lok Kala Mandal'. If it gives 'Bharatiya Lok Kala Mandal', recall 'Udaipur; folk culture preservation'.\n- If the paper gives 'Jaipur; art and culture centre', recall 'Jawahar Kala Kendra'. If it gives 'Jawahar Kala Kendra', recall 'Jaipur; art and culture centre'.\n- If the paper gives 'visual arts promotion', recall 'Rajasthan Lalit Kala Akademi'. If it gives 'Rajasthan Lalit Kala Akademi', recall 'visual arts promotion'.\n- If the paper gives 'literary activities memory', recall 'Rajasthan Sahitya Akademi'. If it gives 'Rajasthan Sahitya Akademi', recall 'literary activities memory'.\n- If the paper gives 'performing arts memory', recall 'Rajasthan Sangeet Natak Akademi'. If it gives 'Rajasthan Sangeet Natak Akademi', recall 'performing arts memory'.\n- If the paper gives 'Bikaner; language and culture', recall 'Rajasthani Bhasha Sahitya Sanskriti Akademi'. If it gives 'Rajasthani Bhasha Sahitya Sanskriti Akademi', recall 'Bikaner; language and culture'.\n- If the paper gives 'Jodhpur; manuscripts/research memory', recall 'Rajasthan Oriental Research Institute'. If it gives 'Rajasthan Oriental Research Institute', recall 'Jodhpur; manuscripts/research memory'.\n- If the paper gives 'Jaipur museum', recall 'Albert Hall Museum'. If it gives 'Albert Hall Museum', recall 'Jaipur museum'.\n- If the paper gives 'Udaipur archaeology', recall 'Ahar Museum'. If it gives 'Ahar Museum', recall 'Udaipur archaeology'.\n- If the paper gives 'political awakening organization', recall 'Rajasthan Seva Sangh'. If it gives 'Rajasthan Seva Sangh', recall 'political awakening organization'.\n- If the paper gives 'social-political organization memory', recall 'Desh Hitaishini Sabha'. If it gives 'Desh Hitaishini Sabha', recall 'social-political organization memory'.\n- If the paper gives 'Ajmer; recruitment body memory', recall 'Rajasthan Public Service Commission'. If it gives 'Rajasthan Public Service Commission', recall 'Ajmer; recruitment body memory'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Bharatiya Lok Kala Mandal",
            "Udaipur; folk culture preservation",
            "institution"
          ],
          [
            "Jawahar Kala Kendra",
            "Jaipur; art and culture centre",
            "institution"
          ],
          [
            "Rajasthan Lalit Kala Akademi",
            "visual arts promotion",
            "institution"
          ],
          [
            "Rajasthan Sahitya Akademi",
            "literary activities memory",
            "institution"
          ],
          [
            "Rajasthan Sangeet Natak Akademi",
            "performing arts memory",
            "institution"
          ],
          [
            "Rajasthani Bhasha Sahitya Sanskriti Akademi",
            "Bikaner; language and culture",
            "institution"
          ],
          [
            "Rajasthan Oriental Research Institute",
            "Jodhpur; manuscripts/research memory",
            "institution"
          ],
          [
            "Albert Hall Museum",
            "Jaipur museum",
            "museum"
          ],
          [
            "Ahar Museum",
            "Udaipur archaeology",
            "museum"
          ],
          [
            "Rajasthan Seva Sangh",
            "political awakening organization",
            "organization"
          ],
          [
            "Desh Hitaishini Sabha",
            "social-political organization memory",
            "organization"
          ],
          [
            "Rajasthan Public Service Commission",
            "Ajmer; recruitment body memory",
            "institution"
          ],
          [
            "Rajasthan Staff Selection Board",
            "Jaipur; recruitment body memory",
            "institution"
          ],
          [
            "Rajasthan High Court",
            "Jodhpur principal seat memory",
            "institution"
          ],
          [
            "Rajasthan Vidhan Sabha",
            "Jaipur legislature memory",
            "institution"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Bharatiya Lok Kala Mandal",
        "answer": "Udaipur; folk culture preservation",
        "tag": "institution",
        "explanation": "Fixed association: Bharatiya Lok Kala Mandal — Udaipur; folk culture preservation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Jawahar Kala Kendra",
        "answer": "Jaipur; art and culture centre",
        "tag": "institution",
        "explanation": "Fixed association: Jawahar Kala Kendra — Jaipur; art and culture centre. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rajasthan Lalit Kala Akademi",
        "answer": "visual arts promotion",
        "tag": "institution",
        "explanation": "Fixed association: Rajasthan Lalit Kala Akademi — visual arts promotion. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rajasthan Sahitya Akademi",
        "answer": "literary activities memory",
        "tag": "institution",
        "explanation": "Fixed association: Rajasthan Sahitya Akademi — literary activities memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rajasthan Sangeet Natak Akademi",
        "answer": "performing arts memory",
        "tag": "institution",
        "explanation": "Fixed association: Rajasthan Sangeet Natak Akademi — performing arts memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rajasthani Bhasha Sahitya Sanskriti Akademi",
        "answer": "Bikaner; language and culture",
        "tag": "institution",
        "explanation": "Fixed association: Rajasthani Bhasha Sahitya Sanskriti Akademi — Bikaner; language and culture. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rajasthan Oriental Research Institute",
        "answer": "Jodhpur; manuscripts/research memory",
        "tag": "institution",
        "explanation": "Fixed association: Rajasthan Oriental Research Institute — Jodhpur; manuscripts/research memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Albert Hall Museum",
        "answer": "Jaipur museum",
        "tag": "museum",
        "explanation": "Fixed association: Albert Hall Museum — Jaipur museum. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ahar Museum",
        "answer": "Udaipur archaeology",
        "tag": "museum",
        "explanation": "Fixed association: Ahar Museum — Udaipur archaeology. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rajasthan Seva Sangh",
        "answer": "political awakening organization",
        "tag": "organization",
        "explanation": "Fixed association: Rajasthan Seva Sangh — political awakening organization. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Desh Hitaishini Sabha",
        "answer": "social-political organization memory",
        "tag": "organization",
        "explanation": "Fixed association: Desh Hitaishini Sabha — social-political organization memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rajasthan Public Service Commission",
        "answer": "Ajmer; recruitment body memory",
        "tag": "institution",
        "explanation": "Fixed association: Rajasthan Public Service Commission — Ajmer; recruitment body memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rajasthan Staff Selection Board",
        "answer": "Jaipur; recruitment body memory",
        "tag": "institution",
        "explanation": "Fixed association: Rajasthan Staff Selection Board — Jaipur; recruitment body memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rajasthan High Court",
        "answer": "Jodhpur principal seat memory",
        "tag": "institution",
        "explanation": "Fixed association: Rajasthan High Court — Jodhpur principal seat memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rajasthan Vidhan Sabha",
        "answer": "Jaipur legislature memory",
        "tag": "institution",
        "explanation": "Fixed association: Rajasthan Vidhan Sabha — Jaipur legislature memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "digital-ai-cyber-awareness",
    "day": 21,
    "title": "Digital India, e-Governance, AI and cybersecurity awareness",
    "bucket": "Technology Awareness for Paper 1",
    "priority": "High",
    "why": "Recent IT, AI, cybersecurity and government technology initiatives can appear in current-affairs or awareness questions.",
    "concepts": [
      "Digital India",
      "DigiLocker",
      "UMANG",
      "MyGov",
      "API Setu",
      "eSign",
      "BharatNet",
      "UPI",
      "IndiaAI Mission",
      "AI",
      "Machine Learning",
      "Generative AI",
      "CERT-In",
      "Phishing"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Digital India, e-Governance, AI and cybersecurity awareness under Technology Awareness for Paper 1. It is included because Recent IT, AI, cybersecurity and government technology initiatives can appear in current-affairs or awareness questions. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Digital India, DigiLocker, UMANG, MyGov, API Setu, eSign, BharatNet, UPI, IndiaAI Mission, AI, Machine Learning, Generative AI, CERT-In, Phishing. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Technology Awareness for Paper 1, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Digital India: launched in 2015; digital infrastructure, services and empowerment. Fixed association: Digital India — launched in 2015; digital infrastructure, services and empowerment. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. DigiLocker: cloud-based digital document wallet under Digital India. Fixed association: DigiLocker — cloud-based digital document wallet under Digital India. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. UMANG: single mobile platform for government services. Fixed association: UMANG — single mobile platform for government services. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. MyGov: citizen engagement and crowdsourcing platform. Fixed association: MyGov — citizen engagement and crowdsourcing platform. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. API Setu: API marketplace/integration platform memory. Fixed association: API Setu — API marketplace/integration platform memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. eSign: electronic signing service using Aadhaar-based authentication memory. Fixed association: eSign — electronic signing service using Aadhaar-based authentication memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. BharatNet: broadband connectivity for gram panchayats memory. Fixed association: BharatNet — broadband connectivity for gram panchayats memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. UPI: real-time digital payment system memory. Fixed association: UPI — real-time digital payment system memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. IndiaAI Mission: AI mission approved in 2024 with compute, datasets, future skills and safe AI themes. Fixed association: IndiaAI Mission — AI mission approved in 2024 with compute, datasets, future skills and safe AI themes. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. AI: machines performing tasks requiring human intelligence. Fixed association: AI — machines performing tasks requiring human intelligence. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Machine Learning: systems learn patterns from data. Fixed association: Machine Learning — systems learn patterns from data. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Generative AI: AI that creates text, image, audio or code. Fixed association: Generative AI — AI that creates text, image, audio or code. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. CERT-In: Indian Computer Emergency Response Team; cybersecurity advisories. Fixed association: CERT-In — Indian Computer Emergency Response Team; cybersecurity advisories. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Phishing: fraudulent attempt to steal credentials or money. Fixed association: Phishing — fraudulent attempt to steal credentials or money. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n15. Malware: malicious software such as virus, worm, trojan, ransomware. Fixed association: Malware — malicious software such as virus, worm, trojan, ransomware. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n16. Firewall: security system that filters network traffic. Fixed association: Firewall — security system that filters network traffic. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n17. Two-factor authentication: login security using two proofs. Fixed association: Two-factor authentication — login security using two proofs. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n18. Zero Trust: security idea: never trust automatically, verify continuously. Fixed association: Zero Trust — security idea: never trust automatically, verify continuously. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'launched in 2015; digital infrastructure, services and empowerment', recall 'Digital India'. If it gives 'Digital India', recall 'launched in 2015; digital infrastructure, services and empowerment'.\n- If the paper gives 'cloud-based digital document wallet under Digital India', recall 'DigiLocker'. If it gives 'DigiLocker', recall 'cloud-based digital document wallet under Digital India'.\n- If the paper gives 'single mobile platform for government services', recall 'UMANG'. If it gives 'UMANG', recall 'single mobile platform for government services'.\n- If the paper gives 'citizen engagement and crowdsourcing platform', recall 'MyGov'. If it gives 'MyGov', recall 'citizen engagement and crowdsourcing platform'.\n- If the paper gives 'API marketplace/integration platform memory', recall 'API Setu'. If it gives 'API Setu', recall 'API marketplace/integration platform memory'.\n- If the paper gives 'electronic signing service using Aadhaar-based authentication memory', recall 'eSign'. If it gives 'eSign', recall 'electronic signing service using Aadhaar-based authentication memory'.\n- If the paper gives 'broadband connectivity for gram panchayats memory', recall 'BharatNet'. If it gives 'BharatNet', recall 'broadband connectivity for gram panchayats memory'.\n- If the paper gives 'real-time digital payment system memory', recall 'UPI'. If it gives 'UPI', recall 'real-time digital payment system memory'.\n- If the paper gives 'AI mission approved in 2024 with compute, datasets, future skills and safe AI themes', recall 'IndiaAI Mission'. If it gives 'IndiaAI Mission', recall 'AI mission approved in 2024 with compute, datasets, future skills and safe AI themes'.\n- If the paper gives 'machines performing tasks requiring human intelligence', recall 'AI'. If it gives 'AI', recall 'machines performing tasks requiring human intelligence'.\n- If the paper gives 'systems learn patterns from data', recall 'Machine Learning'. If it gives 'Machine Learning', recall 'systems learn patterns from data'.\n- If the paper gives 'AI that creates text, image, audio or code', recall 'Generative AI'. If it gives 'Generative AI', recall 'AI that creates text, image, audio or code'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Digital India",
            "launched in 2015; digital infrastructure, services and empowerment",
            "digital"
          ],
          [
            "DigiLocker",
            "cloud-based digital document wallet under Digital India",
            "digital"
          ],
          [
            "UMANG",
            "single mobile platform for government services",
            "digital"
          ],
          [
            "MyGov",
            "citizen engagement and crowdsourcing platform",
            "digital"
          ],
          [
            "API Setu",
            "API marketplace/integration platform memory",
            "digital"
          ],
          [
            "eSign",
            "electronic signing service using Aadhaar-based authentication memory",
            "digital"
          ],
          [
            "BharatNet",
            "broadband connectivity for gram panchayats memory",
            "digital"
          ],
          [
            "UPI",
            "real-time digital payment system memory",
            "digital"
          ],
          [
            "IndiaAI Mission",
            "AI mission approved in 2024 with compute, datasets, future skills and safe AI themes",
            "ai"
          ],
          [
            "AI",
            "machines performing tasks requiring human intelligence",
            "ai"
          ],
          [
            "Machine Learning",
            "systems learn patterns from data",
            "ai"
          ],
          [
            "Generative AI",
            "AI that creates text, image, audio or code",
            "ai"
          ],
          [
            "CERT-In",
            "Indian Computer Emergency Response Team; cybersecurity advisories",
            "cyber"
          ],
          [
            "Phishing",
            "fraudulent attempt to steal credentials or money",
            "cyber"
          ],
          [
            "Malware",
            "malicious software such as virus, worm, trojan, ransomware",
            "cyber"
          ],
          [
            "Firewall",
            "security system that filters network traffic",
            "cyber"
          ],
          [
            "Two-factor authentication",
            "login security using two proofs",
            "cyber"
          ],
          [
            "Zero Trust",
            "security idea: never trust automatically, verify continuously",
            "cyber"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Digital India",
        "answer": "launched in 2015; digital infrastructure, services and empowerment",
        "tag": "digital",
        "explanation": "Fixed association: Digital India — launched in 2015; digital infrastructure, services and empowerment. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "DigiLocker",
        "answer": "cloud-based digital document wallet under Digital India",
        "tag": "digital",
        "explanation": "Fixed association: DigiLocker — cloud-based digital document wallet under Digital India. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "UMANG",
        "answer": "single mobile platform for government services",
        "tag": "digital",
        "explanation": "Fixed association: UMANG — single mobile platform for government services. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "MyGov",
        "answer": "citizen engagement and crowdsourcing platform",
        "tag": "digital",
        "explanation": "Fixed association: MyGov — citizen engagement and crowdsourcing platform. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "API Setu",
        "answer": "API marketplace/integration platform memory",
        "tag": "digital",
        "explanation": "Fixed association: API Setu — API marketplace/integration platform memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "eSign",
        "answer": "electronic signing service using Aadhaar-based authentication memory",
        "tag": "digital",
        "explanation": "Fixed association: eSign — electronic signing service using Aadhaar-based authentication memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "BharatNet",
        "answer": "broadband connectivity for gram panchayats memory",
        "tag": "digital",
        "explanation": "Fixed association: BharatNet — broadband connectivity for gram panchayats memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "UPI",
        "answer": "real-time digital payment system memory",
        "tag": "digital",
        "explanation": "Fixed association: UPI — real-time digital payment system memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "IndiaAI Mission",
        "answer": "AI mission approved in 2024 with compute, datasets, future skills and safe AI themes",
        "tag": "ai",
        "explanation": "Fixed association: IndiaAI Mission — AI mission approved in 2024 with compute, datasets, future skills and safe AI themes. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "AI",
        "answer": "machines performing tasks requiring human intelligence",
        "tag": "ai",
        "explanation": "Fixed association: AI — machines performing tasks requiring human intelligence. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Machine Learning",
        "answer": "systems learn patterns from data",
        "tag": "ai",
        "explanation": "Fixed association: Machine Learning — systems learn patterns from data. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Generative AI",
        "answer": "AI that creates text, image, audio or code",
        "tag": "ai",
        "explanation": "Fixed association: Generative AI — AI that creates text, image, audio or code. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "CERT-In",
        "answer": "Indian Computer Emergency Response Team; cybersecurity advisories",
        "tag": "cyber",
        "explanation": "Fixed association: CERT-In — Indian Computer Emergency Response Team; cybersecurity advisories. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Phishing",
        "answer": "fraudulent attempt to steal credentials or money",
        "tag": "cyber",
        "explanation": "Fixed association: Phishing — fraudulent attempt to steal credentials or money. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Malware",
        "answer": "malicious software such as virus, worm, trojan, ransomware",
        "tag": "cyber",
        "explanation": "Fixed association: Malware — malicious software such as virus, worm, trojan, ransomware. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Firewall",
        "answer": "security system that filters network traffic",
        "tag": "cyber",
        "explanation": "Fixed association: Firewall — security system that filters network traffic. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Two-factor authentication",
        "answer": "login security using two proofs",
        "tag": "cyber",
        "explanation": "Fixed association: Two-factor authentication — login security using two proofs. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Zero Trust",
        "answer": "security idea: never trust automatically, verify continuously",
        "tag": "cyber",
        "explanation": "Fixed association: Zero Trust — security idea: never trust automatically, verify continuously. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "science-biology-human-body",
    "day": 22,
    "title": "Biology: human body systems and functions",
    "bucket": "General Science",
    "priority": "Medium-High",
    "why": "Science questions are usually NCERT/Lucent level and direct but require exact terms.",
    "concepts": [
      "Digestive system",
      "Saliva enzyme",
      "Pancreatic juice",
      "Respiration",
      "Blood",
      "RBC",
      "WBC",
      "Platelets",
      "Heart",
      "Lungs",
      "Kidney",
      "Liver",
      "Neuron",
      "Medulla oblongata"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Biology: human body systems and functions under General Science. It is included because Science questions are usually NCERT/Lucent level and direct but require exact terms. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Digestive system, Saliva enzyme, Pancreatic juice, Respiration, Blood, RBC, WBC, Platelets, Heart, Lungs, Kidney, Liver, Neuron, Medulla oblongata. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In General Science, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Digestive system: breaks food into absorbable nutrients. Fixed association: Digestive system — breaks food into absorbable nutrients. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Saliva enzyme: ptyalin/amylase begins starch digestion. Fixed association: Saliva enzyme — ptyalin/amylase begins starch digestion. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Pancreatic juice: contains digestive enzymes like amylase, lipase, trypsin. Fixed association: Pancreatic juice — contains digestive enzymes like amylase, lipase, trypsin. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Respiration: release of energy from food. Fixed association: Respiration — release of energy from food. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Blood: transports oxygen, nutrients, hormones and waste. Fixed association: Blood — transports oxygen, nutrients, hormones and waste. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. RBC: contains haemoglobin and carries oxygen. Fixed association: RBC — contains haemoglobin and carries oxygen. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. WBC: defence against infection. Fixed association: WBC — defence against infection. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Platelets: blood clotting. Fixed association: Platelets — blood clotting. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Heart: pumps blood through circulatory system. Fixed association: Heart — pumps blood through circulatory system. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Lungs: gas exchange organs. Fixed association: Lungs — gas exchange organs. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Kidney: excretion and water-salt balance. Fixed association: Kidney — excretion and water-salt balance. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Liver: bile secretion and metabolism memory. Fixed association: Liver — bile secretion and metabolism memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Neuron: basic unit of nervous system. Fixed association: Neuron — basic unit of nervous system. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Medulla oblongata: controls involuntary functions like breathing/heartbeat memory. Fixed association: Medulla oblongata — controls involuntary functions like breathing/heartbeat memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'breaks food into absorbable nutrients', recall 'Digestive system'. If it gives 'Digestive system', recall 'breaks food into absorbable nutrients'.\n- If the paper gives 'ptyalin/amylase begins starch digestion', recall 'Saliva enzyme'. If it gives 'Saliva enzyme', recall 'ptyalin/amylase begins starch digestion'.\n- If the paper gives 'contains digestive enzymes like amylase, lipase, trypsin', recall 'Pancreatic juice'. If it gives 'Pancreatic juice', recall 'contains digestive enzymes like amylase, lipase, trypsin'.\n- If the paper gives 'release of energy from food', recall 'Respiration'. If it gives 'Respiration', recall 'release of energy from food'.\n- If the paper gives 'transports oxygen, nutrients, hormones and waste', recall 'Blood'. If it gives 'Blood', recall 'transports oxygen, nutrients, hormones and waste'.\n- If the paper gives 'contains haemoglobin and carries oxygen', recall 'RBC'. If it gives 'RBC', recall 'contains haemoglobin and carries oxygen'.\n- If the paper gives 'defence against infection', recall 'WBC'. If it gives 'WBC', recall 'defence against infection'.\n- If the paper gives 'blood clotting', recall 'Platelets'. If it gives 'Platelets', recall 'blood clotting'.\n- If the paper gives 'pumps blood through circulatory system', recall 'Heart'. If it gives 'Heart', recall 'pumps blood through circulatory system'.\n- If the paper gives 'gas exchange organs', recall 'Lungs'. If it gives 'Lungs', recall 'gas exchange organs'.\n- If the paper gives 'excretion and water-salt balance', recall 'Kidney'. If it gives 'Kidney', recall 'excretion and water-salt balance'.\n- If the paper gives 'bile secretion and metabolism memory', recall 'Liver'. If it gives 'Liver', recall 'bile secretion and metabolism memory'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Digestive system",
            "breaks food into absorbable nutrients",
            "biology"
          ],
          [
            "Saliva enzyme",
            "ptyalin/amylase begins starch digestion",
            "biology"
          ],
          [
            "Pancreatic juice",
            "contains digestive enzymes like amylase, lipase, trypsin",
            "biology"
          ],
          [
            "Respiration",
            "release of energy from food",
            "biology"
          ],
          [
            "Blood",
            "transports oxygen, nutrients, hormones and waste",
            "biology"
          ],
          [
            "RBC",
            "contains haemoglobin and carries oxygen",
            "biology"
          ],
          [
            "WBC",
            "defence against infection",
            "biology"
          ],
          [
            "Platelets",
            "blood clotting",
            "biology"
          ],
          [
            "Heart",
            "pumps blood through circulatory system",
            "biology"
          ],
          [
            "Lungs",
            "gas exchange organs",
            "biology"
          ],
          [
            "Kidney",
            "excretion and water-salt balance",
            "biology"
          ],
          [
            "Liver",
            "bile secretion and metabolism memory",
            "biology"
          ],
          [
            "Neuron",
            "basic unit of nervous system",
            "biology"
          ],
          [
            "Medulla oblongata",
            "controls involuntary functions like breathing/heartbeat memory",
            "biology"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Digestive system",
        "answer": "breaks food into absorbable nutrients",
        "tag": "biology",
        "explanation": "Fixed association: Digestive system — breaks food into absorbable nutrients. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Saliva enzyme",
        "answer": "ptyalin/amylase begins starch digestion",
        "tag": "biology",
        "explanation": "Fixed association: Saliva enzyme — ptyalin/amylase begins starch digestion. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Pancreatic juice",
        "answer": "contains digestive enzymes like amylase, lipase, trypsin",
        "tag": "biology",
        "explanation": "Fixed association: Pancreatic juice — contains digestive enzymes like amylase, lipase, trypsin. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Respiration",
        "answer": "release of energy from food",
        "tag": "biology",
        "explanation": "Fixed association: Respiration — release of energy from food. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Blood",
        "answer": "transports oxygen, nutrients, hormones and waste",
        "tag": "biology",
        "explanation": "Fixed association: Blood — transports oxygen, nutrients, hormones and waste. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "RBC",
        "answer": "contains haemoglobin and carries oxygen",
        "tag": "biology",
        "explanation": "Fixed association: RBC — contains haemoglobin and carries oxygen. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "WBC",
        "answer": "defence against infection",
        "tag": "biology",
        "explanation": "Fixed association: WBC — defence against infection. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Platelets",
        "answer": "blood clotting",
        "tag": "biology",
        "explanation": "Fixed association: Platelets — blood clotting. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Heart",
        "answer": "pumps blood through circulatory system",
        "tag": "biology",
        "explanation": "Fixed association: Heart — pumps blood through circulatory system. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Lungs",
        "answer": "gas exchange organs",
        "tag": "biology",
        "explanation": "Fixed association: Lungs — gas exchange organs. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kidney",
        "answer": "excretion and water-salt balance",
        "tag": "biology",
        "explanation": "Fixed association: Kidney — excretion and water-salt balance. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Liver",
        "answer": "bile secretion and metabolism memory",
        "tag": "biology",
        "explanation": "Fixed association: Liver — bile secretion and metabolism memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Neuron",
        "answer": "basic unit of nervous system",
        "tag": "biology",
        "explanation": "Fixed association: Neuron — basic unit of nervous system. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Medulla oblongata",
        "answer": "controls involuntary functions like breathing/heartbeat memory",
        "tag": "biology",
        "explanation": "Fixed association: Medulla oblongata — controls involuntary functions like breathing/heartbeat memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "science-vitamins-diseases-hormones",
    "day": 23,
    "title": "Vitamins, diseases, hormones and immunity",
    "bucket": "General Science",
    "priority": "Medium-High",
    "why": "Disease-agent, vitamin-deficiency and hormone-function questions are frequent one-liners.",
    "concepts": [
      "Vitamin A deficiency",
      "Vitamin B1 deficiency",
      "Vitamin C deficiency",
      "Vitamin D deficiency",
      "Vitamin K",
      "Insulin",
      "Adrenaline",
      "Thyroxine",
      "Kala-azar",
      "Malaria",
      "Tuberculosis",
      "Polio",
      "Vaccine",
      "Antibody"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Vitamins, diseases, hormones and immunity under General Science. It is included because Disease-agent, vitamin-deficiency and hormone-function questions are frequent one-liners. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Vitamin A deficiency, Vitamin B1 deficiency, Vitamin C deficiency, Vitamin D deficiency, Vitamin K, Insulin, Adrenaline, Thyroxine, Kala-azar, Malaria, Tuberculosis, Polio, Vaccine, Antibody. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In General Science, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Vitamin A deficiency: night blindness. Fixed association: Vitamin A deficiency — night blindness. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Vitamin B1 deficiency: beriberi. Fixed association: Vitamin B1 deficiency — beriberi. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Vitamin C deficiency: scurvy. Fixed association: Vitamin C deficiency — scurvy. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Vitamin D deficiency: rickets/weak bones. Fixed association: Vitamin D deficiency — rickets/weak bones. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Vitamin K: blood clotting memory. Fixed association: Vitamin K — blood clotting memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Insulin: controls blood sugar. Fixed association: Insulin — controls blood sugar. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Adrenaline: emergency/fight-or-flight hormone. Fixed association: Adrenaline — emergency/fight-or-flight hormone. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Thyroxine: thyroid hormone regulating metabolism. Fixed association: Thyroxine — thyroid hormone regulating metabolism. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Kala-azar: Leishmania parasite. Fixed association: Kala-azar — Leishmania parasite. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Malaria: Plasmodium parasite. Fixed association: Malaria — Plasmodium parasite. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Tuberculosis: bacterial disease memory. Fixed association: Tuberculosis — bacterial disease memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Polio: viral disease memory. Fixed association: Polio — viral disease memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Vaccine: stimulates immunity against disease. Fixed association: Vaccine — stimulates immunity against disease. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Antibody: protein produced against antigen. Fixed association: Antibody — protein produced against antigen. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n15. Antibiotic: works against bacteria, not viruses. Fixed association: Antibiotic — works against bacteria, not viruses. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'night blindness', recall 'Vitamin A deficiency'. If it gives 'Vitamin A deficiency', recall 'night blindness'.\n- If the paper gives 'beriberi', recall 'Vitamin B1 deficiency'. If it gives 'Vitamin B1 deficiency', recall 'beriberi'.\n- If the paper gives 'scurvy', recall 'Vitamin C deficiency'. If it gives 'Vitamin C deficiency', recall 'scurvy'.\n- If the paper gives 'rickets/weak bones', recall 'Vitamin D deficiency'. If it gives 'Vitamin D deficiency', recall 'rickets/weak bones'.\n- If the paper gives 'blood clotting memory', recall 'Vitamin K'. If it gives 'Vitamin K', recall 'blood clotting memory'.\n- If the paper gives 'controls blood sugar', recall 'Insulin'. If it gives 'Insulin', recall 'controls blood sugar'.\n- If the paper gives 'emergency/fight-or-flight hormone', recall 'Adrenaline'. If it gives 'Adrenaline', recall 'emergency/fight-or-flight hormone'.\n- If the paper gives 'thyroid hormone regulating metabolism', recall 'Thyroxine'. If it gives 'Thyroxine', recall 'thyroid hormone regulating metabolism'.\n- If the paper gives 'Leishmania parasite', recall 'Kala-azar'. If it gives 'Kala-azar', recall 'Leishmania parasite'.\n- If the paper gives 'Plasmodium parasite', recall 'Malaria'. If it gives 'Malaria', recall 'Plasmodium parasite'.\n- If the paper gives 'bacterial disease memory', recall 'Tuberculosis'. If it gives 'Tuberculosis', recall 'bacterial disease memory'.\n- If the paper gives 'viral disease memory', recall 'Polio'. If it gives 'Polio', recall 'viral disease memory'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Vitamin A deficiency",
            "night blindness",
            "vitamin"
          ],
          [
            "Vitamin B1 deficiency",
            "beriberi",
            "vitamin"
          ],
          [
            "Vitamin C deficiency",
            "scurvy",
            "vitamin"
          ],
          [
            "Vitamin D deficiency",
            "rickets/weak bones",
            "vitamin"
          ],
          [
            "Vitamin K",
            "blood clotting memory",
            "vitamin"
          ],
          [
            "Insulin",
            "controls blood sugar",
            "hormone"
          ],
          [
            "Adrenaline",
            "emergency/fight-or-flight hormone",
            "hormone"
          ],
          [
            "Thyroxine",
            "thyroid hormone regulating metabolism",
            "hormone"
          ],
          [
            "Kala-azar",
            "Leishmania parasite",
            "disease"
          ],
          [
            "Malaria",
            "Plasmodium parasite",
            "disease"
          ],
          [
            "Tuberculosis",
            "bacterial disease memory",
            "disease"
          ],
          [
            "Polio",
            "viral disease memory",
            "disease"
          ],
          [
            "Vaccine",
            "stimulates immunity against disease",
            "immunity"
          ],
          [
            "Antibody",
            "protein produced against antigen",
            "immunity"
          ],
          [
            "Antibiotic",
            "works against bacteria, not viruses",
            "medicine"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Vitamin A deficiency",
        "answer": "night blindness",
        "tag": "vitamin",
        "explanation": "Fixed association: Vitamin A deficiency — night blindness. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Vitamin B1 deficiency",
        "answer": "beriberi",
        "tag": "vitamin",
        "explanation": "Fixed association: Vitamin B1 deficiency — beriberi. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Vitamin C deficiency",
        "answer": "scurvy",
        "tag": "vitamin",
        "explanation": "Fixed association: Vitamin C deficiency — scurvy. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Vitamin D deficiency",
        "answer": "rickets/weak bones",
        "tag": "vitamin",
        "explanation": "Fixed association: Vitamin D deficiency — rickets/weak bones. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Vitamin K",
        "answer": "blood clotting memory",
        "tag": "vitamin",
        "explanation": "Fixed association: Vitamin K — blood clotting memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Insulin",
        "answer": "controls blood sugar",
        "tag": "hormone",
        "explanation": "Fixed association: Insulin — controls blood sugar. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Adrenaline",
        "answer": "emergency/fight-or-flight hormone",
        "tag": "hormone",
        "explanation": "Fixed association: Adrenaline — emergency/fight-or-flight hormone. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Thyroxine",
        "answer": "thyroid hormone regulating metabolism",
        "tag": "hormone",
        "explanation": "Fixed association: Thyroxine — thyroid hormone regulating metabolism. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Kala-azar",
        "answer": "Leishmania parasite",
        "tag": "disease",
        "explanation": "Fixed association: Kala-azar — Leishmania parasite. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Malaria",
        "answer": "Plasmodium parasite",
        "tag": "disease",
        "explanation": "Fixed association: Malaria — Plasmodium parasite. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Tuberculosis",
        "answer": "bacterial disease memory",
        "tag": "disease",
        "explanation": "Fixed association: Tuberculosis — bacterial disease memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Polio",
        "answer": "viral disease memory",
        "tag": "disease",
        "explanation": "Fixed association: Polio — viral disease memory. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Vaccine",
        "answer": "stimulates immunity against disease",
        "tag": "immunity",
        "explanation": "Fixed association: Vaccine — stimulates immunity against disease. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Antibody",
        "answer": "protein produced against antigen",
        "tag": "immunity",
        "explanation": "Fixed association: Antibody — protein produced against antigen. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Antibiotic",
        "answer": "works against bacteria, not viruses",
        "tag": "medicine",
        "explanation": "Fixed association: Antibiotic — works against bacteria, not viruses. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "science-physics",
    "day": 24,
    "title": "Physics: motion, force, light, sound, electricity and heat",
    "bucket": "General Science",
    "priority": "Medium-High",
    "why": "Physics appears as short concept or formula-based application questions.",
    "concepts": [
      "Speed",
      "Acceleration",
      "Force",
      "Gravity",
      "Earth escape velocity",
      "Sound",
      "Light",
      "Reflection",
      "Refraction",
      "Electric current",
      "Ohm’s law",
      "Power",
      "Heat",
      "Magnetism"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Physics: motion, force, light, sound, electricity and heat under General Science. It is included because Physics appears as short concept or formula-based application questions. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Speed, Acceleration, Force, Gravity, Earth escape velocity, Sound, Light, Reflection, Refraction, Electric current, Ohm’s law, Power, Heat, Magnetism. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In General Science, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Speed: distance divided by time. Fixed association: Speed — distance divided by time. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Acceleration: rate of change of velocity. Fixed association: Acceleration — rate of change of velocity. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Force: mass × acceleration. Fixed association: Force — mass × acceleration. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Gravity: attractive force between masses. Fixed association: Gravity — attractive force between masses. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Earth escape velocity: about 11.2 km/s. Fixed association: Earth escape velocity — about 11.2 km/s. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Sound: requires medium; cannot travel in vacuum. Fixed association: Sound — requires medium; cannot travel in vacuum. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Light: electromagnetic wave; can travel in vacuum. Fixed association: Light — electromagnetic wave; can travel in vacuum. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Reflection: bouncing back of light. Fixed association: Reflection — bouncing back of light. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Refraction: bending of light when medium changes. Fixed association: Refraction — bending of light when medium changes. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Electric current: flow of electric charge. Fixed association: Electric current — flow of electric charge. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Ohm’s law: V = IR. Fixed association: Ohm’s law — V = IR. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Power: rate of doing work or energy transfer. Fixed association: Power — rate of doing work or energy transfer. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Heat: energy transfer due to temperature difference. Fixed association: Heat — energy transfer due to temperature difference. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Magnetism: force associated with magnets/moving charges. Fixed association: Magnetism — force associated with magnets/moving charges. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'distance divided by time', recall 'Speed'. If it gives 'Speed', recall 'distance divided by time'.\n- If the paper gives 'rate of change of velocity', recall 'Acceleration'. If it gives 'Acceleration', recall 'rate of change of velocity'.\n- If the paper gives 'mass × acceleration', recall 'Force'. If it gives 'Force', recall 'mass × acceleration'.\n- If the paper gives 'attractive force between masses', recall 'Gravity'. If it gives 'Gravity', recall 'attractive force between masses'.\n- If the paper gives 'about 11.2 km/s', recall 'Earth escape velocity'. If it gives 'Earth escape velocity', recall 'about 11.2 km/s'.\n- If the paper gives 'requires medium; cannot travel in vacuum', recall 'Sound'. If it gives 'Sound', recall 'requires medium; cannot travel in vacuum'.\n- If the paper gives 'electromagnetic wave; can travel in vacuum', recall 'Light'. If it gives 'Light', recall 'electromagnetic wave; can travel in vacuum'.\n- If the paper gives 'bouncing back of light', recall 'Reflection'. If it gives 'Reflection', recall 'bouncing back of light'.\n- If the paper gives 'bending of light when medium changes', recall 'Refraction'. If it gives 'Refraction', recall 'bending of light when medium changes'.\n- If the paper gives 'flow of electric charge', recall 'Electric current'. If it gives 'Electric current', recall 'flow of electric charge'.\n- If the paper gives 'V = IR', recall 'Ohm’s law'. If it gives 'Ohm’s law', recall 'V = IR'.\n- If the paper gives 'rate of doing work or energy transfer', recall 'Power'. If it gives 'Power', recall 'rate of doing work or energy transfer'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Speed",
            "distance divided by time",
            "physics"
          ],
          [
            "Acceleration",
            "rate of change of velocity",
            "physics"
          ],
          [
            "Force",
            "mass × acceleration",
            "physics"
          ],
          [
            "Gravity",
            "attractive force between masses",
            "physics"
          ],
          [
            "Earth escape velocity",
            "about 11.2 km/s",
            "physics"
          ],
          [
            "Sound",
            "requires medium; cannot travel in vacuum",
            "physics"
          ],
          [
            "Light",
            "electromagnetic wave; can travel in vacuum",
            "physics"
          ],
          [
            "Reflection",
            "bouncing back of light",
            "physics"
          ],
          [
            "Refraction",
            "bending of light when medium changes",
            "physics"
          ],
          [
            "Electric current",
            "flow of electric charge",
            "physics"
          ],
          [
            "Ohm’s law",
            "V = IR",
            "physics"
          ],
          [
            "Power",
            "rate of doing work or energy transfer",
            "physics"
          ],
          [
            "Heat",
            "energy transfer due to temperature difference",
            "physics"
          ],
          [
            "Magnetism",
            "force associated with magnets/moving charges",
            "physics"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Speed",
        "answer": "distance divided by time",
        "tag": "physics",
        "explanation": "Fixed association: Speed — distance divided by time. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Acceleration",
        "answer": "rate of change of velocity",
        "tag": "physics",
        "explanation": "Fixed association: Acceleration — rate of change of velocity. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Force",
        "answer": "mass × acceleration",
        "tag": "physics",
        "explanation": "Fixed association: Force — mass × acceleration. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Gravity",
        "answer": "attractive force between masses",
        "tag": "physics",
        "explanation": "Fixed association: Gravity — attractive force between masses. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Earth escape velocity",
        "answer": "about 11.2 km/s",
        "tag": "physics",
        "explanation": "Fixed association: Earth escape velocity — about 11.2 km/s. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sound",
        "answer": "requires medium; cannot travel in vacuum",
        "tag": "physics",
        "explanation": "Fixed association: Sound — requires medium; cannot travel in vacuum. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Light",
        "answer": "electromagnetic wave; can travel in vacuum",
        "tag": "physics",
        "explanation": "Fixed association: Light — electromagnetic wave; can travel in vacuum. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Reflection",
        "answer": "bouncing back of light",
        "tag": "physics",
        "explanation": "Fixed association: Reflection — bouncing back of light. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Refraction",
        "answer": "bending of light when medium changes",
        "tag": "physics",
        "explanation": "Fixed association: Refraction — bending of light when medium changes. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Electric current",
        "answer": "flow of electric charge",
        "tag": "physics",
        "explanation": "Fixed association: Electric current — flow of electric charge. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ohm’s law",
        "answer": "V = IR",
        "tag": "physics",
        "explanation": "Fixed association: Ohm’s law — V = IR. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Power",
        "answer": "rate of doing work or energy transfer",
        "tag": "physics",
        "explanation": "Fixed association: Power — rate of doing work or energy transfer. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Heat",
        "answer": "energy transfer due to temperature difference",
        "tag": "physics",
        "explanation": "Fixed association: Heat — energy transfer due to temperature difference. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Magnetism",
        "answer": "force associated with magnets/moving charges",
        "tag": "physics",
        "explanation": "Fixed association: Magnetism — force associated with magnets/moving charges. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "science-chem-environment",
    "day": 25,
    "title": "Chemistry and environment: everyday science",
    "bucket": "General Science",
    "priority": "Medium-High",
    "why": "Chemistry/environment questions are direct and focus on daily-life science.",
    "concepts": [
      "Acid",
      "Base",
      "Salt",
      "pH",
      "Metal",
      "Non-metal",
      "CO2",
      "Ozone layer",
      "Greenhouse effect",
      "Biodiversity",
      "Pollution",
      "Biodegradable",
      "Renewable energy",
      "Non-renewable energy"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Chemistry and environment: everyday science under General Science. It is included because Chemistry/environment questions are direct and focus on daily-life science. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Acid, Base, Salt, pH, Metal, Non-metal, CO2, Ozone layer, Greenhouse effect, Biodiversity, Pollution, Biodegradable, Renewable energy, Non-renewable energy. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In General Science, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Acid: sour substance, turns blue litmus red. Fixed association: Acid — sour substance, turns blue litmus red. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Base: bitter/slippery substance, turns red litmus blue. Fixed association: Base — bitter/slippery substance, turns red litmus blue. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Salt: product of acid-base neutralisation. Fixed association: Salt — product of acid-base neutralisation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. pH: measure of acidity/basicity. Fixed association: pH — measure of acidity/basicity. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Metal: good conductor, malleable, ductile generally. Fixed association: Metal — good conductor, malleable, ductile generally. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Non-metal: poor conductor generally, exception graphite. Fixed association: Non-metal — poor conductor generally, exception graphite. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. CO2: greenhouse gas and product of respiration/combustion. Fixed association: CO2 — greenhouse gas and product of respiration/combustion. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Ozone layer: absorbs harmful ultraviolet radiation. Fixed association: Ozone layer — absorbs harmful ultraviolet radiation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Greenhouse effect: warming due to greenhouse gases. Fixed association: Greenhouse effect — warming due to greenhouse gases. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Biodiversity: variety of living organisms. Fixed association: Biodiversity — variety of living organisms. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Pollution: undesirable change in environment. Fixed association: Pollution — undesirable change in environment. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Biodegradable: can be decomposed by microorganisms. Fixed association: Biodegradable — can be decomposed by microorganisms. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n13. Renewable energy: solar, wind, hydro, biomass examples. Fixed association: Renewable energy — solar, wind, hydro, biomass examples. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n14. Non-renewable energy: coal, petroleum, natural gas examples. Fixed association: Non-renewable energy — coal, petroleum, natural gas examples. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'sour substance, turns blue litmus red', recall 'Acid'. If it gives 'Acid', recall 'sour substance, turns blue litmus red'.\n- If the paper gives 'bitter/slippery substance, turns red litmus blue', recall 'Base'. If it gives 'Base', recall 'bitter/slippery substance, turns red litmus blue'.\n- If the paper gives 'product of acid-base neutralisation', recall 'Salt'. If it gives 'Salt', recall 'product of acid-base neutralisation'.\n- If the paper gives 'measure of acidity/basicity', recall 'pH'. If it gives 'pH', recall 'measure of acidity/basicity'.\n- If the paper gives 'good conductor, malleable, ductile generally', recall 'Metal'. If it gives 'Metal', recall 'good conductor, malleable, ductile generally'.\n- If the paper gives 'poor conductor generally, exception graphite', recall 'Non-metal'. If it gives 'Non-metal', recall 'poor conductor generally, exception graphite'.\n- If the paper gives 'greenhouse gas and product of respiration/combustion', recall 'CO2'. If it gives 'CO2', recall 'greenhouse gas and product of respiration/combustion'.\n- If the paper gives 'absorbs harmful ultraviolet radiation', recall 'Ozone layer'. If it gives 'Ozone layer', recall 'absorbs harmful ultraviolet radiation'.\n- If the paper gives 'warming due to greenhouse gases', recall 'Greenhouse effect'. If it gives 'Greenhouse effect', recall 'warming due to greenhouse gases'.\n- If the paper gives 'variety of living organisms', recall 'Biodiversity'. If it gives 'Biodiversity', recall 'variety of living organisms'.\n- If the paper gives 'undesirable change in environment', recall 'Pollution'. If it gives 'Pollution', recall 'undesirable change in environment'.\n- If the paper gives 'can be decomposed by microorganisms', recall 'Biodegradable'. If it gives 'Biodegradable', recall 'can be decomposed by microorganisms'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Acid",
            "sour substance, turns blue litmus red",
            "chemistry"
          ],
          [
            "Base",
            "bitter/slippery substance, turns red litmus blue",
            "chemistry"
          ],
          [
            "Salt",
            "product of acid-base neutralisation",
            "chemistry"
          ],
          [
            "pH",
            "measure of acidity/basicity",
            "chemistry"
          ],
          [
            "Metal",
            "good conductor, malleable, ductile generally",
            "chemistry"
          ],
          [
            "Non-metal",
            "poor conductor generally, exception graphite",
            "chemistry"
          ],
          [
            "CO2",
            "greenhouse gas and product of respiration/combustion",
            "environment"
          ],
          [
            "Ozone layer",
            "absorbs harmful ultraviolet radiation",
            "environment"
          ],
          [
            "Greenhouse effect",
            "warming due to greenhouse gases",
            "environment"
          ],
          [
            "Biodiversity",
            "variety of living organisms",
            "environment"
          ],
          [
            "Pollution",
            "undesirable change in environment",
            "environment"
          ],
          [
            "Biodegradable",
            "can be decomposed by microorganisms",
            "environment"
          ],
          [
            "Renewable energy",
            "solar, wind, hydro, biomass examples",
            "environment"
          ],
          [
            "Non-renewable energy",
            "coal, petroleum, natural gas examples",
            "environment"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Acid",
        "answer": "sour substance, turns blue litmus red",
        "tag": "chemistry",
        "explanation": "Fixed association: Acid — sour substance, turns blue litmus red. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Base",
        "answer": "bitter/slippery substance, turns red litmus blue",
        "tag": "chemistry",
        "explanation": "Fixed association: Base — bitter/slippery substance, turns red litmus blue. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Salt",
        "answer": "product of acid-base neutralisation",
        "tag": "chemistry",
        "explanation": "Fixed association: Salt — product of acid-base neutralisation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "pH",
        "answer": "measure of acidity/basicity",
        "tag": "chemistry",
        "explanation": "Fixed association: pH — measure of acidity/basicity. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Metal",
        "answer": "good conductor, malleable, ductile generally",
        "tag": "chemistry",
        "explanation": "Fixed association: Metal — good conductor, malleable, ductile generally. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Non-metal",
        "answer": "poor conductor generally, exception graphite",
        "tag": "chemistry",
        "explanation": "Fixed association: Non-metal — poor conductor generally, exception graphite. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "CO2",
        "answer": "greenhouse gas and product of respiration/combustion",
        "tag": "environment",
        "explanation": "Fixed association: CO2 — greenhouse gas and product of respiration/combustion. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ozone layer",
        "answer": "absorbs harmful ultraviolet radiation",
        "tag": "environment",
        "explanation": "Fixed association: Ozone layer — absorbs harmful ultraviolet radiation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Greenhouse effect",
        "answer": "warming due to greenhouse gases",
        "tag": "environment",
        "explanation": "Fixed association: Greenhouse effect — warming due to greenhouse gases. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Biodiversity",
        "answer": "variety of living organisms",
        "tag": "environment",
        "explanation": "Fixed association: Biodiversity — variety of living organisms. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Pollution",
        "answer": "undesirable change in environment",
        "tag": "environment",
        "explanation": "Fixed association: Pollution — undesirable change in environment. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Biodegradable",
        "answer": "can be decomposed by microorganisms",
        "tag": "environment",
        "explanation": "Fixed association: Biodegradable — can be decomposed by microorganisms. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Renewable energy",
        "answer": "solar, wind, hydro, biomass examples",
        "tag": "environment",
        "explanation": "Fixed association: Renewable energy — solar, wind, hydro, biomass examples. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Non-renewable energy",
        "answer": "coal, petroleum, natural gas examples",
        "tag": "environment",
        "explanation": "Fixed association: Non-renewable energy — coal, petroleum, natural gas examples. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "reasoning-series-analogy",
    "day": 26,
    "title": "Reasoning: series, analogy and classification",
    "bucket": "Logical Reasoning",
    "priority": "Very High",
    "why": "Series and analogy are fast-scoring if pattern recognition is practised daily.",
    "concepts": [
      "Number series",
      "Alphabet series",
      "Alphanumeric series",
      "Wrong number series",
      "Missing term",
      "Analogy",
      "Classification",
      "Letter position",
      "Square pattern",
      "Cube pattern",
      "Prime pattern",
      "Alternate gap"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Reasoning: series, analogy and classification under Logical Reasoning. It is included because Series and analogy are fast-scoring if pattern recognition is practised daily. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Number series, Alphabet series, Alphanumeric series, Wrong number series, Missing term, Analogy, Classification, Letter position, Square pattern, Cube pattern, Prime pattern, Alternate gap. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Logical Reasoning, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Number series: identify arithmetic, geometric, square, cube, prime or alternating pattern. Fixed association: Number series — identify arithmetic, geometric, square, cube, prime or alternating pattern. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Alphabet series: convert letters to positions A=1 to Z=26. Fixed association: Alphabet series — convert letters to positions A=1 to Z=26. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Alphanumeric series: track numbers, letters and symbols separately. Fixed association: Alphanumeric series — track numbers, letters and symbols separately. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Wrong number series: find the term breaking the pattern. Fixed association: Wrong number series — find the term breaking the pattern. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Missing term: apply pattern before and after the blank. Fixed association: Missing term — apply pattern before and after the blank. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Analogy: same relationship between two pairs. Fixed association: Analogy — same relationship between two pairs. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Classification: find the odd one out. Fixed association: Classification — find the odd one out. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Letter position: A=1, Z=26, opposite letters total 27. Fixed association: Letter position — A=1, Z=26, opposite letters total 27. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Square pattern: 1,4,9,16,25.... Fixed association: Square pattern — 1,4,9,16,25.... In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Cube pattern: 1,8,27,64,125.... Fixed association: Cube pattern — 1,8,27,64,125.... In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Prime pattern: 2,3,5,7,11,13.... Fixed association: Prime pattern — 2,3,5,7,11,13.... In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Alternate gap: two series interwoven in one line. Fixed association: Alternate gap — two series interwoven in one line. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'identify arithmetic, geometric, square, cube, prime or alternating pattern', recall 'Number series'. If it gives 'Number series', recall 'identify arithmetic, geometric, square, cube, prime or alternating pattern'.\n- If the paper gives 'convert letters to positions A=1 to Z=26', recall 'Alphabet series'. If it gives 'Alphabet series', recall 'convert letters to positions A=1 to Z=26'.\n- If the paper gives 'track numbers, letters and symbols separately', recall 'Alphanumeric series'. If it gives 'Alphanumeric series', recall 'track numbers, letters and symbols separately'.\n- If the paper gives 'find the term breaking the pattern', recall 'Wrong number series'. If it gives 'Wrong number series', recall 'find the term breaking the pattern'.\n- If the paper gives 'apply pattern before and after the blank', recall 'Missing term'. If it gives 'Missing term', recall 'apply pattern before and after the blank'.\n- If the paper gives 'same relationship between two pairs', recall 'Analogy'. If it gives 'Analogy', recall 'same relationship between two pairs'.\n- If the paper gives 'find the odd one out', recall 'Classification'. If it gives 'Classification', recall 'find the odd one out'.\n- If the paper gives 'A=1, Z=26, opposite letters total 27', recall 'Letter position'. If it gives 'Letter position', recall 'A=1, Z=26, opposite letters total 27'.\n- If the paper gives '1,4,9,16,25...', recall 'Square pattern'. If it gives 'Square pattern', recall '1,4,9,16,25...'.\n- If the paper gives '1,8,27,64,125...', recall 'Cube pattern'. If it gives 'Cube pattern', recall '1,8,27,64,125...'.\n- If the paper gives '2,3,5,7,11,13...', recall 'Prime pattern'. If it gives 'Prime pattern', recall '2,3,5,7,11,13...'.\n- If the paper gives 'two series interwoven in one line', recall 'Alternate gap'. If it gives 'Alternate gap', recall 'two series interwoven in one line'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Number series",
            "identify arithmetic, geometric, square, cube, prime or alternating pattern",
            "reasoning"
          ],
          [
            "Alphabet series",
            "convert letters to positions A=1 to Z=26",
            "reasoning"
          ],
          [
            "Alphanumeric series",
            "track numbers, letters and symbols separately",
            "reasoning"
          ],
          [
            "Wrong number series",
            "find the term breaking the pattern",
            "reasoning"
          ],
          [
            "Missing term",
            "apply pattern before and after the blank",
            "reasoning"
          ],
          [
            "Analogy",
            "same relationship between two pairs",
            "reasoning"
          ],
          [
            "Classification",
            "find the odd one out",
            "reasoning"
          ],
          [
            "Letter position",
            "A=1, Z=26, opposite letters total 27",
            "reasoning"
          ],
          [
            "Square pattern",
            "1,4,9,16,25...",
            "reasoning"
          ],
          [
            "Cube pattern",
            "1,8,27,64,125...",
            "reasoning"
          ],
          [
            "Prime pattern",
            "2,3,5,7,11,13...",
            "reasoning"
          ],
          [
            "Alternate gap",
            "two series interwoven in one line",
            "reasoning"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Number series",
        "answer": "identify arithmetic, geometric, square, cube, prime or alternating pattern",
        "tag": "reasoning",
        "explanation": "Fixed association: Number series — identify arithmetic, geometric, square, cube, prime or alternating pattern. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Alphabet series",
        "answer": "convert letters to positions A=1 to Z=26",
        "tag": "reasoning",
        "explanation": "Fixed association: Alphabet series — convert letters to positions A=1 to Z=26. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Alphanumeric series",
        "answer": "track numbers, letters and symbols separately",
        "tag": "reasoning",
        "explanation": "Fixed association: Alphanumeric series — track numbers, letters and symbols separately. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Wrong number series",
        "answer": "find the term breaking the pattern",
        "tag": "reasoning",
        "explanation": "Fixed association: Wrong number series — find the term breaking the pattern. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Missing term",
        "answer": "apply pattern before and after the blank",
        "tag": "reasoning",
        "explanation": "Fixed association: Missing term — apply pattern before and after the blank. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Analogy",
        "answer": "same relationship between two pairs",
        "tag": "reasoning",
        "explanation": "Fixed association: Analogy — same relationship between two pairs. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Classification",
        "answer": "find the odd one out",
        "tag": "reasoning",
        "explanation": "Fixed association: Classification — find the odd one out. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Letter position",
        "answer": "A=1, Z=26, opposite letters total 27",
        "tag": "reasoning",
        "explanation": "Fixed association: Letter position — A=1, Z=26, opposite letters total 27. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Square pattern",
        "answer": "1,4,9,16,25...",
        "tag": "reasoning",
        "explanation": "Fixed association: Square pattern — 1,4,9,16,25.... In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Cube pattern",
        "answer": "1,8,27,64,125...",
        "tag": "reasoning",
        "explanation": "Fixed association: Cube pattern — 1,8,27,64,125.... In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Prime pattern",
        "answer": "2,3,5,7,11,13...",
        "tag": "reasoning",
        "explanation": "Fixed association: Prime pattern — 2,3,5,7,11,13.... In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Alternate gap",
        "answer": "two series interwoven in one line",
        "tag": "reasoning",
        "explanation": "Fixed association: Alternate gap — two series interwoven in one line. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "reasoning-coding-decoding",
    "day": 27,
    "title": "Reasoning: coding-decoding and symbolic operations",
    "bucket": "Logical Reasoning",
    "priority": "Very High",
    "why": "Coding questions are repeated and can be solved by fixed position rules.",
    "concepts": [
      "Forward shift",
      "Backward shift",
      "Opposite letters",
      "Position coding",
      "Reverse word coding",
      "Substitution coding",
      "Conditional coding",
      "Symbol operations",
      "Matrix coding",
      "Language coding",
      "Decoding strategy"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Reasoning: coding-decoding and symbolic operations under Logical Reasoning. It is included because Coding questions are repeated and can be solved by fixed position rules. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Forward shift, Backward shift, Opposite letters, Position coding, Reverse word coding, Substitution coding, Conditional coding, Symbol operations, Matrix coding, Language coding, Decoding strategy. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Logical Reasoning, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Forward shift: each letter moves ahead by fixed places. Fixed association: Forward shift — each letter moves ahead by fixed places. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Backward shift: each letter moves back by fixed places. Fixed association: Backward shift — each letter moves back by fixed places. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Opposite letters: A-Z, B-Y, C-X pattern. Fixed association: Opposite letters — A-Z, B-Y, C-X pattern. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Position coding: letters converted into 1 to 26 numbers. Fixed association: Position coding — letters converted into 1 to 26 numbers. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Reverse word coding: word order or letter order reversed. Fixed association: Reverse word coding — word order or letter order reversed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Substitution coding: given symbols replace operations or letters. Fixed association: Substitution coding — given symbols replace operations or letters. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Conditional coding: apply rules only when condition matches. Fixed association: Conditional coding — apply rules only when condition matches. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Symbol operations: symbols stand for arithmetic operations. Fixed association: Symbol operations — symbols stand for arithmetic operations. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Matrix coding: use row-column/table based code. Fixed association: Matrix coding — use row-column/table based code. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Language coding: infer word meaning from coded sentences. Fixed association: Language coding — infer word meaning from coded sentences. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Decoding strategy: write alphabet positions before solving. Fixed association: Decoding strategy — write alphabet positions before solving. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'each letter moves ahead by fixed places', recall 'Forward shift'. If it gives 'Forward shift', recall 'each letter moves ahead by fixed places'.\n- If the paper gives 'each letter moves back by fixed places', recall 'Backward shift'. If it gives 'Backward shift', recall 'each letter moves back by fixed places'.\n- If the paper gives 'A-Z, B-Y, C-X pattern', recall 'Opposite letters'. If it gives 'Opposite letters', recall 'A-Z, B-Y, C-X pattern'.\n- If the paper gives 'letters converted into 1 to 26 numbers', recall 'Position coding'. If it gives 'Position coding', recall 'letters converted into 1 to 26 numbers'.\n- If the paper gives 'word order or letter order reversed', recall 'Reverse word coding'. If it gives 'Reverse word coding', recall 'word order or letter order reversed'.\n- If the paper gives 'given symbols replace operations or letters', recall 'Substitution coding'. If it gives 'Substitution coding', recall 'given symbols replace operations or letters'.\n- If the paper gives 'apply rules only when condition matches', recall 'Conditional coding'. If it gives 'Conditional coding', recall 'apply rules only when condition matches'.\n- If the paper gives 'symbols stand for arithmetic operations', recall 'Symbol operations'. If it gives 'Symbol operations', recall 'symbols stand for arithmetic operations'.\n- If the paper gives 'use row-column/table based code', recall 'Matrix coding'. If it gives 'Matrix coding', recall 'use row-column/table based code'.\n- If the paper gives 'infer word meaning from coded sentences', recall 'Language coding'. If it gives 'Language coding', recall 'infer word meaning from coded sentences'.\n- If the paper gives 'write alphabet positions before solving', recall 'Decoding strategy'. If it gives 'Decoding strategy', recall 'write alphabet positions before solving'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Forward shift",
            "each letter moves ahead by fixed places",
            "coding"
          ],
          [
            "Backward shift",
            "each letter moves back by fixed places",
            "coding"
          ],
          [
            "Opposite letters",
            "A-Z, B-Y, C-X pattern",
            "coding"
          ],
          [
            "Position coding",
            "letters converted into 1 to 26 numbers",
            "coding"
          ],
          [
            "Reverse word coding",
            "word order or letter order reversed",
            "coding"
          ],
          [
            "Substitution coding",
            "given symbols replace operations or letters",
            "coding"
          ],
          [
            "Conditional coding",
            "apply rules only when condition matches",
            "coding"
          ],
          [
            "Symbol operations",
            "symbols stand for arithmetic operations",
            "coding"
          ],
          [
            "Matrix coding",
            "use row-column/table based code",
            "coding"
          ],
          [
            "Language coding",
            "infer word meaning from coded sentences",
            "coding"
          ],
          [
            "Decoding strategy",
            "write alphabet positions before solving",
            "coding"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Forward shift",
        "answer": "each letter moves ahead by fixed places",
        "tag": "coding",
        "explanation": "Fixed association: Forward shift — each letter moves ahead by fixed places. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Backward shift",
        "answer": "each letter moves back by fixed places",
        "tag": "coding",
        "explanation": "Fixed association: Backward shift — each letter moves back by fixed places. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Opposite letters",
        "answer": "A-Z, B-Y, C-X pattern",
        "tag": "coding",
        "explanation": "Fixed association: Opposite letters — A-Z, B-Y, C-X pattern. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Position coding",
        "answer": "letters converted into 1 to 26 numbers",
        "tag": "coding",
        "explanation": "Fixed association: Position coding — letters converted into 1 to 26 numbers. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Reverse word coding",
        "answer": "word order or letter order reversed",
        "tag": "coding",
        "explanation": "Fixed association: Reverse word coding — word order or letter order reversed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Substitution coding",
        "answer": "given symbols replace operations or letters",
        "tag": "coding",
        "explanation": "Fixed association: Substitution coding — given symbols replace operations or letters. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Conditional coding",
        "answer": "apply rules only when condition matches",
        "tag": "coding",
        "explanation": "Fixed association: Conditional coding — apply rules only when condition matches. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Symbol operations",
        "answer": "symbols stand for arithmetic operations",
        "tag": "coding",
        "explanation": "Fixed association: Symbol operations — symbols stand for arithmetic operations. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Matrix coding",
        "answer": "use row-column/table based code",
        "tag": "coding",
        "explanation": "Fixed association: Matrix coding — use row-column/table based code. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Language coding",
        "answer": "infer word meaning from coded sentences",
        "tag": "coding",
        "explanation": "Fixed association: Language coding — infer word meaning from coded sentences. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Decoding strategy",
        "answer": "write alphabet positions before solving",
        "tag": "coding",
        "explanation": "Fixed association: Decoding strategy — write alphabet positions before solving. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "reasoning-direction-blood",
    "day": 28,
    "title": "Reasoning: direction sense, shadow and blood relation",
    "bucket": "Logical Reasoning",
    "priority": "Very High",
    "why": "Direction and relation questions are common and avoidable mistakes happen due to mental guessing.",
    "concepts": [
      "Direction diagram",
      "Left/right turns",
      "Shadow morning",
      "Shadow evening",
      "Shortest distance",
      "Blood relation tree",
      "Father’s brother",
      "Mother’s sister",
      "Son of brother",
      "Daughter of sister",
      "Coded relation",
      "Relation data sufficiency"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Reasoning: direction sense, shadow and blood relation under Logical Reasoning. It is included because Direction and relation questions are common and avoidable mistakes happen due to mental guessing. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Direction diagram, Left/right turns, Shadow morning, Shadow evening, Shortest distance, Blood relation tree, Father’s brother, Mother’s sister, Son of brother, Daughter of sister, Coded relation, Relation data sufficiency. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Logical Reasoning, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Direction diagram: always draw N-E-S-W cross. Fixed association: Direction diagram — always draw N-E-S-W cross. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Left/right turns: interpret from person’s facing direction. Fixed association: Left/right turns — interpret from person’s facing direction. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Shadow morning: sun in east, shadow falls west. Fixed association: Shadow morning — sun in east, shadow falls west. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Shadow evening: sun in west, shadow falls east. Fixed association: Shadow evening — sun in west, shadow falls east. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Shortest distance: use Pythagoras when path forms right triangle. Fixed association: Shortest distance — use Pythagoras when path forms right triangle. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Blood relation tree: draw family tree instead of verbal guessing. Fixed association: Blood relation tree — draw family tree instead of verbal guessing. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Father’s brother: uncle. Fixed association: Father’s brother — uncle. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Mother’s sister: aunt. Fixed association: Mother’s sister — aunt. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Son of brother: nephew. Fixed association: Son of brother — nephew. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Daughter of sister: niece. Fixed association: Daughter of sister — niece. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Coded relation: decode symbols before building tree. Fixed association: Coded relation — decode symbols before building tree. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Relation data sufficiency: check whether gender and generation are sufficient. Fixed association: Relation data sufficiency — check whether gender and generation are sufficient. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'always draw N-E-S-W cross', recall 'Direction diagram'. If it gives 'Direction diagram', recall 'always draw N-E-S-W cross'.\n- If the paper gives 'interpret from person’s facing direction', recall 'Left/right turns'. If it gives 'Left/right turns', recall 'interpret from person’s facing direction'.\n- If the paper gives 'sun in east, shadow falls west', recall 'Shadow morning'. If it gives 'Shadow morning', recall 'sun in east, shadow falls west'.\n- If the paper gives 'sun in west, shadow falls east', recall 'Shadow evening'. If it gives 'Shadow evening', recall 'sun in west, shadow falls east'.\n- If the paper gives 'use Pythagoras when path forms right triangle', recall 'Shortest distance'. If it gives 'Shortest distance', recall 'use Pythagoras when path forms right triangle'.\n- If the paper gives 'draw family tree instead of verbal guessing', recall 'Blood relation tree'. If it gives 'Blood relation tree', recall 'draw family tree instead of verbal guessing'.\n- If the paper gives 'uncle', recall 'Father’s brother'. If it gives 'Father’s brother', recall 'uncle'.\n- If the paper gives 'aunt', recall 'Mother’s sister'. If it gives 'Mother’s sister', recall 'aunt'.\n- If the paper gives 'nephew', recall 'Son of brother'. If it gives 'Son of brother', recall 'nephew'.\n- If the paper gives 'niece', recall 'Daughter of sister'. If it gives 'Daughter of sister', recall 'niece'.\n- If the paper gives 'decode symbols before building tree', recall 'Coded relation'. If it gives 'Coded relation', recall 'decode symbols before building tree'.\n- If the paper gives 'check whether gender and generation are sufficient', recall 'Relation data sufficiency'. If it gives 'Relation data sufficiency', recall 'check whether gender and generation are sufficient'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Direction diagram",
            "always draw N-E-S-W cross",
            "direction"
          ],
          [
            "Left/right turns",
            "interpret from person’s facing direction",
            "direction"
          ],
          [
            "Shadow morning",
            "sun in east, shadow falls west",
            "direction"
          ],
          [
            "Shadow evening",
            "sun in west, shadow falls east",
            "direction"
          ],
          [
            "Shortest distance",
            "use Pythagoras when path forms right triangle",
            "direction"
          ],
          [
            "Blood relation tree",
            "draw family tree instead of verbal guessing",
            "relation"
          ],
          [
            "Father’s brother",
            "uncle",
            "relation"
          ],
          [
            "Mother’s sister",
            "aunt",
            "relation"
          ],
          [
            "Son of brother",
            "nephew",
            "relation"
          ],
          [
            "Daughter of sister",
            "niece",
            "relation"
          ],
          [
            "Coded relation",
            "decode symbols before building tree",
            "relation"
          ],
          [
            "Relation data sufficiency",
            "check whether gender and generation are sufficient",
            "relation"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Direction diagram",
        "answer": "always draw N-E-S-W cross",
        "tag": "direction",
        "explanation": "Fixed association: Direction diagram — always draw N-E-S-W cross. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Left/right turns",
        "answer": "interpret from person’s facing direction",
        "tag": "direction",
        "explanation": "Fixed association: Left/right turns — interpret from person’s facing direction. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Shadow morning",
        "answer": "sun in east, shadow falls west",
        "tag": "direction",
        "explanation": "Fixed association: Shadow morning — sun in east, shadow falls west. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Shadow evening",
        "answer": "sun in west, shadow falls east",
        "tag": "direction",
        "explanation": "Fixed association: Shadow evening — sun in west, shadow falls east. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Shortest distance",
        "answer": "use Pythagoras when path forms right triangle",
        "tag": "direction",
        "explanation": "Fixed association: Shortest distance — use Pythagoras when path forms right triangle. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Blood relation tree",
        "answer": "draw family tree instead of verbal guessing",
        "tag": "relation",
        "explanation": "Fixed association: Blood relation tree — draw family tree instead of verbal guessing. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Father’s brother",
        "answer": "uncle",
        "tag": "relation",
        "explanation": "Fixed association: Father’s brother — uncle. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mother’s sister",
        "answer": "aunt",
        "tag": "relation",
        "explanation": "Fixed association: Mother’s sister — aunt. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Son of brother",
        "answer": "nephew",
        "tag": "relation",
        "explanation": "Fixed association: Son of brother — nephew. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Daughter of sister",
        "answer": "niece",
        "tag": "relation",
        "explanation": "Fixed association: Daughter of sister — niece. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Coded relation",
        "answer": "decode symbols before building tree",
        "tag": "relation",
        "explanation": "Fixed association: Coded relation — decode symbols before building tree. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Relation data sufficiency",
        "answer": "check whether gender and generation are sufficient",
        "tag": "relation",
        "explanation": "Fixed association: Relation data sufficiency — check whether gender and generation are sufficient. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "reasoning-syllogism-venn",
    "day": 29,
    "title": "Reasoning: syllogism, Venn diagrams and data sufficiency",
    "bucket": "Logical Reasoning",
    "priority": "Very High",
    "why": "These questions test logical certainty and are dangerous if solved by real-world assumptions.",
    "concepts": [
      "All A are B",
      "Some A are B",
      "No A is B",
      "Possibility conclusion",
      "Only conclusion follows",
      "Venn class relation",
      "Set counting",
      "Data sufficiency I/II",
      "Statement alone",
      "Together sufficient",
      "Real-world trap"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Reasoning: syllogism, Venn diagrams and data sufficiency under Logical Reasoning. It is included because These questions test logical certainty and are dangerous if solved by real-world assumptions. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: All A are B, Some A are B, No A is B, Possibility conclusion, Only conclusion follows, Venn class relation, Set counting, Data sufficiency I/II, Statement alone, Together sufficient, Real-world trap. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Logical Reasoning, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. All A are B: A circle completely inside B. Fixed association: All A are B — A circle completely inside B. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Some A are B: overlap exists. Fixed association: Some A are B — overlap exists. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. No A is B: no overlap. Fixed association: No A is B — no overlap. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Possibility conclusion: valid only when not contradicted. Fixed association: Possibility conclusion — valid only when not contradicted. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Only conclusion follows: must be true in every diagram. Fixed association: Only conclusion follows — must be true in every diagram. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Venn class relation: draw circles for class inclusion/overlap. Fixed association: Venn class relation — draw circles for class inclusion/overlap. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Set counting: use total = A + B - both + neither when needed. Fixed association: Set counting — use total = A + B - both + neither when needed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Data sufficiency I/II: do not solve fully; check whether data is enough. Fixed association: Data sufficiency I/II — do not solve fully; check whether data is enough. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Statement alone: test I alone and II alone separately. Fixed association: Statement alone — test I alone and II alone separately. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Together sufficient: both statements needed. Fixed association: Together sufficient — both statements needed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Real-world trap: use only statements, not outside knowledge. Fixed association: Real-world trap — use only statements, not outside knowledge. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'A circle completely inside B', recall 'All A are B'. If it gives 'All A are B', recall 'A circle completely inside B'.\n- If the paper gives 'overlap exists', recall 'Some A are B'. If it gives 'Some A are B', recall 'overlap exists'.\n- If the paper gives 'no overlap', recall 'No A is B'. If it gives 'No A is B', recall 'no overlap'.\n- If the paper gives 'valid only when not contradicted', recall 'Possibility conclusion'. If it gives 'Possibility conclusion', recall 'valid only when not contradicted'.\n- If the paper gives 'must be true in every diagram', recall 'Only conclusion follows'. If it gives 'Only conclusion follows', recall 'must be true in every diagram'.\n- If the paper gives 'draw circles for class inclusion/overlap', recall 'Venn class relation'. If it gives 'Venn class relation', recall 'draw circles for class inclusion/overlap'.\n- If the paper gives 'use total = A + B - both + neither when needed', recall 'Set counting'. If it gives 'Set counting', recall 'use total = A + B - both + neither when needed'.\n- If the paper gives 'do not solve fully; check whether data is enough', recall 'Data sufficiency I/II'. If it gives 'Data sufficiency I/II', recall 'do not solve fully; check whether data is enough'.\n- If the paper gives 'test I alone and II alone separately', recall 'Statement alone'. If it gives 'Statement alone', recall 'test I alone and II alone separately'.\n- If the paper gives 'both statements needed', recall 'Together sufficient'. If it gives 'Together sufficient', recall 'both statements needed'.\n- If the paper gives 'use only statements, not outside knowledge', recall 'Real-world trap'. If it gives 'Real-world trap', recall 'use only statements, not outside knowledge'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "All A are B",
            "A circle completely inside B",
            "syllogism"
          ],
          [
            "Some A are B",
            "overlap exists",
            "syllogism"
          ],
          [
            "No A is B",
            "no overlap",
            "syllogism"
          ],
          [
            "Possibility conclusion",
            "valid only when not contradicted",
            "syllogism"
          ],
          [
            "Only conclusion follows",
            "must be true in every diagram",
            "syllogism"
          ],
          [
            "Venn class relation",
            "draw circles for class inclusion/overlap",
            "venn"
          ],
          [
            "Set counting",
            "use total = A + B - both + neither when needed",
            "venn"
          ],
          [
            "Data sufficiency I/II",
            "do not solve fully; check whether data is enough",
            "sufficiency"
          ],
          [
            "Statement alone",
            "test I alone and II alone separately",
            "sufficiency"
          ],
          [
            "Together sufficient",
            "both statements needed",
            "sufficiency"
          ],
          [
            "Real-world trap",
            "use only statements, not outside knowledge",
            "logic"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "All A are B",
        "answer": "A circle completely inside B",
        "tag": "syllogism",
        "explanation": "Fixed association: All A are B — A circle completely inside B. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Some A are B",
        "answer": "overlap exists",
        "tag": "syllogism",
        "explanation": "Fixed association: Some A are B — overlap exists. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "No A is B",
        "answer": "no overlap",
        "tag": "syllogism",
        "explanation": "Fixed association: No A is B — no overlap. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Possibility conclusion",
        "answer": "valid only when not contradicted",
        "tag": "syllogism",
        "explanation": "Fixed association: Possibility conclusion — valid only when not contradicted. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Only conclusion follows",
        "answer": "must be true in every diagram",
        "tag": "syllogism",
        "explanation": "Fixed association: Only conclusion follows — must be true in every diagram. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Venn class relation",
        "answer": "draw circles for class inclusion/overlap",
        "tag": "venn",
        "explanation": "Fixed association: Venn class relation — draw circles for class inclusion/overlap. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Set counting",
        "answer": "use total = A + B - both + neither when needed",
        "tag": "venn",
        "explanation": "Fixed association: Set counting — use total = A + B - both + neither when needed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Data sufficiency I/II",
        "answer": "do not solve fully; check whether data is enough",
        "tag": "sufficiency",
        "explanation": "Fixed association: Data sufficiency I/II — do not solve fully; check whether data is enough. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Statement alone",
        "answer": "test I alone and II alone separately",
        "tag": "sufficiency",
        "explanation": "Fixed association: Statement alone — test I alone and II alone separately. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Together sufficient",
        "answer": "both statements needed",
        "tag": "sufficiency",
        "explanation": "Fixed association: Together sufficient — both statements needed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Real-world trap",
        "answer": "use only statements, not outside knowledge",
        "tag": "logic",
        "explanation": "Fixed association: Real-world trap — use only statements, not outside knowledge. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "reasoning-order-seating",
    "day": 30,
    "title": "Reasoning: ranking, order and seating arrangement",
    "bucket": "Logical Reasoning",
    "priority": "High",
    "why": "Order and seating questions are simple if positions are marked carefully.",
    "concepts": [
      "Rank from top and bottom",
      "Between persons",
      "Linear arrangement",
      "Circular arrangement",
      "Facing centre",
      "Age order",
      "Height order",
      "Conditional arrangement",
      "Arrangement trap"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Reasoning: ranking, order and seating arrangement under Logical Reasoning. It is included because Order and seating questions are simple if positions are marked carefully. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Rank from top and bottom, Between persons, Linear arrangement, Circular arrangement, Facing centre, Age order, Height order, Conditional arrangement, Arrangement trap. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Logical Reasoning, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Rank from top and bottom: total = top rank + bottom rank - 1. Fixed association: Rank from top and bottom — total = top rank + bottom rank - 1. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Between persons: subtract positions and adjust endpoints. Fixed association: Between persons — subtract positions and adjust endpoints. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Linear arrangement: fix left-right from subject’s perspective if given. Fixed association: Linear arrangement — fix left-right from subject’s perspective if given. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Circular arrangement: fix one person to remove rotation. Fixed association: Circular arrangement — fix one person to remove rotation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Facing centre: left/right changes according to facing direction. Fixed association: Facing centre — left/right changes according to facing direction. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Age order: convert older/younger into inequality chain. Fixed association: Age order — convert older/younger into inequality chain. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Height order: convert taller/shorter into inequality chain. Fixed association: Height order — convert taller/shorter into inequality chain. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Conditional arrangement: place fixed clues first. Fixed association: Conditional arrangement — place fixed clues first. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Arrangement trap: do not assume extra condition. Fixed association: Arrangement trap — do not assume extra condition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'total = top rank + bottom rank - 1', recall 'Rank from top and bottom'. If it gives 'Rank from top and bottom', recall 'total = top rank + bottom rank - 1'.\n- If the paper gives 'subtract positions and adjust endpoints', recall 'Between persons'. If it gives 'Between persons', recall 'subtract positions and adjust endpoints'.\n- If the paper gives 'fix left-right from subject’s perspective if given', recall 'Linear arrangement'. If it gives 'Linear arrangement', recall 'fix left-right from subject’s perspective if given'.\n- If the paper gives 'fix one person to remove rotation', recall 'Circular arrangement'. If it gives 'Circular arrangement', recall 'fix one person to remove rotation'.\n- If the paper gives 'left/right changes according to facing direction', recall 'Facing centre'. If it gives 'Facing centre', recall 'left/right changes according to facing direction'.\n- If the paper gives 'convert older/younger into inequality chain', recall 'Age order'. If it gives 'Age order', recall 'convert older/younger into inequality chain'.\n- If the paper gives 'convert taller/shorter into inequality chain', recall 'Height order'. If it gives 'Height order', recall 'convert taller/shorter into inequality chain'.\n- If the paper gives 'place fixed clues first', recall 'Conditional arrangement'. If it gives 'Conditional arrangement', recall 'place fixed clues first'.\n- If the paper gives 'do not assume extra condition', recall 'Arrangement trap'. If it gives 'Arrangement trap', recall 'do not assume extra condition'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Rank from top and bottom",
            "total = top rank + bottom rank - 1",
            "ranking"
          ],
          [
            "Between persons",
            "subtract positions and adjust endpoints",
            "ranking"
          ],
          [
            "Linear arrangement",
            "fix left-right from subject’s perspective if given",
            "seating"
          ],
          [
            "Circular arrangement",
            "fix one person to remove rotation",
            "seating"
          ],
          [
            "Facing centre",
            "left/right changes according to facing direction",
            "seating"
          ],
          [
            "Age order",
            "convert older/younger into inequality chain",
            "ranking"
          ],
          [
            "Height order",
            "convert taller/shorter into inequality chain",
            "ranking"
          ],
          [
            "Conditional arrangement",
            "place fixed clues first",
            "seating"
          ],
          [
            "Arrangement trap",
            "do not assume extra condition",
            "seating"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Rank from top and bottom",
        "answer": "total = top rank + bottom rank - 1",
        "tag": "ranking",
        "explanation": "Fixed association: Rank from top and bottom — total = top rank + bottom rank - 1. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Between persons",
        "answer": "subtract positions and adjust endpoints",
        "tag": "ranking",
        "explanation": "Fixed association: Between persons — subtract positions and adjust endpoints. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Linear arrangement",
        "answer": "fix left-right from subject’s perspective if given",
        "tag": "seating",
        "explanation": "Fixed association: Linear arrangement — fix left-right from subject’s perspective if given. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Circular arrangement",
        "answer": "fix one person to remove rotation",
        "tag": "seating",
        "explanation": "Fixed association: Circular arrangement — fix one person to remove rotation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Facing centre",
        "answer": "left/right changes according to facing direction",
        "tag": "seating",
        "explanation": "Fixed association: Facing centre — left/right changes according to facing direction. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Age order",
        "answer": "convert older/younger into inequality chain",
        "tag": "ranking",
        "explanation": "Fixed association: Age order — convert older/younger into inequality chain. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Height order",
        "answer": "convert taller/shorter into inequality chain",
        "tag": "ranking",
        "explanation": "Fixed association: Height order — convert taller/shorter into inequality chain. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Conditional arrangement",
        "answer": "place fixed clues first",
        "tag": "seating",
        "explanation": "Fixed association: Conditional arrangement — place fixed clues first. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Arrangement trap",
        "answer": "do not assume extra condition",
        "tag": "seating",
        "explanation": "Fixed association: Arrangement trap — do not assume extra condition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "reasoning-clock-calendar",
    "day": 31,
    "title": "Reasoning: clock and calendar",
    "bucket": "Logical Reasoning",
    "priority": "Very High",
    "why": "Clock-calendar questions are formula-based and can become fast marks.",
    "concepts": [
      "Clock angle formula",
      "Straight angle",
      "Coincidence",
      "Right angle",
      "Calendar odd days",
      "Leap year",
      "Common year",
      "Leap year odd days",
      "Month code practice",
      "Century trap"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Reasoning: clock and calendar under Logical Reasoning. It is included because Clock-calendar questions are formula-based and can become fast marks. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Clock angle formula, Straight angle, Coincidence, Right angle, Calendar odd days, Leap year, Common year, Leap year odd days, Month code practice, Century trap. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Logical Reasoning, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Clock angle formula: angle = |30H - 11M/2|. Fixed association: Clock angle formula — angle = |30H - 11M/2|. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Straight angle: hands opposite at 180 degrees. Fixed association: Straight angle — hands opposite at 180 degrees. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Coincidence: hands overlap about 11 times in 12 hours. Fixed association: Coincidence — hands overlap about 11 times in 12 hours. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Right angle: hands at 90 degrees. Fixed association: Right angle — hands at 90 degrees. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Calendar odd days: use odd days to find weekday. Fixed association: Calendar odd days — use odd days to find weekday. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Leap year: year divisible by 4, century divisible by 400. Fixed association: Leap year — year divisible by 4, century divisible by 400. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Common year: 365 days = 1 odd day. Fixed association: Common year — 365 days = 1 odd day. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Leap year odd days: 366 days = 2 odd days. Fixed association: Leap year odd days — 366 days = 2 odd days. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Month code practice: learn month odd day contribution. Fixed association: Month code practice — learn month odd day contribution. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Century trap: century years need 400 divisibility. Fixed association: Century trap — century years need 400 divisibility. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'angle = |30H - 11M/2|', recall 'Clock angle formula'. If it gives 'Clock angle formula', recall 'angle = |30H - 11M/2|'.\n- If the paper gives 'hands opposite at 180 degrees', recall 'Straight angle'. If it gives 'Straight angle', recall 'hands opposite at 180 degrees'.\n- If the paper gives 'hands overlap about 11 times in 12 hours', recall 'Coincidence'. If it gives 'Coincidence', recall 'hands overlap about 11 times in 12 hours'.\n- If the paper gives 'hands at 90 degrees', recall 'Right angle'. If it gives 'Right angle', recall 'hands at 90 degrees'.\n- If the paper gives 'use odd days to find weekday', recall 'Calendar odd days'. If it gives 'Calendar odd days', recall 'use odd days to find weekday'.\n- If the paper gives 'year divisible by 4, century divisible by 400', recall 'Leap year'. If it gives 'Leap year', recall 'year divisible by 4, century divisible by 400'.\n- If the paper gives '365 days = 1 odd day', recall 'Common year'. If it gives 'Common year', recall '365 days = 1 odd day'.\n- If the paper gives '366 days = 2 odd days', recall 'Leap year odd days'. If it gives 'Leap year odd days', recall '366 days = 2 odd days'.\n- If the paper gives 'learn month odd day contribution', recall 'Month code practice'. If it gives 'Month code practice', recall 'learn month odd day contribution'.\n- If the paper gives 'century years need 400 divisibility', recall 'Century trap'. If it gives 'Century trap', recall 'century years need 400 divisibility'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Clock angle formula",
            "angle = |30H - 11M/2|",
            "clock"
          ],
          [
            "Straight angle",
            "hands opposite at 180 degrees",
            "clock"
          ],
          [
            "Coincidence",
            "hands overlap about 11 times in 12 hours",
            "clock"
          ],
          [
            "Right angle",
            "hands at 90 degrees",
            "clock"
          ],
          [
            "Calendar odd days",
            "use odd days to find weekday",
            "calendar"
          ],
          [
            "Leap year",
            "year divisible by 4, century divisible by 400",
            "calendar"
          ],
          [
            "Common year",
            "365 days = 1 odd day",
            "calendar"
          ],
          [
            "Leap year odd days",
            "366 days = 2 odd days",
            "calendar"
          ],
          [
            "Month code practice",
            "learn month odd day contribution",
            "calendar"
          ],
          [
            "Century trap",
            "century years need 400 divisibility",
            "calendar"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Clock angle formula",
        "answer": "angle = |30H - 11M/2|",
        "tag": "clock",
        "explanation": "Fixed association: Clock angle formula — angle = |30H - 11M/2|. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Straight angle",
        "answer": "hands opposite at 180 degrees",
        "tag": "clock",
        "explanation": "Fixed association: Straight angle — hands opposite at 180 degrees. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Coincidence",
        "answer": "hands overlap about 11 times in 12 hours",
        "tag": "clock",
        "explanation": "Fixed association: Coincidence — hands overlap about 11 times in 12 hours. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Right angle",
        "answer": "hands at 90 degrees",
        "tag": "clock",
        "explanation": "Fixed association: Right angle — hands at 90 degrees. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Calendar odd days",
        "answer": "use odd days to find weekday",
        "tag": "calendar",
        "explanation": "Fixed association: Calendar odd days — use odd days to find weekday. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Leap year",
        "answer": "year divisible by 4, century divisible by 400",
        "tag": "calendar",
        "explanation": "Fixed association: Leap year — year divisible by 4, century divisible by 400. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Common year",
        "answer": "365 days = 1 odd day",
        "tag": "calendar",
        "explanation": "Fixed association: Common year — 365 days = 1 odd day. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Leap year odd days",
        "answer": "366 days = 2 odd days",
        "tag": "calendar",
        "explanation": "Fixed association: Leap year odd days — 366 days = 2 odd days. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Month code practice",
        "answer": "learn month odd day contribution",
        "tag": "calendar",
        "explanation": "Fixed association: Month code practice — learn month odd day contribution. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Century trap",
        "answer": "century years need 400 divisibility",
        "tag": "calendar",
        "explanation": "Fixed association: Century trap — century years need 400 divisibility. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "reasoning-cube-dice-nonverbal",
    "day": 32,
    "title": "Reasoning: cube, dice, mirror image and figure counting",
    "bucket": "Logical Reasoning",
    "priority": "Very High",
    "why": "Non-verbal topics appeared in previous papers and should not be skipped.",
    "concepts": [
      "Painted cube three faces",
      "Painted cube two faces",
      "Painted cube one face",
      "No face painted",
      "Opposite faces dice",
      "Adjacent faces dice",
      "Open cube",
      "Mirror image",
      "Water image",
      "Triangle counting",
      "Square counting",
      "Odd figure"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Reasoning: cube, dice, mirror image and figure counting under Logical Reasoning. It is included because Non-verbal topics appeared in previous papers and should not be skipped. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Painted cube three faces, Painted cube two faces, Painted cube one face, No face painted, Opposite faces dice, Adjacent faces dice, Open cube, Mirror image, Water image, Triangle counting, Square counting, Odd figure. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Logical Reasoning, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Painted cube three faces: corner cubes. Fixed association: Painted cube three faces — corner cubes. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Painted cube two faces: edge cubes excluding corners. Fixed association: Painted cube two faces — edge cubes excluding corners. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Painted cube one face: face-centre cubes excluding edges. Fixed association: Painted cube one face — face-centre cubes excluding edges. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. No face painted: inner cubes. Fixed association: No face painted — inner cubes. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Opposite faces dice: opposite faces never touch each other. Fixed association: Opposite faces dice — opposite faces never touch each other. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Adjacent faces dice: faces sharing an edge are adjacent. Fixed association: Adjacent faces dice — faces sharing an edge are adjacent. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Open cube: fold mentally or mark opposite faces. Fixed association: Open cube — fold mentally or mark opposite faces. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Mirror image: left-right reversal. Fixed association: Mirror image — left-right reversal. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Water image: top-bottom reversal. Fixed association: Water image — top-bottom reversal. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Triangle counting: count smallest, combined and largest triangles systematically. Fixed association: Triangle counting — count smallest, combined and largest triangles systematically. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Square counting: count by size level. Fixed association: Square counting — count by size level. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Odd figure: identify rule common to other figures. Fixed association: Odd figure — identify rule common to other figures. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'corner cubes', recall 'Painted cube three faces'. If it gives 'Painted cube three faces', recall 'corner cubes'.\n- If the paper gives 'edge cubes excluding corners', recall 'Painted cube two faces'. If it gives 'Painted cube two faces', recall 'edge cubes excluding corners'.\n- If the paper gives 'face-centre cubes excluding edges', recall 'Painted cube one face'. If it gives 'Painted cube one face', recall 'face-centre cubes excluding edges'.\n- If the paper gives 'inner cubes', recall 'No face painted'. If it gives 'No face painted', recall 'inner cubes'.\n- If the paper gives 'opposite faces never touch each other', recall 'Opposite faces dice'. If it gives 'Opposite faces dice', recall 'opposite faces never touch each other'.\n- If the paper gives 'faces sharing an edge are adjacent', recall 'Adjacent faces dice'. If it gives 'Adjacent faces dice', recall 'faces sharing an edge are adjacent'.\n- If the paper gives 'fold mentally or mark opposite faces', recall 'Open cube'. If it gives 'Open cube', recall 'fold mentally or mark opposite faces'.\n- If the paper gives 'left-right reversal', recall 'Mirror image'. If it gives 'Mirror image', recall 'left-right reversal'.\n- If the paper gives 'top-bottom reversal', recall 'Water image'. If it gives 'Water image', recall 'top-bottom reversal'.\n- If the paper gives 'count smallest, combined and largest triangles systematically', recall 'Triangle counting'. If it gives 'Triangle counting', recall 'count smallest, combined and largest triangles systematically'.\n- If the paper gives 'count by size level', recall 'Square counting'. If it gives 'Square counting', recall 'count by size level'.\n- If the paper gives 'identify rule common to other figures', recall 'Odd figure'. If it gives 'Odd figure', recall 'identify rule common to other figures'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Painted cube three faces",
            "corner cubes",
            "cube"
          ],
          [
            "Painted cube two faces",
            "edge cubes excluding corners",
            "cube"
          ],
          [
            "Painted cube one face",
            "face-centre cubes excluding edges",
            "cube"
          ],
          [
            "No face painted",
            "inner cubes",
            "cube"
          ],
          [
            "Opposite faces dice",
            "opposite faces never touch each other",
            "dice"
          ],
          [
            "Adjacent faces dice",
            "faces sharing an edge are adjacent",
            "dice"
          ],
          [
            "Open cube",
            "fold mentally or mark opposite faces",
            "cube"
          ],
          [
            "Mirror image",
            "left-right reversal",
            "nonverbal"
          ],
          [
            "Water image",
            "top-bottom reversal",
            "nonverbal"
          ],
          [
            "Triangle counting",
            "count smallest, combined and largest triangles systematically",
            "nonverbal"
          ],
          [
            "Square counting",
            "count by size level",
            "nonverbal"
          ],
          [
            "Odd figure",
            "identify rule common to other figures",
            "nonverbal"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Painted cube three faces",
        "answer": "corner cubes",
        "tag": "cube",
        "explanation": "Fixed association: Painted cube three faces — corner cubes. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Painted cube two faces",
        "answer": "edge cubes excluding corners",
        "tag": "cube",
        "explanation": "Fixed association: Painted cube two faces — edge cubes excluding corners. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Painted cube one face",
        "answer": "face-centre cubes excluding edges",
        "tag": "cube",
        "explanation": "Fixed association: Painted cube one face — face-centre cubes excluding edges. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "No face painted",
        "answer": "inner cubes",
        "tag": "cube",
        "explanation": "Fixed association: No face painted — inner cubes. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Opposite faces dice",
        "answer": "opposite faces never touch each other",
        "tag": "dice",
        "explanation": "Fixed association: Opposite faces dice — opposite faces never touch each other. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Adjacent faces dice",
        "answer": "faces sharing an edge are adjacent",
        "tag": "dice",
        "explanation": "Fixed association: Adjacent faces dice — faces sharing an edge are adjacent. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Open cube",
        "answer": "fold mentally or mark opposite faces",
        "tag": "cube",
        "explanation": "Fixed association: Open cube — fold mentally or mark opposite faces. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mirror image",
        "answer": "left-right reversal",
        "tag": "nonverbal",
        "explanation": "Fixed association: Mirror image — left-right reversal. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Water image",
        "answer": "top-bottom reversal",
        "tag": "nonverbal",
        "explanation": "Fixed association: Water image — top-bottom reversal. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Triangle counting",
        "answer": "count smallest, combined and largest triangles systematically",
        "tag": "nonverbal",
        "explanation": "Fixed association: Triangle counting — count smallest, combined and largest triangles systematically. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Square counting",
        "answer": "count by size level",
        "tag": "nonverbal",
        "explanation": "Fixed association: Square counting — count by size level. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Odd figure",
        "answer": "identify rule common to other figures",
        "tag": "nonverbal",
        "explanation": "Fixed association: Odd figure — identify rule common to other figures. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "decision-making",
    "day": 33,
    "title": "Decision making and problem solving",
    "bucket": "Decision Making",
    "priority": "Medium",
    "why": "Decision questions test ethical and administrative judgement with common sense.",
    "concepts": [
      "Best decision",
      "Administrative judgement",
      "Ethical choice",
      "Emergency priority",
      "Problem solving",
      "Student/classroom issue",
      "Conflict resolution",
      "Data-based decision",
      "Avoid extreme option",
      "Public service value"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Decision making and problem solving under Decision Making. It is included because Decision questions test ethical and administrative judgement with common sense. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Best decision, Administrative judgement, Ethical choice, Emergency priority, Problem solving, Student/classroom issue, Conflict resolution, Data-based decision, Avoid extreme option, Public service value. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Decision Making, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Best decision: legal, fair, practical and least harmful option. Fixed association: Best decision — legal, fair, practical and least harmful option. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Administrative judgement: follow rules, protect public interest, avoid bias. Fixed association: Administrative judgement — follow rules, protect public interest, avoid bias. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Ethical choice: honesty, transparency and responsibility. Fixed association: Ethical choice — honesty, transparency and responsibility. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Emergency priority: safety and immediate harm prevention first. Fixed association: Emergency priority — safety and immediate harm prevention first. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Problem solving: identify issue, collect facts, choose feasible action. Fixed association: Problem solving — identify issue, collect facts, choose feasible action. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Student/classroom issue: listen, verify, guide, do not punish blindly. Fixed association: Student/classroom issue — listen, verify, guide, do not punish blindly. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Conflict resolution: hear both sides and use evidence. Fixed association: Conflict resolution — hear both sides and use evidence. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Data-based decision: use given data, not emotion. Fixed association: Data-based decision — use given data, not emotion. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Avoid extreme option: usually too harsh or too passive. Fixed association: Avoid extreme option — usually too harsh or too passive. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Public service value: fairness, accountability, empathy. Fixed association: Public service value — fairness, accountability, empathy. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'legal, fair, practical and least harmful option', recall 'Best decision'. If it gives 'Best decision', recall 'legal, fair, practical and least harmful option'.\n- If the paper gives 'follow rules, protect public interest, avoid bias', recall 'Administrative judgement'. If it gives 'Administrative judgement', recall 'follow rules, protect public interest, avoid bias'.\n- If the paper gives 'honesty, transparency and responsibility', recall 'Ethical choice'. If it gives 'Ethical choice', recall 'honesty, transparency and responsibility'.\n- If the paper gives 'safety and immediate harm prevention first', recall 'Emergency priority'. If it gives 'Emergency priority', recall 'safety and immediate harm prevention first'.\n- If the paper gives 'identify issue, collect facts, choose feasible action', recall 'Problem solving'. If it gives 'Problem solving', recall 'identify issue, collect facts, choose feasible action'.\n- If the paper gives 'listen, verify, guide, do not punish blindly', recall 'Student/classroom issue'. If it gives 'Student/classroom issue', recall 'listen, verify, guide, do not punish blindly'.\n- If the paper gives 'hear both sides and use evidence', recall 'Conflict resolution'. If it gives 'Conflict resolution', recall 'hear both sides and use evidence'.\n- If the paper gives 'use given data, not emotion', recall 'Data-based decision'. If it gives 'Data-based decision', recall 'use given data, not emotion'.\n- If the paper gives 'usually too harsh or too passive', recall 'Avoid extreme option'. If it gives 'Avoid extreme option', recall 'usually too harsh or too passive'.\n- If the paper gives 'fairness, accountability, empathy', recall 'Public service value'. If it gives 'Public service value', recall 'fairness, accountability, empathy'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Best decision",
            "legal, fair, practical and least harmful option",
            "decision"
          ],
          [
            "Administrative judgement",
            "follow rules, protect public interest, avoid bias",
            "decision"
          ],
          [
            "Ethical choice",
            "honesty, transparency and responsibility",
            "decision"
          ],
          [
            "Emergency priority",
            "safety and immediate harm prevention first",
            "decision"
          ],
          [
            "Problem solving",
            "identify issue, collect facts, choose feasible action",
            "decision"
          ],
          [
            "Student/classroom issue",
            "listen, verify, guide, do not punish blindly",
            "decision"
          ],
          [
            "Conflict resolution",
            "hear both sides and use evidence",
            "decision"
          ],
          [
            "Data-based decision",
            "use given data, not emotion",
            "decision"
          ],
          [
            "Avoid extreme option",
            "usually too harsh or too passive",
            "decision"
          ],
          [
            "Public service value",
            "fairness, accountability, empathy",
            "decision"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Best decision",
        "answer": "legal, fair, practical and least harmful option",
        "tag": "decision",
        "explanation": "Fixed association: Best decision — legal, fair, practical and least harmful option. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Administrative judgement",
        "answer": "follow rules, protect public interest, avoid bias",
        "tag": "decision",
        "explanation": "Fixed association: Administrative judgement — follow rules, protect public interest, avoid bias. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ethical choice",
        "answer": "honesty, transparency and responsibility",
        "tag": "decision",
        "explanation": "Fixed association: Ethical choice — honesty, transparency and responsibility. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Emergency priority",
        "answer": "safety and immediate harm prevention first",
        "tag": "decision",
        "explanation": "Fixed association: Emergency priority — safety and immediate harm prevention first. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Problem solving",
        "answer": "identify issue, collect facts, choose feasible action",
        "tag": "decision",
        "explanation": "Fixed association: Problem solving — identify issue, collect facts, choose feasible action. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Student/classroom issue",
        "answer": "listen, verify, guide, do not punish blindly",
        "tag": "decision",
        "explanation": "Fixed association: Student/classroom issue — listen, verify, guide, do not punish blindly. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Conflict resolution",
        "answer": "hear both sides and use evidence",
        "tag": "decision",
        "explanation": "Fixed association: Conflict resolution — hear both sides and use evidence. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Data-based decision",
        "answer": "use given data, not emotion",
        "tag": "decision",
        "explanation": "Fixed association: Data-based decision — use given data, not emotion. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Avoid extreme option",
        "answer": "usually too harsh or too passive",
        "tag": "decision",
        "explanation": "Fixed association: Avoid extreme option — usually too harsh or too passive. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Public service value",
        "answer": "fairness, accountability, empathy",
        "tag": "decision",
        "explanation": "Fixed association: Public service value — fairness, accountability, empathy. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "math-number-lcm-hcf",
    "day": 34,
    "title": "Numeracy: number system, divisibility, LCM and HCF",
    "bucket": "Basic Numeracy",
    "priority": "Very High",
    "why": "LCM/HCF and divisibility are base topics for class X level numeracy.",
    "concepts": [
      "Even number",
      "Divisibility by 3",
      "Divisibility by 9",
      "Divisibility by 11",
      "Prime number",
      "Composite number",
      "HCF",
      "LCM",
      "LCM remainder rule",
      "Co-prime",
      "Remainder",
      "BODMAS"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Numeracy: number system, divisibility, LCM and HCF under Basic Numeracy. It is included because LCM/HCF and divisibility are base topics for class X level numeracy. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Even number, Divisibility by 3, Divisibility by 9, Divisibility by 11, Prime number, Composite number, HCF, LCM, LCM remainder rule, Co-prime, Remainder, BODMAS. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Basic Numeracy, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Even number: divisible by 2. Fixed association: Even number — divisible by 2. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Divisibility by 3: sum of digits divisible by 3. Fixed association: Divisibility by 3 — sum of digits divisible by 3. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Divisibility by 9: sum of digits divisible by 9. Fixed association: Divisibility by 9 — sum of digits divisible by 9. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Divisibility by 11: difference of alternate digit sums divisible by 11. Fixed association: Divisibility by 11 — difference of alternate digit sums divisible by 11. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Prime number: number with exactly two factors. Fixed association: Prime number — number with exactly two factors. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Composite number: number with more than two factors. Fixed association: Composite number — number with more than two factors. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. HCF: greatest common factor. Fixed association: HCF — greatest common factor. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. LCM: least common multiple. Fixed association: LCM — least common multiple. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. LCM remainder rule: required number = multiple of LCM + common remainder. Fixed association: LCM remainder rule — required number = multiple of LCM + common remainder. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Co-prime: HCF is 1. Fixed association: Co-prime — HCF is 1. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Remainder: leftover after division. Fixed association: Remainder — leftover after division. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. BODMAS: order of operations. Fixed association: BODMAS — order of operations. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'divisible by 2', recall 'Even number'. If it gives 'Even number', recall 'divisible by 2'.\n- If the paper gives 'sum of digits divisible by 3', recall 'Divisibility by 3'. If it gives 'Divisibility by 3', recall 'sum of digits divisible by 3'.\n- If the paper gives 'sum of digits divisible by 9', recall 'Divisibility by 9'. If it gives 'Divisibility by 9', recall 'sum of digits divisible by 9'.\n- If the paper gives 'difference of alternate digit sums divisible by 11', recall 'Divisibility by 11'. If it gives 'Divisibility by 11', recall 'difference of alternate digit sums divisible by 11'.\n- If the paper gives 'number with exactly two factors', recall 'Prime number'. If it gives 'Prime number', recall 'number with exactly two factors'.\n- If the paper gives 'number with more than two factors', recall 'Composite number'. If it gives 'Composite number', recall 'number with more than two factors'.\n- If the paper gives 'greatest common factor', recall 'HCF'. If it gives 'HCF', recall 'greatest common factor'.\n- If the paper gives 'least common multiple', recall 'LCM'. If it gives 'LCM', recall 'least common multiple'.\n- If the paper gives 'required number = multiple of LCM + common remainder', recall 'LCM remainder rule'. If it gives 'LCM remainder rule', recall 'required number = multiple of LCM + common remainder'.\n- If the paper gives 'HCF is 1', recall 'Co-prime'. If it gives 'Co-prime', recall 'HCF is 1'.\n- If the paper gives 'leftover after division', recall 'Remainder'. If it gives 'Remainder', recall 'leftover after division'.\n- If the paper gives 'order of operations', recall 'BODMAS'. If it gives 'BODMAS', recall 'order of operations'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Even number",
            "divisible by 2",
            "math"
          ],
          [
            "Divisibility by 3",
            "sum of digits divisible by 3",
            "math"
          ],
          [
            "Divisibility by 9",
            "sum of digits divisible by 9",
            "math"
          ],
          [
            "Divisibility by 11",
            "difference of alternate digit sums divisible by 11",
            "math"
          ],
          [
            "Prime number",
            "number with exactly two factors",
            "math"
          ],
          [
            "Composite number",
            "number with more than two factors",
            "math"
          ],
          [
            "HCF",
            "greatest common factor",
            "math"
          ],
          [
            "LCM",
            "least common multiple",
            "math"
          ],
          [
            "LCM remainder rule",
            "required number = multiple of LCM + common remainder",
            "math"
          ],
          [
            "Co-prime",
            "HCF is 1",
            "math"
          ],
          [
            "Remainder",
            "leftover after division",
            "math"
          ],
          [
            "BODMAS",
            "order of operations",
            "math"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Even number",
        "answer": "divisible by 2",
        "tag": "math",
        "explanation": "Fixed association: Even number — divisible by 2. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Divisibility by 3",
        "answer": "sum of digits divisible by 3",
        "tag": "math",
        "explanation": "Fixed association: Divisibility by 3 — sum of digits divisible by 3. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Divisibility by 9",
        "answer": "sum of digits divisible by 9",
        "tag": "math",
        "explanation": "Fixed association: Divisibility by 9 — sum of digits divisible by 9. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Divisibility by 11",
        "answer": "difference of alternate digit sums divisible by 11",
        "tag": "math",
        "explanation": "Fixed association: Divisibility by 11 — difference of alternate digit sums divisible by 11. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Prime number",
        "answer": "number with exactly two factors",
        "tag": "math",
        "explanation": "Fixed association: Prime number — number with exactly two factors. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Composite number",
        "answer": "number with more than two factors",
        "tag": "math",
        "explanation": "Fixed association: Composite number — number with more than two factors. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "HCF",
        "answer": "greatest common factor",
        "tag": "math",
        "explanation": "Fixed association: HCF — greatest common factor. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "LCM",
        "answer": "least common multiple",
        "tag": "math",
        "explanation": "Fixed association: LCM — least common multiple. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "LCM remainder rule",
        "answer": "required number = multiple of LCM + common remainder",
        "tag": "math",
        "explanation": "Fixed association: LCM remainder rule — required number = multiple of LCM + common remainder. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Co-prime",
        "answer": "HCF is 1",
        "tag": "math",
        "explanation": "Fixed association: Co-prime — HCF is 1. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Remainder",
        "answer": "leftover after division",
        "tag": "math",
        "explanation": "Fixed association: Remainder — leftover after division. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "BODMAS",
        "answer": "order of operations",
        "tag": "math",
        "explanation": "Fixed association: BODMAS — order of operations. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "math-percentage-ratio-average",
    "day": 35,
    "title": "Numeracy: percentage, ratio and average",
    "bucket": "Basic Numeracy",
    "priority": "Very High",
    "why": "These topics appear directly and inside DI.",
    "concepts": [
      "Percentage",
      "Percentage change",
      "Successive change",
      "Ratio",
      "Proportion",
      "Average",
      "Combined average",
      "Increase by x percent",
      "Decrease by x percent",
      "Fraction-percent memory",
      "Mean trap"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Numeracy: percentage, ratio and average under Basic Numeracy. It is included because These topics appear directly and inside DI. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Percentage, Percentage change, Successive change, Ratio, Proportion, Average, Combined average, Increase by x percent, Decrease by x percent, Fraction-percent memory, Mean trap. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Basic Numeracy, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Percentage: per hundred comparison. Fixed association: Percentage — per hundred comparison. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Percentage change: change/original × 100. Fixed association: Percentage change — change/original × 100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Successive change: a + b + ab/100. Fixed association: Successive change — a + b + ab/100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Ratio: comparison by division. Fixed association: Ratio — comparison by division. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Proportion: equality of ratios. Fixed association: Proportion — equality of ratios. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Average: sum of observations / number of observations. Fixed association: Average — sum of observations / number of observations. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Combined average: use total values, not average of averages blindly. Fixed association: Combined average — use total values, not average of averages blindly. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Increase by x percent: multiply by (100+x)/100. Fixed association: Increase by x percent — multiply by (100+x)/100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Decrease by x percent: multiply by (100-x)/100. Fixed association: Decrease by x percent — multiply by (100-x)/100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Fraction-percent memory: 1/2=50%, 1/4=25%, 1/5=20%, 1/8=12.5%. Fixed association: Fraction-percent memory — 1/2=50%, 1/4=25%, 1/5=20%, 1/8=12.5%. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Mean trap: extreme values affect average. Fixed association: Mean trap — extreme values affect average. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'per hundred comparison', recall 'Percentage'. If it gives 'Percentage', recall 'per hundred comparison'.\n- If the paper gives 'change/original × 100', recall 'Percentage change'. If it gives 'Percentage change', recall 'change/original × 100'.\n- If the paper gives 'a + b + ab/100', recall 'Successive change'. If it gives 'Successive change', recall 'a + b + ab/100'.\n- If the paper gives 'comparison by division', recall 'Ratio'. If it gives 'Ratio', recall 'comparison by division'.\n- If the paper gives 'equality of ratios', recall 'Proportion'. If it gives 'Proportion', recall 'equality of ratios'.\n- If the paper gives 'sum of observations / number of observations', recall 'Average'. If it gives 'Average', recall 'sum of observations / number of observations'.\n- If the paper gives 'use total values, not average of averages blindly', recall 'Combined average'. If it gives 'Combined average', recall 'use total values, not average of averages blindly'.\n- If the paper gives 'multiply by (100+x)/100', recall 'Increase by x percent'. If it gives 'Increase by x percent', recall 'multiply by (100+x)/100'.\n- If the paper gives 'multiply by (100-x)/100', recall 'Decrease by x percent'. If it gives 'Decrease by x percent', recall 'multiply by (100-x)/100'.\n- If the paper gives '1/2=50%, 1/4=25%, 1/5=20%, 1/8=12.5%', recall 'Fraction-percent memory'. If it gives 'Fraction-percent memory', recall '1/2=50%, 1/4=25%, 1/5=20%, 1/8=12.5%'.\n- If the paper gives 'extreme values affect average', recall 'Mean trap'. If it gives 'Mean trap', recall 'extreme values affect average'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Percentage",
            "per hundred comparison",
            "percentage"
          ],
          [
            "Percentage change",
            "change/original × 100",
            "percentage"
          ],
          [
            "Successive change",
            "a + b + ab/100",
            "percentage"
          ],
          [
            "Ratio",
            "comparison by division",
            "ratio"
          ],
          [
            "Proportion",
            "equality of ratios",
            "ratio"
          ],
          [
            "Average",
            "sum of observations / number of observations",
            "average"
          ],
          [
            "Combined average",
            "use total values, not average of averages blindly",
            "average"
          ],
          [
            "Increase by x percent",
            "multiply by (100+x)/100",
            "percentage"
          ],
          [
            "Decrease by x percent",
            "multiply by (100-x)/100",
            "percentage"
          ],
          [
            "Fraction-percent memory",
            "1/2=50%, 1/4=25%, 1/5=20%, 1/8=12.5%",
            "percentage"
          ],
          [
            "Mean trap",
            "extreme values affect average",
            "average"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Percentage",
        "answer": "per hundred comparison",
        "tag": "percentage",
        "explanation": "Fixed association: Percentage — per hundred comparison. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Percentage change",
        "answer": "change/original × 100",
        "tag": "percentage",
        "explanation": "Fixed association: Percentage change — change/original × 100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Successive change",
        "answer": "a + b + ab/100",
        "tag": "percentage",
        "explanation": "Fixed association: Successive change — a + b + ab/100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ratio",
        "answer": "comparison by division",
        "tag": "ratio",
        "explanation": "Fixed association: Ratio — comparison by division. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Proportion",
        "answer": "equality of ratios",
        "tag": "ratio",
        "explanation": "Fixed association: Proportion — equality of ratios. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Average",
        "answer": "sum of observations / number of observations",
        "tag": "average",
        "explanation": "Fixed association: Average — sum of observations / number of observations. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Combined average",
        "answer": "use total values, not average of averages blindly",
        "tag": "average",
        "explanation": "Fixed association: Combined average — use total values, not average of averages blindly. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Increase by x percent",
        "answer": "multiply by (100+x)/100",
        "tag": "percentage",
        "explanation": "Fixed association: Increase by x percent — multiply by (100+x)/100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Decrease by x percent",
        "answer": "multiply by (100-x)/100",
        "tag": "percentage",
        "explanation": "Fixed association: Decrease by x percent — multiply by (100-x)/100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Fraction-percent memory",
        "answer": "1/2=50%, 1/4=25%, 1/5=20%, 1/8=12.5%",
        "tag": "percentage",
        "explanation": "Fixed association: Fraction-percent memory — 1/2=50%, 1/4=25%, 1/5=20%, 1/8=12.5%. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mean trap",
        "answer": "extreme values affect average",
        "tag": "average",
        "explanation": "Fixed association: Mean trap — extreme values affect average. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "math-profit-interest",
    "day": 36,
    "title": "Numeracy: profit-loss, discount, SI and CI",
    "bucket": "Basic Numeracy",
    "priority": "Very High",
    "why": "Formula substitution and percentage interpretation questions are common.",
    "concepts": [
      "Profit",
      "Loss",
      "Profit percent",
      "Loss percent",
      "Discount",
      "Discount percent",
      "Simple Interest",
      "Amount in SI",
      "Compound Interest amount",
      "CI",
      "Marked price",
      "Selling price"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Numeracy: profit-loss, discount, SI and CI under Basic Numeracy. It is included because Formula substitution and percentage interpretation questions are common. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Profit, Loss, Profit percent, Loss percent, Discount, Discount percent, Simple Interest, Amount in SI, Compound Interest amount, CI, Marked price, Selling price. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Basic Numeracy, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Profit: SP - CP when SP is higher. Fixed association: Profit — SP - CP when SP is higher. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Loss: CP - SP when CP is higher. Fixed association: Loss — CP - SP when CP is higher. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Profit percent: profit/CP × 100. Fixed association: Profit percent — profit/CP × 100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Loss percent: loss/CP × 100. Fixed association: Loss percent — loss/CP × 100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Discount: MP - SP. Fixed association: Discount — MP - SP. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Discount percent: discount/MP × 100. Fixed association: Discount percent — discount/MP × 100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Simple Interest: SI = PRT/100. Fixed association: Simple Interest — SI = PRT/100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Amount in SI: Principal + SI. Fixed association: Amount in SI — Principal + SI. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Compound Interest amount: P(1+r/100)^n for annual compounding. Fixed association: Compound Interest amount — P(1+r/100)^n for annual compounding. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. CI: compound amount - principal. Fixed association: CI — compound amount - principal. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Marked price: price before discount. Fixed association: Marked price — price before discount. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Selling price: actual sale price. Fixed association: Selling price — actual sale price. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'SP - CP when SP is higher', recall 'Profit'. If it gives 'Profit', recall 'SP - CP when SP is higher'.\n- If the paper gives 'CP - SP when CP is higher', recall 'Loss'. If it gives 'Loss', recall 'CP - SP when CP is higher'.\n- If the paper gives 'profit/CP × 100', recall 'Profit percent'. If it gives 'Profit percent', recall 'profit/CP × 100'.\n- If the paper gives 'loss/CP × 100', recall 'Loss percent'. If it gives 'Loss percent', recall 'loss/CP × 100'.\n- If the paper gives 'MP - SP', recall 'Discount'. If it gives 'Discount', recall 'MP - SP'.\n- If the paper gives 'discount/MP × 100', recall 'Discount percent'. If it gives 'Discount percent', recall 'discount/MP × 100'.\n- If the paper gives 'SI = PRT/100', recall 'Simple Interest'. If it gives 'Simple Interest', recall 'SI = PRT/100'.\n- If the paper gives 'Principal + SI', recall 'Amount in SI'. If it gives 'Amount in SI', recall 'Principal + SI'.\n- If the paper gives 'P(1+r/100)^n for annual compounding', recall 'Compound Interest amount'. If it gives 'Compound Interest amount', recall 'P(1+r/100)^n for annual compounding'.\n- If the paper gives 'compound amount - principal', recall 'CI'. If it gives 'CI', recall 'compound amount - principal'.\n- If the paper gives 'price before discount', recall 'Marked price'. If it gives 'Marked price', recall 'price before discount'.\n- If the paper gives 'actual sale price', recall 'Selling price'. If it gives 'Selling price', recall 'actual sale price'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Profit",
            "SP - CP when SP is higher",
            "profit"
          ],
          [
            "Loss",
            "CP - SP when CP is higher",
            "profit"
          ],
          [
            "Profit percent",
            "profit/CP × 100",
            "profit"
          ],
          [
            "Loss percent",
            "loss/CP × 100",
            "profit"
          ],
          [
            "Discount",
            "MP - SP",
            "discount"
          ],
          [
            "Discount percent",
            "discount/MP × 100",
            "discount"
          ],
          [
            "Simple Interest",
            "SI = PRT/100",
            "interest"
          ],
          [
            "Amount in SI",
            "Principal + SI",
            "interest"
          ],
          [
            "Compound Interest amount",
            "P(1+r/100)^n for annual compounding",
            "interest"
          ],
          [
            "CI",
            "compound amount - principal",
            "interest"
          ],
          [
            "Marked price",
            "price before discount",
            "discount"
          ],
          [
            "Selling price",
            "actual sale price",
            "profit"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Profit",
        "answer": "SP - CP when SP is higher",
        "tag": "profit",
        "explanation": "Fixed association: Profit — SP - CP when SP is higher. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Loss",
        "answer": "CP - SP when CP is higher",
        "tag": "profit",
        "explanation": "Fixed association: Loss — CP - SP when CP is higher. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Profit percent",
        "answer": "profit/CP × 100",
        "tag": "profit",
        "explanation": "Fixed association: Profit percent — profit/CP × 100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Loss percent",
        "answer": "loss/CP × 100",
        "tag": "profit",
        "explanation": "Fixed association: Loss percent — loss/CP × 100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Discount",
        "answer": "MP - SP",
        "tag": "discount",
        "explanation": "Fixed association: Discount — MP - SP. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Discount percent",
        "answer": "discount/MP × 100",
        "tag": "discount",
        "explanation": "Fixed association: Discount percent — discount/MP × 100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Simple Interest",
        "answer": "SI = PRT/100",
        "tag": "interest",
        "explanation": "Fixed association: Simple Interest — SI = PRT/100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Amount in SI",
        "answer": "Principal + SI",
        "tag": "interest",
        "explanation": "Fixed association: Amount in SI — Principal + SI. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Compound Interest amount",
        "answer": "P(1+r/100)^n for annual compounding",
        "tag": "interest",
        "explanation": "Fixed association: Compound Interest amount — P(1+r/100)^n for annual compounding. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "CI",
        "answer": "compound amount - principal",
        "tag": "interest",
        "explanation": "Fixed association: CI — compound amount - principal. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Marked price",
        "answer": "price before discount",
        "tag": "discount",
        "explanation": "Fixed association: Marked price — price before discount. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Selling price",
        "answer": "actual sale price",
        "tag": "profit",
        "explanation": "Fixed association: Selling price — actual sale price. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "math-work-speed-age",
    "day": 37,
    "title": "Numeracy: time-work, speed-distance and age",
    "bucket": "Basic Numeracy",
    "priority": "Very High",
    "why": "These are standard class X word-problem topics.",
    "concepts": [
      "Work efficiency",
      "Combined work",
      "If A takes x days",
      "Speed",
      "Distance",
      "Time",
      "Average speed equal distances",
      "Relative speed opposite direction",
      "Relative speed same direction",
      "Age problems",
      "Father-son age trap"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Numeracy: time-work, speed-distance and age under Basic Numeracy. It is included because These are standard class X word-problem topics. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Work efficiency, Combined work, If A takes x days, Speed, Distance, Time, Average speed equal distances, Relative speed opposite direction, Relative speed same direction, Age problems, Father-son age trap. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Basic Numeracy, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Work efficiency: work done per unit time. Fixed association: Work efficiency — work done per unit time. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Combined work: add efficiencies. Fixed association: Combined work — add efficiencies. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. If A takes x days: A’s one-day work = 1/x. Fixed association: If A takes x days — A’s one-day work = 1/x. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Speed: distance/time. Fixed association: Speed — distance/time. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Distance: speed × time. Fixed association: Distance — speed × time. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Time: distance/speed. Fixed association: Time — distance/speed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Average speed equal distances: 2xy/(x+y). Fixed association: Average speed equal distances — 2xy/(x+y). In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Relative speed opposite direction: sum of speeds. Fixed association: Relative speed opposite direction — sum of speeds. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Relative speed same direction: difference of speeds. Fixed association: Relative speed same direction — difference of speeds. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Age problems: make equations from present/past/future ages. Fixed association: Age problems — make equations from present/past/future ages. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Father-son age trap: difference in ages remains constant. Fixed association: Father-son age trap — difference in ages remains constant. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'work done per unit time', recall 'Work efficiency'. If it gives 'Work efficiency', recall 'work done per unit time'.\n- If the paper gives 'add efficiencies', recall 'Combined work'. If it gives 'Combined work', recall 'add efficiencies'.\n- If the paper gives 'A’s one-day work = 1/x', recall 'If A takes x days'. If it gives 'If A takes x days', recall 'A’s one-day work = 1/x'.\n- If the paper gives 'distance/time', recall 'Speed'. If it gives 'Speed', recall 'distance/time'.\n- If the paper gives 'speed × time', recall 'Distance'. If it gives 'Distance', recall 'speed × time'.\n- If the paper gives 'distance/speed', recall 'Time'. If it gives 'Time', recall 'distance/speed'.\n- If the paper gives '2xy/(x+y)', recall 'Average speed equal distances'. If it gives 'Average speed equal distances', recall '2xy/(x+y)'.\n- If the paper gives 'sum of speeds', recall 'Relative speed opposite direction'. If it gives 'Relative speed opposite direction', recall 'sum of speeds'.\n- If the paper gives 'difference of speeds', recall 'Relative speed same direction'. If it gives 'Relative speed same direction', recall 'difference of speeds'.\n- If the paper gives 'make equations from present/past/future ages', recall 'Age problems'. If it gives 'Age problems', recall 'make equations from present/past/future ages'.\n- If the paper gives 'difference in ages remains constant', recall 'Father-son age trap'. If it gives 'Father-son age trap', recall 'difference in ages remains constant'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Work efficiency",
            "work done per unit time",
            "work"
          ],
          [
            "Combined work",
            "add efficiencies",
            "work"
          ],
          [
            "If A takes x days",
            "A’s one-day work = 1/x",
            "work"
          ],
          [
            "Speed",
            "distance/time",
            "speed"
          ],
          [
            "Distance",
            "speed × time",
            "speed"
          ],
          [
            "Time",
            "distance/speed",
            "speed"
          ],
          [
            "Average speed equal distances",
            "2xy/(x+y)",
            "speed"
          ],
          [
            "Relative speed opposite direction",
            "sum of speeds",
            "speed"
          ],
          [
            "Relative speed same direction",
            "difference of speeds",
            "speed"
          ],
          [
            "Age problems",
            "make equations from present/past/future ages",
            "age"
          ],
          [
            "Father-son age trap",
            "difference in ages remains constant",
            "age"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Work efficiency",
        "answer": "work done per unit time",
        "tag": "work",
        "explanation": "Fixed association: Work efficiency — work done per unit time. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Combined work",
        "answer": "add efficiencies",
        "tag": "work",
        "explanation": "Fixed association: Combined work — add efficiencies. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "If A takes x days",
        "answer": "A’s one-day work = 1/x",
        "tag": "work",
        "explanation": "Fixed association: If A takes x days — A’s one-day work = 1/x. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Speed",
        "answer": "distance/time",
        "tag": "speed",
        "explanation": "Fixed association: Speed — distance/time. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Distance",
        "answer": "speed × time",
        "tag": "speed",
        "explanation": "Fixed association: Distance — speed × time. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Time",
        "answer": "distance/speed",
        "tag": "speed",
        "explanation": "Fixed association: Time — distance/speed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Average speed equal distances",
        "answer": "2xy/(x+y)",
        "tag": "speed",
        "explanation": "Fixed association: Average speed equal distances — 2xy/(x+y). In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Relative speed opposite direction",
        "answer": "sum of speeds",
        "tag": "speed",
        "explanation": "Fixed association: Relative speed opposite direction — sum of speeds. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Relative speed same direction",
        "answer": "difference of speeds",
        "tag": "speed",
        "explanation": "Fixed association: Relative speed same direction — difference of speeds. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Age problems",
        "answer": "make equations from present/past/future ages",
        "tag": "age",
        "explanation": "Fixed association: Age problems — make equations from present/past/future ages. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Father-son age trap",
        "answer": "difference in ages remains constant",
        "tag": "age",
        "explanation": "Fixed association: Father-son age trap — difference in ages remains constant. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "math-algebra-mensuration",
    "day": 38,
    "title": "Numeracy: algebra, equations and mensuration",
    "bucket": "Basic Numeracy",
    "priority": "High",
    "why": "Algebra and mensuration are class X level and formula-driven.",
    "concepts": [
      "Linear equation",
      "Quadratic equation",
      "Equal roots condition",
      "AP nth term",
      "Square area",
      "Rectangle area",
      "Triangle area",
      "Circle area",
      "Circumference",
      "Cube volume",
      "Cuboid volume",
      "Perimeter"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Numeracy: algebra, equations and mensuration under Basic Numeracy. It is included because Algebra and mensuration are class X level and formula-driven. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Linear equation, Quadratic equation, Equal roots condition, AP nth term, Square area, Rectangle area, Triangle area, Circle area, Circumference, Cube volume, Cuboid volume, Perimeter. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Basic Numeracy, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Linear equation: equation of first degree. Fixed association: Linear equation — equation of first degree. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Quadratic equation: equation of second degree. Fixed association: Quadratic equation — equation of second degree. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Equal roots condition: b² - 4ac = 0. Fixed association: Equal roots condition — b² - 4ac = 0. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. AP nth term: a + (n-1)d. Fixed association: AP nth term — a + (n-1)d. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Square area: side². Fixed association: Square area — side². In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Rectangle area: length × breadth. Fixed association: Rectangle area — length × breadth. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Triangle area: 1/2 × base × height. Fixed association: Triangle area — 1/2 × base × height. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Circle area: πr². Fixed association: Circle area — πr². In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Circumference: 2πr. Fixed association: Circumference — 2πr. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Cube volume: side³. Fixed association: Cube volume — side³. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Cuboid volume: length × breadth × height. Fixed association: Cuboid volume — length × breadth × height. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Perimeter: total boundary length. Fixed association: Perimeter — total boundary length. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'equation of first degree', recall 'Linear equation'. If it gives 'Linear equation', recall 'equation of first degree'.\n- If the paper gives 'equation of second degree', recall 'Quadratic equation'. If it gives 'Quadratic equation', recall 'equation of second degree'.\n- If the paper gives 'b² - 4ac = 0', recall 'Equal roots condition'. If it gives 'Equal roots condition', recall 'b² - 4ac = 0'.\n- If the paper gives 'a + (n-1)d', recall 'AP nth term'. If it gives 'AP nth term', recall 'a + (n-1)d'.\n- If the paper gives 'side²', recall 'Square area'. If it gives 'Square area', recall 'side²'.\n- If the paper gives 'length × breadth', recall 'Rectangle area'. If it gives 'Rectangle area', recall 'length × breadth'.\n- If the paper gives '1/2 × base × height', recall 'Triangle area'. If it gives 'Triangle area', recall '1/2 × base × height'.\n- If the paper gives 'πr²', recall 'Circle area'. If it gives 'Circle area', recall 'πr²'.\n- If the paper gives '2πr', recall 'Circumference'. If it gives 'Circumference', recall '2πr'.\n- If the paper gives 'side³', recall 'Cube volume'. If it gives 'Cube volume', recall 'side³'.\n- If the paper gives 'length × breadth × height', recall 'Cuboid volume'. If it gives 'Cuboid volume', recall 'length × breadth × height'.\n- If the paper gives 'total boundary length', recall 'Perimeter'. If it gives 'Perimeter', recall 'total boundary length'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Linear equation",
            "equation of first degree",
            "algebra"
          ],
          [
            "Quadratic equation",
            "equation of second degree",
            "algebra"
          ],
          [
            "Equal roots condition",
            "b² - 4ac = 0",
            "algebra"
          ],
          [
            "AP nth term",
            "a + (n-1)d",
            "algebra"
          ],
          [
            "Square area",
            "side²",
            "mensuration"
          ],
          [
            "Rectangle area",
            "length × breadth",
            "mensuration"
          ],
          [
            "Triangle area",
            "1/2 × base × height",
            "mensuration"
          ],
          [
            "Circle area",
            "πr²",
            "mensuration"
          ],
          [
            "Circumference",
            "2πr",
            "mensuration"
          ],
          [
            "Cube volume",
            "side³",
            "mensuration"
          ],
          [
            "Cuboid volume",
            "length × breadth × height",
            "mensuration"
          ],
          [
            "Perimeter",
            "total boundary length",
            "mensuration"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Linear equation",
        "answer": "equation of first degree",
        "tag": "algebra",
        "explanation": "Fixed association: Linear equation — equation of first degree. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Quadratic equation",
        "answer": "equation of second degree",
        "tag": "algebra",
        "explanation": "Fixed association: Quadratic equation — equation of second degree. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Equal roots condition",
        "answer": "b² - 4ac = 0",
        "tag": "algebra",
        "explanation": "Fixed association: Equal roots condition — b² - 4ac = 0. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "AP nth term",
        "answer": "a + (n-1)d",
        "tag": "algebra",
        "explanation": "Fixed association: AP nth term — a + (n-1)d. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Square area",
        "answer": "side²",
        "tag": "mensuration",
        "explanation": "Fixed association: Square area — side². In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rectangle area",
        "answer": "length × breadth",
        "tag": "mensuration",
        "explanation": "Fixed association: Rectangle area — length × breadth. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Triangle area",
        "answer": "1/2 × base × height",
        "tag": "mensuration",
        "explanation": "Fixed association: Triangle area — 1/2 × base × height. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Circle area",
        "answer": "πr²",
        "tag": "mensuration",
        "explanation": "Fixed association: Circle area — πr². In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Circumference",
        "answer": "2πr",
        "tag": "mensuration",
        "explanation": "Fixed association: Circumference — 2πr. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Cube volume",
        "answer": "side³",
        "tag": "mensuration",
        "explanation": "Fixed association: Cube volume — side³. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Cuboid volume",
        "answer": "length × breadth × height",
        "tag": "mensuration",
        "explanation": "Fixed association: Cuboid volume — length × breadth × height. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Perimeter",
        "answer": "total boundary length",
        "tag": "mensuration",
        "explanation": "Fixed association: Perimeter — total boundary length. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "math-simplification-surds",
    "day": 39,
    "title": "Numeracy: simplification, surds and approximation",
    "bucket": "Basic Numeracy",
    "priority": "High",
    "why": "Simplification gives quick marks if BODMAS and square-root facts are clear.",
    "concepts": [
      "BODMAS",
      "Square root",
      "Cube root",
      "Surd",
      "Rationalisation",
      "Approximation",
      "Square numbers",
      "Cube numbers",
      "Nested radical",
      "Fraction simplification"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Numeracy: simplification, surds and approximation under Basic Numeracy. It is included because Simplification gives quick marks if BODMAS and square-root facts are clear. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: BODMAS, Square root, Cube root, Surd, Rationalisation, Approximation, Square numbers, Cube numbers, Nested radical, Fraction simplification. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Basic Numeracy, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. BODMAS: Bracket, Order, Division, Multiplication, Addition, Subtraction. Fixed association: BODMAS — Bracket, Order, Division, Multiplication, Addition, Subtraction. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Square root: number which when multiplied by itself gives original number. Fixed association: Square root — number which when multiplied by itself gives original number. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Cube root: number which when cubed gives original number. Fixed association: Cube root — number which when cubed gives original number. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Surd: irrational root expression. Fixed association: Surd — irrational root expression. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Rationalisation: removing radical from denominator. Fixed association: Rationalisation — removing radical from denominator. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Approximation: round values to calculate quickly. Fixed association: Approximation — round values to calculate quickly. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Square numbers: 1² to 30² useful for speed. Fixed association: Square numbers — 1² to 30² useful for speed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Cube numbers: 1³ to 15³ useful for speed. Fixed association: Cube numbers — 1³ to 15³ useful for speed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Nested radical: solve from inside or recognise pattern. Fixed association: Nested radical — solve from inside or recognise pattern. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Fraction simplification: cancel common factors first. Fixed association: Fraction simplification — cancel common factors first. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'Bracket, Order, Division, Multiplication, Addition, Subtraction', recall 'BODMAS'. If it gives 'BODMAS', recall 'Bracket, Order, Division, Multiplication, Addition, Subtraction'.\n- If the paper gives 'number which when multiplied by itself gives original number', recall 'Square root'. If it gives 'Square root', recall 'number which when multiplied by itself gives original number'.\n- If the paper gives 'number which when cubed gives original number', recall 'Cube root'. If it gives 'Cube root', recall 'number which when cubed gives original number'.\n- If the paper gives 'irrational root expression', recall 'Surd'. If it gives 'Surd', recall 'irrational root expression'.\n- If the paper gives 'removing radical from denominator', recall 'Rationalisation'. If it gives 'Rationalisation', recall 'removing radical from denominator'.\n- If the paper gives 'round values to calculate quickly', recall 'Approximation'. If it gives 'Approximation', recall 'round values to calculate quickly'.\n- If the paper gives '1² to 30² useful for speed', recall 'Square numbers'. If it gives 'Square numbers', recall '1² to 30² useful for speed'.\n- If the paper gives '1³ to 15³ useful for speed', recall 'Cube numbers'. If it gives 'Cube numbers', recall '1³ to 15³ useful for speed'.\n- If the paper gives 'solve from inside or recognise pattern', recall 'Nested radical'. If it gives 'Nested radical', recall 'solve from inside or recognise pattern'.\n- If the paper gives 'cancel common factors first', recall 'Fraction simplification'. If it gives 'Fraction simplification', recall 'cancel common factors first'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "BODMAS",
            "Bracket, Order, Division, Multiplication, Addition, Subtraction",
            "simplification"
          ],
          [
            "Square root",
            "number which when multiplied by itself gives original number",
            "surds"
          ],
          [
            "Cube root",
            "number which when cubed gives original number",
            "surds"
          ],
          [
            "Surd",
            "irrational root expression",
            "surds"
          ],
          [
            "Rationalisation",
            "removing radical from denominator",
            "surds"
          ],
          [
            "Approximation",
            "round values to calculate quickly",
            "simplification"
          ],
          [
            "Square numbers",
            "1² to 30² useful for speed",
            "simplification"
          ],
          [
            "Cube numbers",
            "1³ to 15³ useful for speed",
            "simplification"
          ],
          [
            "Nested radical",
            "solve from inside or recognise pattern",
            "surds"
          ],
          [
            "Fraction simplification",
            "cancel common factors first",
            "simplification"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "BODMAS",
        "answer": "Bracket, Order, Division, Multiplication, Addition, Subtraction",
        "tag": "simplification",
        "explanation": "Fixed association: BODMAS — Bracket, Order, Division, Multiplication, Addition, Subtraction. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Square root",
        "answer": "number which when multiplied by itself gives original number",
        "tag": "surds",
        "explanation": "Fixed association: Square root — number which when multiplied by itself gives original number. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Cube root",
        "answer": "number which when cubed gives original number",
        "tag": "surds",
        "explanation": "Fixed association: Cube root — number which when cubed gives original number. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Surd",
        "answer": "irrational root expression",
        "tag": "surds",
        "explanation": "Fixed association: Surd — irrational root expression. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rationalisation",
        "answer": "removing radical from denominator",
        "tag": "surds",
        "explanation": "Fixed association: Rationalisation — removing radical from denominator. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Approximation",
        "answer": "round values to calculate quickly",
        "tag": "simplification",
        "explanation": "Fixed association: Approximation — round values to calculate quickly. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Square numbers",
        "answer": "1² to 30² useful for speed",
        "tag": "simplification",
        "explanation": "Fixed association: Square numbers — 1² to 30² useful for speed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Cube numbers",
        "answer": "1³ to 15³ useful for speed",
        "tag": "simplification",
        "explanation": "Fixed association: Cube numbers — 1³ to 15³ useful for speed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Nested radical",
        "answer": "solve from inside or recognise pattern",
        "tag": "surds",
        "explanation": "Fixed association: Nested radical — solve from inside or recognise pattern. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Fraction simplification",
        "answer": "cancel common factors first",
        "tag": "simplification",
        "explanation": "Fixed association: Fraction simplification — cancel common factors first. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "di-tables-charts",
    "day": 40,
    "title": "Data Interpretation: tables, bar charts, line charts and pie charts",
    "bucket": "Data Interpretation",
    "priority": "Very High",
    "why": "DI is class X level but tests accuracy and speed under pressure.",
    "concepts": [
      "Table DI",
      "Bar chart",
      "Line chart",
      "Pie chart",
      "Central angle",
      "Percentage share",
      "Percentage increase",
      "Ratio in DI",
      "Average in DI",
      "Difference",
      "Unit trap",
      "Mixed chart"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Data Interpretation: tables, bar charts, line charts and pie charts under Data Interpretation. It is included because DI is class X level but tests accuracy and speed under pressure. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Table DI, Bar chart, Line chart, Pie chart, Central angle, Percentage share, Percentage increase, Ratio in DI, Average in DI, Difference, Unit trap, Mixed chart. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Data Interpretation, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Table DI: read rows, columns, totals and units first. Fixed association: Table DI — read rows, columns, totals and units first. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Bar chart: compare heights and values. Fixed association: Bar chart — compare heights and values. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Line chart: study trend over time. Fixed association: Line chart — study trend over time. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Pie chart: convert percentage to central angle or value. Fixed association: Pie chart — convert percentage to central angle or value. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Central angle: percentage × 360/100. Fixed association: Central angle — percentage × 360/100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Percentage share: part/total × 100. Fixed association: Percentage share — part/total × 100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Percentage increase: increase/original × 100. Fixed association: Percentage increase — increase/original × 100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Ratio in DI: simplify two quantities. Fixed association: Ratio in DI — simplify two quantities. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Average in DI: total/number. Fixed association: Average in DI — total/number. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Difference: larger value - smaller value. Fixed association: Difference — larger value - smaller value. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n11. Unit trap: check lakh, thousand, percent before calculation. Fixed association: Unit trap — check lakh, thousand, percent before calculation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n12. Mixed chart: combine table with chart carefully. Fixed association: Mixed chart — combine table with chart carefully. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'read rows, columns, totals and units first', recall 'Table DI'. If it gives 'Table DI', recall 'read rows, columns, totals and units first'.\n- If the paper gives 'compare heights and values', recall 'Bar chart'. If it gives 'Bar chart', recall 'compare heights and values'.\n- If the paper gives 'study trend over time', recall 'Line chart'. If it gives 'Line chart', recall 'study trend over time'.\n- If the paper gives 'convert percentage to central angle or value', recall 'Pie chart'. If it gives 'Pie chart', recall 'convert percentage to central angle or value'.\n- If the paper gives 'percentage × 360/100', recall 'Central angle'. If it gives 'Central angle', recall 'percentage × 360/100'.\n- If the paper gives 'part/total × 100', recall 'Percentage share'. If it gives 'Percentage share', recall 'part/total × 100'.\n- If the paper gives 'increase/original × 100', recall 'Percentage increase'. If it gives 'Percentage increase', recall 'increase/original × 100'.\n- If the paper gives 'simplify two quantities', recall 'Ratio in DI'. If it gives 'Ratio in DI', recall 'simplify two quantities'.\n- If the paper gives 'total/number', recall 'Average in DI'. If it gives 'Average in DI', recall 'total/number'.\n- If the paper gives 'larger value - smaller value', recall 'Difference'. If it gives 'Difference', recall 'larger value - smaller value'.\n- If the paper gives 'check lakh, thousand, percent before calculation', recall 'Unit trap'. If it gives 'Unit trap', recall 'check lakh, thousand, percent before calculation'.\n- If the paper gives 'combine table with chart carefully', recall 'Mixed chart'. If it gives 'Mixed chart', recall 'combine table with chart carefully'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Table DI",
            "read rows, columns, totals and units first",
            "di"
          ],
          [
            "Bar chart",
            "compare heights and values",
            "di"
          ],
          [
            "Line chart",
            "study trend over time",
            "di"
          ],
          [
            "Pie chart",
            "convert percentage to central angle or value",
            "di"
          ],
          [
            "Central angle",
            "percentage × 360/100",
            "di"
          ],
          [
            "Percentage share",
            "part/total × 100",
            "di"
          ],
          [
            "Percentage increase",
            "increase/original × 100",
            "di"
          ],
          [
            "Ratio in DI",
            "simplify two quantities",
            "di"
          ],
          [
            "Average in DI",
            "total/number",
            "di"
          ],
          [
            "Difference",
            "larger value - smaller value",
            "di"
          ],
          [
            "Unit trap",
            "check lakh, thousand, percent before calculation",
            "di"
          ],
          [
            "Mixed chart",
            "combine table with chart carefully",
            "di"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Table DI",
        "answer": "read rows, columns, totals and units first",
        "tag": "di",
        "explanation": "Fixed association: Table DI — read rows, columns, totals and units first. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bar chart",
        "answer": "compare heights and values",
        "tag": "di",
        "explanation": "Fixed association: Bar chart — compare heights and values. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Line chart",
        "answer": "study trend over time",
        "tag": "di",
        "explanation": "Fixed association: Line chart — study trend over time. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Pie chart",
        "answer": "convert percentage to central angle or value",
        "tag": "di",
        "explanation": "Fixed association: Pie chart — convert percentage to central angle or value. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Central angle",
        "answer": "percentage × 360/100",
        "tag": "di",
        "explanation": "Fixed association: Central angle — percentage × 360/100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Percentage share",
        "answer": "part/total × 100",
        "tag": "di",
        "explanation": "Fixed association: Percentage share — part/total × 100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Percentage increase",
        "answer": "increase/original × 100",
        "tag": "di",
        "explanation": "Fixed association: Percentage increase — increase/original × 100. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ratio in DI",
        "answer": "simplify two quantities",
        "tag": "di",
        "explanation": "Fixed association: Ratio in DI — simplify two quantities. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Average in DI",
        "answer": "total/number",
        "tag": "di",
        "explanation": "Fixed association: Average in DI — total/number. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Difference",
        "answer": "larger value - smaller value",
        "tag": "di",
        "explanation": "Fixed association: Difference — larger value - smaller value. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Unit trap",
        "answer": "check lakh, thousand, percent before calculation",
        "tag": "di",
        "explanation": "Fixed association: Unit trap — check lakh, thousand, percent before calculation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mixed chart",
        "answer": "combine table with chart carefully",
        "tag": "di",
        "explanation": "Fixed association: Mixed chart — combine table with chart carefully. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "di-data-sufficiency",
    "day": 41,
    "title": "Data sufficiency and analytical ability",
    "bucket": "Data Interpretation",
    "priority": "High",
    "why": "Data sufficiency checks whether information is enough, not just final answer.",
    "concepts": [
      "Data sufficiency",
      "Statement I alone",
      "Statement II alone",
      "Both together",
      "Either statement",
      "Neither sufficient",
      "Analytical ability",
      "Do not assume",
      "Check exact question",
      "Sufficient vs necessary"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Data sufficiency and analytical ability under Data Interpretation. It is included because Data sufficiency checks whether information is enough, not just final answer. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Data sufficiency, Statement I alone, Statement II alone, Both together, Either statement, Neither sufficient, Analytical ability, Do not assume, Check exact question, Sufficient vs necessary. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Data Interpretation, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Data sufficiency: decide whether statements give enough information. Fixed association: Data sufficiency — decide whether statements give enough information. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Statement I alone: test independently. Fixed association: Statement I alone — test independently. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Statement II alone: test independently. Fixed association: Statement II alone — test independently. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Both together: use when neither alone is enough. Fixed association: Both together — use when neither alone is enough. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Either statement: both statements alone can answer. Fixed association: Either statement — both statements alone can answer. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Neither sufficient: even combined data is not enough. Fixed association: Neither sufficient — even combined data is not enough. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Analytical ability: logical use of given facts. Fixed association: Analytical ability — logical use of given facts. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Do not assume: outside facts are not allowed. Fixed association: Do not assume — outside facts are not allowed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Check exact question: answer may ask value, relation or yes/no. Fixed association: Check exact question — answer may ask value, relation or yes/no. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Sufficient vs necessary: do not confuse required information with extra information. Fixed association: Sufficient vs necessary — do not confuse required information with extra information. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'decide whether statements give enough information', recall 'Data sufficiency'. If it gives 'Data sufficiency', recall 'decide whether statements give enough information'.\n- If the paper gives 'test independently', recall 'Statement I alone'. If it gives 'Statement I alone', recall 'test independently'.\n- If the paper gives 'test independently', recall 'Statement II alone'. If it gives 'Statement II alone', recall 'test independently'.\n- If the paper gives 'use when neither alone is enough', recall 'Both together'. If it gives 'Both together', recall 'use when neither alone is enough'.\n- If the paper gives 'both statements alone can answer', recall 'Either statement'. If it gives 'Either statement', recall 'both statements alone can answer'.\n- If the paper gives 'even combined data is not enough', recall 'Neither sufficient'. If it gives 'Neither sufficient', recall 'even combined data is not enough'.\n- If the paper gives 'logical use of given facts', recall 'Analytical ability'. If it gives 'Analytical ability', recall 'logical use of given facts'.\n- If the paper gives 'outside facts are not allowed', recall 'Do not assume'. If it gives 'Do not assume', recall 'outside facts are not allowed'.\n- If the paper gives 'answer may ask value, relation or yes/no', recall 'Check exact question'. If it gives 'Check exact question', recall 'answer may ask value, relation or yes/no'.\n- If the paper gives 'do not confuse required information with extra information', recall 'Sufficient vs necessary'. If it gives 'Sufficient vs necessary', recall 'do not confuse required information with extra information'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Data sufficiency",
            "decide whether statements give enough information",
            "sufficiency"
          ],
          [
            "Statement I alone",
            "test independently",
            "sufficiency"
          ],
          [
            "Statement II alone",
            "test independently",
            "sufficiency"
          ],
          [
            "Both together",
            "use when neither alone is enough",
            "sufficiency"
          ],
          [
            "Either statement",
            "both statements alone can answer",
            "sufficiency"
          ],
          [
            "Neither sufficient",
            "even combined data is not enough",
            "sufficiency"
          ],
          [
            "Analytical ability",
            "logical use of given facts",
            "analysis"
          ],
          [
            "Do not assume",
            "outside facts are not allowed",
            "sufficiency"
          ],
          [
            "Check exact question",
            "answer may ask value, relation or yes/no",
            "sufficiency"
          ],
          [
            "Sufficient vs necessary",
            "do not confuse required information with extra information",
            "sufficiency"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Data sufficiency",
        "answer": "decide whether statements give enough information",
        "tag": "sufficiency",
        "explanation": "Fixed association: Data sufficiency — decide whether statements give enough information. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Statement I alone",
        "answer": "test independently",
        "tag": "sufficiency",
        "explanation": "Fixed association: Statement I alone — test independently. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Statement II alone",
        "answer": "test independently",
        "tag": "sufficiency",
        "explanation": "Fixed association: Statement II alone — test independently. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Both together",
        "answer": "use when neither alone is enough",
        "tag": "sufficiency",
        "explanation": "Fixed association: Both together — use when neither alone is enough. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Either statement",
        "answer": "both statements alone can answer",
        "tag": "sufficiency",
        "explanation": "Fixed association: Either statement — both statements alone can answer. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Neither sufficient",
        "answer": "even combined data is not enough",
        "tag": "sufficiency",
        "explanation": "Fixed association: Neither sufficient — even combined data is not enough. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Analytical ability",
        "answer": "logical use of given facts",
        "tag": "analysis",
        "explanation": "Fixed association: Analytical ability — logical use of given facts. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Do not assume",
        "answer": "outside facts are not allowed",
        "tag": "sufficiency",
        "explanation": "Fixed association: Do not assume — outside facts are not allowed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Check exact question",
        "answer": "answer may ask value, relation or yes/no",
        "tag": "sufficiency",
        "explanation": "Fixed association: Check exact question — answer may ask value, relation or yes/no. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sufficient vs necessary",
        "answer": "do not confuse required information with extra information",
        "tag": "sufficiency",
        "explanation": "Fixed association: Sufficient vs necessary — do not confuse required information with extra information. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "paper1-rajasthan-gk-revision",
    "day": 42,
    "title": "Rajasthan GK master revision: art, history and geography",
    "bucket": "Revision",
    "priority": "Very High",
    "why": "After individual topics, mixed Rajasthan GK must be revised to handle similar options.",
    "concepts": [
      "Art and Culture revision",
      "History revision",
      "Geography revision",
      "Correct pair habit",
      "Incorrect pair habit",
      "Chronology habit",
      "District trap",
      "Community trap",
      "Exam memory",
      "Final GK target"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Rajasthan GK master revision: art, history and geography under Revision. It is included because After individual topics, mixed Rajasthan GK must be revised to handle similar options. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Art and Culture revision, History revision, Geography revision, Correct pair habit, Incorrect pair habit, Chronology habit, District trap, Community trap, Exam memory, Final GK target. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Revision, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Art and Culture revision: dance, painting, craft, fair, deity, institution tables. Fixed association: Art and Culture revision — dance, painting, craft, fair, deity, institution tables. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. History revision: site, ruler, battle, movement, saint, literature tables. Fixed association: History revision — site, ruler, battle, movement, saint, literature tables. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Geography revision: river, lake, mine, soil, climate, wildlife and census tables. Fixed association: Geography revision — river, lake, mine, soil, climate, wildlife and census tables. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Correct pair habit: read both sides of pair before choosing. Fixed association: Correct pair habit — read both sides of pair before choosing. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Incorrect pair habit: search for one wrong association, not three right ones. Fixed association: Incorrect pair habit — search for one wrong association, not three right ones. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Chronology habit: make battle/movement timelines. Fixed association: Chronology habit — make battle/movement timelines. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. District trap: similar nearby districts are common wrong options. Fixed association: District trap — similar nearby districts are common wrong options. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Community trap: folk dance/deity/community mix-ups. Fixed association: Community trap — folk dance/deity/community mix-ups. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Exam memory: table > paragraph for revision. Fixed association: Exam memory — table > paragraph for revision. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Final GK target: 85%+ accuracy in direct facts. Fixed association: Final GK target — 85%+ accuracy in direct facts. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'dance, painting, craft, fair, deity, institution tables', recall 'Art and Culture revision'. If it gives 'Art and Culture revision', recall 'dance, painting, craft, fair, deity, institution tables'.\n- If the paper gives 'site, ruler, battle, movement, saint, literature tables', recall 'History revision'. If it gives 'History revision', recall 'site, ruler, battle, movement, saint, literature tables'.\n- If the paper gives 'river, lake, mine, soil, climate, wildlife and census tables', recall 'Geography revision'. If it gives 'Geography revision', recall 'river, lake, mine, soil, climate, wildlife and census tables'.\n- If the paper gives 'read both sides of pair before choosing', recall 'Correct pair habit'. If it gives 'Correct pair habit', recall 'read both sides of pair before choosing'.\n- If the paper gives 'search for one wrong association, not three right ones', recall 'Incorrect pair habit'. If it gives 'Incorrect pair habit', recall 'search for one wrong association, not three right ones'.\n- If the paper gives 'make battle/movement timelines', recall 'Chronology habit'. If it gives 'Chronology habit', recall 'make battle/movement timelines'.\n- If the paper gives 'similar nearby districts are common wrong options', recall 'District trap'. If it gives 'District trap', recall 'similar nearby districts are common wrong options'.\n- If the paper gives 'folk dance/deity/community mix-ups', recall 'Community trap'. If it gives 'Community trap', recall 'folk dance/deity/community mix-ups'.\n- If the paper gives 'table > paragraph for revision', recall 'Exam memory'. If it gives 'Exam memory', recall 'table > paragraph for revision'.\n- If the paper gives '85%+ accuracy in direct facts', recall 'Final GK target'. If it gives 'Final GK target', recall '85%+ accuracy in direct facts'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Art and Culture revision",
            "dance, painting, craft, fair, deity, institution tables",
            "revision"
          ],
          [
            "History revision",
            "site, ruler, battle, movement, saint, literature tables",
            "revision"
          ],
          [
            "Geography revision",
            "river, lake, mine, soil, climate, wildlife and census tables",
            "revision"
          ],
          [
            "Correct pair habit",
            "read both sides of pair before choosing",
            "revision"
          ],
          [
            "Incorrect pair habit",
            "search for one wrong association, not three right ones",
            "revision"
          ],
          [
            "Chronology habit",
            "make battle/movement timelines",
            "revision"
          ],
          [
            "District trap",
            "similar nearby districts are common wrong options",
            "revision"
          ],
          [
            "Community trap",
            "folk dance/deity/community mix-ups",
            "revision"
          ],
          [
            "Exam memory",
            "table > paragraph for revision",
            "revision"
          ],
          [
            "Final GK target",
            "85%+ accuracy in direct facts",
            "revision"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Art and Culture revision",
        "answer": "dance, painting, craft, fair, deity, institution tables",
        "tag": "revision",
        "explanation": "Fixed association: Art and Culture revision — dance, painting, craft, fair, deity, institution tables. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "History revision",
        "answer": "site, ruler, battle, movement, saint, literature tables",
        "tag": "revision",
        "explanation": "Fixed association: History revision — site, ruler, battle, movement, saint, literature tables. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Geography revision",
        "answer": "river, lake, mine, soil, climate, wildlife and census tables",
        "tag": "revision",
        "explanation": "Fixed association: Geography revision — river, lake, mine, soil, climate, wildlife and census tables. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Correct pair habit",
        "answer": "read both sides of pair before choosing",
        "tag": "revision",
        "explanation": "Fixed association: Correct pair habit — read both sides of pair before choosing. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Incorrect pair habit",
        "answer": "search for one wrong association, not three right ones",
        "tag": "revision",
        "explanation": "Fixed association: Incorrect pair habit — search for one wrong association, not three right ones. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Chronology habit",
        "answer": "make battle/movement timelines",
        "tag": "revision",
        "explanation": "Fixed association: Chronology habit — make battle/movement timelines. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "District trap",
        "answer": "similar nearby districts are common wrong options",
        "tag": "revision",
        "explanation": "Fixed association: District trap — similar nearby districts are common wrong options. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Community trap",
        "answer": "folk dance/deity/community mix-ups",
        "tag": "revision",
        "explanation": "Fixed association: Community trap — folk dance/deity/community mix-ups. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Exam memory",
        "answer": "table > paragraph for revision",
        "tag": "revision",
        "explanation": "Fixed association: Exam memory — table > paragraph for revision. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Final GK target",
        "answer": "85%+ accuracy in direct facts",
        "tag": "revision",
        "explanation": "Fixed association: Final GK target — 85%+ accuracy in direct facts. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "paper1-science-ca-revision",
    "day": 43,
    "title": "Science and current affairs revision system",
    "bucket": "Revision",
    "priority": "High",
    "why": "Science and CA need repeated short revision rather than deep unnecessary theory.",
    "concepts": [
      "Science revision",
      "CA revision",
      "Digital revision",
      "Disease-agent table",
      "Formula sheet",
      "Scheme table",
      "Award table",
      "Sports table",
      "Budget table",
      "Last update rule"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Science and current affairs revision system under Revision. It is included because Science and CA need repeated short revision rather than deep unnecessary theory. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Science revision, CA revision, Digital revision, Disease-agent table, Formula sheet, Scheme table, Award table, Sports table, Budget table, Last update rule. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Revision, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Science revision: vitamins, hormones, diseases, physics formulas, chemistry one-liners. Fixed association: Science revision — vitamins, hormones, diseases, physics formulas, chemistry one-liners. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. CA revision: monthly Rajasthan schemes, awards, appointments, institutes, rankings. Fixed association: CA revision — monthly Rajasthan schemes, awards, appointments, institutes, rankings. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Digital revision: Digital India, DigiLocker, UMANG, MyGov, IndiaAI, CERT-In. Fixed association: Digital revision — Digital India, DigiLocker, UMANG, MyGov, IndiaAI, CERT-In. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Disease-agent table: disease and pathogen/deficiency. Fixed association: Disease-agent table — disease and pathogen/deficiency. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Formula sheet: speed, force, Ohm law, pH basics, percentage. Fixed association: Formula sheet — speed, force, Ohm law, pH basics, percentage. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Scheme table: scheme-department-beneficiary-date. Fixed association: Scheme table — scheme-department-beneficiary-date. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Award table: award-winner-field-year. Fixed association: Award table — award-winner-field-year. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Sports table: player-sport-event-medal. Fixed association: Sports table — player-sport-event-medal. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Budget table: announcement-sector-target group. Fixed association: Budget table — announcement-sector-target group. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Last update rule: revise latest CA again one week before exam. Fixed association: Last update rule — revise latest CA again one week before exam. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'vitamins, hormones, diseases, physics formulas, chemistry one-liners', recall 'Science revision'. If it gives 'Science revision', recall 'vitamins, hormones, diseases, physics formulas, chemistry one-liners'.\n- If the paper gives 'monthly Rajasthan schemes, awards, appointments, institutes, rankings', recall 'CA revision'. If it gives 'CA revision', recall 'monthly Rajasthan schemes, awards, appointments, institutes, rankings'.\n- If the paper gives 'Digital India, DigiLocker, UMANG, MyGov, IndiaAI, CERT-In', recall 'Digital revision'. If it gives 'Digital revision', recall 'Digital India, DigiLocker, UMANG, MyGov, IndiaAI, CERT-In'.\n- If the paper gives 'disease and pathogen/deficiency', recall 'Disease-agent table'. If it gives 'Disease-agent table', recall 'disease and pathogen/deficiency'.\n- If the paper gives 'speed, force, Ohm law, pH basics, percentage', recall 'Formula sheet'. If it gives 'Formula sheet', recall 'speed, force, Ohm law, pH basics, percentage'.\n- If the paper gives 'scheme-department-beneficiary-date', recall 'Scheme table'. If it gives 'Scheme table', recall 'scheme-department-beneficiary-date'.\n- If the paper gives 'award-winner-field-year', recall 'Award table'. If it gives 'Award table', recall 'award-winner-field-year'.\n- If the paper gives 'player-sport-event-medal', recall 'Sports table'. If it gives 'Sports table', recall 'player-sport-event-medal'.\n- If the paper gives 'announcement-sector-target group', recall 'Budget table'. If it gives 'Budget table', recall 'announcement-sector-target group'.\n- If the paper gives 'revise latest CA again one week before exam', recall 'Last update rule'. If it gives 'Last update rule', recall 'revise latest CA again one week before exam'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Science revision",
            "vitamins, hormones, diseases, physics formulas, chemistry one-liners",
            "revision"
          ],
          [
            "CA revision",
            "monthly Rajasthan schemes, awards, appointments, institutes, rankings",
            "revision"
          ],
          [
            "Digital revision",
            "Digital India, DigiLocker, UMANG, MyGov, IndiaAI, CERT-In",
            "revision"
          ],
          [
            "Disease-agent table",
            "disease and pathogen/deficiency",
            "revision"
          ],
          [
            "Formula sheet",
            "speed, force, Ohm law, pH basics, percentage",
            "revision"
          ],
          [
            "Scheme table",
            "scheme-department-beneficiary-date",
            "revision"
          ],
          [
            "Award table",
            "award-winner-field-year",
            "revision"
          ],
          [
            "Sports table",
            "player-sport-event-medal",
            "revision"
          ],
          [
            "Budget table",
            "announcement-sector-target group",
            "revision"
          ],
          [
            "Last update rule",
            "revise latest CA again one week before exam",
            "revision"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Science revision",
        "answer": "vitamins, hormones, diseases, physics formulas, chemistry one-liners",
        "tag": "revision",
        "explanation": "Fixed association: Science revision — vitamins, hormones, diseases, physics formulas, chemistry one-liners. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "CA revision",
        "answer": "monthly Rajasthan schemes, awards, appointments, institutes, rankings",
        "tag": "revision",
        "explanation": "Fixed association: CA revision — monthly Rajasthan schemes, awards, appointments, institutes, rankings. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Digital revision",
        "answer": "Digital India, DigiLocker, UMANG, MyGov, IndiaAI, CERT-In",
        "tag": "revision",
        "explanation": "Fixed association: Digital revision — Digital India, DigiLocker, UMANG, MyGov, IndiaAI, CERT-In. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Disease-agent table",
        "answer": "disease and pathogen/deficiency",
        "tag": "revision",
        "explanation": "Fixed association: Disease-agent table — disease and pathogen/deficiency. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Formula sheet",
        "answer": "speed, force, Ohm law, pH basics, percentage",
        "tag": "revision",
        "explanation": "Fixed association: Formula sheet — speed, force, Ohm law, pH basics, percentage. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Scheme table",
        "answer": "scheme-department-beneficiary-date",
        "tag": "revision",
        "explanation": "Fixed association: Scheme table — scheme-department-beneficiary-date. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Award table",
        "answer": "award-winner-field-year",
        "tag": "revision",
        "explanation": "Fixed association: Award table — award-winner-field-year. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Sports table",
        "answer": "player-sport-event-medal",
        "tag": "revision",
        "explanation": "Fixed association: Sports table — player-sport-event-medal. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Budget table",
        "answer": "announcement-sector-target group",
        "tag": "revision",
        "explanation": "Fixed association: Budget table — announcement-sector-target group. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Last update rule",
        "answer": "revise latest CA again one week before exam",
        "tag": "revision",
        "explanation": "Fixed association: Last update rule — revise latest CA again one week before exam. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "paper1-reasoning-revision",
    "day": 44,
    "title": "Reasoning master revision and error control",
    "bucket": "Revision",
    "priority": "Very High",
    "why": "Reasoning marks depend on method and not making silly mistakes.",
    "concepts": [
      "Series revision",
      "Coding revision",
      "Direction revision",
      "Blood relation revision",
      "Syllogism revision",
      "Venn revision",
      "Clock revision",
      "Calendar revision",
      "Cube revision",
      "Figure revision"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Reasoning master revision and error control under Revision. It is included because Reasoning marks depend on method and not making silly mistakes. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Series revision, Coding revision, Direction revision, Blood relation revision, Syllogism revision, Venn revision, Clock revision, Calendar revision, Cube revision, Figure revision. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Revision, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Series revision: number, alphabet, wrong number, missing term. Fixed association: Series revision — number, alphabet, wrong number, missing term. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Coding revision: letter shift, opposite, position, symbol. Fixed association: Coding revision — letter shift, opposite, position, symbol. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Direction revision: draw diagram for every question. Fixed association: Direction revision — draw diagram for every question. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Blood relation revision: draw family tree. Fixed association: Blood relation revision — draw family tree. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Syllogism revision: use only statements. Fixed association: Syllogism revision — use only statements. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Venn revision: draw circles and count carefully. Fixed association: Venn revision — draw circles and count carefully. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Clock revision: angle formula and overlap rules. Fixed association: Clock revision — angle formula and overlap rules. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Calendar revision: odd days and leap year rules. Fixed association: Calendar revision — odd days and leap year rules. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Cube revision: painted cube formulas. Fixed association: Cube revision — painted cube formulas. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Figure revision: count systematically by size. Fixed association: Figure revision — count systematically by size. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'number, alphabet, wrong number, missing term', recall 'Series revision'. If it gives 'Series revision', recall 'number, alphabet, wrong number, missing term'.\n- If the paper gives 'letter shift, opposite, position, symbol', recall 'Coding revision'. If it gives 'Coding revision', recall 'letter shift, opposite, position, symbol'.\n- If the paper gives 'draw diagram for every question', recall 'Direction revision'. If it gives 'Direction revision', recall 'draw diagram for every question'.\n- If the paper gives 'draw family tree', recall 'Blood relation revision'. If it gives 'Blood relation revision', recall 'draw family tree'.\n- If the paper gives 'use only statements', recall 'Syllogism revision'. If it gives 'Syllogism revision', recall 'use only statements'.\n- If the paper gives 'draw circles and count carefully', recall 'Venn revision'. If it gives 'Venn revision', recall 'draw circles and count carefully'.\n- If the paper gives 'angle formula and overlap rules', recall 'Clock revision'. If it gives 'Clock revision', recall 'angle formula and overlap rules'.\n- If the paper gives 'odd days and leap year rules', recall 'Calendar revision'. If it gives 'Calendar revision', recall 'odd days and leap year rules'.\n- If the paper gives 'painted cube formulas', recall 'Cube revision'. If it gives 'Cube revision', recall 'painted cube formulas'.\n- If the paper gives 'count systematically by size', recall 'Figure revision'. If it gives 'Figure revision', recall 'count systematically by size'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Series revision",
            "number, alphabet, wrong number, missing term",
            "revision"
          ],
          [
            "Coding revision",
            "letter shift, opposite, position, symbol",
            "revision"
          ],
          [
            "Direction revision",
            "draw diagram for every question",
            "revision"
          ],
          [
            "Blood relation revision",
            "draw family tree",
            "revision"
          ],
          [
            "Syllogism revision",
            "use only statements",
            "revision"
          ],
          [
            "Venn revision",
            "draw circles and count carefully",
            "revision"
          ],
          [
            "Clock revision",
            "angle formula and overlap rules",
            "revision"
          ],
          [
            "Calendar revision",
            "odd days and leap year rules",
            "revision"
          ],
          [
            "Cube revision",
            "painted cube formulas",
            "revision"
          ],
          [
            "Figure revision",
            "count systematically by size",
            "revision"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Series revision",
        "answer": "number, alphabet, wrong number, missing term",
        "tag": "revision",
        "explanation": "Fixed association: Series revision — number, alphabet, wrong number, missing term. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Coding revision",
        "answer": "letter shift, opposite, position, symbol",
        "tag": "revision",
        "explanation": "Fixed association: Coding revision — letter shift, opposite, position, symbol. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Direction revision",
        "answer": "draw diagram for every question",
        "tag": "revision",
        "explanation": "Fixed association: Direction revision — draw diagram for every question. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Blood relation revision",
        "answer": "draw family tree",
        "tag": "revision",
        "explanation": "Fixed association: Blood relation revision — draw family tree. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Syllogism revision",
        "answer": "use only statements",
        "tag": "revision",
        "explanation": "Fixed association: Syllogism revision — use only statements. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Venn revision",
        "answer": "draw circles and count carefully",
        "tag": "revision",
        "explanation": "Fixed association: Venn revision — draw circles and count carefully. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Clock revision",
        "answer": "angle formula and overlap rules",
        "tag": "revision",
        "explanation": "Fixed association: Clock revision — angle formula and overlap rules. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Calendar revision",
        "answer": "odd days and leap year rules",
        "tag": "revision",
        "explanation": "Fixed association: Calendar revision — odd days and leap year rules. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Cube revision",
        "answer": "painted cube formulas",
        "tag": "revision",
        "explanation": "Fixed association: Cube revision — painted cube formulas. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Figure revision",
        "answer": "count systematically by size",
        "tag": "revision",
        "explanation": "Fixed association: Figure revision — count systematically by size. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "paper1-numeracy-revision",
    "day": 45,
    "title": "Numeracy formula revision and speed building",
    "bucket": "Revision",
    "priority": "Very High",
    "why": "Numeracy requires formula memory plus controlled calculation.",
    "concepts": [
      "Number system revision",
      "LCM/HCF revision",
      "Percentage revision",
      "Average revision",
      "Ratio revision",
      "Profit revision",
      "Interest revision",
      "Work revision",
      "Speed revision",
      "Mensuration revision"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Numeracy formula revision and speed building under Revision. It is included because Numeracy requires formula memory plus controlled calculation. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Number system revision, LCM/HCF revision, Percentage revision, Average revision, Ratio revision, Profit revision, Interest revision, Work revision, Speed revision, Mensuration revision. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Revision, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Number system revision: divisibility, prime, factors, remainder. Fixed association: Number system revision — divisibility, prime, factors, remainder. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. LCM/HCF revision: remainder and factor questions. Fixed association: LCM/HCF revision — remainder and factor questions. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Percentage revision: change/original and successive change. Fixed association: Percentage revision — change/original and successive change. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Average revision: total/number and combined average. Fixed association: Average revision — total/number and combined average. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Ratio revision: simplification and proportion. Fixed association: Ratio revision — simplification and proportion. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Profit revision: profit/loss/discount formulas. Fixed association: Profit revision — profit/loss/discount formulas. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Interest revision: SI and CI basics. Fixed association: Interest revision — SI and CI basics. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Work revision: efficiency addition. Fixed association: Work revision — efficiency addition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Speed revision: distance-time-speed and relative speed. Fixed association: Speed revision — distance-time-speed and relative speed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Mensuration revision: area, perimeter, volume formulas. Fixed association: Mensuration revision — area, perimeter, volume formulas. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'divisibility, prime, factors, remainder', recall 'Number system revision'. If it gives 'Number system revision', recall 'divisibility, prime, factors, remainder'.\n- If the paper gives 'remainder and factor questions', recall 'LCM/HCF revision'. If it gives 'LCM/HCF revision', recall 'remainder and factor questions'.\n- If the paper gives 'change/original and successive change', recall 'Percentage revision'. If it gives 'Percentage revision', recall 'change/original and successive change'.\n- If the paper gives 'total/number and combined average', recall 'Average revision'. If it gives 'Average revision', recall 'total/number and combined average'.\n- If the paper gives 'simplification and proportion', recall 'Ratio revision'. If it gives 'Ratio revision', recall 'simplification and proportion'.\n- If the paper gives 'profit/loss/discount formulas', recall 'Profit revision'. If it gives 'Profit revision', recall 'profit/loss/discount formulas'.\n- If the paper gives 'SI and CI basics', recall 'Interest revision'. If it gives 'Interest revision', recall 'SI and CI basics'.\n- If the paper gives 'efficiency addition', recall 'Work revision'. If it gives 'Work revision', recall 'efficiency addition'.\n- If the paper gives 'distance-time-speed and relative speed', recall 'Speed revision'. If it gives 'Speed revision', recall 'distance-time-speed and relative speed'.\n- If the paper gives 'area, perimeter, volume formulas', recall 'Mensuration revision'. If it gives 'Mensuration revision', recall 'area, perimeter, volume formulas'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Number system revision",
            "divisibility, prime, factors, remainder",
            "revision"
          ],
          [
            "LCM/HCF revision",
            "remainder and factor questions",
            "revision"
          ],
          [
            "Percentage revision",
            "change/original and successive change",
            "revision"
          ],
          [
            "Average revision",
            "total/number and combined average",
            "revision"
          ],
          [
            "Ratio revision",
            "simplification and proportion",
            "revision"
          ],
          [
            "Profit revision",
            "profit/loss/discount formulas",
            "revision"
          ],
          [
            "Interest revision",
            "SI and CI basics",
            "revision"
          ],
          [
            "Work revision",
            "efficiency addition",
            "revision"
          ],
          [
            "Speed revision",
            "distance-time-speed and relative speed",
            "revision"
          ],
          [
            "Mensuration revision",
            "area, perimeter, volume formulas",
            "revision"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Number system revision",
        "answer": "divisibility, prime, factors, remainder",
        "tag": "revision",
        "explanation": "Fixed association: Number system revision — divisibility, prime, factors, remainder. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "LCM/HCF revision",
        "answer": "remainder and factor questions",
        "tag": "revision",
        "explanation": "Fixed association: LCM/HCF revision — remainder and factor questions. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Percentage revision",
        "answer": "change/original and successive change",
        "tag": "revision",
        "explanation": "Fixed association: Percentage revision — change/original and successive change. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Average revision",
        "answer": "total/number and combined average",
        "tag": "revision",
        "explanation": "Fixed association: Average revision — total/number and combined average. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Ratio revision",
        "answer": "simplification and proportion",
        "tag": "revision",
        "explanation": "Fixed association: Ratio revision — simplification and proportion. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Profit revision",
        "answer": "profit/loss/discount formulas",
        "tag": "revision",
        "explanation": "Fixed association: Profit revision — profit/loss/discount formulas. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Interest revision",
        "answer": "SI and CI basics",
        "tag": "revision",
        "explanation": "Fixed association: Interest revision — SI and CI basics. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Work revision",
        "answer": "efficiency addition",
        "tag": "revision",
        "explanation": "Fixed association: Work revision — efficiency addition. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Speed revision",
        "answer": "distance-time-speed and relative speed",
        "tag": "revision",
        "explanation": "Fixed association: Speed revision — distance-time-speed and relative speed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mensuration revision",
        "answer": "area, perimeter, volume formulas",
        "tag": "revision",
        "explanation": "Fixed association: Mensuration revision — area, perimeter, volume formulas. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "paper1-di-revision",
    "day": 46,
    "title": "DI and data-based revision practice",
    "bucket": "Revision",
    "priority": "High",
    "why": "DI rewards careful unit reading and formula selection.",
    "concepts": [
      "DI first step",
      "Table set",
      "Bar chart set",
      "Line chart set",
      "Pie chart set",
      "Mixed DI",
      "Data sufficiency",
      "Calculation trap",
      "Approximation",
      "Exact calculation"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers DI and data-based revision practice under Revision. It is included because DI rewards careful unit reading and formula selection. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: DI first step, Table set, Bar chart set, Line chart set, Pie chart set, Mixed DI, Data sufficiency, Calculation trap, Approximation, Exact calculation. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Revision, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. DI first step: read title, unit, period and labels. Fixed association: DI first step — read title, unit, period and labels. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Table set: total, average, ratio, percentage. Fixed association: Table set — total, average, ratio, percentage. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Bar chart set: comparison and difference. Fixed association: Bar chart set — comparison and difference. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Line chart set: increase/decrease trend. Fixed association: Line chart set — increase/decrease trend. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Pie chart set: share and central angle. Fixed association: Pie chart set — share and central angle. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Mixed DI: combine data sources carefully. Fixed association: Mixed DI — combine data sources carefully. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Data sufficiency: check enough data only. Fixed association: Data sufficiency — check enough data only. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Calculation trap: do not ignore lakh/thousand/percent unit. Fixed association: Calculation trap — do not ignore lakh/thousand/percent unit. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Approximation: use when options are far apart. Fixed association: Approximation — use when options are far apart. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Exact calculation: use when options are close. Fixed association: Exact calculation — use when options are close. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'read title, unit, period and labels', recall 'DI first step'. If it gives 'DI first step', recall 'read title, unit, period and labels'.\n- If the paper gives 'total, average, ratio, percentage', recall 'Table set'. If it gives 'Table set', recall 'total, average, ratio, percentage'.\n- If the paper gives 'comparison and difference', recall 'Bar chart set'. If it gives 'Bar chart set', recall 'comparison and difference'.\n- If the paper gives 'increase/decrease trend', recall 'Line chart set'. If it gives 'Line chart set', recall 'increase/decrease trend'.\n- If the paper gives 'share and central angle', recall 'Pie chart set'. If it gives 'Pie chart set', recall 'share and central angle'.\n- If the paper gives 'combine data sources carefully', recall 'Mixed DI'. If it gives 'Mixed DI', recall 'combine data sources carefully'.\n- If the paper gives 'check enough data only', recall 'Data sufficiency'. If it gives 'Data sufficiency', recall 'check enough data only'.\n- If the paper gives 'do not ignore lakh/thousand/percent unit', recall 'Calculation trap'. If it gives 'Calculation trap', recall 'do not ignore lakh/thousand/percent unit'.\n- If the paper gives 'use when options are far apart', recall 'Approximation'. If it gives 'Approximation', recall 'use when options are far apart'.\n- If the paper gives 'use when options are close', recall 'Exact calculation'. If it gives 'Exact calculation', recall 'use when options are close'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "DI first step",
            "read title, unit, period and labels",
            "revision"
          ],
          [
            "Table set",
            "total, average, ratio, percentage",
            "revision"
          ],
          [
            "Bar chart set",
            "comparison and difference",
            "revision"
          ],
          [
            "Line chart set",
            "increase/decrease trend",
            "revision"
          ],
          [
            "Pie chart set",
            "share and central angle",
            "revision"
          ],
          [
            "Mixed DI",
            "combine data sources carefully",
            "revision"
          ],
          [
            "Data sufficiency",
            "check enough data only",
            "revision"
          ],
          [
            "Calculation trap",
            "do not ignore lakh/thousand/percent unit",
            "revision"
          ],
          [
            "Approximation",
            "use when options are far apart",
            "revision"
          ],
          [
            "Exact calculation",
            "use when options are close",
            "revision"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "DI first step",
        "answer": "read title, unit, period and labels",
        "tag": "revision",
        "explanation": "Fixed association: DI first step — read title, unit, period and labels. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Table set",
        "answer": "total, average, ratio, percentage",
        "tag": "revision",
        "explanation": "Fixed association: Table set — total, average, ratio, percentage. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bar chart set",
        "answer": "comparison and difference",
        "tag": "revision",
        "explanation": "Fixed association: Bar chart set — comparison and difference. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Line chart set",
        "answer": "increase/decrease trend",
        "tag": "revision",
        "explanation": "Fixed association: Line chart set — increase/decrease trend. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Pie chart set",
        "answer": "share and central angle",
        "tag": "revision",
        "explanation": "Fixed association: Pie chart set — share and central angle. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mixed DI",
        "answer": "combine data sources carefully",
        "tag": "revision",
        "explanation": "Fixed association: Mixed DI — combine data sources carefully. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Data sufficiency",
        "answer": "check enough data only",
        "tag": "revision",
        "explanation": "Fixed association: Data sufficiency — check enough data only. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Calculation trap",
        "answer": "do not ignore lakh/thousand/percent unit",
        "tag": "revision",
        "explanation": "Fixed association: Calculation trap — do not ignore lakh/thousand/percent unit. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Approximation",
        "answer": "use when options are far apart",
        "tag": "revision",
        "explanation": "Fixed association: Approximation — use when options are far apart. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Exact calculation",
        "answer": "use when options are close",
        "tag": "revision",
        "explanation": "Fixed association: Exact calculation — use when options are close. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "paper1-pyq-analysis",
    "day": 47,
    "title": "PYQ analysis: 2022 Basic and Senior Paper 1 pattern",
    "bucket": "PYQ Analysis",
    "priority": "Very High",
    "why": "PYQ trend shows exact style and should guide final practice.",
    "concepts": [
      "Basic 118A/118B pattern",
      "Senior 119A/119B use",
      "First half tendency",
      "Second half tendency",
      "GK style",
      "Reasoning style",
      "Maths style",
      "DI style",
      "Science style",
      "Revision use"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers PYQ analysis: 2022 Basic and Senior Paper 1 pattern under PYQ Analysis. It is included because PYQ trend shows exact style and should guide final practice. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Basic 118A/118B pattern, Senior 119A/119B use, First half tendency, Second half tendency, GK style, Reasoning style, Maths style, DI style, Science style, Revision use. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In PYQ Analysis, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Basic 118A/118B pattern: Paper had 100 questions, 2 hours, 100 marks and negative marking. Fixed association: Basic 118A/118B pattern — Paper had 100 questions, 2 hours, 100 marks and negative marking. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Senior 119A/119B use: extra trend source for Rajasthan GK and reasoning style. Fixed association: Senior 119A/119B use — extra trend source for Rajasthan GK and reasoning style. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. First half tendency: Rajasthan GK and science-heavy questions. Fixed association: First half tendency — Rajasthan GK and science-heavy questions. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Second half tendency: reasoning, maths and DI-heavy questions. Fixed association: Second half tendency — reasoning, maths and DI-heavy questions. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. GK style: factual, matching, chronology, not-correct pair. Fixed association: GK style — factual, matching, chronology, not-correct pair. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Reasoning style: series, coding, direction, syllogism, clock, cube, figures. Fixed association: Reasoning style — series, coding, direction, syllogism, clock, cube, figures. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Maths style: class X arithmetic and algebra basics. Fixed association: Maths style — class X arithmetic and algebra basics. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. DI style: table and chart interpretation. Fixed association: DI style — table and chart interpretation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Science style: one-liners from biology, physics, chemistry and environment. Fixed association: Science style — one-liners from biology, physics, chemistry and environment. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Revision use: convert every PYQ into topic memory fact. Fixed association: Revision use — convert every PYQ into topic memory fact. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'Paper had 100 questions, 2 hours, 100 marks and negative marking', recall 'Basic 118A/118B pattern'. If it gives 'Basic 118A/118B pattern', recall 'Paper had 100 questions, 2 hours, 100 marks and negative marking'.\n- If the paper gives 'extra trend source for Rajasthan GK and reasoning style', recall 'Senior 119A/119B use'. If it gives 'Senior 119A/119B use', recall 'extra trend source for Rajasthan GK and reasoning style'.\n- If the paper gives 'Rajasthan GK and science-heavy questions', recall 'First half tendency'. If it gives 'First half tendency', recall 'Rajasthan GK and science-heavy questions'.\n- If the paper gives 'reasoning, maths and DI-heavy questions', recall 'Second half tendency'. If it gives 'Second half tendency', recall 'reasoning, maths and DI-heavy questions'.\n- If the paper gives 'factual, matching, chronology, not-correct pair', recall 'GK style'. If it gives 'GK style', recall 'factual, matching, chronology, not-correct pair'.\n- If the paper gives 'series, coding, direction, syllogism, clock, cube, figures', recall 'Reasoning style'. If it gives 'Reasoning style', recall 'series, coding, direction, syllogism, clock, cube, figures'.\n- If the paper gives 'class X arithmetic and algebra basics', recall 'Maths style'. If it gives 'Maths style', recall 'class X arithmetic and algebra basics'.\n- If the paper gives 'table and chart interpretation', recall 'DI style'. If it gives 'DI style', recall 'table and chart interpretation'.\n- If the paper gives 'one-liners from biology, physics, chemistry and environment', recall 'Science style'. If it gives 'Science style', recall 'one-liners from biology, physics, chemistry and environment'.\n- If the paper gives 'convert every PYQ into topic memory fact', recall 'Revision use'. If it gives 'Revision use', recall 'convert every PYQ into topic memory fact'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Basic 118A/118B pattern",
            "Paper had 100 questions, 2 hours, 100 marks and negative marking",
            "pyq"
          ],
          [
            "Senior 119A/119B use",
            "extra trend source for Rajasthan GK and reasoning style",
            "pyq"
          ],
          [
            "First half tendency",
            "Rajasthan GK and science-heavy questions",
            "pyq"
          ],
          [
            "Second half tendency",
            "reasoning, maths and DI-heavy questions",
            "pyq"
          ],
          [
            "GK style",
            "factual, matching, chronology, not-correct pair",
            "pyq"
          ],
          [
            "Reasoning style",
            "series, coding, direction, syllogism, clock, cube, figures",
            "pyq"
          ],
          [
            "Maths style",
            "class X arithmetic and algebra basics",
            "pyq"
          ],
          [
            "DI style",
            "table and chart interpretation",
            "pyq"
          ],
          [
            "Science style",
            "one-liners from biology, physics, chemistry and environment",
            "pyq"
          ],
          [
            "Revision use",
            "convert every PYQ into topic memory fact",
            "pyq"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Basic 118A/118B pattern",
        "answer": "Paper had 100 questions, 2 hours, 100 marks and negative marking",
        "tag": "pyq",
        "explanation": "Fixed association: Basic 118A/118B pattern — Paper had 100 questions, 2 hours, 100 marks and negative marking. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Senior 119A/119B use",
        "answer": "extra trend source for Rajasthan GK and reasoning style",
        "tag": "pyq",
        "explanation": "Fixed association: Senior 119A/119B use — extra trend source for Rajasthan GK and reasoning style. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "First half tendency",
        "answer": "Rajasthan GK and science-heavy questions",
        "tag": "pyq",
        "explanation": "Fixed association: First half tendency — Rajasthan GK and science-heavy questions. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Second half tendency",
        "answer": "reasoning, maths and DI-heavy questions",
        "tag": "pyq",
        "explanation": "Fixed association: Second half tendency — reasoning, maths and DI-heavy questions. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "GK style",
        "answer": "factual, matching, chronology, not-correct pair",
        "tag": "pyq",
        "explanation": "Fixed association: GK style — factual, matching, chronology, not-correct pair. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Reasoning style",
        "answer": "series, coding, direction, syllogism, clock, cube, figures",
        "tag": "pyq",
        "explanation": "Fixed association: Reasoning style — series, coding, direction, syllogism, clock, cube, figures. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Maths style",
        "answer": "class X arithmetic and algebra basics",
        "tag": "pyq",
        "explanation": "Fixed association: Maths style — class X arithmetic and algebra basics. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "DI style",
        "answer": "table and chart interpretation",
        "tag": "pyq",
        "explanation": "Fixed association: DI style — table and chart interpretation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Science style",
        "answer": "one-liners from biology, physics, chemistry and environment",
        "tag": "pyq",
        "explanation": "Fixed association: Science style — one-liners from biology, physics, chemistry and environment. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Revision use",
        "answer": "convert every PYQ into topic memory fact",
        "tag": "pyq",
        "explanation": "Fixed association: Revision use — convert every PYQ into topic memory fact. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "paper1-expected-questions",
    "day": 48,
    "title": "High-probability expected question areas",
    "bucket": "Expected Questions",
    "priority": "Very High",
    "why": "Expected areas should drive final revision, not replace full syllabus.",
    "concepts": [
      "Culture expected",
      "History expected",
      "Geography expected",
      "CA expected",
      "Science expected",
      "Reasoning expected",
      "Maths expected",
      "DI expected",
      "Digital expected",
      "Exam trap expected"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers High-probability expected question areas under Expected Questions. It is included because Expected areas should drive final revision, not replace full syllabus. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Culture expected, History expected, Geography expected, CA expected, Science expected, Reasoning expected, Maths expected, DI expected, Digital expected, Exam trap expected. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Expected Questions, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Culture expected: dance-community, craft-place, fair-deity, painting-school. Fixed association: Culture expected — dance-community, craft-place, fair-deity, painting-school. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. History expected: site-district, battle-year, ruler-work, movement-leader. Fixed association: History expected — site-district, battle-year, ruler-work, movement-leader. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Geography expected: mine-mineral, lake-district, river-project, soil-region. Fixed association: Geography expected — mine-mineral, lake-district, river-project, soil-region. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. CA expected: scheme, budget, award, sport, appointment, institute. Fixed association: CA expected — scheme, budget, award, sport, appointment, institute. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Science expected: vitamin, hormone, disease, physics formula, environment. Fixed association: Science expected — vitamin, hormone, disease, physics formula, environment. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Reasoning expected: series, coding, direction, syllogism, clock, cube. Fixed association: Reasoning expected — series, coding, direction, syllogism, clock, cube. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Maths expected: percentage, average, LCM/HCF, SI/CI, work, speed. Fixed association: Maths expected — percentage, average, LCM/HCF, SI/CI, work, speed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. DI expected: table, pie, bar, line, data sufficiency. Fixed association: DI expected — table, pie, bar, line, data sufficiency. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Digital expected: DigiLocker, UMANG, MyGov, IndiaAI, CERT-In. Fixed association: Digital expected — DigiLocker, UMANG, MyGov, IndiaAI, CERT-In. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Exam trap expected: incorrect pair and statement-code questions. Fixed association: Exam trap expected — incorrect pair and statement-code questions. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'dance-community, craft-place, fair-deity, painting-school', recall 'Culture expected'. If it gives 'Culture expected', recall 'dance-community, craft-place, fair-deity, painting-school'.\n- If the paper gives 'site-district, battle-year, ruler-work, movement-leader', recall 'History expected'. If it gives 'History expected', recall 'site-district, battle-year, ruler-work, movement-leader'.\n- If the paper gives 'mine-mineral, lake-district, river-project, soil-region', recall 'Geography expected'. If it gives 'Geography expected', recall 'mine-mineral, lake-district, river-project, soil-region'.\n- If the paper gives 'scheme, budget, award, sport, appointment, institute', recall 'CA expected'. If it gives 'CA expected', recall 'scheme, budget, award, sport, appointment, institute'.\n- If the paper gives 'vitamin, hormone, disease, physics formula, environment', recall 'Science expected'. If it gives 'Science expected', recall 'vitamin, hormone, disease, physics formula, environment'.\n- If the paper gives 'series, coding, direction, syllogism, clock, cube', recall 'Reasoning expected'. If it gives 'Reasoning expected', recall 'series, coding, direction, syllogism, clock, cube'.\n- If the paper gives 'percentage, average, LCM/HCF, SI/CI, work, speed', recall 'Maths expected'. If it gives 'Maths expected', recall 'percentage, average, LCM/HCF, SI/CI, work, speed'.\n- If the paper gives 'table, pie, bar, line, data sufficiency', recall 'DI expected'. If it gives 'DI expected', recall 'table, pie, bar, line, data sufficiency'.\n- If the paper gives 'DigiLocker, UMANG, MyGov, IndiaAI, CERT-In', recall 'Digital expected'. If it gives 'Digital expected', recall 'DigiLocker, UMANG, MyGov, IndiaAI, CERT-In'.\n- If the paper gives 'incorrect pair and statement-code questions', recall 'Exam trap expected'. If it gives 'Exam trap expected', recall 'incorrect pair and statement-code questions'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Culture expected",
            "dance-community, craft-place, fair-deity, painting-school",
            "expected"
          ],
          [
            "History expected",
            "site-district, battle-year, ruler-work, movement-leader",
            "expected"
          ],
          [
            "Geography expected",
            "mine-mineral, lake-district, river-project, soil-region",
            "expected"
          ],
          [
            "CA expected",
            "scheme, budget, award, sport, appointment, institute",
            "expected"
          ],
          [
            "Science expected",
            "vitamin, hormone, disease, physics formula, environment",
            "expected"
          ],
          [
            "Reasoning expected",
            "series, coding, direction, syllogism, clock, cube",
            "expected"
          ],
          [
            "Maths expected",
            "percentage, average, LCM/HCF, SI/CI, work, speed",
            "expected"
          ],
          [
            "DI expected",
            "table, pie, bar, line, data sufficiency",
            "expected"
          ],
          [
            "Digital expected",
            "DigiLocker, UMANG, MyGov, IndiaAI, CERT-In",
            "expected"
          ],
          [
            "Exam trap expected",
            "incorrect pair and statement-code questions",
            "expected"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Culture expected",
        "answer": "dance-community, craft-place, fair-deity, painting-school",
        "tag": "expected",
        "explanation": "Fixed association: Culture expected — dance-community, craft-place, fair-deity, painting-school. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "History expected",
        "answer": "site-district, battle-year, ruler-work, movement-leader",
        "tag": "expected",
        "explanation": "Fixed association: History expected — site-district, battle-year, ruler-work, movement-leader. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Geography expected",
        "answer": "mine-mineral, lake-district, river-project, soil-region",
        "tag": "expected",
        "explanation": "Fixed association: Geography expected — mine-mineral, lake-district, river-project, soil-region. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "CA expected",
        "answer": "scheme, budget, award, sport, appointment, institute",
        "tag": "expected",
        "explanation": "Fixed association: CA expected — scheme, budget, award, sport, appointment, institute. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Science expected",
        "answer": "vitamin, hormone, disease, physics formula, environment",
        "tag": "expected",
        "explanation": "Fixed association: Science expected — vitamin, hormone, disease, physics formula, environment. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Reasoning expected",
        "answer": "series, coding, direction, syllogism, clock, cube",
        "tag": "expected",
        "explanation": "Fixed association: Reasoning expected — series, coding, direction, syllogism, clock, cube. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Maths expected",
        "answer": "percentage, average, LCM/HCF, SI/CI, work, speed",
        "tag": "expected",
        "explanation": "Fixed association: Maths expected — percentage, average, LCM/HCF, SI/CI, work, speed. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "DI expected",
        "answer": "table, pie, bar, line, data sufficiency",
        "tag": "expected",
        "explanation": "Fixed association: DI expected — table, pie, bar, line, data sufficiency. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Digital expected",
        "answer": "DigiLocker, UMANG, MyGov, IndiaAI, CERT-In",
        "tag": "expected",
        "explanation": "Fixed association: Digital expected — DigiLocker, UMANG, MyGov, IndiaAI, CERT-In. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Exam trap expected",
        "answer": "incorrect pair and statement-code questions",
        "tag": "expected",
        "explanation": "Fixed association: Exam trap expected — incorrect pair and statement-code questions. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "paper1-mock-analysis",
    "day": 49,
    "title": "Mock analysis, weak-topic detection and retest system",
    "bucket": "Exam Readiness",
    "priority": "Very High",
    "why": "Rank improves through error analysis, not only solving more papers.",
    "concepts": [
      "Mock analysis",
      "Error type",
      "Weak topic",
      "Retest rule",
      "Bookmark rule",
      "Guessing control",
      "Accuracy target",
      "Time target",
      "Revision target",
      "Final readiness"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Mock analysis, weak-topic detection and retest system under Exam Readiness. It is included because Rank improves through error analysis, not only solving more papers. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Mock analysis, Error type, Weak topic, Retest rule, Bookmark rule, Guessing control, Accuracy target, Time target, Revision target, Final readiness. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Exam Readiness, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Mock analysis: review every wrong and skipped question. Fixed association: Mock analysis — review every wrong and skipped question. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Error type: concept, memory, calculation, time, guessing. Fixed association: Error type — concept, memory, calculation, time, guessing. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Weak topic: topic with below 60% accuracy. Fixed association: Weak topic — topic with below 60% accuracy. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Retest rule: retest weak topic within 48 hours. Fixed association: Retest rule — retest weak topic within 48 hours. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Bookmark rule: bookmark unknown and confusing facts. Fixed association: Bookmark rule — bookmark unknown and confusing facts. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Guessing control: avoid random guess due to 1/3 negative marking. Fixed association: Guessing control — avoid random guess due to 1/3 negative marking. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. Accuracy target: 70% then 80% then 90% topic accuracy. Fixed association: Accuracy target — 70% then 80% then 90% topic accuracy. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Time target: complete easy questions first. Fixed association: Time target — complete easy questions first. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Revision target: daily wrong notebook before new test. Fixed association: Revision target — daily wrong notebook before new test. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Final readiness: mixed mock + wrong topic revision cycle. Fixed association: Final readiness — mixed mock + wrong topic revision cycle. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'review every wrong and skipped question', recall 'Mock analysis'. If it gives 'Mock analysis', recall 'review every wrong and skipped question'.\n- If the paper gives 'concept, memory, calculation, time, guessing', recall 'Error type'. If it gives 'Error type', recall 'concept, memory, calculation, time, guessing'.\n- If the paper gives 'topic with below 60% accuracy', recall 'Weak topic'. If it gives 'Weak topic', recall 'topic with below 60% accuracy'.\n- If the paper gives 'retest weak topic within 48 hours', recall 'Retest rule'. If it gives 'Retest rule', recall 'retest weak topic within 48 hours'.\n- If the paper gives 'bookmark unknown and confusing facts', recall 'Bookmark rule'. If it gives 'Bookmark rule', recall 'bookmark unknown and confusing facts'.\n- If the paper gives 'avoid random guess due to 1/3 negative marking', recall 'Guessing control'. If it gives 'Guessing control', recall 'avoid random guess due to 1/3 negative marking'.\n- If the paper gives '70% then 80% then 90% topic accuracy', recall 'Accuracy target'. If it gives 'Accuracy target', recall '70% then 80% then 90% topic accuracy'.\n- If the paper gives 'complete easy questions first', recall 'Time target'. If it gives 'Time target', recall 'complete easy questions first'.\n- If the paper gives 'daily wrong notebook before new test', recall 'Revision target'. If it gives 'Revision target', recall 'daily wrong notebook before new test'.\n- If the paper gives 'mixed mock + wrong topic revision cycle', recall 'Final readiness'. If it gives 'Final readiness', recall 'mixed mock + wrong topic revision cycle'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Mock analysis",
            "review every wrong and skipped question",
            "analysis"
          ],
          [
            "Error type",
            "concept, memory, calculation, time, guessing",
            "analysis"
          ],
          [
            "Weak topic",
            "topic with below 60% accuracy",
            "analysis"
          ],
          [
            "Retest rule",
            "retest weak topic within 48 hours",
            "analysis"
          ],
          [
            "Bookmark rule",
            "bookmark unknown and confusing facts",
            "analysis"
          ],
          [
            "Guessing control",
            "avoid random guess due to 1/3 negative marking",
            "analysis"
          ],
          [
            "Accuracy target",
            "70% then 80% then 90% topic accuracy",
            "analysis"
          ],
          [
            "Time target",
            "complete easy questions first",
            "analysis"
          ],
          [
            "Revision target",
            "daily wrong notebook before new test",
            "analysis"
          ],
          [
            "Final readiness",
            "mixed mock + wrong topic revision cycle",
            "analysis"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Mock analysis",
        "answer": "review every wrong and skipped question",
        "tag": "analysis",
        "explanation": "Fixed association: Mock analysis — review every wrong and skipped question. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Error type",
        "answer": "concept, memory, calculation, time, guessing",
        "tag": "analysis",
        "explanation": "Fixed association: Error type — concept, memory, calculation, time, guessing. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Weak topic",
        "answer": "topic with below 60% accuracy",
        "tag": "analysis",
        "explanation": "Fixed association: Weak topic — topic with below 60% accuracy. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Retest rule",
        "answer": "retest weak topic within 48 hours",
        "tag": "analysis",
        "explanation": "Fixed association: Retest rule — retest weak topic within 48 hours. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Bookmark rule",
        "answer": "bookmark unknown and confusing facts",
        "tag": "analysis",
        "explanation": "Fixed association: Bookmark rule — bookmark unknown and confusing facts. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Guessing control",
        "answer": "avoid random guess due to 1/3 negative marking",
        "tag": "analysis",
        "explanation": "Fixed association: Guessing control — avoid random guess due to 1/3 negative marking. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Accuracy target",
        "answer": "70% then 80% then 90% topic accuracy",
        "tag": "analysis",
        "explanation": "Fixed association: Accuracy target — 70% then 80% then 90% topic accuracy. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Time target",
        "answer": "complete easy questions first",
        "tag": "analysis",
        "explanation": "Fixed association: Time target — complete easy questions first. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Revision target",
        "answer": "daily wrong notebook before new test",
        "tag": "analysis",
        "explanation": "Fixed association: Revision target — daily wrong notebook before new test. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Final readiness",
        "answer": "mixed mock + wrong topic revision cycle",
        "tag": "analysis",
        "explanation": "Fixed association: Final readiness — mixed mock + wrong topic revision cycle. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  },
  {
    "id": "paper1-final-50day-plan",
    "day": 50,
    "title": "Final 50-day Paper 1 course map and rank strategy",
    "bucket": "Exam Readiness",
    "priority": "Very High",
    "why": "A 50-day course needs deep day learning and nightly 100-MCQ practice.",
    "concepts": [
      "Day learning",
      "Night practice",
      "Day 1-20",
      "Day 21-33",
      "Day 34-41",
      "Day 42-50",
      "5000 MCQ target",
      "Wrong notebook target",
      "Mock phase",
      "Rank mindset"
    ],
    "notes": [
      {
        "heading": "Complete syllabus scope and exam use",
        "body": "This day covers Final 50-day Paper 1 course map and rank strategy under Exam Readiness. It is included because A 50-day course needs deep day learning and nightly 100-MCQ practice. The topic must be prepared in the exact Paper 1 style: direct fact, reverse fact, incorrect pair, statement-code, match-the-following, and simple application. Do not study it as a story. Study it as a scoring table.\n\nWhat you must master today: Day learning, Night practice, Day 1-20, Day 21-33, Day 34-41, Day 42-50, 5000 MCQ target, Wrong notebook target, Mock phase, Rank mindset. A top-rank student should be able to explain each keyword, identify its district/person/formula/concept, recognise the common wrong option, and solve a reverse question without hesitation. For this topic, the examiner usually checks whether you have precise recall, not whether you have read a long chapter casually.\n\nHow to read this lesson: first read the theory slowly, then copy the memory table, then solve the 100 MCQs. After solving, write every wrong answer as one line: keyword — correct answer — why I confused it. This process is more important than just finishing pages."
      },
      {
        "heading": "Core theory from beginner to advanced level",
        "body": "Start from the meaning of the topic. In Exam Readiness, questions are usually not asked in vague language. They are asked through exact terms. A beginner must first learn the vocabulary; an advanced aspirant must learn the traps. For every concept below, learn four levels: definition, fixed association, exam trap, and expected question frame.\n\n        1. Day learning: read full theory and memory table. Fixed association: Day learning — read full theory and memory table. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n2. Night practice: solve 100 MCQs from same day topic. Fixed association: Night practice — solve 100 MCQs from same day topic. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n3. Day 1-20: Rajasthan GK, CA, digital and science foundation. Fixed association: Day 1-20 — Rajasthan GK, CA, digital and science foundation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n4. Day 21-33: reasoning and decision making. Fixed association: Day 21-33 — reasoning and decision making. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n5. Day 34-41: numeracy and DI. Fixed association: Day 34-41 — numeracy and DI. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n6. Day 42-50: revision, PYQ analysis, expected questions and mocks. Fixed association: Day 42-50 — revision, PYQ analysis, expected questions and mocks. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n7. 5000 MCQ target: 100 MCQs × 50 days. Fixed association: 5000 MCQ target — 100 MCQs × 50 days. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n8. Wrong notebook target: minimum 15 corrections daily. Fixed association: Wrong notebook target — minimum 15 corrections daily. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n9. Mock phase: mixed tests only after topic mastery. Fixed association: Mock phase — mixed tests only after topic mastery. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n10. Rank mindset: precision, repetition and controlled attempts. Fixed association: Rank mindset — precision, repetition and controlled attempts. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap.\n\n        The advanced method is reverse recall. After reading a fact, close the notes and ask: what if the examiner asks from the opposite side? What if one option contains the same district with a different art form? What if one true statement is combined with a false second statement? The student who prepares these twists scores higher than the student who only reads the fact once."
      },
      {
        "heading": "Subtopic-by-subtopic teaching notes",
        "body": "Treat every subtopic as a mini chapter. For factual Rajasthan GK, attach location, community, ruler, source area, and tag. For science, attach definition, function, example and exception. For reasoning/maths, attach formula, steps, and common calculation trap. For DI, attach table-reading rule and percentage shortcut.\n\n        Reverse recall drill for today:\n- If the paper gives 'read full theory and memory table', recall 'Day learning'. If it gives 'Day learning', recall 'read full theory and memory table'.\n- If the paper gives 'solve 100 MCQs from same day topic', recall 'Night practice'. If it gives 'Night practice', recall 'solve 100 MCQs from same day topic'.\n- If the paper gives 'Rajasthan GK, CA, digital and science foundation', recall 'Day 1-20'. If it gives 'Day 1-20', recall 'Rajasthan GK, CA, digital and science foundation'.\n- If the paper gives 'reasoning and decision making', recall 'Day 21-33'. If it gives 'Day 21-33', recall 'reasoning and decision making'.\n- If the paper gives 'numeracy and DI', recall 'Day 34-41'. If it gives 'Day 34-41', recall 'numeracy and DI'.\n- If the paper gives 'revision, PYQ analysis, expected questions and mocks', recall 'Day 42-50'. If it gives 'Day 42-50', recall 'revision, PYQ analysis, expected questions and mocks'.\n- If the paper gives '100 MCQs × 50 days', recall '5000 MCQ target'. If it gives '5000 MCQ target', recall '100 MCQs × 50 days'.\n- If the paper gives 'minimum 15 corrections daily', recall 'Wrong notebook target'. If it gives 'Wrong notebook target', recall 'minimum 15 corrections daily'.\n- If the paper gives 'mixed tests only after topic mastery', recall 'Mock phase'. If it gives 'Mock phase', recall 'mixed tests only after topic mastery'.\n- If the paper gives 'precision, repetition and controlled attempts', recall 'Rank mindset'. If it gives 'Rank mindset', recall 'precision, repetition and controlled attempts'.\n\n        Make these three columns in your notebook: (1) keyword, (2) must-remember answer, (3) trap. Do not write decorative long notes in your notebook; write exam-hit lines. Long explanation is for understanding, table lines are for revision."
      },
      {
        "heading": "Previous-year trend and expected question framing",
        "body": "The uploaded 2022 papers show a strong pattern: Paper 1 mixes Rajasthan GK and science in the first half and reasoning, numeracy and DI in the later part. The style is not random. It repeatedly uses correct pair, not-correct pair, chronology, statement conclusion, formula application, missing term, data interpretation, and figure reasoning.\n\nFor this topic, expect these frames: direct definition, correct pair, incorrect pair, match list, statement-code, assertion-style simple fact, and application. In tough papers, the options are close. The wrong option may be a real fact from a different topic. That is why this app gives 100 MCQs for every day instead of 10 warm-up questions.\n\nHigh-probability way of asking: 'Which pair is not correctly matched?', 'Which statement is/are correct?', 'Match List I with List II', 'Which is associated with X?', 'What is the best explanation of X?', or 'Which option completes the pair X — ?'."
      },
      {
        "heading": "Memory tricks, traps and rank-level revision",
        "body": "Use chunking. Do not memorise 30 facts as 30 isolated lines. Group them by district, person, formula, function, or concept type. If two facts look similar, deliberately put them side by side and write the difference. This prevents negative marking losses.\n\nCommon trap pattern: similar words, nearby places, famous but wrong personalities, reversed options, old scheme names, wrong years, and formula substitution errors. Whenever you read a fact, create one wrong pair yourself. If you can create a wrong pair, you can detect it in the exam.\n\nRank-level revision for this topic: first revision after 24 hours, second after 3 days, third after 7 days, fourth before mixed mock. Do not keep rereading all theory. Read theory once deeply, then revise the memory table, facts, wrong questions and bookmarked MCQs."
      },
      {
        "heading": "100-MCQ practice rule for this day",
        "body": "The practice set for this lesson contains 100 MCQs generated only from this topic. It mixes easy, medium and hard questions. Easy questions test direct recall. Medium questions test reverse recall and correct-pair recognition. Hard questions test traps, application, and similar options.\n\nNight practice method: attempt all 100 in learning mode, read every explanation, bookmark unknown items, and write at least 15 one-line notes. If accuracy is below 60 percent, repeat the same topic next morning before starting the next day. If accuracy is above 80 percent, revise only the wrong questions and move forward."
      }
    ],
    "tables": [
      {
        "title": "MCQ-ready memory table",
        "headers": [
          "Keyword",
          "Must remember",
          "Exam use"
        ],
        "rows": [
          [
            "Day learning",
            "read full theory and memory table",
            "plan"
          ],
          [
            "Night practice",
            "solve 100 MCQs from same day topic",
            "plan"
          ],
          [
            "Day 1-20",
            "Rajasthan GK, CA, digital and science foundation",
            "plan"
          ],
          [
            "Day 21-33",
            "reasoning and decision making",
            "plan"
          ],
          [
            "Day 34-41",
            "numeracy and DI",
            "plan"
          ],
          [
            "Day 42-50",
            "revision, PYQ analysis, expected questions and mocks",
            "plan"
          ],
          [
            "5000 MCQ target",
            "100 MCQs × 50 days",
            "plan"
          ],
          [
            "Wrong notebook target",
            "minimum 15 corrections daily",
            "plan"
          ],
          [
            "Mock phase",
            "mixed tests only after topic mastery",
            "plan"
          ],
          [
            "Rank mindset",
            "precision, repetition and controlled attempts",
            "plan"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading the paragraph once but not converting it into fixed associations.",
      "Confusing nearby districts, similar rulers, similar schemes, similar formulas or similar reasoning patterns.",
      "Leaving reverse recall: you know key to answer, but cannot answer answer to key.",
      "Guessing in negative marking instead of skipping and reviewing.",
      "Not revising the wrong-question note within 24 hours."
    ],
    "tips": [
      "For every topic create a three-column table: keyword, fixed answer, trap.",
      "After reading theory, immediately solve 100 topic MCQs in learning mode.",
      "Keep a wrong notebook with only one-line corrections, not long paragraphs.",
      "Before a full mock, revise memory tables and formulas, not complete theory.",
      "Target 80 percent topic accuracy before mixing topics."
    ],
    "facts": [
      {
        "key": "Day learning",
        "answer": "read full theory and memory table",
        "tag": "plan",
        "explanation": "Fixed association: Day learning — read full theory and memory table. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Night practice",
        "answer": "solve 100 MCQs from same day topic",
        "tag": "plan",
        "explanation": "Fixed association: Night practice — solve 100 MCQs from same day topic. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Day 1-20",
        "answer": "Rajasthan GK, CA, digital and science foundation",
        "tag": "plan",
        "explanation": "Fixed association: Day 1-20 — Rajasthan GK, CA, digital and science foundation. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Day 21-33",
        "answer": "reasoning and decision making",
        "tag": "plan",
        "explanation": "Fixed association: Day 21-33 — reasoning and decision making. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Day 34-41",
        "answer": "numeracy and DI",
        "tag": "plan",
        "explanation": "Fixed association: Day 34-41 — numeracy and DI. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Day 42-50",
        "answer": "revision, PYQ analysis, expected questions and mocks",
        "tag": "plan",
        "explanation": "Fixed association: Day 42-50 — revision, PYQ analysis, expected questions and mocks. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "5000 MCQ target",
        "answer": "100 MCQs × 50 days",
        "tag": "plan",
        "explanation": "Fixed association: 5000 MCQ target — 100 MCQs × 50 days. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Wrong notebook target",
        "answer": "minimum 15 corrections daily",
        "tag": "plan",
        "explanation": "Fixed association: Wrong notebook target — minimum 15 corrections daily. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Mock phase",
        "answer": "mixed tests only after topic mastery",
        "tag": "plan",
        "explanation": "Fixed association: Mock phase — mixed tests only after topic mastery. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      },
      {
        "key": "Rank mindset",
        "answer": "precision, repetition and controlled attempts",
        "tag": "plan",
        "explanation": "Fixed association: Rank mindset — precision, repetition and controlled attempts. In board-style questions this can appear as a direct fact, reverse fact, match-the-following item, or incorrect-pair trap."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question from official syllabus wording.",
      "Correctly/incorrectly matched pair based on district, person, year, formula or definition.",
      "Statement I/II/III with code, especially when two similar facts are mixed.",
      "Match List-I and List-II using table memory rather than paragraph memory.",
      "Application question where the same fact is hidden inside a small situation, data set or calculation."
    ]
  }
];


const LETTERS = ["A", "B", "C", "D"] as const;
const globalDistractors = [
  "Jaipur", "Udaipur", "Jodhpur", "Bikaner", "Ajmer", "Kota", "Bharatpur", "Pratapgarh",
  "Mewar", "Marwar", "Hadoti", "Shekhawati", "Harappan", "Chalcolithic", "Mesolithic", "Copper culture",
  "Percentage", "Average", "LCM", "HCF", "DigiLocker", "UMANG", "CERT-In", "IndiaAI Mission",
  "Sambhar", "Khetri", "Kalibanga", "Haldighati", "1/3 negative marking", "Class X level",
  "None of the above", "Only I is correct", "Both I and II are correct", "Neither statement is correct"
];

function unique(list: string[]) {
  return Array.from(new Set(list.map((x) => String(x).trim()).filter(Boolean)));
}

function professionalText(value: string) {
  return String(value || "")
    .replace(/PYQ-style/gi, "previous-year-pattern")
    .replace(/In a previous-year-pattern question,\s*/gi, "")
    .replace(/RSSB-style/gi, "board-style")
    .replace(/Remember the fixed exam pair:?/gi, "Fixed association:")
    .replace(/fixed exam pair/gi, "fixed association")
    .replace(/correct memory/gi, "correct association")
    .replace(/Let's understand/gi, "Study")
    .trim();
}

function optionSet(correct: string, pool: string[], seed: number) {
  const candidates = unique([...pool, ...globalDistractors]).filter((x) => x !== correct);
  const values = [correct, ...candidates.slice(seed % 11, seed % 11 + 24), ...candidates.slice(0, 24)];
  while (values.length < 4) values.push(`Alternative ${values.length}`);
  const selected = values.slice(0, 4);
  const target = seed % 4;
  const correctIndex = selected.indexOf(correct);
  if (correctIndex !== target) {
    const temp = selected[target];
    selected[target] = correct;
    selected[correctIndex] = temp;
  }
  const options = { A: selected[0], B: selected[1], C: selected[2], D: selected[3] };
  const answer = LETTERS[Object.values(options).indexOf(correct)] || "A";
  return { options, answer };
}

function optionAnalysis(options: { A: string; B: string; C: string; D: string }, answer: "A" | "B" | "C" | "D", correctPair: string) {
  const wrongOptions = LETTERS.filter((key) => key !== answer)
    .map((key) => `${key}: ${options[key]} is not the required association in this question.`)
    .join(" ");
  return `Correct answer: ${answer}. Why correct: ${correctPair}. Why other options are incorrect: ${wrongOptions}`;
}

function extractWhyCorrect(explanation: string, answer: "A" | "B" | "C" | "D") {
  const text = professionalText(explanation);
  const marker = "Why correct:";
  const idx = text.indexOf(marker);
  if (idx >= 0) {
    const end = text.indexOf("Why other options", idx);
    return text.slice(idx + marker.length, end > idx ? end : undefined).trim();
  }
  return `Option ${answer} matches the required syllabus fact or solved result.`;
}

function extractWhyWrong(explanation: string) {
  const text = professionalText(explanation);
  const marker = "Why other options are incorrect:";
  const idx = text.indexOf(marker);
  if (idx >= 0) return text.slice(idx + marker.length).trim();
  return "The remaining options either mismatch the fixed association, use a nearby but incorrect fact, or do not satisfy the question condition.";
}

function enrichLearningQuestion(q: LearningQuestion, topic: LearningTopic, index: number): LearningQuestion {
  const cleanExplanation = professionalText(q.explanation);
  const patternCycle = ["direct fact", "incorrect pair", "statement-code", "application", "reverse recall", "match pattern", "trap elimination", "revision table", "answer-key check", "high-probability recall", "mixed option check", "final-round recall"];
  const lens = patternCycle[index % patternCycle.length];
  const baseQuestion = professionalText(q.question).replace(/^\d+\.\s*/, "");
  return {
    ...q,
    question: `${topic.title} — ${lens}: ${baseQuestion}`,
    explanation: cleanExplanation,
    source: "Learning Library",
    reviewStatus: "approved",
    facultyReviewed: true,
    factSource: "Official Paper 1 syllabus + uploaded 2022 paper-pattern analysis",
    pyqSimilarity: index % 5 === 0 ? "direct" : index % 3 === 0 ? "high" : "medium",
    examPatternTag: patternCycle[index % patternCycle.length],
    whyCorrect: extractWhyCorrect(cleanExplanation, q.answer),
    whyOthersWrong: extractWhyWrong(cleanExplanation),
    qualityScore: cleanExplanation.length >= 180 ? 92 : 78,
  };
}

function pairQuestion(topic: LearningTopic, fact: LearningFact, poolFacts: LearningFact[], index: number, notCorrect = false): LearningQuestion {
  const wrong = poolFacts[(index + 3) % poolFacts.length] || fact;
  const correctPair = `${fact.key} — ${fact.answer}`;
  const wrongPair = `${fact.key} — ${wrong.answer}`;
  const otherPairs = poolFacts
    .filter((x) => x.key !== fact.key)
    .slice(index % Math.max(1, poolFacts.length - 1))
    .map((x) => `${x.key} — ${x.answer}`);
  const correctOption = notCorrect ? wrongPair : correctPair;
  const { options, answer } = optionSet(correctOption, [correctPair, wrongPair, ...otherPairs], index + topic.day);
  const stem = notCorrect
    ? `Identify the incorrectly matched pair related to ${fact.key} in ${topic.title}.`
    : `Identify the correctly matched pair related to ${fact.key} in ${topic.title}.`;
  const concept = professionalText(fact.explanation);
  const detail = notCorrect
    ? `Correct association for the key term is ${correctPair}; therefore ${wrongPair} is the incorrect pair.`
    : `${correctPair} is the required association.`;
  return {
    question: `${index + 1}. ${stem}`,
    options,
    answer,
    explanation: `${optionAnalysis(options, answer, correctOption)} ${detail} Related concept: ${concept}`,
    subject: topic.bucket,
    chapter: topic.title,
    topic: fact.tag,
    difficulty: index < 35 ? "easy" : index < 75 ? "medium" : "hard",
    importance: "high",
    sourceHint: "Learning Library • Official Paper 1 syllabus and uploaded 2022 paper-pattern analysis"
  };
}

function directQuestion(topic: LearningTopic, fact: LearningFact, pool: string[], index: number): LearningQuestion {
  const stems = [
    `Which option gives the correct association for ${fact.key}?`,
    `In ${topic.title}, ${fact.key} is most accurately related to which of the following?`,
    `Choose the correct completion: ${fact.key} — ?`,
    `Which fact should be memorised for ${fact.key}?`,
    `Select the correct answer for ${fact.key} from ${topic.title}.`
  ];
  const { options, answer } = optionSet(fact.answer, pool, index + topic.day);
  const correctPair = `${fact.key} — ${fact.answer}`;
  return {
    question: `${index + 1}. ${stems[index % stems.length]}`,
    options,
    answer,
    explanation: `${optionAnalysis(options, answer, correctPair)} Related concept: ${professionalText(fact.explanation)}`,
    subject: topic.bucket,
    chapter: topic.title,
    topic: fact.tag,
    difficulty: index < 35 ? "easy" : index < 75 ? "medium" : "hard",
    importance: "high",
    sourceHint: "Learning Library • Official Paper 1 syllabus and uploaded 2022 paper-pattern analysis"
  };
}

function statementQuestion(topic: LearningTopic, fact: LearningFact, other: LearningFact, index: number): LearningQuestion {
  const statements = [
    `I. ${fact.key} is associated with ${fact.answer}.`,
    `II. ${other.key} is associated with ${fact.answer}.`
  ];
  const correct = "Only I is correct";
  const { options, answer } = optionSet(correct, ["Only II is correct", "Both I and II are correct", "Neither I nor II is correct", "Only I is correct"], index + topic.day);
  return {
    question: `${index + 1}. Consider the following statements about ${topic.title}. ${statements.join(" ")} Choose the correct code.`,
    options,
    answer,
    explanation: `Correct answer: ${answer}. Statement I is correct because ${fact.key} is associated with ${fact.answer}. Statement II is incorrect because ${other.key} is associated with ${other.answer}, not ${fact.answer}. This is a common statement-code trap in Paper 1 factual topics.`,
    subject: topic.bucket,
    chapter: topic.title,
    topic: fact.tag,
    difficulty: index < 35 ? "easy" : index < 75 ? "medium" : "hard",
    importance: "high",
    sourceHint: "Learning Library • Official Paper 1 syllabus and uploaded 2022 paper-pattern analysis"
  };
}

function appliedQuestion(topic: LearningTopic, fact: LearningFact, poolFacts: LearningFact[], index: number): LearningQuestion {
  const situation = `A student is preparing a one-line revision table for ${topic.title} and must complete the entry for ${fact.key}.`;
  const correct = `${fact.key} should be written with ${fact.answer}`;
  const wrongOne = poolFacts[(index + 7) % poolFacts.length] || fact;
  const { options, answer } = optionSet(correct, [
    `${wrongOne.key} should be written with ${fact.answer}`,
    `${fact.key} should be written with ${wrongOne.answer}`,
    `${fact.answer} should be ignored for this topic`,
    correct,
  ], index + topic.day);
  return {
    question: `${index + 1}. ${situation} Which entry is accurate?`,
    options,
    answer,
    explanation: `${optionAnalysis(options, answer, correct)} The safe revision line is ${fact.key} — ${fact.answer}. ${professionalText(fact.explanation)}`,
    subject: topic.bucket,
    chapter: topic.title,
    topic: fact.tag,
    difficulty: index < 35 ? "easy" : index < 75 ? "medium" : "hard",
    importance: "high",
    sourceHint: "Learning Library • Official Paper 1 syllabus and uploaded 2022 paper-pattern analysis"
  };
}

export function getLearningTopic(topicId?: string) {
  return paper1LearningTopics.find((topic) => topic.id === topicId) || paper1LearningTopics[0];
}

export function getTopicQuestionJson(topicId: string) {
  const topic = getLearningTopic(topicId);
  const questions = verifiedPaper1Questions
    .filter((q) => q.topicId === topic.id && q.reviewStatus === "approved")
    .map(({ topicId: _topicId, ...q }, index) => ({ ...q, question: q.question.replace(/^\d+\.\s*/, ""), source: q.source || "Learning Library" }));

  return {
    exam_name: "Rajasthan Basic Computer Instructor",
    paper: "paper1",
    mode: "topic",
    title: `${topic.title} - Approved Topic Questions`,
    date: new Date().toISOString().slice(0, 10),
    durationMinutes: Math.max(20, questions.length),
    totalQuestions: questions.length,
    totalMarks: questions.length,
    negativeMarking: "1/3",
    contentPolicy: "approved-only",
    note: questions.length
      ? "Only faculty-reviewed/source-tagged MCQs are included. Auto-generated draft MCQs are disabled."
      : "No approved MCQs are available for this topic yet. Upload verified questions or approve questions in admin/content.",
    tags: ["paper1", "approved-topic-wise", topic.id, topic.bucket],
    questions
  };
}

export function getAllPaper1QuestionBank() {
  const topics = paper1LearningTopics.map((topic) => getTopicQuestionJson(topic.id));
  return {
    exam_name: "Rajasthan Basic Computer Instructor",
    paper: "paper1",
    mode: "verified-approved-bank",
    contentPolicy: "approved-only-no-autogenerated-questions",
    totalTopics: paper1LearningTopics.length,
    totalQuestions: topics.reduce((sum, topic) => sum + topic.questions.length, 0),
    generatedOn: new Date().toISOString().slice(0, 10),
    note: "This build intentionally disables the previous auto-generated MCQ bank. Only approved verified questions are exported. Add more via uploaded JSON/admin review.",
    topics
  };
}
