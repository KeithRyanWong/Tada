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
    console.log(this.props);
    const authComponent = this.props.currentUser.id ? 
      <button onClick={this.handleLogout}>Logout</button> :
      <AuthContainer action={"Sign in"}/>;


    return (
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
              {authComponent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const Header = ({ store }) => (
//   <div className="header-container">
//     <div className='header'>
//       <div className='header-section left'>
//         {/* <img className='header-content logo' src="./logo.png"/>
//         <img className='header-content logo2' src="./logo2.png"/> */}
//       </div>
//       <div className='header-section middle'>
//         {/* <div className='header-content'>Activity</div>
//         <div className='header-content'>Galleries</div>
//         <div className='header-content'>signup</div> */}
//       </div>
//       <div className='header-section right'>
//         {/* <div className='header-content'>search-link</div>*/}
//         <div className='header-content'>
//           <AuthContainer store={store} action={"Sign in"}/>
//         </div>
//       </div>
//     </div>
//   </div>
// );

export default Header;