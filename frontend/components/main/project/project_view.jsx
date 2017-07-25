import React from 'react';

class ProjectView extends React.Component {
  constructor(props){
    super(props)
    this.project = props.project;
    this.items = props.items;

  }

  render() {
    console.log(this.items);
    return(
      <div>
        <ul>
          
        </ul>
      </div>
    );
  }
}

export default ProjectView;