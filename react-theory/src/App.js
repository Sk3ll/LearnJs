import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car.js';

class App extends React.Component {
  
  state = {
    cars: [
      {name: "Audi", year: "2018"},
      {name: "Reno", year: "1995"}
    ],
    pageTitle: "React Components"
  }
  
  render(){
  const divStyle = {
    textAlign: 'center'
  };
  const cars = this.state.cars;

  return (
    <div style={divStyle}>
      <h1>{this.state.pageTitle}</h1>  
      <Car name= {cars[0].name} year={cars[0].year} />
      <Car name= {cars[1].name} year={cars[1].year} /> 
    </div>
  );
}
}
export default App;



