import React, {PureComponent} from 'react';
import { Route, Switch } from 'react-router-dom';
import Topbar from './topbar/Topbar';
import Sidebar from './sidebar/Sidebar';
import Loadable from 'react-loadable';
import Loading from '../Loading';
import DashboardContainer from './dashboard';

const loadableUserList = Loadable({
  loader: () => import('../../Containers/Dashboard/UserList'),
  loading: Loading
})

const loadableUserView = Loadable({
  loader: () => import('../../Containers/Dashboard/UserEdit'),
  loading: Loading
})

const loadableUserEdit = Loadable({
  loader: () => import('../../Containers/Dashboard/UserEdit'),
  loading: Loading
})


export default class Dashboard extends PureComponent {
    render() {
        return (
        <div className={this.props.sidebar.collapse ? 'wrapper wrapper--full-width' : 'wrapper'} style={{ backgroundColor :  "#adb5bd2b" }}>
            <div>
            <Topbar userLogout={this.props.userLogout}/>
            <Sidebar/>
            <div className='container__wrap'>
                <div className="container">
                <Switch>
                    <Route exact path='/' component={DashboardContainer}/>
                    <Route path='/dashboard' component={DashboardContainer}/>
                    <Route path='/create' component={loadableUserEdit}/>
                    <Route exact path='/users' component={loadableUserList}/>
                    <Route path='/users/:id' component={loadableUserView}/>
                </Switch>
                </div>
            </div>
        </div>
        </div>
        )
    }
}
