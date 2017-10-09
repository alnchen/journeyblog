import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='home-container'>
        <div className='home-mobile'><img className='homephoto-mobile' src='https://res.cloudinary.com/ac31624/image/upload/c_scale,w_4000/v1507343914/bridge_zedpea.jpg' /></div>
        <div className='home-photo-container'><img className='homephoto' src='https://res.cloudinary.com/ac31624/image/upload/c_scale,w_4000/v1507343914/bridge_zedpea.jpg' /></div>
        <span className='disclaimer'>Opinions expressed in this blog are solely my own and do not reflect the views of all other representatives</span>
      </div>
    );
  }
}

export default Home;
