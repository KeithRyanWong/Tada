import React from 'react';
//header container
import HeaderContainer from './header_container';

//Discover will be grid-container
// const Discover = (store) => (
//   <div className="grid-container">
//     <HeaderContainer store={store}/>
//     {/* <div style={ {height: '900px' }}></div> */}
//   </div>
// );

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid-container">
        <HeaderContainer store={this.props.store}/>
        {/* <div style={ {height: '900px' }}></div> */}
      </div>
    );
  }
}

export default Discover;