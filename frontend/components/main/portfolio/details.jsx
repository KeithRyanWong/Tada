import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.renderProfile = this.renderProfilePicture.bind(this);
    this.renderProfileDetails = this.renderProfileDetails.bind(this);
  }

  renderProfilePicture() {
    let { user } = this.props;
    if (user) {
      return (
          <img src={`http://res.cloudinary.com/krwappacademy/image/upload/c_fill,g_face,h_300,r_180,w_300/v1500847155/${user.image_url}.png`} className='portfolio-picture'/>
      );
    }
  }

  renderProfileDetails() {
    let { user } = this.props;
    if (user) {
      return (
          <div className='portfolio-details'>
            <p>
              {user.first_name + ' ' + user.last_name}
            </p>
            {/* <div>
              {user.bio}
            </div> */}
          </div>
      );
    }
  }

  render() {
    return(
      <div className='portfolio-details-container'>
        {this.renderProfilePicture()}
        {this.renderProfileDetails()}
      </div>
    );
  }
}

export default Details;