import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Components.Todos'
import { render } from 'react-dom';

class App extends Component {
  state = {
    todos: [
      {
        id:1,
        title: 'React course',
        completed: false
      },
      {
        id:2,
        title: 'Relax',
        completed: false
      }, 
      {
        id:3,
        title: 'TV',
        completed: false
      }, 
    ]
   }
  render(){
  return (
    <div className="App">
      <Todos />
    </div>
  );
}
}

export default App;
