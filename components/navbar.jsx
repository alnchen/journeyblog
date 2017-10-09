import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);
      this.handleMobileClick = this.handleMobileClick.bind(this);
    }

    handleClick() {
      var allLinks = document.getElementsByClassName("link");

      for (var i = 0; i < allLinks.length; i++) {
        allLinks[i].style.backgroundColor = "#404751";
        allLinks[i].style.borderColor = "black";
        allLinks[i].removeEventListener('click', this.handleOutsideClick, false);
      }
    }

    handleMobileClick() {
      scroll(0,0);
    }

    render() {
      return (
        <div className="navbar">
          <div className='navbar-section name'>
            <Link className='desktop-name' to='/'><div onClick={this.handleClick}>Allen Chen</div></Link>
            <Link className='mobile-name' to='/' onClick={this.handleMobileClick}>
              <div onClick={this.handleClick}>
                <div className='title mobile'>my<img className='logo' src='https://res.cloudinary.com/ac31624/image/upload/v1506937412/appacademy_logo_dyvlw0.png' />journey</div>
              </div>
            </Link>
          </div>
          <div className='navbar-section title desktop'>my<a href="https://www.appacademy.io/referral_stats?hash=c71cd99ade899751" target="_blank"><img className='logo' src='https://res.cloudinary.com/ac31624/image/upload/v1506937412/appacademy_logo_dyvlw0.png' /></a>journey</div>
          <div className='navbar-section links'>
            <a href="http://allenchen.io/" target="_blank"><i className="fa fa-id-badge" aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/achen1231" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/alnchen/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://github.com/alnchen" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
            <a href="mailto:alchen1231@gmail.com" target="_blank"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/alchen1231/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
          </div>
        </div>
      );
    }
}

export default Navbar;
