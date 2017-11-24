import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import gen from 'nanoid/generate'

import SharingModal from '../containers/SharingModalContainer'
import ContinueModal from '../containers/ContinueModalContainer'

import Banner from './Banner'


export default class CreateForm extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    showContinueModal: PropTypes.bool.isRequired,
    showShareModal: PropTypes.bool.isRequired,
    successMessage: PropTypes.string,
    errorMessage: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    successMessage: '',
    errorMessage: '',
  }

  state = {
    title: '',
    placeHolderString: '',
  }

  componentWillMount() {
    const placeHolderString = this.placeholderExamples[Math.floor(Math.random() * this.placeholderExamples.length)]
    this.setState({ placeHolderString })
  }

  placeholderExamples = [
    'Are we ordering pizza tonight?',
    'Should I go to the gym today?',
    'Pineapples on pizza?',
    'Do we need that new 4k tv?',
    'Is watching Seinfeld for the nth time a good idea?',
    'Do I bring CAH this weekend?',
    'Should we road trip to vagas this summer?',
  ]

  handleTitleChange = (e) => {
    const eTitle = e.target.value
    const trimmedTitle = eTitle.replace(/^\s+/, '').replace(/\s+$/, '')
    if (trimmedTitle === '') {
      this.setState({ title: '' })
    } else {
      this.setState({ title: eTitle })
    }
  }

  render() {
    const { title } = this.state
    const { showContinueModal, showShareModal } = this.props
    const wrapperClasses = classNames({
      container: true,
      full: true,
      'no-overflow': true,
      'dur-3': true,
      fadeOut: this.state.transitionOut,
    })
    return (
      <div className={wrapperClasses}>
        <Banner />
        <div className="fadeInUp question--wrapper delay-3">
          <input
            className="question--input"
            value={this.state.title}
            placeholder={this.state.placeHolderString}
            id="title"
            autoComplete="off"
            autoFocus
            maxLength={84}
            onChange={e => this.handleTitleChange(e)}
          />
          <button
            className="question--submit"
            onClick={(event) => {
              event.preventDefault()
              const quickId = gen('1234567890abcdefghijklmnopqrstuvwxyz', 5).toUpperCase()
              return this.props.onSubmit({ title, quickId })
            }}
          >
            Ask!
          </button>
        </div>
        { showContinueModal &&
          <ContinueModal />
        }
        { showShareModal &&
          <SharingModal />
        }
      </div>
    )
  }
}
