import React from 'react';
import mainImg from '../../assets/Oindrila.svg';
import './homepage.css';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className='container'>
      <div className='homepage-container'>
        <div className='image-container'>
          <img src={mainImg} alt='Oindrila' className='homepage-image' />
        </div>
        <div className='textbox-container'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Hi there..!')
                .changeDelay(60)
                .pauseFor(1500)
                .deleteAll()
                .typeString('My name is Oindrila Das')
                .pauseFor(1500)
                .deleteAll()
                .typeString('I am a Web Developer')
                .pauseFor(1500)
                .deleteAll()
                .deleteAll()
                .typeString('... an App Dev enthusiast too ;)')
                .pauseFor(1500)
                .deleteAll()
                .typeString('We could work together?')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Still waiting?')
                .pauseFor(500)
                .deleteAll()
                .typeString('Click on the contact button :)')
                .pauseFor(2500)
                .deleteAll()
                .typeString('.. or check my resume')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Web Developer, App Developer')
                .pauseFor(2500)
                .start();
            }}
          />
        </div>
        <div className='homepage-btn'>
          <div className='hbtn mgin'>
            <Link to='/projects'> Projects/Work Experience</Link>{' '}
          </div>
          <div className='hbtn'>
            <Link to='/contact'>Get in touch</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
