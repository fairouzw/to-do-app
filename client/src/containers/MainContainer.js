import React, { Component } from "react";
import '../App.css';
import CreateCard from '../components/CreateCard'
import ToDoCardContainer from './ToDoCardContainer'
class MainContainer extends Component {
  render() {
    return <div>
      <ToDoCardContainer/>
  <CreateCard/>
    </div>;
  }
}

export default MainContainer;
