import React from 'react';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '',
                   first_name: '',
                   last_name: '',
                   email: '',
                   password: '',
                   image_url: ''
    }; 

    this.submitAction = props.action === 'Sign in' ? props.login : props.signup;

    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  
  componentDidMount() {
    this.addClickEventToLink();
  }
  
  
  // }
  
  update(field) {
    return e => {
      e.preventDefault();
      this.setState( {[field]: e.target.value });
    };
  }
  
  submit(e) {
    e.preventDefault();
    this.submitAction(this.state);
    this.setState(this.state = { username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    image_url: ''
  });
}

render() {
  const {username, firstName, lastName, email, password, img_url} = this.state;
  
  if (this.props.action === 'Sign in') {
    return (
      <div>
        <div id='sign-in' className="sign-in-link">Sign in
          <div className="drop-down-authform-container">
            <div className="dropdown">
              <form className="authform">
                <input type="text" onChange={this.update('username')} placeholder="username" value={username}/>
                <input type="text" onChange={this.update('password')} placeholder="password" value={password}/>
                <button className="submit">{this.props.action} </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

// return (
  //   <div>
  //     <button id='sign-in' className='sign-in-link'>Sign up</button>
  //     <div className="drop-down-authform-container">
  //       <div className="dropdown">
  //         <form className="authform">
  //           <input type="text" onChange={this.update('username')} placeholder="username" value={username}/>
  //           <input type="text" onChange={this.update('firstName')} placeholder="First Name" value={firstName}/>
  //           <input type="text" onChange={this.update('lastName')} placeholder="Last Name" value={lastName}/>
  //           <input type="text" onChange={this.update('email')} placeholder="email" value={email}/>
  //           <input type="text" onChange={this.update('password')} placeholder="password" value={password}/>
  //           <input type="text" onChange={this.update('img_url')} placeholder="img_url" value={img_url}/>
  //           <button onClick={this.submit}>{this.props.action}}</button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
  }
  
  addClickEventToLink() {
    document.getElementById("sign-in").addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      let currentClass = event.currentTarget.className;
      event.currentTarget.className = 'show';
      if (event.target.className.includes('submit')){
        this.submit(event);
        this.setState(this.state = { username: '',
                                first_name: '',
                                last_name: '',
                                email: '',
                                password: '',
                                image_url: ''
                                });
        document.getElementById("sign-in").className = '';
      }
    });
    
    //handle clicking outside of form
    document.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.className !== "drop-down-authform-container" && 
          event.target.className !== "sign-in-link") {
        
        document.getElementById("sign-in").className = '';

        this.setState(this.state = { username: '',
                                first_name: '',
                                last_name: '',
                                email: '',
                                password: '',
                                image_url: ''
                                });
      }
    });
    
  }
}

export default AuthForm;