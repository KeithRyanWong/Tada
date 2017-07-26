import React from 'react';
import ProjectsIndexItem from '../discover/projects_index_item_container';

class UserAndFollows extends React.Component {
  constructor(props) {
    super(props);
  }
   
  render() {
    let { projects } = this.props;
    return(
      <div>
        <div className={`explore-projects-index-item-container`}>
           <div className="projects-index-item-container">
            {projects.map((project) => (<ProjectsIndexItem key={project.id} project={project}/>))}
          </div> 
        </div>
      </div>
    );
  }
}

export default UserAndFollows;