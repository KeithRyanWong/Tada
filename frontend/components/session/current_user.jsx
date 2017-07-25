import React from 'react';


class CurrentUser extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = props.currentUser;
    this.openMenu = this.openMenu.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.redirectToProfile = this.redirectToProfile.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  openMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!e.currentTarget.className.includes('show')) {
      e.currentTarget.className += ' show';
    }
  }

  redirectToProfile(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.history.push(`/user/${this.props.currentUser.id}`);
  }

  render() {
    let {image_url} = this.currentUser;
    let fullImageURL = image_url ? `http://res.cloudinary.com/krwappacademy/image/upload/w_40,h_40,c_thumb,g_face,r_180/${image_url}.png` : 'http://res.cloudinary.com/krwappacademy/image/upload/w_40,h_40,c_thumb,r_180/pfplaceholder_x0apvb.png';

    return (
      <div onClick={this.openMenu} className="pf-favicon">
        <img src={fullImageURL}  />
        <div className="pf-menu-container">
          <div onClick={this.redirectToProfile}>View Profile</div>
          <div onClick={this.handleLogout}>Logout</div>
        </div>
      </div>
    );
  }
}

export default CurrentUser;