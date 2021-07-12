import React from "react";
import {useState, useEffect} from "react";
import TypeWriter from "react-typewriter";
//Icons
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


const Header = ({ data }) => {

  const [quote, setQuote] = useState({})

  useEffect(() => {
      const getQuotes = async () =>{
          await fetch('https://type.fit/api/quotes')
          .then(res => res.json())
          .then((data) => setQuote(data[Math.floor(Math.random() * (data.length - 1))]))
      }
      getQuotes()
  }, [])

  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }


  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
          <div className="quote__div">
                <h2 className='white-text'>{`"${quote.text}" `}</h2>
                <h4 className='white-text' ><i>{quote.author}</i></h4>
            </div>
            <TypeWriter className="courier-text-name" typing={0.5}>I'm Arjun Joshi</TypeWriter>
          </h1>
          <h3>
            Based in {city}. <span>{occupation}</span>. {description}.
          </h3>
          <h4 className="work-text" >Available for freelance work and internships.</h4>
          <hr />
          <ul className="social">
            <FacebookIcon className='social-icons' />
            <GitHubIcon className='social-icons' />
            <LinkedInIcon className='social-icons' />
            <InstagramIcon className='social-icons' />
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
