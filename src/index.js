import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import App from './App';
import 'normalize.css';

// import './fonts/Bitter-Regular.ttf'

WebFont.load({
  google: {
    families: ['Bitter', 'serif', 'Montserrat', 'sans-serif'],
  },
});

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'));
