import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, post: "Not a spoon, not a fork, but something in between.", likesCount: "125" },
  { id: 2, post: "I LOVE BEING IN CONTINENT!", likesCount: "225" },
  { id: 3, post: "I HAVE WHAT I'M HAVING!", likesCount: "135" },
]

let dialogs = [
  { id: 1, name: "Bogdan" },
  { id: 2, name: "Vladimir" },
  { id: 3, name: "Alexey" },
  { id: 4, name: "Alexandr" }
]

let messages = [
  { id: 1, message: "Bodyaaaaa!" },
  { id: 2, message: "I'm wide" },
  { id: 3, message: "I'm in prison" },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
