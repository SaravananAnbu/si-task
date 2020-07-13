import React, {PureComponent} from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import TopbarMenuLink from './TopbarMenuLink';
import {Collapse} from 'reactstrap';

//const Ava = process.env.PUBLIC_URL + '/img/ava.png';

export default class TopbarProfile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.userLogout()
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  render() {
    return (
      <div className='topbar__profile'>
        <div className='topbar__avatar' onClick={this.toggle}>
          {/* <img className='topbar__avatar-img' src={} alt='avatar'/> */}
          <p className='topbar__avatar-name'>John Doe</p>
          <DownIcon className='topbar__icon'/>
        </div>
        {this.state.collapse && <div className='topbar__back' onClick={this.toggle}/>}
        <Collapse isOpen={this.state.collapse} className='topbar__menu-wrap'>
          <div className='topbar__menu'>
            <div className='topbar__link'>
              <button className='topbar__link-title' onClick={this.logout} style={{ background: 'none', border: 'none' }}>Logout</button>
            </div>
          </div>
        </Collapse>
      </div>
    )
  }
}
