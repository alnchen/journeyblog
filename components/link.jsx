import React from 'react';

class Link extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
      return (
        <div className="link">
          {this.props.title}
        </div>
      );
    }
}

export default Link;
