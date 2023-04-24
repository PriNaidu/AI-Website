import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
const BannerSection = () => {

  const [userEmail, setUserEmail] = useState<any>()
  
  const url = `https://app.omniengage.co/register?email=${userEmail}`

  const handleSignup = () =>{
    if(!userEmail){
      return
    }
    window.location.replace(url);
  }
  return (
    <Fragment>
      <div className="banner-section">
        <div className="wrapper">
          <div className="navbar">
            <div className="navbar-inner">
              <div className="navbar-left">
                <svg
                  width="44"
                  height="42"
                  viewBox="0 0 44 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3819 12.9366C34.3244 12.9366 38.3442 16.9565 38.3442 21.8989C38.3442 26.8413 34.3244 30.8612 29.3819 30.8612H14.602C9.65958 30.8612 5.6397 26.8413 5.6397 21.8989C5.6397 16.9565 9.65958 12.9366 14.602 12.9366H29.3819ZM29.3819 7.29688H14.602C6.53854 7.29688 0 13.8354 0 21.8989C0 29.9624 6.53854 36.5009 14.602 36.5009H29.3819C37.4454 36.5009 43.9839 29.9624 43.9839 21.8989C43.9839 13.8354 37.4454 7.29688 29.3819 7.29688Z"
                    fill="#FB5F66"
                  />
                  <path
                    d="M17.5452 21.899C17.5452 20.3416 16.2827 19.0791 14.7254 19.0791C13.168 19.0791 11.9055 20.3416 11.9055 21.899C11.9055 23.4563 13.168 24.7188 14.7254 24.7188C16.2827 24.7188 17.5452 23.4563 17.5452 21.899Z"
                    fill="#444444"
                  />
                  <path
                    d="M24.8118 21.899C24.8118 20.3416 23.5493 19.0791 21.992 19.0791C20.4346 19.0791 19.1721 20.3416 19.1721 21.899C19.1721 23.4563 20.4346 24.7188 21.992 24.7188C23.5493 24.7188 24.8118 23.4563 24.8118 21.899Z"
                    fill="#444444"
                  />
                  <path
                    d="M32.0809 21.899C32.0809 20.3416 30.8184 19.0791 29.261 19.0791C27.7037 19.0791 26.4412 20.3416 26.4412 21.899C26.4412 23.4563 27.7037 24.7188 29.261 24.7188C30.8184 24.7188 32.0809 23.4563 32.0809 21.899Z"
                    fill="#444444"
                  />
                  <path
                    d="M28.234 41.8702L23.422 33.5339H33.0484L28.234 41.8702Z"
                    fill="#FB5F66"
                  />
                  <path
                    d="M12.6336 13.0741C11.7158 13.0741 10.8146 12.6258 10.2715 11.8005L5.48558 4.49594C4.6318 3.19393 4.99703 1.44605 6.29904 0.592267C7.60106 -0.261514 9.34894 0.103715 10.2027 1.40573L14.9886 8.7103C15.8424 10.0123 15.4772 11.7602 14.1752 12.614C13.6985 12.927 13.1625 13.0764 12.6336 13.0764V13.0741Z"
                    fill="#FB5F66"
                  />
                </svg>
                <div className="logo-txt">
                  <h3>Chatbot Builder</h3>
                </div>
              </div>
              <div className="navbar-right">
                <a href="https://app.chatbotbuilder.net/login">
                  <button>Login</button>
                </a>
                <a href="https://app.chatbotbuilder.net/register">
                  {" "}
                  <button>Sign Up</button>
                </a>
              </div>
            </div>
          </div>
          <div className="banner-container">
            <div className="banner-left">
              <h1 className="banner-heading">
                Build your own <span>AI bot</span> for
                <br />
                your <span>business</span>
              </h1>
              <div className="banner-details-cont">
                <div className="banner-details">
                  Love <span>chatGPT?</span>
                  Want to create a <span>chatGPT</span> equivalent to help your
                  sales and <br />
                  support team? Use AI chatbot to build your own AI bot in
                  minutes.
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

                  <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                  <button onClick={handleSignup}>Sign up free</button>
                </div>
              </div>
            </div>
            <div className="banner-right">
              <img
                src="https://res.cloudinary.com/dghqyted6/image/upload/v1682141891/Group_988_vxnz3y.png"
                alt="AI-Bot"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BannerSection;
