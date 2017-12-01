import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'

import ShowQuestion from '../components/ShowQuestion'
import { submitVoteRequest, submitVoteSuccess, submitVoteFailure } from '../actions/vote'
import { hasSubmittedVote, loadQuestionRequest, loadQuestionSuccess, loadQuestionFailure } from '../actions/question'
import { createVoteYes, createVoteNo } from '../mutations'
import { getQuestionFromId, getQuestionFromQuickId } from '../queries'

const AllFunctions = compose(
  graphql(createVoteYes, {
    props: ({ mutate }) => ({
      createVoteYes: questionId => mutate({
        variables: { questionId },
      }),
    }),
  }),
  graphql(createVoteNo, {
    props: ({ mutate }) => ({
      createVoteNo: questionId => mutate({
        variables: { questionId },
      }),
    }),
  }),
  graphql(getQuestionFromId, {
    options: ownProps => ({
      variables: { id: ownProps.match.params },
    }),
    name: 'getQuestionFromId',
  }),
  graphql(getQuestionFromQuickId, {
    options: quickId => ({
      variables: { quickId },
    }),
    name: 'getQuestionFromQuickId',
  }),
)

const mapStateToProps = state => ({ ...state.question })

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmitVoteYes({ id, voteType }) {
    dispatch(submitVoteRequest())
    ownProps.createVoteYes(id)
      .then(() => {
        dispatch(submitVoteSuccess(id, voteType))
      }).catch(() => dispatch(submitVoteFailure()))
  },
  onSubmitVoteNo({ id, voteType }) {
    dispatch(submitVoteRequest())
    ownProps.createVoteNo(id)
      .then(() => {
        dispatch(submitVoteSuccess(id, voteType))
      }).catch(() => dispatch(submitVoteFailure()))
  },
  questionFromQuickId({ quickId }) {
    dispatch(loadQuestionRequest())
    ownProps.getQuestionFromQuickId(quickId)
      .then(() => {
        dispatch(loadQuestionSuccess())
      }).catch(() => dispatch(loadQuestionFailure()))
  },
  questionFromId({ id }) {
    dispatch(loadQuestionRequest())
    ownProps.getQuestionFromId.refetch({ id })
      .then((res) => {
        dispatch(loadQuestionSuccess(res.data.Question))
      }).catch(() => dispatch(loadQuestionFailure()))
  },
})

export default AllFunctions(connect(mapStateToProps, mapDispatchToProps)(ShowQuestion))
