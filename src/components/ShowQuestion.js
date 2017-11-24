import React from 'react'
import PropTypes from 'prop-types'

export default class ShowQuestion extends React.Component {
  static propTypes = {
    // title: PropTypes.string.isRequired,
    // id: PropTypes.string.isRequired,
    // quickId: PropTypes.string.isRequired,
    // loading: PropTypes.bool.isRequired,
    // hasVoted: PropTypes.bool.isRequired,
    // voteType: PropTypes.string,
    questionFromId: PropTypes.func.isRequired,
    questionFromQuickId: PropTypes.func.isRequired,
    onSubmitVoteYes: PropTypes.func.isRequired,
    onSubmitVoteNo: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.obj,
    }).isRequired,
  }

  static defaultProps = {
    voteType: null,
  }

  state = {
    hasVoted: null,
    voteType: 'yes',
  }
  componentDidMount() {
    // this.getDataFromUrl()
  }

  getDataFromUrl = () => {
    const { id } = this.props.match.params
    const { voteType } = this.state
    // this.props.onSubmitVoteYes({ id, voteType })
    // this.props.onSubmitVoteNo({ id, voteType })
    if (id.length > 5) {
      this.props.questionFromId({ id })
    } else {
      this.props.questionFromQuickId({ id })
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={(event) => {
          event.preventDefault()
          return this.props.questionFromId({ id: 'cja4d3x0b7pjs0144cx9by6f2' })
        }}
        >
          {'ello'}
        </button>
      </div>
    )
  }
}
