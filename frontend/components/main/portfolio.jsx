import React from 'react';
import HeaderContainer from './header_container';
import PortfolioViewContainer from './portfolio/portfolio_view_container';


class Portfolio extends React.Component{
  constructor(props) {
    super(props);

    this.activateClickOut = this.activateClickOut.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.match.params.id);
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

    return(
      <div className="portfolio-grid-container" onClick={this.activateClickOut}>
        <HeaderContainer />
        <PortfolioViewContainer />  
      </div>
    );
  }
}

export default Portfolio;