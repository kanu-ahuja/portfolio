import React from 'react'
import homeicon from '../image/home.png'
import about from '../image/about.png'
import contact from '../image/email.png'
import { Outlet, Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header>
                <div className='all_pages'>

                    <Link to='/' className='header_links'>
                        <div className='home_page'>
                            <img src={homeicon} className='home_image home' alt='error' />
                            <span className='header_headings'>
                                <h3 className='mobile_heading'>HOME</h3>
                            </span>
                        </div>
                    </Link>

                    <Link to='/about' className='header_links'>
                        <div className='home_page'>
                            <img src={about} className='home_image' alt='error' />
                            <span className='header_headings'>
                                <h3 className='mobile_heading'>ABOUT</h3>
                            </span>
                        </div>
                    </Link>

                    <Link to='/contact' className='header_links'>
                        <div className='home_page'>
                            <img src={contact} className='home_image' alt='error' />
                            <span className='header_headings'>
                                <h3 className='mobile_heading'>CONTACT</h3>
                            </span>
                        </div>
                    </Link>

                </div>
            </header>
            <Outlet />
        </>
    )
}

export default Header