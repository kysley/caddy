import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import onClickOutside from 'react-onclickoutside'
// import { connect } from 'react-redux'

class SharingModal extends React.Component {
  static propTypes = {
    showShareModal: PropTypes.bool.isRequired,
    closeSharingModal: PropTypes.func.isRequired,
  }

  state = {
    code: '',
    validLength: false,
  }

  handleCodeChange = (e) => {
    const eTitle = e.target.value
    const trimmedTitle = eTitle.replace(/^\s+/, '').replace(/\s+$/, '')
    if (trimmedTitle === '') {
      this.setState({ code: '' })
    } else {
      this.setState({ code: eTitle })
    }
    if (trimmedTitle.length === 5) {
      this.setState({ validLength: true })
    } else {
      this.setState({ validLength: false })
    }
  }

  handleClickOutside = () => {
    this.props.closeSharingModal()
  }

  render() {
    const classes = classNames({
      'sharing--modal__wrapper': true,
      'dur-3': true,
      fadeIn: this.props.showShareModal !== false,
      fadeOut: this.props.showShareModal === false,
    })
    const buttonClasses = classNames({
      'sharing--modal__quick-link__go': true,
      valid: this.state.validLength,
    })
    return (
      <div className={classes}>
        <h1 className="sharing--modal__header">Enter the sharing code below
          <span role="img" aria-label="stars-emoji"> ✨</span>
        </h1>
        <div className="sharing--modal__quick-wrapper">
          <input
            className="sharing--modal__quick-link__input"
            value={this.state.code}
            placeholder="Your code here"
            onChange={e => this.handleCodeChange(e)}
          />
          <span className="bar" />
          <button className={buttonClasses}>View Question</button>
        </div>
      </div>
    )
  }
}

export default onClickOutside(SharingModal)
