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
  }

  handleChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({body: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitComment(this.state);
  }
  
  render() {
    let { currentUser } = this.props;
    return (
      <div className="comment-form-container">
        <div className="comment-count">
          Comments ({10})
        </div>
        <div className="current-user-thumbnail">
          <img src={ currentUser.id ?`http://res.cloudinary.com/krwappacademy/image/upload/w_80,h_80,c_fill,g_face,r_180/${currentUser.image_url}.png` : "http://res.cloudinary.com/krwappacademy/image/upload/w_80,h_80,c_fill,r_180/PlaceholderPic_nq0s9d.png"}/>
        </div>
        <textarea value={this.state.comment} placeholder="Liked what you saw? Leave a comment!" className='comment-form' onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Post a Comment</button>
      </div>
    );
  }
}

export default CommentForm;