import React from 'react'
import portfolio from '../image/portfolio.png'
import image_download from '../image/download.png'
import projects from '../image/portfolio.png'
import htmlimg from '../image/html.svg'
import cssimg from '../image/css.svg'
import jsimg from '../image/javascript.svg'
import reactjs from '../image/react.svg'
import nodejs from '../image/nodejs.svg'
import github from '../image/github.svg'
import mysql from '../image/mysql.svg'
const About = () => {
  const onButtonClick = async () => {
    console.log("hiii")
    await fetch("/kanu.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "kanu.pdf";
        alink.click();
      });
    });
  };

  return (
    <section className='about'>
      <div className='about_container'>
        <div className='about_page'>
          <div className='about_heading'>
            <h1 className='about_header'>ABOUT</h1>
            <h1 className='about_header_text'>ME</h1>
          </div>
          <h2 className='personal_heading'>PERSONAL INFORMATION</h2>
          <div className='text_fields'>
            <div className='left_fields'>
              <div className='personal_fields'>
                <h3 className='heading_name'>First Name : </h3>
                <h3 className='about_name'>Kanu</h3>
              </div>
              <div className='personal_fields'>
                <h3 className='heading_name'>Age : </h3>
                <h3 className='about_name'>22 Years</h3>
              </div>
              <div className='personal_fields'>
                <h3 className='heading_name'>Mobile : </h3>
                <h3 className='about_name'>+91 7719582627</h3>
              </div>
              <div className='personal_fields'>
                <h3 className='heading_name'>Nationality : </h3>
                <h3 className='about_name'>Indian</h3>
              </div>
            </div>
            <div className='left_fields'>
              <div className='personal_fields'>
                <h3 className='heading_name'>Last Name : </h3>
                <h3 className='about_name'>Ahuja</h3>
              </div>
              <div className='personal_fields'>
                <h3 className='heading_name'>Email : </h3>
                <h3 className='about_name'>kanua6706@gmail.com</h3>
              </div>
              <div className='personal_fields'>
                <h3 className='heading_name'>Languages : </h3>
                <h3 className='about_name'>English,Hindi,Punjabi</h3>
              </div>
            </div>
          </div>

          <div className="contact_buttton about_button">
            <a className='send_button' onClick={onButtonClick}>DOWNLOAD CV</a>
            <div className='contact_img'>
              <img src={image_download} alt='Error' />
            </div>
          </div>

        </div>
        <div className='my_skills'>
          <h3 className='second_card'>MY SKILLS</h3>
          <div className='skills'>
            <div className='myskills_loader'>
              <div>
                <img src={htmlimg} className='skills_images' alt='error' />
                <h3 className='myskills_headings'>HTML</h3>
              </div>
              <div>
                <img src={cssimg} className='skills_images' alt='error' />
                <h3 className='myskills_headings'>CSS</h3>
              </div>
              <div>
                <img src={jsimg} className='skills_images' alt='error' />
                <h3 className='myskills_headings'>JAVASCRIPT</h3>
              </div>
              <div>
                <img src={reactjs} className='skills_images' alt='error' />
                <h3 className='myskills_headings'>REACT</h3>
              </div>
              <div>
                <img src={nodejs} className='skills_images' alt='error' />
                <h3 className='myskills_headings'>NODE JS</h3>
              </div>
              <div>
                <img src={github} className='skills_images' alt='error' />
                <h3 className='myskills_headings'>GITHUB</h3>
              </div>
              <div>
                <img src={mysql} className='skills_images' alt='error' />
                <h3 className='myskills_headings'>MYSQL</h3>
              </div>
            </div>
          </div>
        </div>

        <h3 className='second_card'>EXPERIENCE & EDUCATION</h3>
        <div className='experience_education'>
          <div className='about_card'>
            <div className='about_cards'>
              <img src={portfolio} className='about_image' alt='error' />
            </div>
            <div className='about_description'>
              <h3 className='about_year'>2023-2024</h3>
              <h2 className='experience_heading'>WEB DEVELOPER - MAD BRAINS TECHNOLOGIES LLP</h2>
              <h2 className='All_intership'>During my 6-month internship at Mad Brains Company, I had the invaluable opportunity to apply and enhance my skills in a professional setting. Collaborating with a dynamic team, I actively contributed to [specific projects, tasks, or areas of focus]. This hands-on experience allowed me to bridge the gap between theoretical knowledge gained during my academic studies and the practical demands of the industry.</h2>
            </div>
          </div>
          <div className='about_card'>
            <div className='about_cards'>
              <img src={portfolio} className='about_image' alt='error' />
            </div>
            <div className='about_description'>
              <h3 className='about_year'>2021-2023</h3>
              <div className='about_description'>
                <h2 className='experience_heading'>BACHELOR DEGREE  - D.A.V COLLEGE</h2>
                <h2 className='All_intership'>I am a dedicated and results-driven professional with a solid foundation in Computer Applications, holding a Bachelor's degree in Computer Applications (BCA). Throughout my academic journey, I have acquired a comprehensive understanding of various programming languages, database management, software development, and information technology.</h2>
              </div>
            </div>
          </div>
        </div>

        <div className='projects'>
          <div>
            <h3 className='second_card'>PROJECTS</h3>
            <div className='projects_headings'>
              <div>
                <img src={projects} className='about_image' alt='error' />
              </div>
              <div className='projects_all_desc'>
                <h2>Verlein</h2>
                <h3>Skills : - HTML , CSS </h3>
                <p className='project_description'>Developed and launched Trendify Bags, an innovative online shopping platform specializing in a curated collection of stylish bags. The project focuses on providing users with a seamless and personalized shopping experience.</p>
              </div>
            </div>
          </div>

          <div>
            <div className='projects_headings'>
              <div>
                <img src={projects} className='about_image' alt='error' />
              </div>
              <div className='projects_all_desc'>
                <h2>Buy Now</h2>
                <h3>Skills : - HTML , CSS , JAVASCRIPT , REACT JS , NODE JS</h3>
                <p className='project_description'>Initiated and spearheaded the development of ElectroHub, a dynamic online platform specializing in electronic items. The project is dedicated to providing users with a comprehensive and hassle-free experience in purchasing a wide range of cutting-edge electronic products.</p>
              </div>
            </div>
          </div>

          <div>
            <div className='projects_headings'>
              <div>
                <img src={projects} className='about_image' alt='error' />
              </div>
              <div className='projects_all_desc'>
                <h2>Calculator</h2>
                <h3>Skills : - HTML , CSS , JAVASCRIPT </h3>
                <p className='project_description'>Developed a feature-rich calculator application using JavaScript, HTML, and CSS. Demonstrated proficiency in creating responsive user interfaces and executing precise calculations. This project not only showcases my technical skills in web development but also highlights my attention to detail in user interface design.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About