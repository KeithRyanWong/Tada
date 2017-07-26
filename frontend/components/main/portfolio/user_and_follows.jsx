import React from 'react';
import ProjectsIndexItem from '../discover/projects_index_item_container';

class UserAndFollows extends React.Component {
  constructor(props) {
    super(props);
  }
   
  render() {
    let { projects } = this.props;
    return(
        <div className='portfolio-projects-index-item-container'>
          <div className="portfolio-project-control">
            <button>User projects</button>
            <button>Followed projects</button>
          </div>
          <div className="portfolio-index-items-container">
            {projects.map((project) => (<ProjectsIndexItem key={project.id} project={project}/>))}
          </div> 
        </div>
    );
  }
}

export default UserAndFollows;