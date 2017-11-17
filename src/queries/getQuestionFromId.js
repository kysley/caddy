import gql from 'graphql-tag'

export default gql`
  query getQuestionFromId($id: ID!) {
    Question(id: $id) {
      title
      quickId
      id
      _voteNoMeta {
        count
      }
      _voteYesMeta {
        count
      }
    }
  }
`
