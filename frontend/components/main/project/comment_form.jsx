import React from 'react';


class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({comment: event.target.value});
  }

  handleSubmit(event) {
    console.log(`Submitting ${this.state.comment}`)
    event.preventDefault();
  }
  
  render() {
    return (
      <div className="comment-form-container">
        <textarea value={this.state.comment} placeholder="Liked what you saw? Leave a comment!" className='comment-form' onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Post a Comment</button>
      </div>
    );
  }
}

export default CommentForm;