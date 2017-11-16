import gql from 'graphql-tag'

export default gql`
  mutation createQuestion($title: String!, $qId: String) {
    createQuestion(title: $title, quickId: $qId) {
      id,
      quickId,
      title
    }
  }
`
