import React from 'react';
import ProjectsIndexItem from '../discover/projects_index_item_container';

class UserAndFollows extends React.Component {
  constructor(props) {
    super(props);
  }
   
  render() {
    let { projects } = this.props;
    console.log('HELLLOOO', this.props);
    return(
      <div className="portfolio-projects-index-container">
        <div className={`explore-projects-index-item-container`}>
           <div className="portfolio-index-items-container">
            {projects.map((project) => (<ProjectsIndexItem key={project.id} project={project}/>))}
          </div> 
        </div>
      </div>
    );
  }
}

export default UserAndFollows;