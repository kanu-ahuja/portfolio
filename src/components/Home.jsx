import React from 'react'
import image from '../image/profile_pic.jpeg'
import mobileimg from '../image/mobile-profile-pic.png'
const Home = () => {
    return (
        <div>
            <div className='portfolio_introduction'>
                <div className='portfolio_image'>
                    <img src={image} className='introduction_image' alt='error' />
                    <img src={mobileimg} className='mobile_img' />
                </div>
                <div className='portfolio_intro'>
                    <div className='portfolio_heading'>
                        <h3 className='portfolio_name line'>__</h3>
                        <h3 className='portfolio_name'>I'M KANU AHUJA.</h3>
                    </div>
                    <h3 className='portfolio_name portfolio_experience'>WEB DEVELOPER</h3>
                    <div>
                        <p className='portfolio_description'>
                            As a web developer fresher, I bring a passion for coding and a solid foundation in HTML, CSS, JavaScript,React js,Node js and eager to contribute my skills to create engaging and dynamic online experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home