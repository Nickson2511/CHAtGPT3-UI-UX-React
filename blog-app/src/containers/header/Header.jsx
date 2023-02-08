import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id ="home">
      <div className="gpt3__header-content">
     <h1 className="gradient__text">Let's Build Something With GPT-3 OpenAI</h1>
     <p> Yes Indeed, Make AI with Nick Okwesh and you will endup learning <br/>
     new AI mechanisms with chatGPt3.This is a feature that helps in <br/>Machine Learning and Data science</p>



    <div className="gpt3__header-content__input">
      <input type="email" placeholder="Your Email Address"/>
      <button type="button" >Get Started</button>

    </div>

    <div className="gpt3__header-content__people">

      <img src={people} alt="people" />
      <p>over 2500 people requested access a visit in last 24 hours</p>
    </div>
    </div>
 
 
  <div className="gpt3__header-image">
      <img src={ai}  alt="ai" />

     
  
    </div>
   </div>
  )
}

export default Header
