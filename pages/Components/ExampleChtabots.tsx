import { useState } from "react";

export const ChatIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9666 24.5C11.1985 24.5 10.475 24.1104 9.96289 23.4314L8.29314 21.205C8.25974 21.1605 8.12616 21.1048 8.0705 21.0937H7.51391C2.87199 21.0937 0 19.8358 0 13.5798V8.01391C0 3.09369 2.59369 0.5 7.51391 0.5H16.4193C21.3395 0.5 23.9332 3.09369 23.9332 8.01391V13.5798C23.9332 18.5 21.3395 21.0937 16.4193 21.0937H15.8627C15.7737 21.0937 15.6957 21.1382 15.6401 21.205L13.9703 23.4314C13.4583 24.1104 12.7347 24.5 11.9666 24.5ZM7.51391 2.16976C3.52876 2.16976 1.66976 4.02876 1.66976 8.01391V13.5798C1.66976 18.6113 3.39518 19.4239 7.51391 19.4239H8.0705C8.63822 19.4239 9.28386 19.7468 9.62894 20.2032L11.2987 22.4295C11.6883 22.9416 12.2449 22.9416 12.6345 22.4295L14.3043 20.2032C14.6716 19.7134 15.2505 19.4239 15.8627 19.4239H16.4193C20.4045 19.4239 22.2635 17.5649 22.2635 13.5798V8.01391C22.2635 4.02876 20.4045 2.16976 16.4193 2.16976H7.51391Z"
      fill="#FB5F66"
    />
    <path
      d="M11.9666 12.4666C11.3432 12.4666 10.8534 11.9657 10.8534 11.3534C10.8534 10.7412 11.3543 10.2403 11.9666 10.2403C12.5788 10.2403 13.0797 10.7412 13.0797 11.3534C13.0797 11.9657 12.5899 12.4666 11.9666 12.4666Z"
      fill="#FB5F66"
    />
    <path
      d="M16.4193 12.4666C15.7959 12.4666 15.3062 11.9657 15.3062 11.3534C15.3062 10.7412 15.8071 10.2403 16.4193 10.2403C17.0316 10.2403 17.5325 10.7412 17.5325 11.3534C17.5325 11.9657 17.0427 12.4666 16.4193 12.4666Z"
      fill="#FB5F66"
    />
    <path
      d="M7.51393 12.4666C6.89055 12.4666 6.40076 11.9657 6.40076 11.3534C6.40076 10.7412 6.90168 10.2403 7.51393 10.2403C8.12617 10.2403 8.6271 10.7412 8.6271 11.3534C8.6271 11.9657 8.13731 12.4666 7.51393 12.4666Z"
      fill="#FB5F66"
    />
  </svg>
);
const ExampleChtabots = () => {
  const [exampleBot, setExampleBot] = useState(0)

  return (
    <>
      <div className="example_chatbots-container">
        <div className="wrapper">
          <div className="heading">
            <h4>Examples Chatbots</h4>
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
                    <h3>Professor Discovery</h3>
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
                    <h3>Serenity </h3>
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
                    <h3>EntrepreXplorer</h3>
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
