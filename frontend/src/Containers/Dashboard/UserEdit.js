import UserEditComponent from '../../Components/Dashboard/Main/UserEdit';
import { connect } from 'react-redux';
import { createUser, getUserDetails, updateUserDetails } from '../../Actions/UserActions';

const mapStateToProps = (state) => {
    return {
        userDetail: state.AppReducer.userDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (userData) => dispatch(createUser(userData)),
        getUserDetails: (userId) => dispatch(getUserDetails(userId)),
        updateUserDetails: (userData) => dispatch(updateUserDetails(userData))
    }
}

const UserEdit = connect (
    mapStateToProps,
    mapDispatchToProps
) (UserEditComponent)

export default UserEdit