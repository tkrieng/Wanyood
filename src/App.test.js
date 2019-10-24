import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

beforeEach(() => {
  HTMLMediaElement.prototype.load = jest.fn()
  HTMLMediaElement.prototype.play = jest.fn()
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
