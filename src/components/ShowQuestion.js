import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'

export default class ShowQuestion extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    quickId: PropTypes.string,
    questionId: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    hasVoted: PropTypes.bool,
    voteType: PropTypes.string,
    yesCount: PropTypes.int,
    noCount: PropTypes.int,
    questionFromId: PropTypes.func.isRequired,
    questionFromQuickId: PropTypes.func.isRequired,
    onSubmitVoteYes: PropTypes.func.isRequired,
    onSubmitVoteNo: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.obj,
    }).isRequired,
  }

  static defaultProps = {
    yesCount: null,
    noCount: null,
    voteType: null,
    title: '',
    quickId: '',
    questionId: '',
    hasVoted: null,
  }

  state = {
    voteType: 'yes',
  }
  componentDidMount() {
    this.getDataFromUrl()
    this.createVoteSubscription = this.props.getQuestionFromId.subscribeToMore({
      document: gql`
        subscription watchVotes {

        }
      `,
    })
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
    const { questionId } = this.props
    return (
      <div className="temp">
        <h1> {this.props.yesCount} </h1>
        <h1> {this.props.noCount} </h1>
        <h1> {this.props.title} </h1>
        <h1> {this.props.questionId} </h1>
        <h1> {this.props.quickId} </h1>
        <button
          onClick={(event) => {
          event.preventDefault()
          return this.props.createVoteYes(questionId)
        }}
        >
          {'vote yes'}
        </button>
        <button
          onClick={(event) => {
          event.preventDefault()
          return this.props.createVoteNo(questionId)
        }}
        >
          {'vote no'}
        </button>
      </div>
    )
  }
}
