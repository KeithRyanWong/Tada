import React from 'react';

class ProjectView extends React.Component {
  constructor(props){
    super(props)
    this.project = props.project;
    this.items = props.items;

  }
  
  render() {
    return(
      <div>
        <ul>
          {this.items.map((item) => (
            <li key={item.id} className='project-item'>
              {item.source_type === 'png' ? (<img src={`http://res.cloudinary.com/krwappacademy/image/upload/c_fill,q_auto:best,w_1100/v1500849204/${item.source_url}.png`} />) : (<p>This is a vid</p>)}
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProjectView;