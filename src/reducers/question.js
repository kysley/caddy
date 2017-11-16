import {
  SUBMIT_NEW_QUESTION,
  SUBMIT_QUESTION_SUCCESS,
  SUBMIT_QUESTION_FAILURE,
  LOAD_QUESTION_REQUEST,
  LOAD_QUESTION_SUCCESS,
  LOAD_QUESTION_FAILURE,
} from '../actions/question'

const initialState = {
  loading: false,
  errorMessage: null,
  alertMessage: null,
  pollId: null,
  quickId: null,
  title: null,
}

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case SUBMIT_NEW_QUESTION:
      return {
        ...initialState,
        loading: true,
        title: payload.title,
      }
    case SUBMIT_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        pollId: payload.id,
        quickId: payload.quickId,
        successMessage: payload.message,
      }
    case SUBMIT_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload.message,
      }
    case LOAD_QUESTION_REQUEST:
      return {
        ...state,
        loading: true,
        id: payload.id,
      }
    case LOAD_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: payload.message,
      }
    case LOAD_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload.message,
      }
    default:
      return state
  }
}
