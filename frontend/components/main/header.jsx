import React from 'react';
import AuthContainer from '../session/auth_form_container';

const Header = ({ store }) => (
  <div className="header-container">
    <div className='header'>
      <div className='header-section left'>
        {/* <img className='header-content logo' src="./logo.png"/>
        <img className='header-content logo2' src="./logo2.png"/> */}
      </div>
      <div className='header-section middle'>
        {/* <div className='header-content'>Activity</div>
        <div className='header-content'>Galleries</div>
        <div className='header-content'>signup</div> */}
      </div>
      <div className='header-section right'>
        {/* <div className='header-content'>search-link</div>*/}
        <div className='header-content'>
          <AuthContainer store={store} action={"Sign in"}/>
        </div>
      </div>
    </div>
  </div>
);

export default Header;