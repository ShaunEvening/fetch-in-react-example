import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { inputChange } from './actions';

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
    const { textInput, onTextInputChange } = this.props;
    const { pokemon, error } = this.state;
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
              onChange={ev => onTextInputChange(ev.target.value)}
            />
            <button
              className="submit-button"
              onClick={ this.getPokemon }
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
      console.log(textInput);
      fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          pokemon: data
        })
      })
    }
  }
}

const mapStateToProps = (state) => ({
  textInput: state.textInput,
})
const actions = {
  onTextInputChange: inputChange,
}

export default connect(mapStateToProps, actions)(App);
