import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import onClickOutside from 'react-onclickoutside'

import { closeContinueModal } from '../actions/question'

const mapStateToProps = state => ({ ...state.question })

const mapDispatchToProps = dispatch => ({
  closeContinueModal() {
    dispatch(closeContinueModal())
  },
})

class ContinueModal extends React.Component {
  static propTypes = {
    showContinueModal: PropTypes.bool.isRequired,
    quickId: PropTypes.string.isRequired,
    questionId: PropTypes.string.isRequired,
    closeContinueModal: PropTypes.func.isRequired,
  }

  handleClickOutside = () => {
    this.props.closeContinueModal()
  }

  render() {
    const composedUrl = `/q/${this.props.questionId}`
    const classes = classNames({
      'continue--modal__wrapper': true,
      'dur-3': true,
      fadeIn: this.props.showContinueModal !== false,
      fadeOut: this.props.showContinueModal === false,
    })
    return (
      <div className={classes}>
        <h1 className="continue--modal__header">Your question is ready to be shared with whoever!</h1>
        <h2><a href={composedUrl} className="continue--modal__link">Click here to view your question!</a></h2>
        <h2>Also, here is a sharing code for, well, sharing!</h2>
        <div className="continue--modal__quick-wrapper">
          <p className="continue--modal__quick-link">{this.props.quickId}</p>
          <p className="continue--modal__quick-link__copy">COPY</p>
        </div>
        <h2>They can visit <span>issy.fun/q/{this.props.quickId}<br /></span>
          or click {'Have a sharing code?'} at the top of the page!
        </h2>
      </div>
    )
  }
}

// export default onClickOutside(ContinueModal)
export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(ContinueModal))
