import React from 'react';
import CommentForm from './comment_form_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentWillMount() {
  }

  render() {
    let { currentUser } = this.props;
    return (
      <div className="comments-section">
        
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