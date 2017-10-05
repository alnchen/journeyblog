import React from 'react';

class Media extends React.Component {
    constructor() {
      super();

    }

    render() {
      return (
        <div className="media">
          <img className='photo' src='https://res.cloudinary.com/ac31624/image/upload/v1507180795/blog/1_-_jumpstart.jpg' />
          <div className='caption'>Jumpstart Day 1</div>

          <img className='photo' src='https://res.cloudinary.com/ac31624/image/upload/v1507180798/blog/2_-_views.jpg' />
          <div className='caption'>Personal Work Room With A View</div>

          <img className='photo' src='https://res.cloudinary.com/ac31624/image/upload/v1507180786/blog/3_-_interview.png' />
          <div className='caption'>Final Technical Interview Booked</div>

          <img className='photo' src='https://res.cloudinary.com/ac31624/image/upload/v1507180799/blog/4_-_boba.jpg' />
          <div className='caption'>Gotta Have My Boba</div>

          <img className='photo' src='https://res.cloudinary.com/ac31624/image/upload/v1507180850/blog/6_-_day1.jpg' />
          <div className='caption'>App Academy Day 1</div>
        </div>
      );
    }
}

export default Media;
