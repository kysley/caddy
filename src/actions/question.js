export const SUBMIT_NEW_QUESTION = 'SUBMIT_NEW_QUESTION'
export const SUBMIT_QUESTION_SUCCESS = 'SUBMIT_QUESTION_SUCCESS'
export const SUBMIT_QUESTION_FAILURE = 'SUBMIT_QUESTION_FAILURE'

export const LOAD_QUESTION_REQUEST = 'LOAD_QUESTION_REQUEST'
export const LOAD_QUESTION_SUCCESS = 'LOAD_QUESTION_SUCCESS'
export const LOAD_QUESTION_FAILURE = 'LOAD_QUESTION_FAILURE'

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

export const loadQuestionRequest = ({ id }) => ({
  type: LOAD_QUESTION_REQUEST,
  id,
})

export const loadQuestionSuccess = () => ({
  type: LOAD_QUESTION_SUCCESS,
  message: 'Question loaded successfully',
})

export const loadQuestionFailure = () => ({
  type: LOAD_QUESTION_FAILURE,
  message: 'Failed to load question',
})
