export const SUBMIT_NEW_QUESTION = 'SUBMIT_NEW_QUESTION'
export const SUBMIT_QUESTION_SUCCESS = 'SUBMIT_QUESTION_SUCCESS'
export const SUBMIT_QUESTION_FAILURE = 'SUBMIT_QUESTION_FAILURE'

export const LOAD_QUESTION_REQUEST = 'LOAD_QUESTION_REQUEST'
export const LOAD_QUESTION_SUCCESS = 'LOAD_QUESTION_SUCCESS'
export const LOAD_QUESTION_FAILURE = 'LOAD_QUESTION_FAILURE'

export const GET_SUBMITTED_VOTE = 'GET_SUBMITTED_VOTE'

export const CLOSE_CONTINUE_MODAL = 'CLOSE_CONTINUE_MODAL'

export const OPEN_SHARING_MODAL = 'OPEN_SHARING_MODAL'
export const CLOSE_SHARING_MODAL = 'CLOSE_SHARING_MODAL'

export const submitQuestionRequest = ({ title }) => ({
  type: SUBMIT_NEW_QUESTION,
  title,
})

export const submitQuestionSuccess = ({ id, quickId }) => ({
  type: SUBMIT_QUESTION_SUCCESS,
  message: 'Question created successfully!',
  id,
  quickId,
})

export const submitQuestionFailure = () => ({
  type: SUBMIT_QUESTION_FAILURE,
  message: 'Something went wrong while prepping your question',
})

export const loadQuestionRequest = () => ({
  type: LOAD_QUESTION_REQUEST,
})

export const loadQuestionSuccess = ({
  title, id, quickId, votesYes: { yesCount } = {}, votesNo: { noCount } = {},
}) => ({
  type: LOAD_QUESTION_SUCCESS,
  message: 'Question loaded successfully',
  id,
  quickId,
  title,
  yesCount,
  noCount,
})

export const loadQuestionFailure = () => ({
  type: LOAD_QUESTION_FAILURE,
  message: 'Failed to load question',
})

export const hasSubmittedVote = ({ id }) => {
  let ls = false
  let opt = null
  if (localStorage.getItem(id)) {
    ls = true
    opt = localStorage.getItem(id)
  }

  return {
    type: GET_SUBMITTED_VOTE,
    hasVoted: ls,
    voteType: opt,
  }
}

export const closeContinueModal = () => ({
  type: CLOSE_CONTINUE_MODAL,
  show: false,
})

export const openSharingModal = () => ({
  type: OPEN_SHARING_MODAL,
  show: true,
})

export const closeSharingModal = () => ({
  type: OPEN_SHARING_MODAL,
  show: false,
})
