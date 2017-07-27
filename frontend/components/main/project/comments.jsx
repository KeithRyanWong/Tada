import React from 'react';
import CommentForm from './comment_form_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestComments(this.props.projectId);
  }

  render() {
    let { currentUser, users } = this.props.state;
    let { comments } = this.props;
    //array of comment objects
    console.log('rendering', comments);


    return (
      <div className="comments-section">
        
        <CommentForm />
        <div className="comment-items-container">
          <ul className="comment-list">
            {comments.map(
              (comment) => 
                <li key={comment.id}>
                  <img src={`http://res.cloudinary.com/krwappacademy/image/upload/w_40,h_40,c_thumb,g_face,r_180/${users.byId[comment.user_id].image_url}.png`}/>
                  {comment.body}
                </li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Comments;