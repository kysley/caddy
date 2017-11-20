import gql from 'graphql-tag'

export default gql`
  query getQuestionFromQuickId($quickId: String!) {
    Question(quickId: $quickId) {
      title
      quickId
      id
      _voteNoMeta {
        amt: count
      }
      _voteYesMeta {
        amt: count
      }
    }
  }
`
