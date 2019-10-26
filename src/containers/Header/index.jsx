import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// Redux
import { connect } from 'react-redux';
import { upTimer } from 'store/actions';

class Header extends Component {
  constructor(props) {
    super(props);

    this.timerInterval = null;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.timerInterval = setInterval(() => {
      dispatch(upTimer());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }
  
  render() {
    const { clicks, timer } = this.props;

    return(
      <div className='header-wrapper'>
        <h1 className='title-header'>Jeu de memory</h1>
        <div className='stats-header-wrapper'>
          <p className='time-header'>Time : {timer}</p>
          <p className='nb-clicks-header'>Nombre de clicks : {clicks}</p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func,
  clicks: PropTypes.number,
  timer: PropTypes.number,
};

const mapStateToProps = state => ({
  clicks: state.player.clicks,
  timer: state.gameStats.timer,
});

export default connect(mapStateToProps)(Header);
