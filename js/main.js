const idPhoto = 25;

const authorName = [
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

const messagePhoto = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const descriptionPhoto = [
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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: getRandomInteger(1, 25),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(messagePhoto),
  name: getRandomArrayElement(authorName)
});

const createDescription = (_, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(descriptionPhoto),
  likes: getRandomInteger(15, 200),
  comments: Array.from({
    length: getRandomInteger(0, 5) },
  createComment
  )
});

const similarDescription = Array.from({length: idPhoto}, createDescription);

console.log(similarDescription);
