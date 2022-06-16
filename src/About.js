import React from "react";
import "./About.css";
import aboutImg from "./img/bongani.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">ABOUT ME</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              Software Developer Engineer in Test | Junior Software Engineer | 
              Java Platform Enterprise Edition (Java EE 8) 
              | Liferay DXP 7.2 Front-End Developer | Java 8 Programming (Java SE 8) | 
              IBM Certified Solution Developer – Integration Bus V10.0 | 
              Constructing and Coding of Plugins | Quality Assurance of Plugins | 
              Full-stack Software Developer Engineer | I believe in my capabilities 
              because I know I can excel given the opportunity. I don't comment on bad code - I rewrite it.
              </p>
              <p className="about__text p__color">
              During my Learnership experience of one year six months at JumpCo I've gained 
              experience in improving my communication skills and ability to work in a team 
              environment and independently depending on the task at hand.I have also gained 
              experience in building high-performing, scalable, enterprise-grade applications, 
              hands-on experience in designing and developing applications using Java EE platforms, 
              Object Oriented analysis, and design using common design patterns, and excellent 
              knowledge of Relational Databases, and SQL while working as an Intern for the 
              JumpCo Software Labs.

              </p>
              <p className="about__text p__color">
              	I am excellent problem solver.
              	I am the person who thinks about what is possible.
              	I strive to keep moving no matter the situation. 
              	I am active and out spoken person, generous therefor I share what I discover.
              	I always seek new opportunities to learn new skills and latest technologies that are used in the software development world.

              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
