import { useEffect, useState } from "react";

export const ChatIcon = () => (
  <svg
    width={42}
    height={42}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
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
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF898E" />
        <stop offset={0.546875} stopColor="#EA0D17" />
        <stop offset={1} stopColor="#FB5F66" />
      </linearGradient>
    </defs>
  </svg>
);
const ExampleChtabots = () => {
  const [exampleBot, setExampleBot] = useState(0)

  useEffect(() => {
    if(exampleBot) document.getElementsByTagName("body")[0].classList.add("overflow-hd")
    else document.getElementsByTagName("body")[0].classList.remove("overflow-hd")
  }, [exampleBot])

  return (
    <>
      <div className="example_chatbots-container">
        <div className="wrapper">
          <div className="heading">
            <h4>Chatbot Examples</h4>
          </div>
          <div className="example-chatbot-wrap">
            <div className="example-chatbot-box">
              <div className="img-card">
                <picture>
                  <div className="overlay-gradient"></div>
                  <img
                    src="https://dlvkyia8i4zmz.cloudfront.net/1SKPOMyPQWzDKRk0sSeh_example1.png"
                    alt="chatbotbuilder.net"
                  />
                </picture>
                <div className="img-details">
                  <div className="img-details-left">
                    <h3>Scientific History Guide</h3>
                  </div>
                  <div className="img-details-right" onClick={() => setExampleBot(1)}>
                  <ChatIcon />
                  </div>
                </div>
              </div>
              <div className="img-card">
                <picture>
                  <div className="overlay-gradient"></div>
                  <img
                    src="https://dlvkyia8i4zmz.cloudfront.net/3Q9HGgylQlWm1YTaRezQ_example2.png"
                    alt="chatbotbuilder.net"
                  />
                </picture>
                <div className="img-details">
                  <div className="img-details-left">
                    <h3> Mental Health Guide </h3>
                  </div>
                  <div className="img-details-right" onClick={() => setExampleBot(2)}>
                    <ChatIcon />
                  </div>
                </div>
              </div>
              <div className="img-card">
                <picture>
                  <div className="overlay-gradient"></div>
                  <img
                    src="https://dlvkyia8i4zmz.cloudfront.net/0vmvRtXRKSgWqNCz1Jrg_example3.png"
                    alt="chatbotbuilder.net"
                  />
                </picture>
                <div className="img-details">
                  <div className="img-details-left">
                    <h3> Entrepreneurial Journey Guide</h3>
                  </div>
                  <div className="img-details-right" onClick={() => setExampleBot(3)}>
                    <ChatIcon />
                  </div>
                </div>
              </div>
            </div>
            {exampleBot ? <div className="outer-chat-preview-modal">
              <div className="inner-chat-preview-modal">
                { exampleBot === 1 && <iframe src="https://live.chatbotbuilder.net/demobots-293"></iframe> }
                { exampleBot === 2 && <iframe src="https://live.chatbotbuilder.net/demobots-346"></iframe> }
                { exampleBot === 3 && <iframe src="https://live.chatbotbuilder.net/demobots-307"></iframe> }
                <svg onClick={() => setExampleBot(0)} className="close-chat-preview-modal" width="22"   height="22"     viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="11" fill="white"/>
                  <g clip-path="url(#clip0_4668_11556)">
                    <path d="M16 7.00714L14.9929 6L11 9.99286L7.00714 6L6 7.00714L9.99286 11L6 14.9929L7.00714 16L11 12.0071L14.9929 16L16 14.9929L12.0071 11L16 7.00714Z" fill="#6D6D6D"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_4668_11556">
                      <rect width="10" height="10" fill="white" transform="translate(6 6)"/>
                    </clipPath>
                  </defs>
                </svg>  
              </div>
            </div> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExampleChtabots;
