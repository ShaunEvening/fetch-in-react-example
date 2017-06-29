import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      error: false,
      textInput: '',
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Pokemon Search</h1>
          <h2>Gotta fetch 'em all!</h2>
          <div className="pokeball">
            <div className="pokeball-bottom" />
            <div className="pokeball-band" />
            <div className="pokeball-button" />
          </div>
        </div>
        <div className="content-container">
          <h3>Enter a number to search for a pokemon</h3>
          <div className="input-group">
            <input
              value={this.state.textInput}
              type="number"
              className="input"
              onChange={ev => this.setState({ textInput: ev.target.value, error: false })}
            />
            <button
              className="submit-button"
              onClick={this.getPokemon}
            >
              Search Pokemon
            </button>
          </div>
          {
            this.state.error ?
              <div className="error-container">
                <h3>Oops! something went wrong. Please try again</h3>
              </div> : null
          }
          {
            this.state.pokemon ?
            <div className="pokemon-info-card">
              <h3>You chose</h3>
              <h1>{this.state.pokemon.name}</h1>
              <img
                src={this.state.pokemon.sprites.front_default}
                alt="pokemon-sprite"
                className="pokemon-image"
              />
            </div> : null
          }
        </div>
      </div>
    );
  }

  getPokemon = () => {
    if (this.state.textInput.length) {
      const url = `http://pokeapi.co/api/v2/pokemon/${this.state.textInput}`;

      //TODO: Add fetch code below
    }
  }
}

export default App;
