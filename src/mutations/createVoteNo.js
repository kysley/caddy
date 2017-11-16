import gql from 'graphql-tag'

export default gql`
  mutation createVoteNo($questionId: ID!) {
    createVoteNo(questionId: $questionId) {
      id,
      question {
        title
      }
    }
  }
`
