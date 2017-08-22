import React from 'react';

class ProjectDetail extends React.Component {
  render() {
    return (
      <div className="project-detail-container">
        <div className="project-detail">
          <div className="project-detail-left">
            <span><img src="http://res.cloudinary.com/krwappacademy/image/upload/c_scale,h_20/v1503368949/eye_lhddii.png"
            />Views</span>
            <span><img src="http://res.cloudinary.com/krwappacademy/image/upload/c_scale,h_20/v1503368949/message_n0u23n.png" />comments</span>
          </div>
          <div className="project-detail-middle">
            <h3>{this.props.project.title}</h3>
            By: {this.props.artist.first_name} {this.props.artist.last_name}
          </div>
          <div className="project-detail-right">
            <span>star</span>
            <span>tags</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;