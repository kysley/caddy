import { connect } from 'react-redux'

import Header from '../components/Header'
import { openSharingModal } from '../actions/question'

const mapStateToProps = state => ({ ...state.question })

const mapDispatchToProps = dispatch => ({
  openSharingModal() {
    dispatch(openSharingModal())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
