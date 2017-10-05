import React from 'react';
import Navbar from './navbar';
import Section from './section';
import Post from './post';
import Media from './media';
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
              <Route exact path="/choosingabootcamp" render={choosingComp} />
              <Route exact path="/photosandvideos" component={Media} />
            </div>
        </div>
        </HashRouter>
      );
    }
}

export default App;






// content

const intro = `	I first heard about these coding bootcamps about two years ago. And quite frankly, I didn’t think much of them as they sounded “too good to be true”. The idea that in a matter of weeks, this program can turn virtually anybody, regardless of background and knowledge, into a solid web developer making $100k+ sounded like a scam that is marketed all too well. I was in doubt and, on top of that, I was satisfied with what I was doing over at Facebook on the Search Team (special shoutout to all my day1 homies at mpk14) so I brushed it off and carried on.

	But as time went on, I started hearing much more about these bootcamps and the “real-world success stories” by students, especially in the San Francisco Bay Area. It had become such a fad to the point where it seemed like new bootcamps were being formed on a monthly basis. What really struck me was finding out that a great buddy of mine, Raymond Zhang, had completed a bootcamp called App Academy and was in the process of job hunting for software engineering positions (s/o to RayZ). And so I became curious. Very curious. But the bigger question I had was still: is it worth it?

	Long story short, this question would ultimately be answered by some unfortunate work circumstances. And if I were to ever take a big risk, this would be the time. So with that, I started reaching out to my buddies, especially Raymond in particular, to pick their brains a little bit and gather insight on their experiences and ideas. I also resorted to Google (of course) and Reddit (lol) to do some further research on the many bootcamps available. At this point in time, I was determined that enrolling in a coding bootcamp is what I wanted to do.
`;

const introComp = (props) => <Post content={intro} />;


const choosing = `	The Bay Area, being the tech hub that it has become, is filled with web development bootcamps. App Academy, HackReactor, General Assembly, Dev Bootcamp, and even UC Berkeley had coding programs to offer! What are the pros and cons of each, tuition costs, tech stack offered, student reviews, program duration, acceptance rate, job placement rate…there were just so many factors to consider. I'm gonna cover some of my personal thoughts on selecting a bootcamp as well as my interview process below.


Tech Stack:
	Yes, this is one of the biggest factors. You should absolutely do your research on what the trends are when it comes to programming languages and frameworks. You should also go into a bootcamp search with some knowledge of frontend vs backend engineering. This is crucial! I have colleagues who realized that they were more into data and creating APIs and wanted a program that focused on backend more. On the contrary, I’ve also heard from others that designing and styling a web application is their true calling, and wish that they had more exposure to frontend technologies.
	With that being said, I also wanted to stress the fact that picking up new technologies after completing a bootcamp is A LOT easier than starting with a blank canvas. The skills you pick up from the course provide a great foundation for exploring other frameworks and languages. This is definitely evident in a group project that I worked on with some classmates after we had finished the curriculum. My team of four decided to pick up React Native and Django (python) to create a mobile application (s/o to Team Gluteno!) and, besides some bugs along the way, it was a great learning experience for all of us.
	App Academy trained me incredibly well on full stack web development using Ruby on Rails and React. I was able to get a good understanding of creating API endpoints and also understand why React has been so hot in the tech world as of late. Honestly, I do wish there was more emphasis on JavaScript as there is one thing that’s for sure: JavaScript is not going away anytime soon. Regardless, being able to have a good understanding of the full stack is definitely a blessing especially when it comes to opening up new doors in the engineering world.
	To sum it all up, you should absolutely do a bit of research on frontend, backend, and fullstack engineering to at least have some idea into what interests you. Remember, most bootcamps provide tours of the facility so you’re able to learn much more about the structure, see some of the projects that they work on, and, most importantly, get a good sense of the people who you will be working with.


Tuition Costs:
	This one is pretty simple. It may seem like a ridiculous amount but IT IS WORTH IT. If you put in the work you will get a job. One thing to keep is mind is that the process will require time; some students find jobs a week after graduating while others may take up to a year. Of course technical skills will be the biggest factor but there is also a lot of luck involved. When the stars align, that will be your time to kill it in the interviews. And that’s when the costly bootcamp tuition pays off. No pun intended.
	I did want to mention that App Academy had recently changed their tuition model. I rather not dive too much into this matter but I will say that it is the better option to pay the tuition upfront in my opinion. You WILL get a job within a year of graduating.


Getting Accepted:
	By word of mouth, there were two bootcamps that were always regarded as the “top 2”, App Academy and HackReactor. And of course with that reputation comes an incredibly low acceptance rate. I believe this number is currently somewhere between 2-5% for both programs. I applied to both and heard back with further instructions immediately. Because I knew more people who had gone through the App Academy bootcamp, I decided to focus on that one first. And if things didn’t work out, I’d jump right into HackReactor.
	I knew I had to prep myself for the rigorous interview process. I spent about two weeks really drilling the basics of the Ruby language into my head until method names became second nature. Fortunately for me, I was invited to take part in a free bootcamp prep program called JumpStart that was hosted by App Academy. I figured my work experience in the tech sector might have helped with this consideration. This was a two-week program, Monday-Thursday, from 6-8pm. On day one, I met many other students, all with quite different backgrounds. There were construction workers, preschool teachers, culinary chefs, and even a kid who didn’t even graduate high school yet. Everyone had the same goal: to achieve the California dream (cuz what is the American dream anymore?). Long story short: each week consists of an exam, pass both and you basically get in after a final behavioral interview. I aced the first and fell one point short of passing for my second one and so back to the regular interview process I went. Not gonna lie, I was pretty bummed but at least I was now expedited in the standard interview process and knew that I was close.
	After this, I made an account with Codewars to get more exposure to the many different problems that I could face during an actual interview. I spent countless hours on this site and even leveled myself up from 8kyu to 5kyu in about two weeks. It didn’t help that all this occurred during the holidays; I stayed in to study on Christmas as well as my birthday/NYE in order to be prepared for my interview on January 3rd. I was driven, determined and confident to kill it on what could be my only shot at getting accepted. #mambamentality
	The moment comes for the Skype interview. 1:29pm. A minute before I get the call. My palms have never been so sweaty. I had my work environment all set up. Got my good luck charm in my back pocket. And then I get the call! Fast forward to the end of it. I killed it! I completed every problem given to me and I communicated well (at least I think I did). Shortly after, I was asked to do a final behavioral interview (they say its just to check that I’m not a crazy dude lol little do they know). I spoke with Sarah Ahmed and the questions were very straight-forward; nothing that caught me by surprise. But she had also mentioned that I wouldn’t be notified of results for a while so it’s time for the waiting game.
	Nearly two weeks go by. One day I decided to ask my cousin Wilmer to go shoot some billiards (this guy never says no to a challenge). As I was kicking his ass, I suddenly get an email notification from App Academy with the following subject line and message:

Congratulations, Allen!
	Yay! We think you'd be a great fit for App Academy and we'd love to have you join us! Many highly qualified applicants applied, and we took great care to select those with exceptional backgrounds and potential. You stood out to us!

	I was so excited! But with the acceptance came much more prep material. It was time to get back to work.
`

const choosingComp = (props) => <Post content={choosing} />;
