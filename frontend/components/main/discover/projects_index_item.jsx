import React from 'react';
import ExampleApp from '../project/project_modal';

class ProjectsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log(this.props);
  }
  
  render() {
    const {items, project} = this.props;
    return (
      <div className="projects-index-item">
        <img src={`http://res.cloudinary.com/krwappacademy/image/upload/c_thumb,h_200,w_200/v1500849204/${items[project.splash_id].source_url}.png`} /> 
        <span>{project.title}</span>
        <button onClick={this.handleClick}>click!</button>
      </div>
    );
  }
}

export default ProjectsIndexItem;