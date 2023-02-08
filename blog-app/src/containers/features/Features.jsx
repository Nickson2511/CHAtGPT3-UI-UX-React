import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Do you know you can do many things with HTML and CSS to change your future ?',
    text: 'Knowing IT is never enough if you cannot showcase what you can do,. Use HTML and Css to comeup with landing pages and responsive navigation sites.',
  },
  {
    title: 'Become a Frontend-Developer with HTML, CSS, Js and Reactjs',
    text: 'So simple. Applying your programming skills in the market of Business can be profitable when you pick real world projects.With react, you are capable to start Frontend-journey and become a software engineer.',
  },
  {
    title: 'AI is spontaneously growing with presence of automatic systems, Chatgpt and microchips that stores user data. ',
    text: 'Now you know with your computer gadget you can complete bunches of tasks in a single moment especially when you are AI driven.  AI driven simply means you can apply your IT knowldge and skills to perform tasks that when someone else does it manually can spent his/her entire life in this world doing them.',
  },
  {
    title: 'Internet and Technology',
    text: 'Due to internet growth computers, have evolved so much, with the best computer practices like Apple systems such as MaCOS , you can love using them coding websites, due to high internet connectivity..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
