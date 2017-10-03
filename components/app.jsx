import React from 'react';
import Navbar from './navbar';
import Section from './section';
import Post from './post';
import { Route, HashRouter } from 'react-router-dom';


class App extends React.Component {
    constructor() {
      super();

    }

    render() {
      return (
        <HashRouter>
          <div>
            <Navbar />
            <div className='mainbody'>
              <Route exact path="/" component={Section} />
            </div>
            <Post />
          </div>
        </HashRouter>
      );
    }
}

export default App;
