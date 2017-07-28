import React from 'react';
import CommentsContainer from './comments_container';

class ProjectView extends React.Component {
  constructor(props){
    super(props);
    this.project = props.project;
    this.items = props.items;

  }

  render() {
    return(
      <div className='modal-content'>
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
        <CommentsContainer projectId={this.project.id}/>
      </div>
    );
  }
}

export default ProjectView;

