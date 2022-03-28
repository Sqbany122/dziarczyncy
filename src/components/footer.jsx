import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = (props) => {
  return (
    <div className="mainFooter">
      <div className="logo">
        <img src="/inc/dziarczyncy-logo.png" width="180px" className="logo" />
      </div>
      <div className="footerIconsBox">
        <FaFacebook className="footerIcon" />
        <FaInstagram className="footerIcon" />
      </div>
      <div className="contactInfo">
        <span>Wroniecka 16/3</span>
        <span>61-763 Poznań</span>
        <span>+48 577 995 300</span>
      </div>
    </div>
  );
};

export default Footer;