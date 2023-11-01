import { useState } from "react";

const LiveDemo = () => {
  const [liveDemoIframe, setLiveDemoIframe] = useState(false)
  return (
    <div className="live-demo-container">
      <div className="wrapper">
        <div className="heading">
          <h4>Live Demo</h4>
          <p>
            This chatbot was trained on a document explaining ChatBot Builder
          </p>
        </div>
        <div className="live-demo-video">

          {!liveDemoIframe ? (
            <div className="demo-video-outer">
              <div className="thumbnail-overlay"></div>
              <div className="video-play-btn" onClick={() => setLiveDemoIframe(true)}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.1111 55.8978L55.8978 40L31.1111 24.1022V55.8978ZM40.0133 80C34.4844 80 29.2844 78.9511 24.4133 76.8533C19.5452 74.7526 15.3096 71.9022 11.7067 68.3022C8.1037 64.7052 5.25185 60.4741 3.15111 55.6089C1.05037 50.7437 0 45.5452 0 40.0133C0 34.4844 1.04889 29.2844 3.14667 24.4133C5.24741 19.5452 8.09778 15.3096 11.6978 11.7067C15.2948 8.1037 19.5259 5.25185 24.3911 3.15111C29.2563 1.05037 34.4548 0 39.9867 0C45.5156 0 50.7156 1.04889 55.5867 3.14667C60.4548 5.24741 64.6904 8.09778 68.2933 11.6978C71.8963 15.2948 74.7482 19.5259 76.8489 24.3911C78.9496 29.2563 80 34.4548 80 39.9867C80 45.5156 78.9511 50.7156 76.8533 55.5867C74.7526 60.4548 71.9022 64.6904 68.3022 68.2933C64.7052 71.8963 60.4741 74.7482 55.6089 76.8489C50.7437 78.9496 45.5452 80 40.0133 80ZM40 75.5556C49.9259 75.5556 58.3333 72.1111 65.2222 65.2222C72.1111 58.3333 75.5556 49.9259 75.5556 40C75.5556 30.0741 72.1111 21.6667 65.2222 14.7778C58.3333 7.88889 49.9259 4.44444 40 4.44444C30.0741 4.44444 21.6667 7.88889 14.7778 14.7778C7.88889 21.6667 4.44444 30.0741 4.44444 40C4.44444 49.9259 7.88889 58.3333 14.7778 65.2222C21.6667 72.1111 30.0741 75.5556 40 75.5556Z" fill="#FB5F66" />
                </svg>
              </div>
              <img src="https://dlvkyia8i4zmz.cloudfront.net/5yzFuJS6QR24Ub8ppP81_thb.png" alt="" />
            </div>
          ) : (
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tEjPe_JU4AE?si=N21pugsW6US9ocz5&playlist=tEjPe_JU4AE&loop=1&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          )}
        
        </div>


        {/* <div className="chat-response-box">
        <iframe src={`https://live.chatbotbuilder.net/demobots-275?embed=true`} height={700} width={560} />
        </div> */}
       
        {/* <div className="chat-response-box">
          <div className="chat-response-head">
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
            <div className="head-details">
              <h3>Chat Response</h3>
              <span>you can see the response after save data </span>
            </div>
          </div>
          <div className="chat-response-middle">
            <picture>
              <img
                src="	https://dlvkyia8i4zmz.cloudfront.net/he8TGQaST5K7nZC9rwyN_AI_chat_Animation__2_.svg"
                alt=""
              />
            </picture>
            <div className="no-data">No chats to show right now</div>
            <div className="branding">
              Built with
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2236 9.96076L15.2218 9.98639V10.0121C15.2218 10.795 15.0631 11.2888 14.847 11.6134C14.6356 11.9309 14.3192 12.1619 13.8547 12.3278C13.3771 12.4983 12.7728 12.589 12.0354 12.632C11.3877 12.6697 10.6817 12.6691 9.91227 12.6684C9.80716 12.6683 9.70087 12.6682 9.59338 12.6682C9.48589 12.6682 9.3796 12.6683 9.27449 12.6684C8.50509 12.6691 7.79904 12.6697 7.15132 12.632C6.414 12.589 5.80966 12.4983 5.33209 12.3278C4.86751 12.1619 4.55113 11.9309 4.33971 11.6134C4.12362 11.2888 3.96494 10.795 3.96494 10.0121C3.96494 6.89384 6.49457 4.32041 9.59338 4.32041C12.7598 4.32041 15.4418 6.74218 15.2236 9.96076Z"
                  stroke="#444444"
                  strokeWidth="1.51778"
                />
                <path
                  d="M2.77166 5.08097C-1.29579 11.08 2.65538 15.4966 5.86076 15.3139C5.93545 15.3097 5.99971 15.368 5.99971 15.4428V18.24C5.99971 18.3536 6.13783 18.4097 6.21695 18.3281L9.06919 15.3894C9.12221 15.3348 9.19762 15.3071 9.2735 15.3134C13.2317 15.6416 16.348 14.9176 17.5008 12.652C18.9457 9.81239 17.564 6.3279 16.1727 4.81012C13.2636 0.762704 5.99968 0.320008 2.77166 5.08097Z"
                  stroke="url(#paint0_linear_2782_10102)"
                  strokeWidth="1.77074"
                />
                <circle cx="7.2658" cy="9.00017" r="0.794118" fill="#FB5F66" />
                <circle cx="9.64861" cy="9.00005" r="0.794118" fill="#FB5F66" />
                <circle cx="12.0314" cy="9.00029" r="0.794118" fill="#FB5F66" />
                <defs>
                  <linearGradient
                    id="paint0_linear_2782_10102"
                    x1="3.65108"
                    y1="2.02753"
                    x2="9.38779"
                    y2="18.552"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF898E" />
                    <stop offset="0.546875" stopColor="#EA0D17" />
                    <stop offset="1" stopColor="#FB5F66" />
                  </linearGradient>
                </defs>
              </svg>
              Chatbot Builder
            </div>
          </div>
          <div className="chat-response-textarea">
            <input type="text" placeholder="Compose your message...." />
            <button>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.08383 0.223155L18.4638 8.9055C18.7442 9.04557 18.8595 9.38955 18.7214 9.6738C18.6662 9.78721 18.5757 9.87899 18.4638 9.93487L1.08419 18.617C0.803812 18.7571 0.46452 18.6402 0.326362 18.356C0.265949 18.2317 0.251945 18.0894 0.286936 17.9555L2.00887 11.3631C2.06582 11.1451 2.24346 10.9811 2.46289 10.9441L10.2516 9.62747C10.347 9.61134 10.4259 9.54748 10.4638 9.46067L10.4842 9.39165C10.5062 9.25768 10.4328 9.12995 10.3143 9.07979L10.2516 9.0615L2.41891 7.73803C2.1994 7.70093 2.0217 7.53686 1.9648 7.31874L0.286543 0.884597C0.206595 0.57825 0.386745 0.264201 0.688918 0.183149C0.821004 0.147719 0.961274 0.161929 1.08383 0.223155Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div> */}
        {/* <div>
          <div className='op-interactive' id='null' data-title='undefined' data-url='https://live.chatbotbuilder.net/chatbotbuilder-1' data-width='100%'></div> <script src='//dyv6f9ner1ir9.cloudfront.net/assets/js/nloader.js'></script><script>initIframe('null');</script> </div> 
          */}
      </div>
    </div>
  );
};

export default LiveDemo;
