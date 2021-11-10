import React from 'react';
import { render } from 'react-dom';

import Route from './routes';
import './index.css';

render(<Route />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
