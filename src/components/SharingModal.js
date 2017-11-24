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
  }

  handleCodeChange = (e) => {
    const eTitle = e.target.value
    const trimmedTitle = eTitle.replace(/^\s+/, '').replace(/\s+$/, '')
    if (trimmedTitle === '') {
      this.setState({ code: '' })
    } else {
      this.setState({ code: eTitle })
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
    return (
      <div className={classes}>
        <h1 className="sharing--modal__header">Hey! Enter a sharing code below to go to the question
          <span role="img" aria-label="stars-emoji"> ✨</span>
        </h1>
        <div className="sharing--modal__quick-wrapper">
          <input
            className="sharing--modal__quick-link__input"
            value={this.state.code}
            placeholder="Your code here"
            autoFocus
            onChange={e => this.handleCodeChange(e)}
          />
          <button className="sharing--modal__quick-link__go">GO</button>
        </div>
      </div>
    )
  }
}

export default onClickOutside(SharingModal)
