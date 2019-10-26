import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// components
import Card from 'components/Card'

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addClickCounter, onReturnCard } from 'actions';

class GamePlate extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const { dispatch } = this.props;
    dispatch(addClickCounter());
    dispatch(onReturnCard(id));
  }

  render() {
    const { deck } = this.props;

    return(
      <div className='game-plate-wrapper'>
        {deck.map((card, index) => (
          <Card
            key={index}
            image={`/ressources/images/${card.name}.png`}
            alt={card.name}
            id={card.id}
            isHidden={card.isHidden}
            handleClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

GamePlate.propTypes = {
  dispatch: PropTypes.func,
  deck: PropTypes.array,
  addClickCounter: PropTypes.func,
  onReturnCard: PropTypes.func,
};

const mstp = state => ({
  deck: state.player.deck
});

const mdtp = dispatch => (
  bindActionCreators({
    addClickCounter,
    onReturnCard,
  }, dispatch)
);

export default connect(mstp, mdtp)(GamePlate);
