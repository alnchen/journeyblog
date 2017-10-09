import React from 'react';
import { Route, HashRouter, Link, Redirect } from 'react-router-dom';

class Selector extends React.Component {
    constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      $.smoothScroll('+=' + 550);
    }

    render() {
      var sections = [
        'Intro',
        'Choosing a Bootcamp',
        'The Course',
        'Projects',
        'Job Search',
        'Tips and Pointers',
        'Overall Experience',
        'Photos and Videos'
      ];

      var sectionButtons = sections.map( (name, idx) => {
        const path = name.toLowerCase().replace(/ /g,'');

        return (
          <Link className='selector-links' key={idx} to={path}>
            <button className="section-button" onClick={this.handleClick}>
              {name}
            </button>
          </Link>
        );
      });

      return (
        <div className="selector">
          {sectionButtons}
        </div>
      );
    }
}

export default Selector;
