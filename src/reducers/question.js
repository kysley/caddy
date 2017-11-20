import {
  SUBMIT_NEW_QUESTION,
  SUBMIT_QUESTION_SUCCESS,
  SUBMIT_QUESTION_FAILURE,
  LOAD_QUESTION_REQUEST,
  LOAD_QUESTION_SUCCESS,
  LOAD_QUESTION_FAILURE,
  GET_SUBMITTED_VOTE,
} from '../actions/question'

const initialState = {
  loading: false,
  errorMessage: null,
  alertMessage: null,
  questionId: null,
  quickId: null,
  title: null,
  hasVoted: null,
  voteType: null,
  votesYes: null,
  votesNo: null,
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
        questionId: payload.id,
        quickId: payload.quickId,
        votesYes: payload.yesCount,
        votesNo: payload.noCount,
      }
    case LOAD_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload.message,
      }
    case GET_SUBMITTED_VOTE:
      return {
        ...state,
        hasVoted: payload.ls,
        voteType: payload.opt,
      }
    default:
      return state
  }
}
