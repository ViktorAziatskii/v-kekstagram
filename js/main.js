import './data.js';

import { showAlert } from './util.js';

import './user-form.js';

import { renderGallery } from './gallery.js';

import { getData, sendData } from './api.js';

import { showSuccessMessage, showErrorMessage } from './message.js';

import { setOnFormSubmit, hideModal } from './user-form.js';

import { renderThumbnails } from './thumbnail.js';

import { similarDescription } from './data.js';

renderThumbnails(similarDescription);

setOnFormSubmit(async (data) => {
  try{
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}
