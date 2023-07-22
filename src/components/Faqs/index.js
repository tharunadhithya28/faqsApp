import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {
    isOpen: true,
  }

  changeAnswer = id => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    const {isOpen} = this.state
    const {faqsList} = this.props
    const {id, questionText, answerText} = faqsList
    return (
      <div>
        <div className="inner-container">
          <h1> FAQs </h1>
          <ul>
            {faqsList.map(eachitem => (
              <FaqItem
                faqlist={eachitem}
                changeAnswer={this.changeAnswer}
                isOpen={isOpen}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
