import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.renderProfile = this.renderProfile.bind(this);
  }

  renderProfile() {
    console.log(this.props);
    let { user } = this.props;


    if (user) {
      return (
        <img src={`http://res.cloudinary.com/krwappacademy/image/upload/c_fill,g_face,h_300,r_180,w_300/v1500847155/${user.image_url}.png`}/>
      );
    } else {
      return (
        <div>Hi</div>
      );
    }
  }

  render() {
    return(
      <div className='portfolio-details-container'>
        { this.renderProfile()} 
      </div>
    );
  }
}

export default Details;