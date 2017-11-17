import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'

import ShowQuestion from '../components/ShowQuestion'
import { submitVoteRequest, submitVoteSuccess, submitVoteFailure } from '../actions/vote'
import { hasSubmittedVote, loadQuestionRequest, loadQuestionSuccess, loadQuestionFailure } from '../actions/question'
import { createVoteYes, createVoteNo } from '../mutations'
import { getQuestionFromId, getQuestionFromQuickId } from '../queries'

// const withMutation = graphql(createQuestion, {
//   props: ({ mutate }) => ({
//     createQuestion: (title, quickId) => mutate({
//       variables: { title, qId: quickId },
//     }),
//   }),
// })

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
    options: id => ({
      variables: { id },
    }),
  }),
  graphql(getQuestionFromQuickId, {
    options: quickId => ({
      variables: { quickId },
    }),
  }),
)

const mapStateToProps = state => ({ ...state.question, ...state.vote })

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
    ownProps.getQuestionFromId(id)
      .then(() => {
        dispatch(loadQuestionSuccess())
      }).catch(() => dispatch(loadQuestionFailure()))
  },
})

export default AllFunctions(connect(mapStateToProps, mapDispatchToProps)(ShowQuestion))
