import React from 'react';
import CommentsContainer from './comments_container';
import ProjectDetailContainer from './project_detail_container';

class ProjectView extends React.Component {
  constructor(props){
    super(props);
    this.project = props.project;
    this.items = props.items;

    this.toggleLike = this.toggleLike.bind(this);
    this.like = this.props.likeProject;
    this.unlike = this.props.unlikeProject;
    this.requestUser = this.props.requestUser;
  }

  componentWillMount() {
    this.requestUser(this.project.user_id);
  }

  toggleLike(e) {
    e.preventDefault();
    e.stopPropagation();
    const { currentUser } = this.props.state;
    if (!currentUser.id || this.project.user_id === currentUser.id) {
      return;
    } else if (this.project.likes.includes(currentUser.id)) {
      this.unlike(this.project.id);
    } else {
      this.like(this.project.id);
    }
  }

  render() {
    const { currentUser } = this.props.state;
    return(
      <div className='modal-content'>
        <ProjectDetailContainer 
          artist={this.project.user_id} 
          project={this.project}
        />
        <ul>
          {this.items.map((item) => (
            <li key={item.id} className='project-item'>
              {item.source_type === 'png' ? (<img src={`http://res.cloudinary.com/krwappacademy/image/upload/c_fill,q_auto:best,w_1100/v1500849204/${item.source_url}.png`} />) : (<video className="splashvid" autoPlay loop>
                  <source src={`http://res.cloudinary.com/krwappacademy/video/upload/c_fill,w_1100/v1500849831/${item.source_url}.webm`} />
                  </video>)}
              {/* <p>{item.description}</p> 
                MAKE A TEXT ITEM
                */}
            </li>
          ))}
        </ul>
        <div className="like-button-container">
          <img src="http://res.cloudinary.com/krwappacademy/image/upload/q_100/v1501203052/if_star_1054969_1_dd8vwk.png" 
            className={`like-button ${this.project.likes.includes(currentUser.id) ? 'liked' : 'unliked'}`} 
            onClick={this.toggleLike}
          />
          Give this a star!
        </div>
        <CommentsContainer projectId={this.project.id}/>
      </div>
    );
  }
}

export default ProjectView;

