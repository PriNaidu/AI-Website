import Link from "next/link";
import { Logo } from "./Assets";
import Image from "next/image";
const BannerSection = () => {
  return (
    <>
      <div className="banner-section">
        <div className="navbar">
          <div className="navbar-left">
            <Logo />
            <div className="heading">
              <h1>Chatbot Builder</h1>
               </div>
          </div>
          <div className="navbar-right">
            <a href="https://app.chatbotbuilder.net/login"><button>Login</button></a>
  
   
         
          <a href="https://app.chatbotbuilder.net/register">  <button>Sign Up</button></a>
          </div>
        </div>
        <div className="banner-container">
          <div className="banner-left">
            <div className="banner-heading">
              Build your own <span>AI bot</span> for
              <br />
              your <span>business</span>
            </div>
         <div className="banner-details-cont">
         <div className="banner-details">
              Love <span>chatGPT?</span>
              Want to create a <span>chatGPT</span> equivalent to help your
              sales and <br />
              support team? Use AI chatbot to build your own AI bot in minutes.
            </div>
            <div className="banner-details">
              We can learn from your support docs, support conversations and
              from your <br />
              sales conversations. You can add a <span>PDF</span> or{" "}
              <span>URL.</span>
            </div>
         </div>
            <div className="no-card-credit-signup">
              <div className="credit-free-trial">
                <p>
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.49888L3.77143 10L0 6.10365L0.966857 5.10477L3.77143 7.99515L11.0331 0.5L12 1.49888Z"
                      fill="#239428"
                    />
                  </svg>
                  No credit card required
                </p>
                <p>
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.49888L3.77143 10L0 6.10365L0.966857 5.10477L3.77143 7.99515L11.0331 0.5L12 1.49888Z"
                      fill="#239428"
                    />
                  </svg>
                  14 days free trial
                </p>
              </div>
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
          <div className="banner-right">
            <picture>
              <img
                src="https://res.cloudinary.com/dghqyted6/image/upload/v1681968982/Omniengage%20Ai%20Website/hero-image_sil9ju.png"
                alt="banner image"
              />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};
export default BannerSection;
