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
    onSubmitVoteYes: PropTypes.func.isRequired,
    onSubmitVoteNo: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.obj,
    }),
  }

  static defaultProps = {
    voteType: null,
  }

  state = {
    hasVoted: null,
    voteType: 'yes',
  }
  componentWillMount() {
    this.getDataFromUrl()
  }

  getDataFromUrl = () => {
    const { id } = this.props.match.params
    const { voteType } = this.state
    // this.props.onSubmitVoteYes({ id, voteType })
    // this.props.onSubmitVoteNo({ id, voteType })
    this.props.questionFromId({ id })
  }

  render() {
    return (
      <div>hello</div>
    )
  }
}
