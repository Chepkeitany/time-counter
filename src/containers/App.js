import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setActiveSession as setActiveSessionAC,
  updateCounter
} from "../actions";
import "./App.css";

class App extends Component {
  render() {
    const { days, hours, minutes, seconds, activeSession } = this.props;
    const setActiveSession = e =>
      this.props.setActiveSessionAC(e.target.value);

    const handleCounter = e => {
      const type = e.target.dataset.type;
      this.props.updateCounter(type, activeSession);
    };

    return (
      <div className="App">
        <header>
          <h4 className="App__subheader">BOOK NAME</h4>
          <h1 className="App__header">Understanding Redux - 1</h1>
        </header>

        <section className="Counter">
          <h4 className="App__subheader">TOTAL TIME SPENT ON THE PROJECT</h4>

          <main className="Counter--main">
            <div className="Counter--main__session">
              <span className="Counter__text--grey">ACTIVE SESSION: </span>
              <select
                className="Counter__text--grey"
                onChange={setActiveSession}
                value={activeSession}
              >
                <option>DAYS</option>
                <option>HOURS</option>
                <option>MINUTES</option>
                <option>SECONDS</option>
              </select>
            </div>

            <div className="Counter--main__values">
              <div>
                <span className="App__text--white Counter__text--large">
                  {days}
                </span>
                <span className="Counter__text--grey">DAYS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {hours}
                </span>
                <span className="Counter__text--grey">HOURS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {minutes}
                </span>
                <span className="Counter__text--grey">MINUTES</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {seconds}
                </span>
                <span className="Counter__text--grey">SECONDS</span>
              </div>
            </div>
          </main>
          <div className="App__buttons">
            <button
              className="App__text--white"
              data-type="INCREASE_COUNTER"
              onClick={handleCounter}
            >
              INCREASE
            </button>
            <button
              className="App__text--white"
              data-type="DECREASE_COUNTER"
              onClick={handleCounter}
            >
              DECREASE
            </button>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return  {
    days: state.days,
    hours: state.hours,
    minutes: state.minutes,
    seconds: state.seconds,
    activeSession: state.activeSession
  }
};

const mapDispatchToProps = {
  setActiveSessionAC,
  updateCounter
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
