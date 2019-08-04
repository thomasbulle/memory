import React, { Component } from 'react';
import './styles.scss';
import cards from './cards.json';
import _shuffle from 'lodash/shuffle';

// components
import Card from 'components/Card'

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setDeck } from 'actions';

class GamePlate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderDeck: [],
    };
  }

  componentDidMount() {
    const { setDeck } = this.props;
    const renderDeck = [];
    let deck = cards.concat(cards);
    deck = _shuffle(deck);
    deck = deck.map(card => {
      const cardElement = <Card image={`/ressources/images/${card.name}.png`} alt={card.name} id={card.id} />
      renderDeck.push(cardElement);
      return {
        ...card,
        isHidden: true,
        isValidate: false,
      };
    });
    setDeck(deck);
    this.setState({ renderDeck });
  }

  render() {
    const { renderDeck } = this.state;

    return(
      <div className='game-plate-wrapper'>
        {renderDeck}
      </div>
    );
  }
}

const mdtp = dispatch => (
  bindActionCreators({
    setDeck,
  }, dispatch)
);

export default connect(null, mdtp)(GamePlate);
