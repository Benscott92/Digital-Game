import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let egg = {
    name:['gabumon', 'garurumon'],
    testImg:['https://vignette.wikia.nocookie.net/digimon/images/3/3c/Gabumon_%28New_Century%29_b.jpg/revision/latest/scale-to-width-down/150?cb=20200628050649','https://vignette.wikia.nocookie.net/digimon/images/c/c2/Garurumon_%28New_Century%29_b.jpg/revision/latest/scale-to-width-down/117?cb=20200629011929']
  }
  return (
    <div className="App">
      
      <header className="App-header">
        
        <Digimon name={egg.name} defaultimage={egg.testImg} />
      </header>
    </div>
  );
}

class Digimon extends React.Component{
  constructor(props){
    super(props)
    
    
    this.state = {
      currentRank : 0,
      name: this.props.name,
      testImg: this.props.defaultimage,
      strength: Math.floor(Math.random() * 10) + 5,
      hunger: 0,
      mood: 5,
      EXP: 0,
      currentDifficulty: 10,
    }
  }

  train = (event) =>{
    return this.setState((state, props) =>(
      {strength: state.strength + Math.floor(Math.random()*10 + 2),
        hunger: state.hunger + 2,
        mood: state.mood - 1
        }
    ))
  }

  feed = (event) => {
    return this.setState((state, props) =>(
      {hunger: state.hunger - Math.floor(Math.random() * 3 + 1)}
    ))
  }

  play = (event) => {
    return this.setState((state, props) => (
      {mood: state.mood + Math.floor(Math.random() * 3 + 1)}
    ))
  }

  fight = (event) => {
    if(this.state.strength > Math.random() * this.state.currentDifficulty + 5){
      return this.setState((state, props) => (
        {EXP: state.EXP + Math.floor(Math.random() * state.currentDifficulty) ,
        currentDifficulty: state.currentDifficulty + Math.floor(Math.random() * 10),
        mood: state.mood - 2,
        hunger: state.hunger + 2,

        }
      ))
    }
  }

  digivole = (event) => {
    if(this.state.currentRank < this.props.name.length - 1){
      return this.setState((state, props)=>(
          { currentRank : state.currentRank + 1,}
        )
      )
    }
  }

  render(){
    return (
    <div>
      <h1>{this.state.name[this.state.currentRank]}</h1>
      <div className='imgandstats'>
        <div className = 'statblock' >
            <h3>Strength: {this.state.strength} </h3>
            <h3>Hunger: {this.state.hunger} </h3>
            <h3>Happiness: {this.state.mood} </h3>
            <h3>EXP: {this.state.EXP} </h3>
        </div>
        <img src={this.state.testImg[this.state.currentRank]} />
      </div>
      <br />
      <div className='buttonspace'>
        <button onClick={this.play} >Play</button>
        <button onClick= {this.feed} >Feed</button>
        <button onClick={this.train} >Train</button>
        <button onClick={this.fight} >Fight</button>
        <button onClick={this.digivole} >Digivole!</button>
      </div>
    </div>
  )}
}

export default App;
