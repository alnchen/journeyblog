import React from 'react';

class Post extends React.Component {
    constructor() {
      super();

    }

    render() {
      console.log(this.props);
      return (
        <div className="post">
          {this.props.content}
        </div>
      );
    }
}

export default Post;
