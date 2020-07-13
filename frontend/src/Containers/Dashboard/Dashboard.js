import DashboardComponent from '../../Components/Dashboard/index';
import { connect } from 'react-redux';
import { userLogout } from '../../Actions/Login';

const mapStateToProps = (state) => {
    return {
        sidebar: state.SideBarReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => dispatch(userLogout())
    }
}

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
) (DashboardComponent)

export default Dashboard;