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
        'Projects',
        'Job Search',
        'Tips and Pointers',
        'Overall Experience',
        'Photos and Videos'
      ];

      const links = sections.map( (link, idx) => {
        const path = link.toLowerCase().replace(/ /g,'');

        return (
          <Link key={idx} to={path}>
            <LinkItem title={link} path={path} />
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
