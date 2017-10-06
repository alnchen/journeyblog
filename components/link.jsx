import React from 'react';
import { Link } from 'react-router-dom';

class LinkItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clicked: false,
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    handleClick(e) {
      scroll(0,0);
      var allLinks = document.getElementsByClassName("link");

      for (var i = 0; i < allLinks.length; i++) {
        if (!this.state.clicked) {
          allLinks[i].addEventListener('click', this.handleOutsideClick, false);
        } else {
          allLinks[i].removeEventListener('click', this.handleOutsideClick, false);
        }
      }

      this.setState({clicked: !this.state.clicked});
    }

    handleOutsideClick(e) {
      if (e.target === this) {
        return;
      }

      this.handleClick();
    }

    render() {
      let bgColor = this.state.clicked ? '#7e8eaa' : '#404751',
          borderColor = this.state.clicked ? '#7e8eaa' : "black",
          color = this.state.clicked ? 'black' : 'white';
      return (
          <div className="link" style={{backgroundColor: bgColor, borderColor: borderColor, color: color}} onClick={this.handleClick}>
            {this.props.title}
          </div>
      );
    }
}

export default LinkItem;
