import UserListComponent from '../../Components/Dashboard/Main/UserList';
import { fetchUserList, deleteUser, searchUser } from '../../Actions/UserActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        userList: state.AppReducer.userList,
        userListCount: state.AppReducer.userListCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchUser: (searchString, page, limit) => dispatch(searchUser(searchString, page, limit)),
        fetchUserList: (page, limit) => dispatch(fetchUserList(page, limit)),
        deleteUser: (userId) => dispatch(deleteUser(userId))
    }
}

const UserList = connect(
    mapStateToProps,
    mapDispatchToProps
) (UserListComponent)

export default UserList;