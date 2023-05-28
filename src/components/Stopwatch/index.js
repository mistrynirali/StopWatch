import './index.css'

import {Component} from 'react'

class Stopwatch extends Component {
  state = {timer: 0, isTimeRunning: false}

  componentWillUnmount() {
    clearTimeout(this.timerId)
  }

  onClickstart = () => {
    this.timerId = setInterval(this.tick, 1000)
    this.setState({isTimeRunning: true})
  }

  onClickStop = () => {
    this.setState({isTimeRunning: false})
    clearTimeout(this.timerId)
  }

  onClickReset = () => {
    this.setState({timer: 0, isTimeRunning: false})
  }

  tick = () => this.setState(prevState => ({timer: prevState.timer + 1}))

  render() {
    const {timer, isTimeRunning} = this.state
    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card-container">
          <div>
            <div className="span-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <p className="text">Timer</p>
            </div>
          </div>

          <h1 className="clock">
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>

          <div className="button-container">
            <button
              type="button"
              onClick={this.onClickstart}
              disabled={isTimeRunning}
            >
              Start
            </button>
            <button type="button" onClick={this.onClickStop}>
              Stop
            </button>
            <button type="button" onClick={this.onClickReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
