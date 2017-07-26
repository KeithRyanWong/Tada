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
    let { currentUser } = this.props;
    return (
      <div>
        {/* <DetailsContainer /> */}
        {/* 2 buttons with onClick={switchView} */}
         {/* <UserAndFollowsContainer />  */}
        hello
      </div>
    );
  }
}

export default PortfolioView;