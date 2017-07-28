import React from 'react';
import DetailsContainer from './details_container';
import UserAndFollowsContainer from './user_and_follows_container';

class PortfolioView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      projectsShown: 'user'
    };
    this.switchView = this.switchView.bind(this);
  }

  switchView(e) {
    e.preventDefault();
    e.stopPropagation();

    const state = this.state.projectsShown === 'user' ? 'follows' : 'user';

    this.setState({
      projectsShown: state
    });
  }

  render() {
    let { currentUser, userProjects, starredProjects } = this.props;
    let projectsShown = this.state.projectsShown;
    let profileId = this.props.match.params.id;
    return (
      <div className="portfolio-view-wrapper">
        <DetailsContainer profileId={profileId}/> 
        <div className='portfolio-projects-index-item-container'>
          <div className="portfolio-project-control">
            <button onClick={this.switchView}>User projects</button>
            <button onClick={this.switchView}>Starred projects</button>
          </div>
          <UserAndFollowsContainer projects={ projectsShown === 'user' ? userProjects : starredProjects }/>  
        </div>
      </div>
    );
  }
}

export default PortfolioView;