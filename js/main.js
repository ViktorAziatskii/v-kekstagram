import './data.js';

import './util.js';

import './user-form.js';

import { renderGallery } from './gallery.js';

import { similarDescription } from './data.js';

import { renderThumbnails } from './thumbnail.js';

renderThumbnails(similarDescription);
renderGallery(similarDescription);
