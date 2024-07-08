import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onClicked = () => {
    const {isSubscribe} = this.state
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="bg-con">
        <h1 className="header">Welcome</h1>
        <p className="desc">Thank you! Happy Learning</p>
        {isSubscribe ? (
          <button className="btn" type="submit" onClick={this.onClicked}>
            Subscribe
          </button>
        ) : (
          <button className="btn" type="submit" onClick={this.onClicked}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
