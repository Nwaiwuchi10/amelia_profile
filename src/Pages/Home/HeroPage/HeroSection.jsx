import woman from "../../../assets/images/enhancedHero.jpeg";
import "./Hero.css";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { BiLogoTelegram } from "react-icons/bi";
import whatsapp from "../../../assets/images/whatsapp.png";
export default function HeroSection() {
  const phoneNumber = "+19082575473";
  const WhatsappClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Amelia Clara Susan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Financial Consultant
            </span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
            Amelia Clara Susan is an investment advisor with over 15 years of
            experience, dealing and investing in crypto currency and other
            related financial markets. She is a very professional stock broker
            who executes financial transactions to registered securities broker.
            {/* I am a crypto trading expert who possess a deep understanding on
            different cryptocurrencies, market dynamics, technical analysis,
            risk management, and trading strategies with over 15years of
            experience. */}
          </p>
          <div className="icons-div">
            <div>
              <span>
                <SiGmail />
              </span>
              <span>ameliaclarasusan@gmail.com</span>{" "}
            </div>
            <div>
              <span>
                <BiLogoTelegram />
              </span>
              <span>@Ameliaclarasusan</span>
            </div>
            <div>
              <span>
                <IoCall />
              </span>
              <span>+19082575473</span>{" "}
            </div>
          </div>
        </div>

        <button className="btn btn-github" onClick={WhatsappClick}>
          Get In Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src={woman} alt="Hero Section" />
      </div>
      <div className="whatsapp-img-div">
        <div className="whatsapp-img-size" onClick={WhatsappClick}>
          <img src={whatsapp} alt="whatsapp" className="whatsapp-img" />
        </div>{" "}
      </div>
    </section>
  );
}
