import React from 'react';
import Navbar from './navbar';
import Section from './section';
import Post from './post';
import Media from './media';
import Home from './home';
import Selector from './selector';
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
            <Selector />
            <div className='mainbody'>
              <Redirect to="/"/>
              <Route exact path="/" component={Home} />
              <Route exact path="/intro" render={introComp} />
              <Route exact path="/choosingabootcamp" render={choosingComp} />
              <Route exact path="/thecourse" component={courseComp} />
              <Route exact path="/projects" component={projectsComp} />
              <Route exact path="/photosandvideos" component={Media} />
              <Route exact path="/tipsandpointers" component={tipsComp} />
              <Route exact path="/jobsearch" component={jobSearchComp} />
              <Route exact path="/overallexperience" component={experienceComp} />
            </div>
        </div>
        </HashRouter>
      );
    }
}

export default App;






// content

const intro = `	I first heard about these coding bootcamps about two years ago. And quite honestly, I didn’t think much of it as they sounded “too good to be true”. The idea that in a matter of weeks, this program can turn virtually anybody, regardless of background and knowledge, into a solid developer making $100k+ sounded like a scam marketed all too well. I was in doubt and, on top of that, I was satisfied with what I was doing over at Facebook on the Search Team (special shoutout to all my day1 homies at mpk14) so I brushed it off and carried on.

	But as time went on, I started hearing much more about these bootcamps and the “real-world success stories” by students, especially in the San Francisco Bay Area. It had become such a fad to the point where it seemed like new bootcamps were being formed on a monthly basis. On top of this, I got to meet and work with some great engineers over at Facebook and it really inspired me to see what they were able to do. I was envious of their day-to-day lives, workflow, team collaborative efforts, and overall work satisfaction and craved for the same. Seeds that were previously planted in my head had definitely sprouted at this point. What really struck me was finding out that a great buddy of mine, Raymond Zhang, had completed a bootcamp called App Academy and was in the process of job hunting for software engineering positions (s/o to RayZ). And so I became curious. Very curious. But the bigger question I had was still: is it worth it?

	Long story short, this question would ultimately be answered by the downward spiral at work which eventually motivated me to go all in on making this career jump. And if I were to ever take a big risk, this would be the time. So with that, I started reaching out to my buddies, especially Raymond in particular, to pick their brains a little bit and gather insight on their experiences and ideas. I also resorted to Google (of course) and Reddit (lol) to do some further research on the many bootcamps available. At this point in time, I was determined that enrolling in a coding bootcamp is what I wanted to do.
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
`;
const choosingComp = (props) => <Post content={choosing} />;

const course = `	Having had great success since 2013, App Academy definitely had a great curriculum cut out for us. On top of this, there is a constant desire to update areas where content may seem outdated or ill-fitted.  Just based on my short time there, I noticed several occasions where the readings or projects were altered for the betterment of the program and learnings. As a student progresses through the course, he/she is asked for feedback many times and this feedback is definitely taken into heavy consideration as it has been emphasized to us many times that the student’s ability to learn will always be placed at the top of App Academy’s priority list. With that said, I will use this section to dive deeper into my day-to-day experiences during these several months.

A Typical Day:
	Class starts promptly at 9am. There is roll call right on the dot and your absence leads to a strike (10 and you’re out). With the exception of assessment days, we usually begin the day with a lecture by the TAs based on the previous night’s readings and projects. There is plenty of opportunity to ask questions throughout this time so I made sure to ask questions that I had jotted down from the previous night.
	After the lecture, we head to the computer workstations. We are assigned a partner to work on projects with for the rest of the day. The idea of pair-programming is to encourage not only collaborative work but also to strengthen our verbal skills when it comes to talking code. The whole class is divided into three smaller sub-groups and students are only paired with other students from the same sub-group. Anytime we were stuck or had questions about the projects, we could reach out to a TA for assistance by sending a request in an internal system (literally a simple button that puts our request in a queue). In regards to these daily projects, we are not encouraged to complete them but rather to take in as much knowledge and learn to the best of our ability without skipping over gray areas.
	There will always be homework. This comes in the form of readings, videos, and projects. Get in the habit of using version control systems such as Git (get those green squares on Github!). You are also encouraged to review that day’s work in order to absorb as much information as you can out of the subject matter. With the completion of homework, it’s time to rest up and repeat this cycle the next day.

Structure:
	My friend Raymond Zhang had previously warned me about the course by saying “you will always feel like you’re behind”. Even after day 1, this was absolutely the case for me. Though the curriculum jumps incredibly fast from subject to subject, I believe it was organized and taught incredibly efficiently. Prior to the start of the program, we are prepped on basic algorithms and simply understanding syntax, methods, and coding style of Ruby. This is a great transition into the first two or so weeks where we dive deeper into Ruby by exploring Object Oriented Programming at a much deeper level. After acquiring a solid foundation for Ruby, we dive into SQL and the topics of relational databases, MVC architecture, and HTTP/API Routing. This is fundamental in our understanding of backends. Pause.
	We then jump into JavaScript. The beginning of this portion of the curriculum is very much like what we did in the Ruby portion but, we’re basically doing all those algorithm problems in JavaScript now. We also dive into more specific JS concepts such as callbacks and closures. These two ideas were incredibly frustrating at first (s/o to Jill De Los Angeles and our JS struggle day) but I’ve learned to appreciate how useful they can be, especially given that you’re able to do things in JS that you cannot do in Ruby. As we deepen our knowledge of JS, we jump into JavaScript libraries such as React and jQuery which allow us to really get started on frontend web development.
	With all this under our belt by the end of week 7, it’s time to put everything we’ve learned together. We have all the necessary knowledge and so we now dedicate the next two weeks on our full stack projects.
`;
const courseComp = (props) => <Post content={course} />;

const projects = `	The projects at App Academy definitely provided a good portfolio for future employers. There is a wide range of technical knowledge needed to construct these projects, from frontend to backend frameworks to architectural design and maximizing efficiency. Throughout my interviews, I was asked to talk about my projects many times and even had to dig into the code to explain individual parts. By hand constructing all these projects, we become experts with all facets of the product. Own your code!

Full Stack Project:
	When it comes to deciding on full stack projects, we select three websites that we want to model after and our group leader makes the decision for us. My choices were AirBnb, Soundcloud, and 500px and the main factor as to why I decided on these three were primarily because these web applications allow me to enrich the content (photos or music) for a better overall experience on the user end. I was ultimately assigned AirBnb and could not be more grateful that my first choice was given to me.
	We spend pretty much all of weeks 8 and 9 on this project. Every single day involved showing up at 9am and jumping right into the project until the end of the day. I can confidently say this was my favorite part of the curriculum because of the freedom to work independently all while putting together all of our learnings into one project. Throughout these two weeks I definitely got a much better understanding of every single concept I had picked up from weeks 1-7 and I can understand why this full stack project is so fundamental in the curriculum.
	When it comes to time management, you are your own boss. There will be a direct correlation between effort and how rich your project is. Two weeks may seem like a long time but it goes by incredibly fast and we came to realize that even the most minor of bugs could set our timeline back a good amount. This was also a great opportunity for us to get better with using Github as we definitely wanted a way to manage the project more efficiently throughout the two weeks. Either that or learn the hard way with using Github by resetting your entire project to an earlier stage (s/o to Yong Lin).
	Google will absolutely be your best friend for two weeks. And of course, you have the option of asking the TAs for help. But I came to realize that the TAs can only help so much seeing that they just are not able to dedicate too much time to find a bug in a project they had never previously worked on. It’s best to develop a habit of pushing through roadblocks on your own anyways. We eventually host our projects on Heroku and also purchase domain names as well. And at the end of the second week, the projects are submitted for grading by the TAs in a fairly thorough, though somewhat subjective, evaluation.

JavaScript Project:
	And on we move towards our JavaScript projects where we spend about a week on. The main idea of this project is to further advance our knowledge of JavaScript in the frontend. This could mean the use of JavaScript libraries or even Vanilla JavaScript. I chose to use jQuery as well as HTML Canvas in my Tetris game. Once again, you are on your own and the structure is virtually similar to that of the FSP.
	Picking an idea was probably the hardest part of the project for me. It was stressed that we should choose a project that was doable within the given timeframe but being the judge of what is considered doable was incredibly hard. After putting some thought into it, I decided to make a game that is played on an interface which features a Gameboy visual as well as classic Tetris theme music. My idea behind this decision is based on my thinking that recruiters will land on my game and immediately feel at home because of the nostalgic effect it produces. My theory seemed to come true later on during my job search as I definitely received some positive remarks on my Tetris game from recruiters. At the end of the day, be creative because this project is your chance to do just that!

Flex/Group Project:
	The flex project is a group project and the idea is simple: work on something you are interested in that promotes new learning. I teamed up with three other buddies. We decided to do a full stack web application but wanted to explore new frameworks so our frontend consisted of React Native for mobile development and the backend was built using Python and Django.
	Once again, deciding on an idea was an issue during the early stages of the project. We probably shifted ideas at least 10 times. The whiteboard was filled with pictures, arrows, bullet points, and so much code. Without diving into too much detail, we ultimately decided to build an app with the emphasis of “solving a real world problem”. We split the team of four into groups of two, with each group handling one “end” of the application. I worked alongside Yong and on the Django backend.
	Because we had no prior knowledge of Python and Django, we had to find tutorials online to familiarize ourselves on this language and framework. Django Girls, as funny as it sounds, proved to be a valuable resource as it definitely provided us with a good foundation for constructing our own backend API endpoint. Our counterparts purchased tutorials on Udemy to understand React Native.
	Quite honestly, my main takeaway from this project is the importance of team collaboration. It is absolutely undervalued how important communication is especially when the collective team is split into subgroups manhandling the frontend and backend individually. We decided that we had to get together about once a day to go over action items, bugs to fix, what to expect from each other, etc. This project definitely gave me a lot of talking points going into my job search because I was exposed to the many facets of web development.
`;
const projectsComp = (props) => <Post content={projects} />;


const tips = `Throughout The Course:
	-Eat well and stay hydrated so you do not suffer from fatigue or illnesses
	-Get as much sleep as you can in order to better absorb and retain new information
	-Make friends! This will be a great network in your professional career
	-Don’t be afraid to ask for help. It’s the best way to learn
	-Everybody comes in with a different background and skill level. Learn to adapt!
	-Make most of the TA Office Hours. One thing for sure is all a/A staff is incredibly nice and willing to help
	-Block out a small chunk of your weekend to go out and do something. Your mind needs to get away from the computer and recharge
	-Try to live as close to the office as possible. My nearly one-hour commute made time management more difficult


Projects:
	-Dedicate 100% and more when working on these projects
	-This is your time to get help when needed to make them stand out
	-Architect projects that can showcase your skills and creativity
	-Projects are one of the only ways you can sell yourself to a recruiter
	-Write clean and efficient code. Doesn’t happen all the time but some employers do look into your Github
	-Aim high and set high goals when it comes to expectations for yourself
	-For group projects, learn to work effectively with other developers especially when it comes to planning


Job Search:
	-Self motivation is the absolute biggest factor to a successful job search
	-Keep yourself driven and stay dedicated
	-Get in the habit of organizing a day’s events
	-Read and work through “Cracking the Coding Interview” by Gayle Laakmann McDowell
	-NETWORK! Making friends within a company will give you a huge edge
	-Reach out to your connections only after you’ve gotten your foot in the water with several interviews. You want to be as prepared as possible
	-Imposter syndrome is real. It affects even the most senior of engineers. In the software development world, there is no way you can know it all
`;
const tipsComp = (props) => <Post content={tips} />;

const jobSearch = `	As difficult as the 12-week curriculum was, it doesn’t compare to the job search process afterwards. What makes finding a job so difficult is due to a myriad of factors; network, connections, previous experiences, education, technical skill level, social skill level, company tech stack, there are just too many to name! In this section, I will dive into my personal experience throughout the job search.

Job Readiness:
	One of the biggest questions I get when people ask me about the bootcamp is whether or not I feel prepared for a job coming out of it. Quite honestly, my answer has been yes and no. First off, I would like to emphasize that App Academy’s curriculum is second to none and I learned about as much as I possibly could in the short span of three months. With that being said, the web development world has changed and with these changes comes a different interview experience from that of my colleagues in previous cohorts. With how hot the Bay Area is for tech, it has become a migration hub for all aspiring software engineers. And due to the saturation of this market, companies are looking for ways to filter out the best of the best through advanced technical screens and thorough interview processes. Basically, we are tested in areas deeper than we have been exposed to. Based on my bad interviews, I have been in situations where I had no clue how to tackle a problem and this is usually because it is such a specific problem that I was just never exposed to the concept.
	So why do I answer yes as well as no? It’s really simple. App Academy provides students with the necessary foundation for learning because we are exposed to almost all facets of web development. The idea is for us to touch on the subject matter during the course and to strengthen those skills as we progress through our careers. I can confidently say that the change in my skill level from the day I finished the bootcamp and three months later is monumental. Not only did I look back at the curriculum to patch up holes but I now had the time to dive deeper into areas that I wanted to strengthen via external resources and solo projects. I also wanted to mention that with each technical interview I did poorly in, I definitely took the time to break down what I did wrong and how I could have improved. The skills learned from this specific situation definitely sticks with me tightly. Learn from your mistakes? Or maybe I’m just salty. Anyways, what I’m really trying to stress is the idea that I came out of the program with a lot of knowledge but I consistently fell a bit short in passing my interviews and each time I failed, I advanced my skills by getting a better understanding of the areas that I needed more work.

Networking:
	Think of a what it’s like to be a recruiter for a second (props to Arthur Chen). Your job is to find the right person for an opening. Now think about how many developers are situated in the Bay Area and imagine endlessly going through resumes to find potential candidates. It’s like finding a needle in a haystack! And what I’m trying to emphasize is not how shitty of a situation this is for the recruiter but rather how difficulty it can be for the applicants on the other end. This is what makes networking such a powerful tool. The idea is simple:

1.	Make connections through meetups/social gatherings
2.	Reach out to connections when you see a job opening
3.	Express your interest, chit-chat, you know…the whole shebang
4.	Resume bumped to the very top of the tall stack of resumes for consideration

But at the same time, I decided to reach out to my network only after I got my feet a bit wet. I didn’t want to blow all my connections at first and wanted to wait a bit until I truly felt prepared. This is the case for me only; some people are definitely much more ready and confident right off the bat.

Motivation:
	Probably the biggest factor not listed above is self-motivation. Having to do phone screens that lead to technical interviews which lead to more technical interviews which ultimately lead to onsite interviews only to get rejected and needing to start over is a DRAINING process. Not only can it be physically tiring but the mental impact is a bigger enigma for an individual.
	I can say that my worst week probably came about two months into the job hunt. This was definitely the most promising week for me in terms of interviews and potential. I had six technical interviews with large companies scheduled. Nail any of them and I get to the final round onsite which, to be honest, I was actually more confident in because of the social atmosphere it presents, but that’s another story. Anyways, I scattered these interviews with Airbnb, Cisco Meraki, CourseHero, IXL Learning, etc. throughout the week and was excited to have such an opportunity. Fast forward through the week…bombed all of them. Did not get to the next round for a single one. This was the lowest point for me. I started questioning my own abilities and contemplating whether this was meant for me.
	But I remembered what my peers at App Academy had mentioned to me time and time again: keep pushing through because it will be worth it one day. It sounds corny and cheesy but it is absolutely true. It’s a marathon, not a sprint (as my homie Kenton says, although in much different context). The job search is a process that requires consistent learning of new material and because I had something to take away from each of those failed interviews, I knew how to improve myself. So after I took the weekend to shake off my emotional self and recharge, I got right back to work the next week. To all current job hunters out there, job hunting can be a long and draining process but just keep your eyes on the end goal and keep pushing yourself. The feeling at the end of the tunnel is so much sweeter knowing that you gave it your all to get there.
`;
const jobSearchComp = (props) => <Post content={jobSearch} />;

const experience = `	If you’ve got the time, money as well as interest in learning software development, a coding bootcamp will hands down be a great decision. But there will not be a good fit for those who are expecting things to be handed to them on a silver platter. If I can give a fairly subjective measurement of effort, achieving success is 90% on you. The bootcamp simply gives you good structure, albeit great structure in App Academy’s case.

	When it comes to my circumstances, I definitely believe I made the right choice. Do I regret not majoring in Computer Science? Not so much. My work experiences prior to this have shaped me into who I am. I’ve picked up management experience, interpersonal skills, technical training knowledge, and can now say that I’ve worn many hats while working in the tech industry. But now with software engineering, I can do what I’ve always loved to do: build things. And also make sneakerbots too I guess. There is still a lot to learn on my end. I’ve merely scratched the surface of software engineering. But I tend to approach the rest of my career like I did with the bootcamp; letting my curiosity guide the way. It’s the best way to learn IMHO!

	Once again, this blog is mostly a way for me to personally remember this journey of mine but I hope the insight I’ve provided can help any future developer out there. For those of you interested in learning more about App Academy, you can click on the App Academy logo at the top of the page for my referral link.
`;
const experienceComp = (props) => <Post content={experience} />;
