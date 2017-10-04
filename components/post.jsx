import React from 'react';

class Post extends React.Component {
    constructor() {
      super();

    }

    render() {
      console.log(this.props);
      return (
        <div className="post">
          <div className="text">{this.props.content}</div>
        </div>
      );
    }
}

export default Post;
