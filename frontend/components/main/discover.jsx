import React from 'react';
//header container
import HeaderContainer from './header_container';

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.activateClickOut = this.activateClickOut.bind(this);
  }

  activateClickOut(e) {
    event.preventDefault();
    event.stopPropagation();
    this.hideForms();
  }

  hideForms() {
    let signInLinks = document.getElementsByClassName('sign-in-link');
    Array.prototype.forEach.call(signInLinks, (link) => {
      let newClassName = link.className;
      newClassName = newClassName.split(' ').filter((name) => (name !== 'show')).join(' ');
      link.className = newClassName;
    });
  }

  render() {
    return (
      <div className="grid-container" onClick={this.activateClickOut}>
        <HeaderContainer />
        {/* <div style={ {height: '900px' }}></div> */}
      </div>
    );
  }
}

export default Discover;