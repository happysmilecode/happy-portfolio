import React from "react";
import "../../pages/Service/ServicesPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Service = () => (
  <section className="servicios" id="servicios">
    <h2 className="heading">
      <FormattedMessage id="services" defaultMessage="Services" />
    </h2>
    <div className="row">
      <div className="columns" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-laptop"></i>
        <h3>
          <FormattedMessage id="development" defaultMessage="Web development" />
        </h3>
        <p>
          <FormattedMessage
            id="development-info"
            defaultMessage="Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website."
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-mobile-alt"></i>
        <h3>
          <FormattedMessage
            id="developments"
            defaultMessage="Mobile App Development"
          />
        </h3>
        <p>
          <FormattedMessage
            id="development-infos"
            defaultMessage="With my expertise in Mobile/Desktop app development, we can build high-performance mobile/desktop applications tailored specifically to Android/iOS and Windows/Linux/MacOS. Your app will leverage the full potential of the operating system, resulting in optimal performance and reliability."
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="300">
        <i className="fab fa-btc"></i>
        <h3>
          <FormattedMessage
            id="developments"
            defaultMessage="Blockchain Development"
          />
        </h3>
        <p>
          <FormattedMessage
            id="development-infos"
            defaultMessage="Specialize in building decentralized applications that leverage the power of blockchain technology. Our DApps offer enhanced security, immutability, and transparency, enabling you to revolutionize your industry and provide unique user experiences."
          />
        </p>
      </div>
    </div>
    <div className="portafolio-btn">
      <Link to="/service">
        <ButtomGet />
      </Link>
    </div>
  </section>
);

export default React.memo(Service);
