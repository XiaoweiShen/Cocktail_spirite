import React from 'react';
import ReactDOM from 'react-dom';
import DrinksList from '../components/DrinksList';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <DrinksList />,
    document.getElementById('root')
  );
});