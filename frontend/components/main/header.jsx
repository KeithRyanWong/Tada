import React from 'react';
import AuthContainer from '../session/auth_form_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }
  
  render() {
    const authComponent = this.props.currentUser.id ? 
    <button onClick={this.handleLogout}>Logout</button> :
    <AuthContainer action={"Sign in"}/>;
    
    const signUpComponent = this.props.currentUser.id ? 
      <button>Create Project</button> :
      <AuthContainer action={"Sign up"}/>;
    return (
      <div className="header-container">
        <div className='header'>
          <div className='header-section left'>
            <img src="http://res.cloudinary.com/krwappacademy/image/upload/c_scale,w_40/v1500587178/whitelogo_tbugdt.png" />
            {/* <img className='header-content logo' src="./logo.png"/>
            <img className='header-content logo2' src="./logo2.png"/> */}
          </div>
          <div className='header-section middle'>
            {/* <div className='header-content'>Activity</div>
            <div className='header-content'>Galleries</div>
            <div className='header-content'>signup</div> */}
            <div className='header-content'>
              {signUpComponent}
            </div>
          </div>
          <div className='header-section right'>
            {/* <div className='header-content'>search-link</div>*/}
            <div className='header-content'>
              {authComponent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;