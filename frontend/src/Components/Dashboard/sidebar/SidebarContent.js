import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends PureComponent {  
    hideSidebar = () => {
        this.props.onClick();
    };
  
  render() {
    return (
        <div className='sidebar__content'>
            <ul className='sidebar__block'>
                <SidebarLink title='Dashboard' icon='Dashboard' route='/dashboard' onClick={this.hideSidebar}/>
                <SidebarLink title='Create user' icon='My_Assessments' route='/create' onClick={this.hideSidebar}/>
                <SidebarLink title='Users list' icon='My_Reports' route='/users' onClick={this.hideSidebar}/>
            </ul>
        </div>
    )
  }
}

export default connect()(SidebarContent);