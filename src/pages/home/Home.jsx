import React, { useEffect, useRef } from 'react';
import Profile from '../../assets/home.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Typed from 'typed.js';
import './home.css';

const Home = () => {
  const typeRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeRef.current, {
      strings: [
        'Student',
        'Web Developer',
        'Backend Developer',
        'Coder'
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
            <h1 className="home__title">
              <span>I'm Ujjwal Zambad </span>
            </h1>
            <h1 className="home__typed">
              <span ref={typeRef}>.</span>
            </h1>


          <p className="home__description">
            I'm a student at DYPCOE and a web developer. I'm passionate about competitive coding and DSA.
          </p>

          <Link to="/about" className="button">
            More About Me{' '}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
