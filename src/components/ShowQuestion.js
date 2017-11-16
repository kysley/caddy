import React from 'react'
import PropTypes from 'prop-types'

export default class ShowQuestion extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    quickId: PropTypes.string.isRequired,
    loading: PropTypes.boo.isRequired,
  }

  static defaultProps = {
    title: '',
    quickId: '',
    loading: '',
  }
}
