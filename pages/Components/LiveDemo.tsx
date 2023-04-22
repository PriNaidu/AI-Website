import { Logo } from "./Assets";

const LiveDemo = () => {
  return (
    <div className="live-demo-container">
      <h4>Live Demo</h4>
      <p>This chatbot was trained on a document explaining Chatbotbuilder</p>
      <div className="chat-response-box">
        <div className="chat-response-head">
          <Logo/>
          <div className="head-details">
            <h3>Chat Response</h3>
             <span>you can see the response after save data </span>
          </div>
        </div>
        <div className="chat-response-middle">
          <picture>
          <img src="https://res.cloudinary.com/dghqyted6/image/upload/v1681995904/Omniengage%20Ai%20Website/remote-team-2--Work-remote-team_ix4caw.png" alt="" />
          </picture>
          <div className="no-data">
            No chats to show right now
          </div>
        </div>
        <div className="chat-response-textarea">
          <textarea name=""></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
