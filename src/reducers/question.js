import {
  SUBMIT_NEW_QUESTION,
  SUBMIT_QUESTION_SUCCESS,
  SUBMIT_QUESTION_FAILURE,
  LOAD_QUESTION_REQUEST,
  LOAD_QUESTION_SUCCESS,
  LOAD_QUESTION_FAILURE,
  GET_SUBMITTED_VOTE,
  CLOSE_CONTINUE_MODAL,
  OPEN_SHARING_MODAL,
  CLOSE_SHARING_MODAL,
} from '../actions/question'

const initialState = {
  loading: false,
  errorMessage: null,
  alertMessage: null,
  showContinueModal: false,
  showShareModal: false,
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
        showContinueModal: true,
        questionId: payload.id,
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
        title: payload.title,
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
    case CLOSE_CONTINUE_MODAL:
      return {
        ...state,
        showContinueModal: payload.show,
      }
    case OPEN_SHARING_MODAL:
      return {
        ...state,
        showShareModal: payload.show,
      }
    case CLOSE_SHARING_MODAL:
      return {
        ...state,
        showShareModal: payload.show,
      }
    default:
      return state
  }
}
