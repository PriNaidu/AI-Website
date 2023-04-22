import { Logo, SMSIcon } from "./Assets";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo-name">
            <Logo />
            Chatbot Builder
          </div>
          <div className="disposal">
            DISPOSAL, DESTRUCTION AND REDACTION OF DATA 
            <br />
            Chatbot Builder’s Data Retention and Disposal Policy require <br />
            managerial approval for the disposal, destruction and deletion of
            any <br /> data. Our disposal, destruction and redaction procedures
            prevent the <br /> recovery, theft, misuse or unauthorized access of
            data.
          </div>
        </div>
      
        <div className="footer-right">
          <h6>Newsletter</h6>
          <span>
            Be the first one to know about discounts, offers and events weekly
            in your mailbox. Unsubscribe whenever you like with one click.
          </span>
          <div className="sign-up-email">
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6 3.08268L7 6.72852L1.4 3.08268V1.62435L7 5.27018L12.6 1.62435V3.08268ZM12.6 0.166016H1.4C0.623 0.166016 0 0.814974 0 1.62435V10.3743C0 10.7611 0.1475 11.1321 0.41005 11.4055C0.672601 11.679 1.0287 11.8327 1.4 11.8327H12.6C12.9713 11.8327 13.3274 11.679 13.5899 11.4055C13.8525 11.1321 14 10.7611 14 10.3743V1.62435C14 1.23757 13.8525 0.866642 13.5899 0.593152C13.3274 0.319661 12.9713 0.166016 12.6 0.166016Z"
                fill="#B9B9B9"
              />
            </svg>

            <input type="email" placeholder="Enter your email" />
            <button>Sign up free</button>
          </div>
        </div>
    
      </div>
      <div className="footer-bottom">
        <div className="sms-box">
         <SMSIcon/>
        </div>
        <div className="contact-us">
            <p>Contact us at</p>
            <span>
                questions@omnienegage.co
            </span>
        </div>
      </div>
      
      <hr />
      <p className="rights-reserved">©2022, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
