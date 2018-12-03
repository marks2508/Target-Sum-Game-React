import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

class Game extends React.Component {
  render() {
    console.log('Game component rendering');
    return (
      <div className="game">
        <div className="help">
          Pick 4 numbers that sum to the target in 15 seconds
        </div>
        <div className="target">42</div>
        <div clasName="challenge-numbers">
          <div className="number">8</div>
          <div className="number">5</div>
          <div className="number">12</div>
          <div className="number">13</div>
          <div className="number">5</div>
          <div className="number">6</div>
        </div>
        <div clasName="footer">
          <div className="timer-value">15</div>
          <button>Start</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
