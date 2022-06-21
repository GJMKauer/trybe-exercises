const NEGATIVE_ONE = -1;

const POINT_FIVE = 0.5;

const TWO = 2;

const THREE = 3;

const FOUR = 4;

const TEN = 10;

const THOUSAND = 1000;

const questionCategories = [
  {
    name: 'Any Category',
    value: '',
  },
  {
    name: 'General Knowledge',
    value: 9,
  },
  {
    name: 'Entertainment: Books',
    value: 10,
  },
  {
    name: 'Entertainment: Film',
    value: 11,
  },
  {
    name: 'Entertainment: Music',
    value: 12,
  },
  {
    name: 'Entertainment: Musicals & Theatres',
    value: 13,
  },
  {
    name: 'Entertainment: Television',
    value: 14,
  },
  {
    name: 'Entertainment: Video Games',
    value: 15,
  },
  {
    name: 'Entertainment: Board Games',
    value: 16,
  },
  {
    name: 'Science & Nature',
    value: 17,
  },
  {
    name: 'Science: Computers',
    value: 18,
  },
  {
    name: 'Science: Mathematics',
    value: 19,
  },
  {
    name: 'Mythology',
    value: 20,
  },
  {
    name: 'Sports',
    value: 21,
  },
  {
    name: 'Geography',
    value: 22,
  },
  {
    name: 'History',
    value: 23,
  },
  {
    name: 'Politics',
    value: 24,
  },
  {
    name: 'Art',
    value: 25,
  },
  {
    name: 'Celebrities',
    value: 26,
  },
  {
    name: 'Animals',
    value: 27,
  },
  {
    name: 'Vehicles',
    value: 28,
  },
  {
    name: 'Entertainment: Comics',
    value: 29,
  },
  {
    name: 'Science: Gadgets',
    value: 30,
  },
  {
    name: 'Entertainment: Japanese Anime & Manga',
    value: 31,
  },
  {
    name: 'Entertainment: Cartoon & Animations',
    value: 32,
  },
];

const questionDifficulty = [
  {
    name: 'Any Difficulty',
    value: '',
  },
  {
    name: 'Easy',
    value: 'easy',
  },
  {
    name: 'Medium',
    value: 'medium',
  },
  {
    name: 'Hard',
    value: 'hard',
  },
];

const questionType = [
  {
    name: 'Any Type',
    value: '',
  },
  {
    name: 'Multiple Choice',
    value: 'multiple',
  },
  {
    name: 'True / False',
    value: 'boolean',
  },
];

export {
  NEGATIVE_ONE,
  POINT_FIVE,
  TWO,
  THREE,
  FOUR,
  TEN,
  THOUSAND,
  questionCategories,
  questionDifficulty,
  questionType,
};
