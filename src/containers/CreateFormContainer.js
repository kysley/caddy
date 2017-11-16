import { graphql } from 'react-apollo'
import { connect } from 'react-redux'

import CreateForm from '../components/CreateForm'
import { submitQuestionRequest, submitQuestionSuccess, submitQuestionFailure } from '../actions/question'
import { createQuestion } from '../mutations'

const withMutation = graphql(createQuestion, {
  props: ({ mutate }) => ({
    createQuestion: (title, quickId) => mutate({
      variables: { title, qId: quickId },
    }),
  }),
})

const mapStateToProps = state => ({ ...state.question })

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit({ title, quickId }) {
    dispatch(submitQuestionRequest({ title }))
    ownProps.createQuestion(title, quickId)
      .then((res) => {
        dispatch(submitQuestionSuccess(res.data.createQuestion))
      }).catch(() => dispatch(submitQuestionFailure()))
  },
})

export default withMutation(connect(mapStateToProps, mapDispatchToProps)(CreateForm))
