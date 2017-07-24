import React from 'react';

class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = props.currentUser;
  }

  componentDidMount() {
    const vids = document.getElementsByClassName("splashvid");
    Array.prototype.forEach.call(vids, (vid) => {
      vid.play();
    });
  }

  render() {
    let splash = this.currentUser ? null : <div>
      <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" className="splashvid" autoplay loop>
        <source src="http://res.cloudinary.com/krwappacademy/video/upload/ac_none,c_scale,h_300,q_100,vc_auto,w_1920/v1500858823/loop.mp4" />
        <source src="http://res.cloudinary.com/krwappacademy/video/upload/ac_none,c_fill,h_300,q_100,vc_auto,w_1920/v1500858823/loop.webm" />
        </video>
        <div className="splash-text">Showcase & Discover<br />Creative Work</div>
    </div>;
    return(
      <div className='content-container'>
        <div className='splash-container'>
          {splash}
        </div>
      </div>
    );
  }
}

export default ProjectsIndex;