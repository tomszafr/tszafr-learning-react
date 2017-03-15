import Home from './Home.jsx'
import { connect } from 'react-redux'
import { loadText } from './../actions'

const mapStateToProps = (state) => {
  return {
    textContent: state.textContent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveText: (text) => {
      dispatch(loadText(text))
    }
  }
}

const TextSaveHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default TextSaveHome
