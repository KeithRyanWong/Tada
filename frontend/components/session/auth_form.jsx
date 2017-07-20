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
    this.activateClickOut = this.activateClickOut.bind(this);
  }

  
  // componentDidMount() {
  //   document.getElementById('sign-in').addEventListener('click', this.activateSignInLink);
  // }

  componentWillUnmount() {
    document.getElementById('sign-in').removeEventListener('click', this.activateSignInLink);
    document.removeEventListener('click', this.activateClickOut);
  }

  activateSignInLink(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!event.currentTarget.className.includes('show')) {
      event.currentTarget.className += ' show';
    }

    document.getElementsByTagName('body')[0].addEventListener('click', this.activateClickOut);
  }

  activateClickOut(event) {
    event.preventDefault();

    this.hideForms();

    this.setState({ username: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    image_url: ''
                  });

    document.removeEventListener('click', this.activateClickOut);
  }
  
  hideForms() {
    let signInLinks = document.getElementsByClassName('sign-in-link');
    Array.prototype.forEach.call(signInLinks, (link) => {
      let newClassName = link.className;
      console.log(newClassName);
      newClassName = newClassName.split(' ').filter((name) => (name !== 'show')).join(' ');
      link.className = newClassName;
    });
  }
  
  update(field) {
    return e => {
      e.preventDefault();
      this.setState( {[field]: e.target.value });
    };
  }
  
  submit(e) {
    e.preventDefault();
    this.submitAction(this.state);
    this.hideForms();
    document.removeEventListener('click', this.activateClickOut);
    this.setState({ username: '',
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
        <div onClick={this.activateSignInLink} className="sign-in-link">Sign in
          <div className="drop-down-authform-container">
            <div className="dropdown">
              <form className="authform">
                <input type="text" onChange={this.update('username')} placeholder="username" value={username}/>
                <input type="password" onChange={this.update('password')} placeholder="password" value={password}/>
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
    //     <div id='sign-in' className="sign-in-link">Sign in
    //     <div className="drop-down-authform-container">
    //       <div className="dropdown">
    //         <form className="authform">
    //           <input type="text" onChange={this.update('username')} placeholder="username" value={username}/>
    //           <input type="text" onChange={this.update('firstName')} placeholder="First Name" value={firstName}/>
    //           <input type="text" onChange={this.update('lastName')} placeholder="Last Name" value={lastName}/>
    //           <input type="text" onChange={this.update('email')} placeholder="email" value={email}/>
    //           <input type="password" onChange={this.update('password')} placeholder="password" value={password}/>
    //           <input type="text" onChange={this.update('img_url')} placeholder="img_url" value={img_url}/>
    //           <button onClick={this.submit}>{this.props.action}}</button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default AuthForm;