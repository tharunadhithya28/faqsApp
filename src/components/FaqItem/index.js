import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  onClickButton = id => {
    const {changeAnswer} = this.props
    changeAnswer(id)
  }

  showAnswer = () => {
    const {faqlist, changeAnswer} = this.props
    const {id, questionText, answerText, isOpen} = faqlist
    return (
      <div>
        <h1> {questionText} </h1>
        <button onClick={this.onClickButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
            alt="minus"
          />
        </button>

        <div>
          <p> {answerText} </p>
        </div>
      </div>
    )
  }

  hideAnswer = () => {
    const {faqlist, changeAnswer} = this.props
    const {id, questionText, answerText, isOpen} = faqlist
    return (
      <div>
        <h1> {questionText} </h1>
        <button onClick={this.onClickButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
            alt="plus"
          />
        </button>
      </div>
    )
  }

  render() {
    const {faqlist, changeAnswer} = this.props
    const {id, questionText, answerText, isOpen} = faqlist
    return (
      <li className="faq-container">
        {isOpen ? this.showAnswer() : this.hideAnswer()}
      </li>
    )
  }
}
export default FaqItem
