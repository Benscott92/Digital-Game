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
      currentRank : 1,
      name: this.props.name[0],
      testImg: this.props.defaultimage[0],
    }
  }

  digivole = (event) => {
    if(this.state.currentRank < this.props.name.length){
      return this.setState((state, props)=>(
        { currentRank : state.currentRank + 1,
          name: props.name[this.state.currentRank],
          testImg: props.defaultimage[this.state.currentRank]
        })
      )
    }
    }

  render(){
    return (
    <div>
      <h1>{this.state.name}</h1>
      <img src={this.state.testImg} />
      <br />
      <button onClick={this.digivole} >Digivole!</button>
    </div>
  )}
}

export default App;
