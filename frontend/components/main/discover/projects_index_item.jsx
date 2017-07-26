import React from 'react';
import ProjectModal from '../project/project_modal';

class ProjectsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    const {items, project} = this.props;
    return (
      <div >
        <ProjectModal project={project} items={items}/>
      </div>
    );
  }
}

export default ProjectsIndexItem;