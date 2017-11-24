import { connect } from 'react-redux'

import ContinueModal from '../components/ContinueModal'
import { closeContinueModal } from '../actions/question'

const mapStateToProps = state => ({ ...state.question })

const mapDispatchToProps = dispatch => ({
  closeContinueModal() {
    dispatch(closeContinueModal())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ContinueModal)
