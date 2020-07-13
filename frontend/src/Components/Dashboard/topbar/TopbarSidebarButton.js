import React, {PureComponent} from 'react';
import {changeSidebarVisibility, changeMobileSidebarVisibility} from '../../../Actions/sidebarActions';
import {connect} from 'react-redux';

const icon = '/images/burger.svg';

class TopbarSidebarButton extends PureComponent {
  
  changeSidebarVisibility = () => {
    this.props.dispatch(changeSidebarVisibility());
  };
  
  changeMobileSidebarVisibility = () => {
    this.props.dispatch(changeMobileSidebarVisibility());
  };
  
  render() {
    return (
      <div>
        <button className='topbar__button topbar__button--desktop' onClick={this.changeSidebarVisibility}>
          <img src={icon} alt='' className='topbar__button-icon'/>
        </button>
        <button className='topbar__button topbar__button--mobile' onClick={this.changeMobileSidebarVisibility}>
          <img src={icon} alt='' className='topbar__button-icon'/>
        </button>
      </div>
    )
  }
}

export default connect(state => {
  return {sidebar: state.SideBarReducer};
})(TopbarSidebarButton);
