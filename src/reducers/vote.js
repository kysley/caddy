import {
  SUBMIT_VOTE_REQUEST,
  SUBMIT_VOTE_SUCCESS,
  SUBMIT_VOTE_FAILURE,
} from '../actions/vote'

const initialState = {
  questionName: null,
  questionId: null,
}

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case SUBMIT_VOTE_REQUEST:
      return {
        ...state,
        voteSuccess: payload.voteSuccess,
      }
    case SUBMIT_VOTE_SUCCESS:
      return {
        ...state,
        token: null,
      }
    case SUBMIT_VOTE_FAILURE:
      return {
        ...state,
        token: null,
      }
    default:
      return state
  }
}
