import { connect } from 'react-redux';
import LoginComponent from '../Components/Login';
import { userLogin } from '../Actions/Login'

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (userData) => dispatch(userLogin(userData))
    }
}

const Login = connect(
    null,
    mapDispatchToProps
)(LoginComponent)

export default Login;