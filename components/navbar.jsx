import React from 'react';

class Navbar extends React.Component {
    constructor() {
      super();

    }

    render() {
      return (
        <div className="navbar">
          <div className='navbar-section name'>Allen Chen</div>
          <div className='navbar-section title'>my  <img className='logo' src='https://res.cloudinary.com/ac31624/image/upload/v1506937412/appacademy_logo_dyvlw0.png' />  journey</div>
          <div className='navbar-section links'>
            <a href="http://allenchen.io/" target="_blank"><i class="fa fa-id-badge" aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/achen1231" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/alnchen/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://github.com/alnchen" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
            <a href="mailto:alchen1231@gmail.com" target="_blank"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/alchen1231/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
          </div>
        </div>
      );
    }
}

export default Navbar;
