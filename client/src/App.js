import React, {Component} from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import Nav from './containers/Nav';


class App extends Component {
  render() {
  return (
    <div className="App">
      <Nav/>
      <MainContainer/>
    </div>
  );
}
}


export default App;
