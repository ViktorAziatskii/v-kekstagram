const ID_PHOTOS = 25;

const AUTHOR_NAMES = [
  'Федя',
  'Петя',
  'Аня',
  'Ваня',
  'Василиса',
  'Настя',
  'Оля',
  'Коля',
  'Веня',
  'Илона'
];

const MESSAGE_PHOTOS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION_PHOTOS = [
  'Кекс на прогулке',
  'поездка на машине',
  'море, горы, солнце',
  'приключения здесь',
  'остановка у друзей',
  'поездка в город',
  'отмечаем день рождение',
  'покорение гор',
  'прогулка на Сапе',
  'погружение с аквалалангом'
];

// eslint-disable-next-line no-unused-vars
const MAX_COMMENTS = 5;

// eslint-disable-next-line no-unused-vars
const MIN_LIKES = 15;

// eslint-disable-next-line no-unused-vars
const MAX_LIKES = 200;

// eslint-disable-next-line no-unused-vars
const AVATAR_COUNT = 6;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: getRandomInteger(1, 10),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE_PHOTOS),
  name: getRandomArrayElement(AUTHOR_NAMES)
});

const createDescription = (_, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_PHOTOS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({
    length: getRandomInteger(0, 5) },
  createComment
  )
});

const similarDescription = Array.from({length: ID_PHOTOS}, createDescription);

// eslint-disable-next-line no-console
console.log(similarDescription);
