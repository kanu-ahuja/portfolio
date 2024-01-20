import React from 'react'
import image1 from '../image/mail.png'
import image2 from '../image/phone.png'
import image3 from '../image/send.png'
const Contact = () => {
  return (
    <>
      <div className="contact_page">
        <div className="contact_container">
          <div className="about_heading">
            <h1 className="heading_below">CONTACT</h1>
            <div className="heading2">
              <h2 className="heading">GET IN</h2>
              <h2 className="contact_heading">TOUCH</h2>
            </div>
          </div>
          <div className="contact_cards">
            <div className="contact_last">
              <h3 className="contact_right">DON'T BE SHY !</h3>
              <p className="contact_desc">Feel free to get in touch with me. I am always open to discussing new projects,
                creative ideas or opportunities to be part of your visions.</p>
              <span className="mailid">
                <img src={image1} className="contact_image" alt='error' />
                <span>
                  <h3 className="mail_heading">MAIL ME</h3>
                  <a href="mailto:kanua6706@gmail.com" target="_blank" className="contact_mail">kanua6706@gmail.com</a>
                </span>
              </span>
              <span className="mailid">
                <img src={image2} className="contact_image" alt='error' />
                <span>
                  <h3 className="mail_heading">CALL ME</h3>
                  <a href="tel:7719582627" target="_blank" className="contact_mail">7719582627</a>
                </span>
              </span>
            </div>

            <div className="contact_left">
              <div className="contact_name">
                <input type="text" placeholder="YOUR NAME" />
                <input type="email" placeholder="YOUR EMAIL" />
              </div>
              <div>
                <input type="text" placeholder="YOUR SUBJECT" />
              </div>
              <div>
                <textarea rows="10" cols="70" placeholder="YOUR MESSAGE" />
              </div>
              <div className="contact_buttton">
                <button className='send_button'><a href='mailto:kanua6706@gmail.com'>SEND MESSAGE</a></button>
                <div className='contact_img'>
                  <img src={image3} alt='Error' />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact