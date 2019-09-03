import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //App.js 를 App으로 손쉽게 사용

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
