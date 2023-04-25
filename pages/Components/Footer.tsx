import { useState } from "react";

const Footer = () => {
  const [userEmail, setUserEmail] = useState<any>()
  
  const url = `https://app.chatbotbuilder.net/register?email=${userEmail}`

  const handleSignup = (e:any) =>{
    e.preventDefault()
    if(!userEmail){
      return
    }
    window.location.replace(url);
  }
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo-name">
            <svg
              width={42}
              height={42}
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.3906 21.1163L33.3868 21.1721V21.2281C33.3868 22.933 33.0412 24.0084 32.5706 24.7153C32.1102 25.4069 31.4212 25.9098 30.4094 26.2711C29.3694 26.6425 28.0533 26.84 26.4475 26.9336C25.037 27.0158 23.4994 27.0144 21.8238 27.0129C21.5949 27.0127 21.3634 27.0125 21.1293 27.0125C20.8952 27.0125 20.6637 27.0127 20.4348 27.0129C18.7592 27.0144 17.2216 27.0158 15.811 26.9336C14.2053 26.84 12.8892 26.6425 11.8492 26.2711C10.8374 25.9098 10.1484 25.4069 9.68797 24.7153C9.21738 24.0084 8.87181 22.933 8.87181 21.2281C8.87181 14.4372 14.3808 8.83287 21.1293 8.83287C28.0251 8.83287 33.8658 14.1069 33.3906 21.1163Z"
                stroke="#444444"
                strokeWidth={3.30539}
              />
              <path
                d="M6.27249 10.4891C-2.58552 23.5537 6.01924 33.1719 12.9999 32.7742C13.1625 32.765 13.3024 32.8919 13.3024 33.0548V39.1467C13.3024 39.3941 13.6033 39.516 13.7756 39.3385L19.9871 32.9386C20.1026 32.8197 20.2668 32.7593 20.432 32.773C29.0521 33.4878 35.8388 31.9111 38.3493 26.9771C41.496 20.7931 38.487 13.2047 35.4571 9.89927C29.1217 1.08489 13.3024 0.120799 6.27249 10.4891Z"
                stroke="url(#paint0_linear_2495_9109)"
                strokeWidth={3.85629}
              />
              <circle cx={16.0588} cy={19.0238} r={1.72941} fill="#FB5F66" />
              <circle cx={21.247} cy={19.0238} r={1.72941} fill="#FB5F66" />
              <circle cx={26.4352} cy={19.0238} r={1.72941} fill="#FB5F66" />
              <defs>
                <linearGradient
                  id="paint0_linear_2495_9109"
                  x1={8.18766}
                  y1={3.8394}
                  x2={20.6809}
                  y2={39.8259}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF898E" />
                  <stop offset={0.546875} stopColor="#EA0D17" />
                  <stop offset={1} stopColor="#FB5F66" />
                </linearGradient>
              </defs>
            </svg>
            Chatbot Builder
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
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.1667 8.24048L11.5584 10.3238C10.7 11.0071 9.2917 11.0071 8.43337 10.3238L5.83337 8.24048"
              stroke="white"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="contact-us">
          <p>Contact us at</p>
          <span>questions@chatbotbuilder.net</span>
        </div>
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
            <form onSubmit={handleSignup}>
            <input type="email" placeholder="Enter your email" onChange={(e)=>setUserEmail(e.target.value)}/>
            <button onClick={handleSignup}>Sign up free</button>
            </form>
          </div>
        </div>
      </div>
      

      <hr />
      <p className="rights-reserved">©2023, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
