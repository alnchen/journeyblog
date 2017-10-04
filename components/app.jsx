import React from 'react';
import Navbar from './navbar';
import Section from './section';
import Post from './post';
import { Route, HashRouter, Link, Redirect } from 'react-router-dom';


class App extends React.Component {
    constructor() {
      super();

    }

    render() {
      return (
        <HashRouter>
          <div>
            <Navbar />
            <Section />
            <div className='mainbody'>
              <Redirect to="/"/>
              <Route exact path="/intro" render={introComp} />
            </div>
        </div>
        </HashRouter>
      );
    }
}

export default App;






// content

const intro = `I first heard about these coding bootcamps about two years ago. And quite frankly, I didn’t think much of them as they sounded “too good to be true”. The idea that in a matter of weeks, this program can turn virtually anybody, regardless of background and knowledge, into a solid developer making $100k+ sounded like a scam that is marketed all too well. I was in doubt and, on top of that, I was satisfied with what I was doing over at Facebook on the Search Team (special shoutout to all my day1 homies at mpk14) so I brushed it off and carried on.

But as time went on, I started hearing much more about these bootcamps and the “real-world success stories” by students, especially in the San Francisco Bay Area. It had become such a fad to the point where it seemed like new bootcamps were being formed on a monthly basis. What really struck me was finding out that a great buddy of mine, Raymond Zhang, had completed a bootcamp called App Academy and was in the process of job hunting for software engineering positions (s/o to RayZ). And so I became curious. Very curious. But the bigger question I had was still: is it worth it?

Long story short, this question would ultimately be answered by some unfortunate work circumstances. And if I were to ever take a big risk, this would be the time. So with that, I started reaching out to my buddies, especially Raymond in particular, to pick their brains a little bit and gather insight on their experiences and ideas. I also resorted to Google (of course) and Reddit (lol) to do some further research on the many bootcamps available. At this point in time, I was determined that enrolling in a coding bootcamp is what I wanted to do.
`;

const introComp = (props) => <Post content={intro} />;
