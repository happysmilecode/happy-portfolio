import React from "react";
import "./Content.css";
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";

/* ReactScroll */
import { Link } from "react-scroll";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Content = () => (
  <div className="contenido">
    <ParticleHeaderBg />
    <section className="inicio" id="inicio">
      <div className="titulo">
        <p data-aos="fade-up" data-aos-delay="600">
          <FormattedMessage
            id="greeting"
            defaultMessage="Welcome to my world!"
          />
        </p>
        <h1 data-aos="fade-up" data-aos-delay="800">
          <FormattedMessage id="namess" defaultMessage="I am Kevin Haruto" />
        </h1>
        <p data-aos="fade-up" data-aos-delay="1000">
          <FormattedMessage
            id="rolss"
            defaultMessage="Web/Mobile App & Blockchain Developer"
          />
        </p>

        <div className="redes-sociales">
          <a
            href="https://join.skype.com/invite/veNNMueJlE80"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <i className="fab fa-skype"></i>
          </a>
          <a
            href="https://github.com/kstar0102/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://discord.gg/npeMySvK2j"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <i className="fab fa-discord"></i>
          </a>
        </div>
        <div className="wrapper">
          <a
            className="button"
            href="https://join.skype.com/invite/veNNMueJlE80"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="icon">
              <i className="fab fa-skype"></i>
            </div>
            <span>Skype</span>
          </a>
          <a
            className="button"
            href="https://github.com/kstar0102/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>Github</span>
          </a>
          <a
            className="button"
            href="https://discord.gg/npeMySvK2j"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <i className="fab fa-discord"></i>
            </div>
            <span>Discord</span>
          </a>
        </div>

        <Link to="sobre-mi" href="#sobre-mi">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
