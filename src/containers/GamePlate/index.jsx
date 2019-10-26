import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// Redux
import { connect } from 'react-redux';
import { addClickCounter, onReturnCard } from 'store/actions';

// Components
import Card from 'components/Card';


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
};

const mapStateToProps = state => ({
  deck: state.player.deck
});

export default connect(mapStateToProps)(GamePlate);
