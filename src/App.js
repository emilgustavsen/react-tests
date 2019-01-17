import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    people: [
      { id: 'duhwahda', name: 'Max', age: 28 },
      { id: 'duhadijja', name: 'Hans', age: 29 },
      { id: 'duhwahjdiwijdwda', name: 'Hansine', age: 22 },
    ],
    showPeople: true,
  };
  
  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people: people})
  };


  //---------------------------------
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id; 
    });

    const person = {
      ...this.state.people[personIndex]
    };

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({people: people});
  }
  //---------------------------------


  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople
    this.setState({showPeople: !doesShow})
  }
  
  render() {
    const style = {
      backgroundColor: 'green',
      border: '1px solid green',
      color: 'blue',
      cursor: 'pointer',
    }
    
    let peopleBlock = null; //Nothing is shown

    if (this.state.showPeople) {
      peopleBlock = (
        <div>
            {this.state.people.map((person, index) => {
              return <Person
              click = {() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id} 
              changed = {(event) => this.nameChangeHandler(event, person.id)}/>
            })}
          </div>
          
          )
          style.backgroundColor = 'red';
      
    }

    const classes = []
    if (this.state.people.length <= 2) {
      classes.push('red')
    }
    if (this.state.people.length <= 1) {
      classes.push('bold')
    }
     
    
    return (
      
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
          
        <button style={style} onClick={() => this.togglePeopleHandler()}>Switch Name</button>
        {peopleBlock}
         
          
        
        
      </div>
      
      );
      
    }
  }
  
  export default App;
  