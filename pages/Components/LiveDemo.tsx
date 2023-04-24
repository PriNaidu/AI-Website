const LiveDemo = () => {
  return (
    <div className="live-demo-container">
      <div className="wrapper">
        <div className="heading">
          <h4>Live Demo</h4>
          <p>
            This chatbot was trained on a document explaining Chatbotbuilder
          </p>
        </div>
        <div className="chat-response-box">
          <div className="chat-response-head">
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
            <div className="head-details">
              <h3>Chat Response</h3>
              <span>you can see the response after save data </span>
            </div>
          </div>
          <div className="chat-response-middle">
            <picture>
              <img
                src="https://res.cloudinary.com/dghqyted6/image/upload/v1681995904/Omniengage%20Ai%20Website/remote-team-2--Work-remote-team_ix4caw.png"
                alt=""
              />
            </picture>
            <div className="no-data">No chats to show right now</div>
          </div>
          <div className="chat-response-textarea">
            <textarea name=""></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
