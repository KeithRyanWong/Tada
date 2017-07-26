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
        <img src={`http://res.cloudinary.com/krwappacademy/image/upload/w_40,h_40, g_face,r_180/${user.image_url}.png`}/>
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