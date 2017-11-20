import gql from 'graphql-tag'

export default gql`
  query getQuestionFromId($id: ID!) {
    Question(id: $id) {
      title
      quickId
      id
      votesNo: _voteNoMeta {
        noCount: count
      }
      votesYes: _voteYesMeta {
        yesCount: count
      }
    }
  }
`
