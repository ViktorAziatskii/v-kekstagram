import { resetScale } from './form-scale.js';
import {
  init as initEffect,
  reset as resetEffect
} from './form-effect.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-za-яё0-0]{1,19}$/i;
const ErrorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштегов`,
  NOD_UNIQUE: 'Хэштеги должны быть уникальными',
  INVALID_PATTERN: 'Неправильный хэштег',
};
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SUBMITTING: 'Отправляю...',
};
const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const imageElement = document.querySelector('.img-upload__preview img');
const overlay = form.querySelector('.img-upload__overlay');
const cancelButton = form.querySelector('.img-upload__cancel');
const fileField = form.querySelector('.img-upload__input');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const MIN_HASHTAG_COUNT = 3;
const MAX_UNIQUENESS_TAG_COUNT = 1;
const TAG_REGEX_MIN_LENGTH = 2;
const submitButton = form.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  form.reset();
  resetScale();
  resetEffect();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const toggleSubmitButton = (isDisabled) => {
  submitButton.disabled = isDisabled;
  submitButton.textContent = isDisabled
    ? SubmitButtonText.SUBMITTING
    : SubmitButtonText.IDLE;
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set (lowerCaseTags).size;
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  const file = fileField.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if(matches) {
    imageElement.src = URL.createObjectURL(file);
    showModal();
  }
};

const setOnFormSubmit = (callback) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      toggleSubmitButton(true);
      await callback(new FormData(form));
      toggleSubmitButton();
    }
  });
};

pristine.addValidator(
  hashtagField,
  hasValidCount,
  ErrorText.INVALID_COUNT,
  MIN_HASHTAG_COUNT,
  true
);
pristine.addValidator(
  hashtagField,
  hasUniqueTags,
  ErrorText.NOD_UNIQUE,
  MAX_UNIQUENESS_TAG_COUNT,
  true
);
pristine.addValidator(
  hashtagField,
  hasValidTags,
  ErrorText.INVALID_PATTERN,
  TAG_REGEX_MIN_LENGTH,
  true
);

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
initEffect();

export { setOnFormSubmit, hideModal };
