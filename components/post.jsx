import React from 'react';

class Post extends React.Component {
    constructor() {
      super();

    }

    render() {

      var body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animid est laborum.`;

      return (
        <div className="post">
          {body}
        </div>
      );
    }
}

export default Post;

<img src={'http://www.slamonline.com/wp-content/uploads/2017/09/chrispaultag.jpg'} />
