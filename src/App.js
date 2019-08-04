import React from 'react';
import './App.scss';

// containers
import Header from 'containers/Header/';
import GamePlate from 'containers/GamePlate/';

function App() {
  return (
    <div className="App">
      <Header />
      <GamePlate />
    </div>
  );
}

export default App;
