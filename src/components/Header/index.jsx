import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };

    this.timerInterval = null;
  }

  componentDidMount() {
    const { timer } = this.state;
    this.timerInterval = setInterval(() => {
      this.setState({ timer: timer + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }
  
  render() {
    const { timer } = this.state;
    const { countClick } = this.props;

    return(
      <div className='header-wrapper'>
        <h1 className='title-header'>Jeu de memory</h1>
        <div className='stats-header-wrapper'>
          <p>Time : {timer}</p>
          <p>Nombre de click : {countClick}</p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  countClick: PropTypes.number,
};

export default Header;
