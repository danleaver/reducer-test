import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ArticleProvider from './providers/ArticleProvider';

ReactDOM.render(
  <React.StrictMode>
    <ArticleProvider>
      <App />
    </ArticleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


