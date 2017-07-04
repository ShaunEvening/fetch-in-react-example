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
    const { pokemon, error, textInput } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h1>Pokemon Search</h1>
          <h2>Gotta fetch em all!</h2>
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
              value={textInput}
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
            error ?
              <div className="error-container">
                <h3>Oops! something went wrong. Please try again</h3>
              </div> : null
          }
          {
            pokemon ?
              <div className="pokemon-info-card">
                <h3>You chose</h3>
                <h1>{pokemon.name}</h1>
                <img
                  src={pokemon.sprites.front_default}
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
    const { textInput } = this.state;
    if (textInput.length) {
      const url = `http://pokeapi.co/api/v2/pokemon/${textInput}`;

      //TODO: Add fetch code below
      return fetch(url)
      .then(response => {
        console.log(response)
        if(!response.ok) {
          throw {
            message: 'Error thrown',
            status: response.status
           }
        }
        return response.json();
      })
       .then(data => {
          this.setState({
           pokemon: data
          })
       })
       .catch(err => {
          console.error(err)
          this.setState({
            pokemon: null,
            error: true
          })
       })
    }
  }
  
}

export default App;
