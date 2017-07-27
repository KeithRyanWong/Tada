import React from 'react';
import CommentForm from './comment_form_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentWillMount() {
  }

  render() {

    return (
      <div className="comments-section">
        <div className="comment-count">
          Comments ({10})
        </div>
        <CommentForm />
        <div className="comment-items-container">
          <ul className="comment-list">
            <li>Comment1</li>
            <li>Comment2</li>
            <li>Comment3</li>
            <li>Comment4</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Comments;