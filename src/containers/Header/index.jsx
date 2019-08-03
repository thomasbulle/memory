import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upTimer } from 'actions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

    this.timerInterval = null;
  }

  componentDidMount() {
    const { upTimer } = this.props;
    this.timerInterval = setInterval(() => {
      upTimer();
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
  clicks: PropTypes.number,
  upTimer: PropTypes.func,
};

const mstp = state => ({
  clicks: state.player.clicks,
  timer: state.gameStats.timer,
});

const mdtp = dispatch => (
  bindActionCreators({
    upTimer,
  }, dispatch)
)

export default connect(mstp, mdtp)(Header);
