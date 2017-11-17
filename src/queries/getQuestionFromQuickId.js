import gql from 'graphql-tag'

export default gql`
  query getQuestionFromQuickId($quickId: String!) {
    Question(quickId: $quickId) {
      title
      quickId
      id
      no: _voteNoMeta {
        amt: count
      }
      yes: _voteYesMeta {
        amt: count
      }
    }
  }
`
