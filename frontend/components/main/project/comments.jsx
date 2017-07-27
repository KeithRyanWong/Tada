import React from 'react';
import CommentForm from './comment_form_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.getDate = this.getDate.bind(this);
  }

  componentWillMount() {
    this.props.requestComments(this.props.projectId);
  }

  getDate(datestr) {
    const date = new Date(datestr);
    const today = new Date();
    const diff = today.getTime() - date.getTime();
    let elapsedTime = Math.floor(diff / (1000 * 60 * 60 * 24));
    return elapsedTime > 0 ? `\u00B7 ${elapsedTime} days ago` :
    "\u00B7 Today";
  }

  render() {
    let { currentUser, users } = this.props.state;
    let { comments } = this.props;
    //array of comment objects
    console.log('rendering', comments);


    return (
      <div className="comments-section">
        
        <CommentForm projectId={this.props.projectId} count={comments.length}/>
        <div className="comment-items-container">
          <ul className="comment-list">
            {comments.map(
              (comment) => 
                <li key={comment.id}>
                  <img src={`http://res.cloudinary.com/krwappacademy/image/upload/w_40,h_40,c_thumb,g_face,r_180/${users.byId[comment.user_id].image_url}.png`} className="comment-user-pic"/>
                  <div>
                    <div>
                      <span>
                        {users.byId[comment.user_id].first_name} {users.byId[comment.user_id].last_name}
                      </span>
                      <span> {this.getDate(comment.createdAt)}
                      </span>
                    </div>
                    <div>
                      {comment.body}
                    </div>
                  </div>
                </li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Comments;