export const SUBMIT_VOTE_REQUEST = 'SUBMIT_VOTE_REQUEST'
export const SUBMIT_VOTE_SUCCESS = 'SUBMIT_VOTE_SUCCESS'
export const SUBMIT_VOTE_FAILURE = 'SUBMIT_VOTE_FAILURE'

export const submiteVoteRequest = () => ({
  type: SUBMIT_VOTE_REQUEST,
})

export const submitVoteSuccess = ({ id }) => {
  localStorage.setitem(id, 'voted')

  return {
    type: SUBMIT_VOTE_SUCCESS,
    voteSuccess: true,
  }
}

export const submitVoteFailure = ({ id }) => {
  localStorage.removeItem(id)

  return {
    type: SUBMIT_VOTE_FAILURE,
    voteSuccess: false,
  }
}
