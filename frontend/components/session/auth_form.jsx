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
    this.activateSignInLink = this.activateSignInLink.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
  }


  activateSignInLink(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!event.currentTarget.className.includes('show')) {
      event.currentTarget.className += ' show';
    }
  }


  
  hideForms() {
    let signInLinks = document.getElementsByClassName('sign-in-link');
    Array.prototype.forEach.call(signInLinks, (link) => {
      let newClassName = link.className;
      newClassName = newClassName.split(' ').filter((name) => (name !== 'show')).join(' ');
      link.className = newClassName;
    });
  }
  
  update(field) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      this.setState( {[field]: e.target.value });
    };
  }
  
  submit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.submitAction(this.state);
    this.hideForms();
    this.setState({ username: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    image_url: ''
                  }); 
  }

  loginGuest(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.login({
      username: 'KRWong12',
      password: 'thisisapass'
    });
    this.hideForms();
    this.setState({ username: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    image_url: ''
                  }); 
  }

render() {
  const {username, first_name, last_name, email, password, img_url} = this.state;
  
  if (this.props.action === 'Sign in') {
    return (
      <div>
        <div onClick={this.activateSignInLink} className="sign-in-link">Sign In
          <div className="drop-down-authform-container">

              <form className="sign-in-form">
                <span className="formTitle">Sign In</span>
                <input type="text" onChange={this.update('username')} placeholder="Username" value={username}/>
                <input type="password" onChange={this.update('password')} placeholder="Password" value={password}/>
                <button onClick={this.submit} className="submit">{this.props.action} </button>
                <button onClick={this.loginGuest} className="submit">Guest Login</button>
              </form>

          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div onClick={this.activateSignInLink} className="sign-in-link">Sign Up
          <div className="drop-down-authform-container">

              <form className="sign-up-form">
                <span className="formTitle">Sign Up</span>
                <input type="text" onChange={this.update('username')} placeholder="Username" value={username}/>
                <input type="text" onChange={this.update('first_name')} placeholder="First Name" value={first_name}/>
                <input type="text" onChange={this.update('last_name')} placeholder="Last Name" value={last_name}/>
                <input type="text" onChange={this.update('email')} placeholder="Email" value={email}/>
                <input type="password" onChange={this.update('password')} placeholder="Password" value={password}/>
                <input type="text" onChange={this.update('img_url')} placeholder="img_url" value={img_url}/>
                <button onClick={this.submit} className="submit">{this.props.action} </button>
                <button onClick={this.loginGuest} className="submit">Guest Login</button>
              </form>

          </div>
        </div>
      </div>
    );
  }

  }
}

export default AuthForm;