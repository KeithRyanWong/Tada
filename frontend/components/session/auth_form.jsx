import React from 'react';
// import UploadProfile from './UploadProfile';
// import cloudinary from 'cloudinary';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '',
                   first_name: '',
                   last_name: '',
                   email: '',
                   password: '',
                   image_url: "pfplaceholder_x0apvb"
    }; 

    this.submitAction = props.action === 'Sign In' ? props.login : props.signup;

    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.activateSignInLink = this.activateSignInLink.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
    this.openUploadWidget = this.openUploadWidget.bind(this);
  }

  activateSignInLink(event) {
    event.preventDefault();
    event.stopPropagation();
    this.hideForms(event.currentTarget);
    if (!event.currentTarget.className.includes('show')) {
      event.currentTarget.className += ' show';
    }
  }

  componentWillReceiveProps(nextprops) {
    if(nextprops.currentUser.errors[0]) {
      document.getElementsByClassName('sign-in-link')[1].className += ' show';
    }
  }

  
  hideForms(activeEl = {}) {
    let signInLinks = document.getElementsByClassName('sign-in-link');
    Array.prototype.forEach.call(signInLinks, (link) => {
      if (link != activeEl) {
        let newClassName = link.className;
        newClassName = newClassName.split(' ').filter((name) => (name !== 'show')).join(' ');
        link.className = newClassName;
      }
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

    if (this.validInputs()) {
      this.submitAction(this.state);
      this.hideForms();
      this.setState({ username: '',
                      first_name: '',
                      last_name: '',
                      email: '',
                      password: '',
                      image_url: ''
                    }); 
      } else {
        let errorSpans = document.getElementsByClassName('formErrors');
        Array.prototype.forEach.call(errorSpans, (span) => {
          let error = document.createElement('p');
          error.innerHTML = 'Please fill out all fields';
          span.appendChild(error);
        });
        return;
      }
  }

  validInputs() {
    return ( this.props.action === 'Sign In' && 
      this.state.username && 
      this.state.password ) || 
    ( this.props.action === 'Sign Up' && 
      this.state.username && 
      this.state.password &&
      this.state.email &&
      this.state.first_name &&
      this.state.last_name
    );
  }

  loginGuest(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.login({
      username: 'SunTanJar',
      password: 'thisisapass'
    });
    this.hideForms();
    this.setState({ username: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    image_url: "pfplaceholder_x0apvb"
                  }); 
  }
  
  openUploadWidget(event) {
    event.preventDefault();
    event.stopPropagation();

    cloudinary.openUploadWidget(cloudinary_options, (error, results) => {
        if(!error) {
          this.setState({
            image_url: `${results[0].public_id}`
          });
        }
    });
  }

render() {
  const {username, first_name, last_name, email, password, image_url} = this.state;
  const fullImageUrl = image_url === 'pfplaceholder_x0apvb' ? `http://res.cloudinary.com/krwappacademy/image/upload/w_76,c_scale/${image_url}.png` : `http://res.cloudinary.com/krwappacademy/image/upload/w_76,h_76,c_thumb,g_face,r_180/${image_url}.png`;

  if (this.props.action === 'Sign In') {
    return (
      <div>
        <div onClick={this.activateSignInLink} className="sign-in-link">Sign In
          <div className="drop-down-authform-container">

              <form className="sign-in-form">
                <span className="formErrors">{this.props.currentUser.errors.join('<br />')}</span>
                <input type="text" onChange={this.update('username')} placeholder="Username" value={username} required/>
                <input type="password" onChange={this.update('password')} placeholder="Password" value={password} required/>
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
                <span className="formErrors"></span>
                <input type="text" onChange={this.update('username')} placeholder="Username" value={username} required/>
                <input type="text" onChange={this.update('first_name')} placeholder="First Name" value={first_name} required/>
                <input type="text" onChange={this.update('last_name')} placeholder="Last Name" value={last_name} required/>
                <input type="text" onChange={this.update('email')} placeholder="Email" value={email} required/>
                <input type="password" onChange={this.update('password')} placeholder="Password" value={password} required/>
                {/* <input type="text" onChange={this.update('img_url')} placeholder="img_url" value={img_url} required/> */}
                <button className='cloudUpload' onClick={this.openUploadWidget} ><img src={fullImageUrl} className='profilePicture'/></button>
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