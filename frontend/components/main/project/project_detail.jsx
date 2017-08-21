import React from 'react';

class ProjectDetail extends React.Component {
  render() {
    return (
      <div className="project-detail">
        <span>Views</span>
        <span>comments</span>
        <h3>{this.props.project.title}</h3>
        By: {this.props.artist.first_name} {this.props.artist.last_name}
        <span>star</span>
        <span>tags</span>
      </div>
    );
  }
}

export default ProjectDetail;