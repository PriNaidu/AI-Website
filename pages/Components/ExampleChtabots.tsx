import { ChatIcon } from "./Assets";

const ExampleChtabots = () => {
  return (
    <>
      <div className="example_chatbots-container">
        <h4>Examples Chatbots</h4>
        <div className="example-chatbot-wrap">
          <div className="example-chatbot-box">
            <div className="img-card">
              <picture>
                <img
                  src="https://res.cloudinary.com/dghqyted6/image/upload/v1681993429/Omniengage%20Ai%20Website/Rectangle_246_tjw6iv.png"
                  alt=""
                />
              </picture>
              <div className="img-details">
                <div className="img-details-left">
                  <h3>Steve jobs</h3>
                  <span>Founder of Apple</span>
                </div>
                <div className="img-details-right">
                  <ChatIcon />
                </div>
              </div>
            </div>
            <div className="img-card">
              <picture>
                <img
                  src="https://res.cloudinary.com/dghqyted6/image/upload/v1681993454/Omniengage%20Ai%20Website/Rectangle_247_mitqiz.png"
                  alt=""
                />
              </picture>
              <div className="img-details">
                <div className="img-details-left">
                  <h3>Steve jobs</h3>
                  <span>Founder of Apple</span>
                </div>
                <div className="img-details-right">
                  <ChatIcon />
                </div>
              </div>
            </div>
            <div className="img-card">
              <picture>
                <img
                  src="https://res.cloudinary.com/dghqyted6/image/upload/v1681993535/Omniengage%20Ai%20Website/Rectangle_248_du6anc.png"
                  alt=""
                />
              </picture>
              <div className="img-details">
                <div className="img-details-left">
                  <h3>Steve jobs</h3>
                  <span>Founder of Apple</span>
                </div>
                <div className="img-details-right">
                  <ChatIcon />
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
