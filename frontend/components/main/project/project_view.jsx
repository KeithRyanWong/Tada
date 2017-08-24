import React from 'react';
import CommentsContainer from './comments_container';
import ProjectDetailContainer from './project_detail_container';

class ProjectView extends React.Component {
  constructor(props){
    super(props);

    this.toggleLike = this.toggleLike.bind(this);
    this.like = this.props.likeProject;
    this.unlike = this.props.unlikeProject;
    this.requestUser = this.props.requestUser;
    this.endOfContent = this.endOfContent.bind(this);
  }

  componentWillMount() {
    const { project } = this.props;
    this.requestUser(project.user_id);
  }
  componentDidMount() {
    document.getElementsByClassName('modal-content')[0]
      .parentElement
      .onscroll = (e) => {
        if (this.endOfContent()) {
          const projectHeader = document.getElementsByClassName('project-detail')[0];
          let className = projectHeader.className
            .split(' ')
            .filter((word) => word != 'hide')
            .concat(['hide'])
            .join(' ');
          projectHeader.className = className;

        } else {
          const projectHeader = document.getElementsByClassName('project-detail')[0];
          let className = projectHeader.className
            .split(' ')
            .filter((word) => word != 'hide');
          projectHeader.className = className;
        }
      };
  }

  endOfContent() {
    const projectHeader = document.getElementsByClassName('project-detail')[0].getBoundingClientRect();
    const projectItemsList = document.getElementsByClassName('project-items-list')[0].getBoundingClientRect();
    
    if (projectHeader.bottom > projectItemsList.bottom)
      return true;

    return false;
  }

  toggleLike(e) {
    e.preventDefault();
    e.stopPropagation();

    const { project } = this.props;
    const { currentUser } = this.props.state;
    if (!currentUser.id || project.user_id === currentUser.id) {
      document.getElementsByClassName('star-text')[0].innerHTML = "Please log in";
      return;
    } else if (project.likes.includes(currentUser.id)) {
      this.unlike(project.id);
    } else {
      this.like(project.id);
    }
  }

  render() {
    const { currentUser } = this.props.state;
    const { project, items } = this.props;
    
    return(
      <div className='modal-content'>
        <ProjectDetailContainer 
          artist={project.user_id} 
          project={project}
        />
        <ul className="project-items-list">
          {items.map((item) => (
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
            className={`like-button ${project.likes.includes(currentUser.id) ? 'liked' : 'unliked'}`} 
            onClick={this.toggleLike}
          />
          <div className="star-text">Give this a star!</div>
        </div>
        <CommentsContainer projectId={project.id}/>
      </div>
    );
  }
}

export default ProjectView;

