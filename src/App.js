import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { inputChange, getPoke } from './actions';


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
    const { textInput, onTextInputChange, onBtnClick, pokemon} = this.props;
    const { error } = this.state;
    // console.log(22, 'new poke',pokemon, this.props)

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
              onClick={ ()=> {
                console.log('button clicked', textInput)
                onBtnClick(textInput)} }
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
}

const mapStateToProps = (state) => {
  // console.log(92, 'state2prop', state);
  return {
  textInput: state.textInput,
  pokemon: state.pokemon,

}}
const actions = {
  onTextInputChange: inputChange,
  onBtnClick: getPoke,
}

export default connect(mapStateToProps, actions)(App);
