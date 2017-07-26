import React from 'react';
import DetailsContainer from './details_container';
import UserAndFollowsContainer from './user_and_follows_container';

class PortfolioView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      projectsShown: 'user'
    };
  }

  switchView(e) {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      projectsShown: 'follows'
    });
  }

  render(){
    let { currentUserm, userProjects, followedProjects } = this.props;
    let projectsShown = this.state.projectsShown;
    return (
      <div className="portfolio-view-wrapper">
         <DetailsContainer /> 
        {/* 2 buttons with onClick={switchView} */}
        <UserAndFollowsContainer projects={ projectsShown === 'user' ? userProjects : followedProjects }/>  
      </div>
    );
  }
}

export default PortfolioView;