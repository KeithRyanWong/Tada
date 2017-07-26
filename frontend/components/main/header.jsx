import React from 'react';
import AuthContainer from '../session/auth_form_container';
import CurrentUserContainer from '../session/current_user_container';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.hideForms = this.hideForms.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }
  // <div className="sign-in-link" onClick={this.handleLogout}>Logout</div> :
  hideForms(e) {
    e.preventDefault();
    e.stopPropagation();

    let signInLinks = document.getElementsByClassName('sign-in-link');
    Array.prototype.forEach.call(signInLinks, (link) => {
      let newClassName = link.className;
      newClassName = newClassName.split(' ').filter((name) => (name !== 'show')).join(' ');
      link.className = newClassName;
    });

    let favicon = document.getElementsByClassName('pf-favicon');
    Array.prototype.forEach.call(favicon, (fav) => {
      let newClassName = fav.className;
      newClassName = newClassName.split(' ').filter((name) => (name !== 'show')).join(' ');
      fav.className = newClassName;
    });

    let errorSpans = document.getElementsByClassName('formErrors');
    Array.prototype.forEach.call(errorSpans, (el) => {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
    });
  }

  render() {
    const authComponent = this.props.currentUser.id ? <CurrentUserContainer/>: <AuthContainer action={"Sign In"}/>;
    
    const signUpComponent = this.props.currentUser.id ? 
      <button>Create Project</button> :
      <AuthContainer action={"Sign Up"}/>;
    return (
      <div className="header-container" onClick={this.hideForms}>
        <div className='header'>
          <div className='header-section left'>
            <div className='header-content'>
              <Link to='/'>
                <img src="http://res.cloudinary.com/krwappacademy/image/upload/c_scale,w_40/v1500587178/whitelogo_tbugdt.png" />
                <img className="logo2" src="http://res.cloudinary.com/krwappacademy/image/upload/c_scale,h_37/v1500587279/WhiteLogo2_gxrer6.png"/>
              </Link>
            </div>
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