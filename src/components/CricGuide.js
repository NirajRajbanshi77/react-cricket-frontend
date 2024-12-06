import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const CricketInfoPage = () => {
  return (
    <div className="container py-5 bg-light">
      <h1 className="text-center mb-4 text-primary">Cricket Rules Overview</h1>

      <div className="row mb-4">
        <div className="col-lg-6">
          <h2 className="text-secondary">Basic Rules</h2>
          <ul className="list-group">
            <li className="list-group-item">Cricket is played between two teams of 11 players each.</li>
            <li className="list-group-item">The objective is to score more runs than the opposing team.</li>
            <li className="list-group-item">The game is played on a 22-yard pitch in the center of a field.</li>
            <li className="list-group-item">Each team has one or more innings, and each inning consists of a set number of overs.</li>
          </ul>
        </div>
        <div className="col-lg-6">
          <h2 className="text-secondary">Batting Rules</h2>
          <ul className="list-group">
            <li className="list-group-item">The striker is the batter facing the bowler.</li>
            <li className="list-group-item">A batter can be out in multiple ways: bowled, caught, LBW, run out, or stumped.</li>
            <li className="list-group-item">A run is scored by hitting the ball and running between the wickets.</li>
            <li className="list-group-item">Boundaries (4 or 6 runs) are hit when the ball reaches or crosses the field's edge.</li>
          </ul>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-6">
          <h2 className="text-secondary">Bowling Rules</h2>
          <ul className="list-group">
            <li className="list-group-item">The bowler must deliver the ball with a straight arm.</li>
            <li className="list-group-item">An over consists of 6 legal balls, after which a new bowler takes over.</li>
            <li className="list-group-item">Different types of deliveries include fast bowling, spin bowling, and swing bowling.</li>
          </ul>
        </div>
        <div className="col-lg-6">
          <h2 className="text-secondary">Fielding Rules</h2>
          <ul className="list-group">
            <li className="list-group-item">Fielders aim to stop runs and dismiss batters through catches, run outs, and other means.</li>
            <li className="list-group-item">The wicketkeeper stands behind the stumps to catch missed balls and attempt stumpings.</li>
            <li className="list-group-item">In limited overs, fielding restrictions apply regarding how many players can be outside the 30-yard circle.</li>
          </ul>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-12">
          <h2 className="text-secondary">Cricket Formats</h2>
          <p className="text-muted">
            Cricket is played in various formats, each with its own rules:
          </p>
          <ul className="list-group">
            <li className="list-group-item">Test Cricket: The longest format, lasting up to 5 days.</li>
            <li className="list-group-item">One Day Internationals (ODI): Each team bats for 50 overs.</li>
            <li className="list-group-item">T20 Cricket: The shortest format, with 20 overs per team.</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <footer className="text-muted">
          <p>Learn more about cricket and its rules. Enjoy the game!</p>
        </footer>
      </div>
    </div>
  );
};

export default CricketInfoPage;
