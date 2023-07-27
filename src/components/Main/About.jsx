import React from "react";
import "../../pages/About/AboutPage.css";
import { Link } from "react-router-dom";
import cv from "../../cv/cv.pdf";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const About = () => (
  <section className="sobre-mi" id="sobre-mi">
    <h2 className="heading">
      <FormattedMessage id="about" defaultMessage="About me" />
    </h2>

    <div className="row container">
      <div className="columns" data-aos="fade-right" data-aos-delay="300">
        <h3>
          <FormattedMessage id="im" defaultMessage="who I am" />
        </h3>
        <h4>
          <FormattedMessage
            id="description"
            defaultMessage="My name is Esteban Nahuel Carrizo and I am a full stack developer."
          />
        </h4>
        <p>
          <FormattedMessage
            id="my-description"
            defaultMessage="I have been working on Web/Mobile App Developement for 8 years. Constantly updating the technologies I already master, but also looking to learn new technologies to enrich my skills and improve my good practices as a developer. I have been in Blockchain space for recent 3 years and now I am very familiar with it. I love Blockchain."
          />
        </p>
        <ul>
          <li>
            <p>
              <span>Hobbies: </span>
              Chess, Football, Volleyball, Basketball (Ofc Programming!)
            </p>
          </li>
          <li>
            <p>
              <span>Email:</span> kevinharuto430@gmail.com
            </p>
          </li>
          <li>
            <p>
              <span>
                <FormattedMessage id="from" defaultMessage="From:" />
              </span>
              Tallinn, Estonia
            </p>
          </li>
        </ul>
        <div className="mas-info">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            download="cv.pdf"
            className="btn-codigo buttonDownload"
          >
            <FormattedMessage id="btn-cv" defaultMessage="Download CV" />
          </a>
          <div className="mas-info-btn">
            <Link to="/about">
              <ButtomGet />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="columns col-skill"
        data-aos="fade-left"
        data-aos-delay="650"
      >
        <h3>skills</h3>
        <h4>Front-End</h4>
        <div className="skill">
          <div>
            <img
              alt="HTML"
              className="icons-skils"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
            />
            <h5>HTML</h5>
          </div>
          <div>
            <img
              alt="CSS"
              className="icons-skils"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
            />
            <h5>CSS</h5>
          </div>
          <div>
            <img
              alt="Js"
              className="icons-skils"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
            />
            <h5>JavaScript</h5>
          </div>
          <div>
            <img
              alt="Sass"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            />
            <h5>Sass</h5>
          </div>
          <div>
            <img
              alt="Bootstrap"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <img
              alt="Tailwindcss"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            />
            <h5>Tailwindcss</h5>
          </div>
          <div>
            <img
              alt="jQuery"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
            />
            <h5>jQuery</h5>
          </div>
          <div>
            <img
              alt="React"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <h5>React</h5>
          </div>
          <div>
            <img
              alt="Angular"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
            />
            <h5>Angular</h5>
          </div>
          <div>
            <img
              alt="Typescript"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
            <h5>Typescript</h5>
          </div>
        </div>
        <h4>Back-End</h4>
        <div className="skill">
          <div>
            <img
              alt="Nodejs"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
            <h5>NodeJs</h5>
          </div>
          <div>
            <img
              alt="express"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            />
            <h5>Express</h5>
          </div>
          <div>
            <img
              alt="mongodb"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
            />
            <h5>MongodDB</h5>
          </div>
          <div>
            <img
              alt="php"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
            />
            <h5>PHP</h5>
          </div>
          <div>
            <img
              alt="laravel"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/3/36/Logo.min.svg"
            />
            <h5>Laravel</h5>
          </div>
          <div>
            <img
              alt="Python"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
            />
            <h5>Python</h5>
          </div>
          <div>
            <img
              alt="Django"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg"
            />
            <h5>Django</h5>
          </div>
          <div>
            <img
              alt="Blockchain"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
            />
            <h5>Blockchain</h5>
          </div>
          <div>
            <img
              alt="Ethereum/Smart Contract"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ethereum_Classic_Logo.svg"
            />
            <h5>Ethereum/Smart Contract</h5>
          </div>
          <div>
            <img
              alt="Solidity"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg"
            />
            <h5>Solidity</h5>
          </div>
        </div>
        <h4>
          <FormattedMessage id="toolss" defaultMessage="Mobile App & Tools" />
        </h4>
        <div className="skill">
          <div>
            <img
              alt="Android"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
              title="Android"
            />
            <h5>Android</h5>
          </div>
          <div>
            <img
              alt="iOS"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/IOS_logo.svg"
              title="iOS"
            />
            <h5>iOS</h5>
          </div>
          <div>
            <img
              alt="Flutter"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg"
              title="Flutter"
            />
            <h5>Flutter</h5>
          </div>
          <div>
            <img
              alt="React Native"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              title="React Native"
            />
            <h5>React Native</h5>
          </div>
          <div>
            <img
              alt="Kotlin"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg"
              title="Kotlin"
            />
            <h5>Kotlin</h5>
          </div>
          <div>
            <img
              alt="Swift"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/e/ea/SWIFT_logo.svg"
              title="Swift"
            />
            <h5>Swift</h5>
          </div>
          <div>
            <img
              alt="figma"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              title="figma"
            />
            <h5>Figma</h5>
          </div>
          <div>
            <img
              alt="photoshop"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
              title="Photoshop"
            />
            <h5>Photoshop</h5>
          </div>
          <div>
            <img
              alt="Visual Studio Code"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png"
              title="Visual Studio Code"
            />
            <h5>VS Code</h5>
          </div>
          <div>
            <img
              alt="git"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              title="git"
            />
            <h5>Git</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default React.memo(About);
