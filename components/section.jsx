import React from 'react';
import Link from './link';

class Section extends React.Component {
    constructor() {
      super();

    }

    render() {
      var sections = [
        'one',
        'two',
        'three',
        'four',
        'five'
      ];

      const links = sections.map( (link, idx) => (
        <Link key={idx} title={link} />
      ));

      return (
        <div className="section">
          {links}
        </div>
      );
    }
}

export default Section;
