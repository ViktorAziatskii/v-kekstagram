const thumbnailPattern = document.querySelector('#picture')
  .content.querySelector('.picture');//шаблон
const container = document.querySelector('.pictures');//контейнер

const createThumbnail = ({ url, description, likes, comments }) => {
  const thumbnail = thumbnailPattern.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  return thumbnail;
};//одна картинка

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  container.append(fragment);
};//много картинок

export { renderThumbnails };
