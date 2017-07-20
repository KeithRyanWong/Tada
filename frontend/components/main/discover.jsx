import React from 'react';
//header container
import Header from './header';

//Discover will be grid-container
const Discover = ({ store }) => (
  <div className="grid-container">
    <Header store={store}/>
    {/* <div style={ {height: '900px' }}></div> */}
  </div>
);

export default Discover;