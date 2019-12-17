import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

import Scroll from '../components/Scroll';
import pdf from '../pages/TimothyKimResume.pdf'


const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'skills', name: 'Skills', icon: 'fa-superpowers' },
  { id: 'portfolio', name: 'Projects', icon: 'fa-code-fork'},
  { id: 'resume', name: 'Resume', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Timothy</strong>
              <br />
              Software Developer
            </h2>
            <p>Check out my work!</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="about" className="four">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            {/* <img src={pic8} alt="" /> */}
          </a>

          <p>
          I am a software engineer experienced with strong analytical and problem solving skills coming from the legal industry. I have experience in providing clients with tailored solutions, paying close attention to their specific needs in order to provide a deliverable service. As a developer, I strive to seek innovative and robust solutions that will enhance the user experience, and I am most motivated when surrounded by individuals who encourage me to develop new skills, and have a strong willingness to keep learning.
          </p>
        </div>
      </section>

      <section id="skills" className="two">
        <div className="container">
          <div className="col-4 col-12-mobile">
          <header>
            <h2>Skills</h2>
          </header>
          <div className="first-half-icons">
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i className="devicon-bootstrap-plain-wordmark colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-jquery-plain-wordmark colored"></i>
            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-nodejs-plain-wordmark colored"></i>
          </div>
          <div className="second-half-icons">
            <i className="devicon-express-original-wordmark colored"></i>
            <i className="devicon-mongodb-plain-wordmark colored"></i>
            <i className="devicon-postgresql-plain-wordmark colored"></i>
            <i className="devicon-python-plain-wordmark colored"></i>
            <i className="devicon-git-plain-wordmark colored"></i>
            <i className="devicon-github-plain-wordmark colored"></i>
          </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="three">
        <div className="container">
          <header>
            <h2>Projects</h2>
            <h4>Click images to view project</h4>
          </header>

          <p>
            {/* Life will feel it is always a great need for eu valley, the valley
            CNN ridiculous smile at any time chat mainstream clinical homes.
            Mauris floor was very warm and we need it. One customer now nibh
            Bureau dark pools behavior. */}
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://kimtimmy93.github.io/whackamole/" rel="noopener noreferrer" target="_blank" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>Whack-A-Mole</h3>
                  <p>Web application based on the all-time classic arcade game of Whack-A-Mole built in JavaScript</p>
                  <h4>Technologies Used</h4>
                    <p>
                    HTML5 | CSS3 | jQuery | JavaScript
                    </p>
               
                </header>
              </article>

              <article className="item">
                <a href="/#"  rel="noopener noreferrer" target="_" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>MIXR</h3>
                  <p>Web application designed for musicians, artists, and producers to come together to create, connect, and collaborate on projects.</p>
                  <h4>Technologies Used</h4>
                    <p>
                    HTML5 | CSS3 | Bootstrap | Node.js | Express.js | Embedded Javascript(EJS) | MongoDB
                    </p>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">

              <article className="item">
                <a href="https://local-la.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>LOCALA</h3>
                    <p>Full-stack application that provides users with information on current and upcoming local sporting events in the Los Angeles and surrounding areas. Implemented Flask authentication. Consumed SeatGeek API. Managed GitHub branches and merges
                    </p>
                  <h4>Technologies Used</h4>
                  <p>React.js | CSS | Bootstrap | Flask | SQLite | PostgreSQL | Flask-Login</p>
                </header>
              </article>
              <article className="item">

                <a href="https://localhost0003.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>LOCAL:HOST</h3>
                  <p>Local:Host is a full-stack MERN application created for individuals looking for homestay accommodations abroad, and for hospitable hosts who are passionate about assimilating foreigners to their local culture. Implemented Firebase authentication and storage

                    </p>
                  <h4>Technologies Used</h4>
                  <p>React.js | Node.js | Express.js | MongoDB | Firebase</p>
                </header>
              </article>
            </div>

            {/* <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Dolor Penatibus</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Orci Convallis</h3>
                </header>
              </article>
            </div> */}
          </div>
        </div>
      </section>

      

      <section id="resume" className="five">
        <div className="container">
          <header>
            <h2>Resume</h2>
          </header>
          <a href={pdf} target="_blank" rel="noopener noreferrer">Click here for my resume</a>
          {/* <p>
           
          </p> */}
          {/* <form method="post" action="mailto:timhkim0623@gmail.com">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form> */}
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
