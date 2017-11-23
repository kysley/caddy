import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ ...state.question })

const ContinueModal = (props) => {
  ContinueModal.propTypes = {
    showContinueModal: PropTypes.bool.isRequired,
    quickId: PropTypes.string.isRequired,
    questionId: PropTypes.string.isRequired,
  }

  const classes = classNames({
    'continue--modal': true,
    'dur-3': true,
    fadeIn: props.showContinueModal !== false,
    fadeOut: props.showContinueModal === false,
  })

  const composedUrl = `/q/${props.questionId}`

  return (
    <div className={classes}>
      <div className="continue--modal__wrapper">
        <h1 className="continue--modal__header">Your question is ready to be shared with whoever!</h1>
        <h2><a href={composedUrl} className="continue--modal__link">Click here to view your question!</a></h2>
        <h2>Also, here is a sharing code you can share with your friends!</h2>
        <div className="continue--modal__quick-wrapper">
          <p className="continue--modal__quick-link">{props.quickId}</p>
          <p className="continue--modal__quick-link__copy">COPY</p>
        </div>
        <h2>They can visit <span>issy.fun/q/&lt;your share code&gt; </span>
          or click 'Have a sharing code?' at the top of the page!
        </h2>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(ContinueModal)
