import React from 'react';
import { createRoot } from 'react-dom/client';

import '../assets/styles/style.scss';

import Root from './app/Root';

const container = document.querySelector('#root');
const target = createRoot(container);

target.render(<Root />);
