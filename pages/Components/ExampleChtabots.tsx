import { useEffect, useState, useRef } from "react";

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
  const [exampleBot1, setExampleBot1] = useState<Boolean>(false);
  const [exampleBot2, setExampleBot2] = useState<Boolean>(false);
  const [exampleBot3, setExampleBot3] = useState<Boolean>(false);


  const imgRef = useRef<HTMLDivElement | null>(null);

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     const elment = imgRef.current
  //     if(elment) elment.className = "hide";
  //   },1000)
  // },[exampleBot])
  // const [isOpen, setIsOpen] = useState([false, false, false]);
  // const toggleDiv = (index: any) => {
  //   const updatedState = [...isOpen];
  //   updatedState[index] = !updatedState[index];
  //   setIsOpen(updatedState);
  // };

  // useEffect(() => {
  //   if (exampleBot)
  //     document.getElementsByTagName("body")[0].classList.add("overflow-hd");
  //   else
  //     document.getElementsByTagName("body")[0].classList.remove("overflow-hd");
  // }, [exampleBot]);

  return (
    <>
      <div className="example_chatbots-container">
        <div className="wrapper">
          <div className="heading">
            <h4>Chatbot Examples</h4>
          </div>
          <div className="example-chatbot-wrap">
            <div className="example-chatbot-box">
              <div
                className="img-chat-card"
                onClick={() => setExampleBot1(true)}
              >
                <div
                  className={`flip-card ${
                    exampleBot1 ? " flipped" : ""
                  } ${exampleBot1}`}
                >
                  <div ref={imgRef} className="img-card">
                    <div className="overlay-gradient"></div>
                    <picture>
                      <img
                        src="https://dzvexx2x036l1.cloudfront.net/calc_images/Rectangle 4689.png"
                        alt="chatbotbuilder.net"
                      />
                    </picture>
                    <div className="img-details">
                      <div className="img-details-left">
                        <h3>Scientific History Guide</h3>
                      </div>
                      <div className="img-details-right">
                        <ChatIcon />
                      </div>
                    </div>
                  </div>

                  <div className="chat-card">
                    <div className="outer-chat-preview-modal">
                      <div className="inner-chat-preview-modal">
                        <div
                          className="small-cross-icon dd"
                          onClick={(event) => {
                            event.stopPropagation();
                            setExampleBot1(false);
                          }}
                        />
                        <iframe src="https://live.chatbotbuilder.net/demobots-293?embed=true"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="img-chat-card"
                onClick={() => setExampleBot2(true)}
              >
                 <div
                  className={`flip-card ${
                    exampleBot2 ? " flipped" : ""
                  } ${exampleBot2}`}
                >
                  <div className="img-card">
                    <div className="overlay-gradient"></div>

                    <picture>
                      <img
                        src="https://dzvexx2x036l1.cloudfront.net/calc_images/Rectangle 4688.png"
                        alt="chatbotbuilder.net"
                      />
                    </picture>
                    <div className="img-details">
                      <div className="img-details-left">
                        <h3> Mental Health Guide </h3>
                      </div>
                      <div className="img-details-right">
                        <ChatIcon />
                      </div>
                    </div>
                  </div>
                  <div className="chat-card">
                    {exampleBot2 && (
                      <div className="outer-chat-preview-modal">
                        <div className="inner-chat-preview-modal">
                          <div
                            className="small-cross-icon"
                            onClick={(event) => {
                              event.stopPropagation();
                              setExampleBot2(false);
                            }}
                          ></div>
                          <iframe src="https://live.chatbotbuilder.net/demobots-346?embed=true"></iframe>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="img-chat-card"
                onClick={() => setExampleBot3(true)}
              >
                  <div
                  className={`flip-card ${
                    exampleBot3 ? " flipped" : ""
                  } ${exampleBot3}`}
                >
                  <div className="img-card">
                    <div className="overlay-gradient"></div>

                    <picture>
                      <img
                        src="https://dzvexx2x036l1.cloudfront.net/calc_images/Rectangle 4687.png"
                        alt="chatbotbuilder.net"
                      />
                    </picture>
                    <div className="img-details">
                      <div className="img-details-left">
                        <h3>Entrepreneurial Companion</h3>
                      </div>
                      <div className="img-details-right">
                        <ChatIcon />
                      </div>
                    </div>
                  </div>
                  <div className="chat-card">
                    {exampleBot3 ? (
                      <div className="outer-chat-preview-modal">
                        <div className="inner-chat-preview-modal">
                          <div className="small-cross-icon" 
                            onClick={(event) => {
                              event.stopPropagation();
                              setExampleBot3(false);
                            }}>
                                </div>
                          <iframe src="https://live.chatbotbuilder.net/demobots-307?embed=true"></iframe>
                          </div>
                      
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExampleChtabots;
