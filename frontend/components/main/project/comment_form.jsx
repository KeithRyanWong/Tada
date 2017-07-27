import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      body: '',
      project_id: this.props.projectId
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToProfile = this.redirectToProfile.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({body: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.props.currentUser.id) {
      event.target.innerHTML = "Must be logged in";
      return;
    } 
    this.props.submitComment(this.state);
    this.setState({
      body: ''
    });
  }
  
  redirectToProfile(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.history.push(`/user/${this.props.currentUser.id}`);
  }


  render() {
    let { currentUser } = this.props;
    return (
      <div className="comment-form-container">
        <div className="comment-count">
          Comments ({this.props.count})
        </div>
        <div className="current-user-thumbnail" onClick={this.redirectToProfile}>
          <img src={ currentUser.id ?`http://res.cloudinary.com/krwappacademy/image/upload/w_80,h_80,c_fill,g_face,r_180/${currentUser.image_url}.png` : "http://res.cloudinary.com/krwappacademy/image/upload/w_80,h_80,c_fill,r_180/PlaceholderPic_nq0s9d.png"}/>
        </div>
        <textarea value={this.state.body} placeholder="Liked what you saw? Leave a comment!" className='comment-form' onChange={this.handleChange} />
        <button onClick={this.handleSubmit} id="commentPostButton">Post a Comment</button>
      </div>
    );
  }
}

export default CommentForm;