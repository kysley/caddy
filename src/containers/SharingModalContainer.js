import { connect } from 'react-redux'

import SharingModal from '../components/SharingModal'
import { closeSharingModal } from '../actions/question'

const mapStateToProps = state => ({ ...state.question })

const mapDispatchToProps = dispatch => ({
  closeSharingModal() {
    dispatch(closeSharingModal())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SharingModal)
