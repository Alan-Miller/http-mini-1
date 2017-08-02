import React, { Component } from 'react';
import './styles/App.css';


class App extends Component {

  constructor() {
    super()

    this.state = {
      armiesArray: []
    }
  }


  seeEnemies() {
  }

  callTroops() {
  }

  recruitTroop() {
  }


  transformMinion() {
  }

  slayLeader() {
  }


  render() {


    const message = this.state && this.state.armiesArray.length < 1 ? "ALL CLEAR" : "";

    const armies = this.state.armiesArray.map((army, armyIndex) => (
      <ul className="army" key={armyIndex}>
        <h3>Enemy Army #{army.id}: {army.name}</h3>
        <div className="leader">{army.leader}</div>
        <ul className="minions">
          {army.minions.map((minion, minionIndex) => (
            <li key={minionIndex} className="minion">{minion.type}</li>
          ))}
        </ul>
      </ul>
    ))

    return (
      <div className="App">

        {/* Main Defenses */}
        <div className="App-header">
          <h1>Enemies at our gate!</h1>
          <h2>Prepare our defenses!</h2>
          <div className="defenses">
            <div className="defense" id="sentry">Sentry<span className="instructions">Click here to see approaching enemies!</span></div>
            <div className="defense" id="captain">Captain<span className="instructions">Fill out Request Form below to recruit new troop!</span></div>
            <div className="defense" id="wizard">Wizard<span className="instructions">Click directly on a minion to cast a spell!</span></div>
            <div className="defense" id="ballista">Ballista<span className="instructions">Blast enemy leader to disperse army!</span></div>
          </div>
        </div>


        {/* Reinforcements */}
        <div className="reinforcements">
          <form type="submit">
            New Recruit Request Form:
            <input id="paperwork" placeholder="Please indicate requested recruit"/>
            <button>Enlist!</button>
          </form>

          <div id="wall">
            <span></span><span id="gate"></span><span></span>
          </div>
        </div>

        <ul className="troops">
          
        </ul>

        <h1 id="message">{message}</h1>

        {/* Enemy Armies */}
        <div className="enemies">
          {armies}
        </div>
      </div>
    );
  }
}

export default App;
