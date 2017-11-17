export const SUBMIT_VOTE_REQUEST = 'SUBMIT_VOTE_REQUEST'
export const SUBMIT_VOTE_SUCCESS = 'SUBMIT_VOTE_SUCCESS'
export const SUBMIT_VOTE_FAILURE = 'SUBMIT_VOTE_FAILURE'

export const submitVoteRequest = () => ({
  type: SUBMIT_VOTE_REQUEST,
})

export const submitVoteSuccess = (id, voteType) => {
  localStorage.setItem(id, voteType)

  return {
    type: SUBMIT_VOTE_SUCCESS,
    voteSuccess: true,
  }
}

export const submitVoteFailure = () => ({
  // localStorage.removeItem(id)
  type: SUBMIT_VOTE_FAILURE,
  voteSuccess: false,
})
