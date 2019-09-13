//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getName(){
  return "Dale Flynn is gay";
}

//Create a React component
const App = () => {
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{backgroundColor:'red', color:'white'}}>Submit</button>
      <div>
        <h3>{getName()}</h3>
      </div>
    </div>
  );
}

//Take the React component and show it on screen
ReactDOM.render(
  <App />, document.querySelector('#root')
);
