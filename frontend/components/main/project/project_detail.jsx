import React from 'react';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    
    this.redirectToProfile = this.redirectToProfile.bind(this);
  }

  redirectToProfile(id) {
    return (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('id: ', id);

        this.props.history.push(`/user/${id}`);
    };
  }

  render() {
    console.log('artist: ', this.props.artist);
    return (
      <div className="project-detail-container">
        <div className="project-detail">
          {/* <div className="project-detail-left project-detail-component">
            <span><img src="http://res.cloudinary.com/krwappacademy/image/upload/c_scale,h_20/v1503368949/eye_lhddii.png"
            /></span>
            <span><img src="http://res.cloudinary.com/krwappacademy/image/upload/c_scale,h_20/v1503368949/message_n0u23n.png" className="project-detail-message-icon"/></span>
            <span>star</span>
            <span>tags</span>
          </div> */}
          <div className="project-detail-middle project-detail-component">
            <h3>{this.props.project.title}</h3>
          </div>
          <div className="project-detail-right project-detail-component">
            <span>Artist: </span>
            <img src={`http://res.cloudinary.com/krwappacademy/image/upload/w_40,h_40,c_thumb,g_face,r_180/${this.props.artist.image_url}.png`} className="comment-user-pic" onClick={this.redirectToProfile(this.props.artist.id)}/>
            <span>{this.props.artist.first_name} {this.props.artist.last_name}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;