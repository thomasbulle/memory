import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import config from 'config';
import _shuffle from 'lodash/shuffle';

// containers
import Header from 'containers/Header/';
import GamePlate from 'containers/GamePlate/';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setDeck } from 'store/actions';

class App extends Component {

  componentDidMount() {
    const { setDeck } = this.props;

    let deck = config.itemsCards.concat(config.itemsCards);
    deck = _shuffle(deck);
    deck = deck.map((nameCard, index) => {
      return {
        id: index,
        name: nameCard,
        isHidden: true,
        isValidate: false,
      };
    });
    
    setDeck(deck);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <GamePlate />
      </div>
    );
  }
}

App.propTypes = {
  setDeck: PropTypes.func,
};

const mdtp = dispatch => (
  bindActionCreators({
    setDeck,
  }, dispatch)
);

export default connect(null, mdtp)(App);
