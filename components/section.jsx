import React from 'react';
import LinkItem from './link';
import { Link } from 'react-router-dom';

class Section extends React.Component {
    constructor() {
      super();

    }

    render() {
      var sections = [
        'Intro',
        'Choosing a Bootcamp',
        'The Course',
        'Final Projects',
        'Tips and Pointers',
        'Job Search',
        'Overall Experience',
        'Photos and Videos'
      ];

      const links = sections.map( (link, idx) => {
        const path = link.toLowerCase().replace(/ /g,'');

        return (
          <Link to={path}>
            <LinkItem key={idx} title={link} path={path} />
          </Link>
        );
      });

      return (
        <div className="section">
          {links}
        </div>
      );
    }
}

export default Section;
