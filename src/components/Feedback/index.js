// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {onMode: true}

  onClickChange = () => {
    this.setState({onMode: false})
  }

  onChangeEmoji = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div>
        <h1 className="head">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="container">
          {emojis.map(each => (
            <li className="con" key={each.id} onClick={this.onClickChange}>
              <img src={each.imageUrl} alt={each.name} className="img" />
              <p className="para">{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  onChangeLove = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div>
        <img src={loveEmojiUrl} alt="love emoji" className="img" />
        <h1 className="head">Thank you!</h1>
        <p className="para">
          We will use your feedback to improve your customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {onMode} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          {onMode ? this.onChangeEmoji() : this.onChangeLove()}
        </div>
      </div>
    )
  }
}

export default Feedback
