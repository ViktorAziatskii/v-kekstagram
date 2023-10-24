import {getRandomInteger, getRandomArrayElement} from './util.js';

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

const MAX_COMMENTS = 25;

const MIN_LIKES = 15;

const MAX_LIKES = 200;

const MAX_COMMENTS_ID = 10;

const AVATAR_COUNT = 6;

const createComment = () => ({
  id: getRandomInteger(1, MAX_COMMENTS_ID),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: getRandomArrayElement(MESSAGE_PHOTOS),
  name: getRandomArrayElement(AUTHOR_NAMES)
});

const createDescription = (_, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_PHOTOS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({
    length: getRandomInteger(0, MAX_COMMENTS) },
  createComment
  )
});

const similarDescription = Array.from({length: ID_PHOTOS}, createDescription);

export {similarDescription};
