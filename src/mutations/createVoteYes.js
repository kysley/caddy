import gql from 'graphql-tag'

export default gql`
  mutation createVoteYes($questionId: ID!) {
    createVoteYes(questionId: $questionId) {
      id,
      question {
        title
      }
    }
  }
`
