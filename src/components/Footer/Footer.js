import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              fahimashif786@gmail.com
            </Link>
          </div>
          <small class='website-rights'>Ashif Fahim © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link twitter'
              to='//github.com/aa-fahim'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='//www.linkedin.com/in/ashif-fahim-8794ba182/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
