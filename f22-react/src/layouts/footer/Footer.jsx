import React from 'react'

// import custom styles
import './Footer.css';

export const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <div className="footer__logo">
                Logo
            </div>
            <div className="footer__contacts">
                <div className="footer__contacts_number">
                    3095-15981-58
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;