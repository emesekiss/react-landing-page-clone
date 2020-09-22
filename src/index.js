import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Global, css } from '@emotion/core';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0 55px 0;
          font-family: 'Kumbh Sans', sans-serif, ---apple-system,
            BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
            'Open Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.2;
          background-color: #234598;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
