import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [userEmail, setUserEmail] = useState<any>();

  const url = `https://app.chatbotbuilder.net/register?email=${userEmail}`;

  const handleSignup = (e: any) => {
    e.preventDefault();
    if (!userEmail) {
      window.location.replace(`https://app.chatbotbuilder.net/register`);
      return;
    }
    window.location.replace(url);
  };
  return (
    <div className="main-footer">
        <div className="footer-container">
          <div className="left-footer">
            <a href="https://chatbotbuilder.net/">
              <img src="https://dlvkyia8i4zmz.cloudfront.net/5eJMWyTJOMq6ze3P2ymw_cbb.svg"
                loading="lazy" alt="omniengage-logo" className="img-footer" />
            </a>
            <p>
            Leverage each touchpoint across web, mobile, sms, email, facebook messenger and whatsapp intelligently with omniengage.  
            </p>
    
            <div className="footer-socials">
             {/* <a href="https://www.facebook.com/profile.php?id=61551847258879" target="_blank">
               <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6667 23V15H11V12.3333H13.6667V10.9013C13.6667 8.19 14.9873 7 17.2407 7C18.32 7 18.8907 7.08 19.1607 7.11667V9.66667H17.624C16.6673 9.66667 16.3333 10.1713 16.3333 11.194V12.3333H19.1367L18.756 15H16.3333V23H13.6667Z" fill="#AEAEAE"/>
                <rect x="0.5" y="0.5" width="29.1607" height="29" rx="14.5" stroke="#AEAEAE"/>
               </svg>
             </a> */}
             <a href="https://www.linkedin.com/company/chatbotbuilder" target="_blank"> 
              <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.7095 7H8.61861C7.81497 7 7.16406 7.65091 7.16406 8.45455V21.5455C7.16406 22.3491 7.81497 23 8.61861 23H21.7095C22.5132 23 23.1641 22.3491 23.1641 21.5455V8.45455C23.1641 7.65091 22.5132 7 21.7095 7ZM12.2215 20.0909H10.0761V13.1876H12.2215V20.0909ZM11.127 12.2007C10.4353 12.2007 9.87606 11.64 9.87606 10.9498C9.87606 10.2596 10.4361 9.69964 11.127 9.69964C11.8164 9.69964 12.3772 10.2604 12.3772 10.9498C12.3772 11.64 11.8164 12.2007 11.127 12.2007ZM20.2579 20.0909H18.1139V16.7338C18.1139 15.9331 18.0993 14.9033 16.999 14.9033C15.8826 14.9033 15.711 15.7753 15.711 16.6756V20.0909H13.567V13.1876H15.6252V14.1309H15.6542C15.9408 13.5884 16.6404 13.016 17.6841 13.016C19.8564 13.016 20.2579 14.4458 20.2579 16.3047V20.0909Z" fill="black" fill-opacity="0.3"/>
                <rect x="0.664062" y="0.5" width="29" height="29" rx="14.5" stroke="black" stroke-opacity="0.3"/>
              </svg>                       
             </a>
             <a href="https://www.instagram.com/chatbotbuildernet/" target="_blank"> 
              <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8294 7C9.25676 7 7.16406 9.09464 7.16406 11.668V18.3346C7.16406 20.9073 9.2587 23 11.832 23H18.4987C21.0714 23 23.1641 20.9054 23.1641 18.332V11.6654C23.1641 9.0927 21.0694 7 18.4961 7H11.8294ZM19.8307 9.66667C20.1987 9.66667 20.4974 9.96533 20.4974 10.3333C20.4974 10.7013 20.1987 11 19.8307 11C19.4627 11 19.1641 10.7013 19.1641 10.3333C19.1641 9.96533 19.4627 9.66667 19.8307 9.66667ZM15.1641 11C17.3701 11 19.1641 12.794 19.1641 15C19.1641 17.206 17.3701 19 15.1641 19C12.9581 19 11.1641 17.206 11.1641 15C11.1641 12.794 12.9581 11 15.1641 11ZM15.1641 12.3333C14.4568 12.3333 13.7785 12.6143 13.2784 13.1144C12.7783 13.6145 12.4974 14.2928 12.4974 15C12.4974 15.7072 12.7783 16.3855 13.2784 16.8856C13.7785 17.3857 14.4568 17.6667 15.1641 17.6667C15.8713 17.6667 16.5496 17.3857 17.0497 16.8856C17.5498 16.3855 17.8307 15.7072 17.8307 15C17.8307 14.2928 17.5498 13.6145 17.0497 13.1144C16.5496 12.6143 15.8713 12.3333 15.1641 12.3333Z" fill="black" fill-opacity="0.3"/>
                <rect x="0.664062" y="0.5" width="29" height="29" rx="14.5" stroke="black" stroke-opacity="0.3"/>
              </svg>                       
             </a>
             <a href="https://twitter.com/chatbotbuilderx" target="_blank"> 
              <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M23.1641 10.039C22.5752 10.3005 21.9426 10.4765 21.2786 10.5559C21.9567 10.1498 22.4767 9.50673 22.7216 8.73999C22.0878 9.11598 21.3851 9.3892 20.6368 9.53688C20.038 8.89875 19.1851 8.5 18.2412 8.5C16.4283 8.5 14.9588 9.9701 14.9588 11.7823C14.9588 12.0396 14.9884 12.2906 15.0438 12.53C12.3159 12.3934 9.8975 11.0864 8.27787 9.09998C7.99603 9.58488 7.83419 10.1486 7.83419 10.751C7.83419 11.8894 8.41325 12.8943 9.29383 13.4826C8.756 13.4653 8.24956 13.3177 7.80711 13.0721C7.80711 13.0863 7.80711 13.0992 7.80711 13.1134C7.80711 14.7041 8.93815 16.0308 10.4402 16.3317C10.1652 16.4068 9.87473 16.4468 9.57505 16.4468C9.36398 16.4468 9.15783 16.4258 8.95784 16.3883C9.37567 17.6923 10.5879 18.6418 12.0242 18.6682C10.9011 19.5488 9.48582 20.0737 7.94742 20.0737C7.68281 20.0737 7.42128 20.0583 7.16406 20.0276C8.61693 20.9586 10.3418 21.502 12.1959 21.502C18.2338 21.502 21.5346 16.5003 21.5346 12.1626C21.5346 12.0205 21.5315 11.8789 21.5254 11.738C22.1672 11.2747 22.7241 10.6968 23.1641 10.039Z" fill="black" fill-opacity="0.3"/>
                <rect x="0.664062" y="0.5" width="29" height="29" rx="14.5" stroke="black" stroke-opacity="0.3"/>
              </svg>                      
             </a>
             <a href="https://www.threads.net/@chatbotbuildernet" target="_blank"> 
              <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7.16406" y="6.79688" width="16" height="16.4" rx="4" fill="black" fill-opacity="0.3"/>
                <path d="M18.0336 14.5618C17.9819 14.537 17.9294 14.5132 17.8762 14.4903C17.7836 12.7836 16.851 11.8066 15.2851 11.7966C15.278 11.7965 15.271 11.7965 15.2639 11.7965C14.3273 11.7965 13.5483 12.1963 13.0689 12.9238L13.9301 13.5146C14.2882 12.9711 14.8503 12.8553 15.2643 12.8553C15.2691 12.8553 15.2739 12.8553 15.2786 12.8553C15.7942 12.8586 16.1832 13.0085 16.4351 13.3009C16.6183 13.5137 16.7409 13.8078 16.8016 14.179C16.3444 14.1013 15.8501 14.0774 15.3216 14.1077C13.8328 14.1935 12.8757 15.0617 12.94 16.2682C12.9726 16.8802 13.2775 17.4067 13.7984 17.7507C14.2389 18.0414 14.8062 18.1836 15.3958 18.1514C16.1744 18.1088 16.7852 17.8117 17.2113 17.2685C17.5349 16.856 17.7396 16.3214 17.83 15.6479C18.2011 15.8718 18.4761 16.1665 18.6279 16.5208C18.8862 17.1229 18.9012 18.1125 18.0938 18.9192C17.3864 19.626 16.536 19.9318 15.2508 19.9412C13.8253 19.9306 12.7471 19.4734 12.0461 18.5823C11.3897 17.7479 11.0505 16.5426 11.0378 15C11.0505 13.4574 11.3897 12.2521 12.0461 11.4177C12.7471 10.5266 13.8252 10.0694 15.2508 10.0588C16.6867 10.0695 17.7837 10.5288 18.5115 11.4242C18.8684 11.8633 19.1374 12.4156 19.3148 13.0594L20.324 12.7901C20.109 11.9976 19.7707 11.3147 19.3103 10.7484C18.3772 9.60042 17.0126 9.0122 15.2543 9H15.2473C13.4926 9.01215 12.1433 9.60261 11.2368 10.755C10.4301 11.7804 10.014 13.2072 10 14.9958L10 15L10 15.0042C10.014 16.7927 10.4301 18.2196 11.2368 19.2451C12.1433 20.3974 13.4926 20.9879 15.2473 21H15.2543C16.8144 20.9892 17.914 20.5808 18.8199 19.6757C20.0051 18.4916 19.9694 17.0074 19.5787 16.0963C19.2985 15.4429 18.7642 14.9123 18.0336 14.5618ZM15.34 17.0942C14.6875 17.1309 14.0096 16.8381 13.9762 16.2108C13.9514 15.7456 14.3072 15.2266 15.3801 15.1648C15.5029 15.1577 15.6235 15.1543 15.7419 15.1543C16.1316 15.1543 16.4962 15.1921 16.8276 15.2646C16.704 16.8084 15.9789 17.0591 15.34 17.0942Z" fill="white"/>
                <rect x="0.664062" y="0.5" width="29" height="29" rx="14.5" stroke="black" stroke-opacity="0.3"/>
              </svg>                       
             </a>
            </div>
    
            <div className="footer-bottom">
            <div className="sms-box">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1666 17.8239H5.83329C3.33329 17.8239 1.66663 16.5739 1.66663 13.6572V7.82389C1.66663 4.90723 3.33329 3.65723 5.83329 3.65723L14.1666 3.65723C16.6666 3.65723 18.3333 4.90723 18.3333 7.82389V13.6572C18.3333 16.5739 16.6666 17.8239 14.1666 17.8239Z"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.1667 8.24048L11.5584 10.3238C10.7 11.0071 9.2917 11.0071 8.43337 10.3238L5.83337 8.24048"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="contact-us">
              <p>Contact us at</p>
              <a href="mailto:questions@chatbotbuilder.net">
                  questions@chatbotbuilder.net
                </a>
            </div>
          </div>

    
          </div>
          <div className="footer-center">
      <div>
      <h3>
    Navigation
       </h3>
            <ul className="quick-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-&-conditions.html">Terms & Conditions</Link></li>
            </ul>
      </div>
           <div className="opacity-6">
           <h3>
    Compare
       </h3>
            <ul className="quick-links">
              <li>Chatbase?</li>
              <li>Botsify</li>
              <li>TARS</li>
              <li>ChatFuel</li>
            </ul>
           </div>
          </div>
          <div className="right-footer">
            <h3>Recent Post</h3>
            <div className="footer-posts">
              <a className="footer-post" href="https://chatbotbuilder.net/blog/ai-chatbots-consulting/" target="_blank">
                <img className="post-img" src="https://chatbotbuilder.net/blog/wp-content/uploads/2023/08/AI-Chatbots-in-Services-1024x375.png" alt=""/>
                <div className="post-desc">
                  <h4>Consulting: How AI Chatbots in Consulting Are Transforming Professional Services </h4>
                  <span>31 August, 2023</span>
                </div>
              </a>
              <a className="footer-post" href="https://chatbotbuilder.net/blog/ai-chatbots-saas/" target="_blank">
                <img className="post-img" src="https://chatbotbuilder.net/blog/wp-content/uploads/2023/08/AI-Chatbots-in-SaaS-1024x375.png" alt=""/>
                <div className="post-desc">
                  <h4>SaaS: How AI Chatbots in SaaS Are Redefining the Industry</h4>
                  <span>31 August, 2023</span>
                </div>
              </a>
              <a className="footer-post" href="https://chatbotbuilder.net/blog/ai-chatbots-healthcare/" target="_blank">
                <img className="post-img" src="https://chatbotbuilder.net/blog/wp-content/uploads/2023/08/AI-Chatbots-in-Healthcare-1024x375.png" alt=""/>
                <div className="post-desc">
                  <h4>Healthcare: Top 5 Uses of AI Chatbots in Healthcare </h4>
                  <span>30 August, 2023</span>
                </div>
              </a>
            </div>
            <span className="see_all"><a href="https://chatbotbuilder.net/blog/" target="_blank">See All</a></span>
          </div>
        </div>
      </div>
  );
};

export default Footer;
