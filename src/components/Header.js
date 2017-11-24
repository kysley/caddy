import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = (props) => {
  Header.propTypes = {
    openSharingModal: PropTypes.func.isRequired,
  }

  return (
    <header className="header fadeIn delay-2">
      <Link to="/">
        logo holder
      </Link>
      <button
        className="sharing__code"
        onClick={(event) => {
          event.preventDefault()
          return props.openSharingModal()
        }}
      >
        Have a Sharing Code?
      </button>
    </header>
  )
}


export default Header
