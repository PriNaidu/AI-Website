import { Fragment, useState } from "react";
const FAQs = [
  {
    id: 1,
    ques: "Where can I embed the chatbot?",
    ans: "All plans you will be able to embed the chatbot anywhere",
  },
  {
    id: 2,
    ques: "Can I use my own OpenAI key?",
    ans: "Yes on the Advanced plan you can use your openAI key and this allows you to override the limits in a plan.",
  },
  {
    id: 3,
    ques: "Can I get help importing data or setting up the chatbot?",
    ans: `We try to make it easy to setup and import the data but we would be happy to help you you can reach out to us at questions@chatbotbuilder.net! `,
  },
  {
    id: 4,
    ques: "Which plans allow me to remove the built with Chatbot Builder?",
    ans: "The Standard and advanced plan allow you to remove the built with chatbot builder logo.",
  },
];
const LaunchChatbot = () => {
  const [showAns, setShowAns] = useState<any>();

  const handleShowFaq = (index: any) => {
    if (showAns === index) {
      setShowAns(null);
    } else {
      setShowAns(index);
    }
  };
  const faqStyle = {
    height: `110px`
  }
  return (
    <Fragment>
      <div className="launchbot-container">
        <div className="wrapper">
          <div className="launchbot-head">
            <h3>
              Launch your first chatbot in <span>minutes!</span>
            </h3>
            <button>Try free</button>
          </div>
          <div className="launchbot-options">
            <h5>Frequently asked questions</h5>
            <ul className="launchbot-list">
              {FAQs.map((faq, index) => {
                return (
                  <li
                    className="faq-ques"
                    style={{height: `${showAns === index ? `120px`: `85px`}`}}
                    key={faq.id}
                    onClick={() => handleShowFaq(index)}
                  >
                    <span
                      className={`${showAns === index ? "active-ques" : ""}`}
                    >
                      {faq.ques}
                      {showAns === index ? (
                        <svg
                          width="13"
                          height="3"
                          viewBox="0 0 13 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.879689 2.5C0.648475 2.5 0.451943 2.45238 0.290093 2.35714C0.151365 2.24603 0.0820007 2.11111 0.0820007 1.95238V1.04762C0.0820007 0.888889 0.151365 0.761904 0.290093 0.666667C0.451943 0.555556 0.648475 0.5 0.879689 0.5H11.2843C11.5155 0.5 11.7005 0.555556 11.8392 0.666667C12.0011 0.761904 12.082 0.888889 12.082 1.04762V1.95238C12.082 2.11111 12.0011 2.24603 11.8392 2.35714C11.7005 2.45238 11.5155 2.5 11.2843 2.5H0.879689Z"
                            fill="#FB5F66"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.78 12.374C5.63333 12.374 5.50867 12.3226 5.406 12.22C5.30333 12.1173 5.252 11.9926 5.252 11.846V7.55598H1.028C0.881333 7.55598 0.756667 7.50464 0.654 7.40198C0.551333 7.29931 0.5 7.17464 0.5 7.02798V5.86198C0.5 5.70064 0.551333 5.57598 0.654 5.48798C0.756667 5.38531 0.881333 5.33398 1.028 5.33398H5.252V1.15398C5.252 1.00731 5.30333 0.882643 5.406 0.779977C5.50867 0.67731 5.63333 0.625977 5.78 0.625977H7.056C7.21733 0.625977 7.342 0.67731 7.43 0.779977C7.53267 0.882643 7.584 1.00731 7.584 1.15398V5.33398H11.808C11.9547 5.33398 12.0793 5.38531 12.182 5.48798C12.2847 5.57598 12.336 5.70064 12.336 5.86198V7.02798C12.336 7.17464 12.2847 7.29931 12.182 7.40198C12.0793 7.50464 11.9547 7.55598 11.808 7.55598H7.584V11.846C7.584 11.9926 7.53267 12.1173 7.43 12.22C7.342 12.3226 7.21733 12.374 7.056 12.374H5.78Z"
                            fill="#666666"
                          />
                        </svg>
                      )}
                    </span>
                    <p
                      style={{
                        opacity: `${showAns === index ? "1" : "0"}`,
                      }}
                    >
                      
                    {faq.ans}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LaunchChatbot;
