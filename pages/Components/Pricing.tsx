import React, { Fragment, useState, useEffect } from "react";
// import "./AIPricing.css"
import AIPlan1 from "./Assets/AIPlan1";
import AIPlan2 from "./Assets/AIPlan2";
import AIPlan3 from "./Assets/AIPlan3";
import AIPlan4 from "./Assets/AIPlan4";

const Pricing = ({ token }: any) => {
  const [active, SetActive] = useState(4);
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState([
    {
      image: <AIPlan1 />,
      title: "Free",
      desc: "Good superb content for Advanced users  Advanced users",
      monthly: "$0",
      yearly: "$0",
      button: "Start your 14-day free trial",
      planCode: "free_01",
      features: ["Access to create 1 bot", "Access to send up to 100 messages per month", "Access to use up to 400K characters for training a bot", "Access to train a bot using up to 500 links"],
    },
    {
      image: <AIPlan2 />,
      title: "Basic",
      desc: "Good superb content for Advanced users  Advanced users",
      monthly: "$18",
      yearly: "$180",
      button: "Start your 14-day free trial",
      planCode: "basic_01",
      features: ["Access to create up to 2 bots", "Access to send up to 3,000 messages per month", "Access to use up to 11M characters for training a bot", "Access to train a bot using up to 3,000 links", "Access to upload multiple files for bot training", "Access to configure Zapier Integration", "Access to view Conversation History", "Access to Capture Leads"],
    },
    {
      image: <AIPlan3 />,
      title: "Professional",
      desc: "Good superb content for Advanced users  Advanced users",
      monthly: "$95",
      yearly: "$950",
      button: "Start your 14-day free trial",
      planCode: "standard_01",
      features: ["Access to create up to 5 bots", "Access to send up to 15,000 messages per month", "Access to use up to 11M characters for training a bot", "Access to train a bot using up to 5,000 links", "Access to upload multiple files for bot training", "Access to configure Zapier Integration", "Access to view Conversation History", "Access to Capture Leads", "Ability to connect your OpenAI API Key"],
    },
    {
      image: <AIPlan4 />,
      title: "Advanced",
      desc: "Good superb content for Advanced users  Advanced users",
      monthly: "$375",
      yearly: "$3750",
      button: "Start your 14-day free trial",
      planCode: "advanced_01",
      features: ["Access to create up to 10 bots", "Access to send up to 42,000 messages per month", "Access to use up to 11M characters for training a bot", " Access to train a bot using Unlimited links", "Access to upload multiple files for bot training", "Access to configure Zapier Integration", "Access to view Conversation History", "Access to Capture Leads", "Ability to connect your OpenAI API Key", "Ability to Remove Chatbotbuilder branding"],

    },
  ])


  useEffect(() => {
    const svgs = [
      "https://dlvkyia8i4zmz.cloudfront.net/laOOO58rTEqLIunp3y8Q_free_plan_pricing.svg",
      "https://dlvkyia8i4zmz.cloudfront.net/xvu3hijDRuqJXkQX0vYS_Basic_plan_pricing.svg",
      "https://dlvkyia8i4zmz.cloudfront.net/DvxuWTfbQkhvfzUhTHmd_Standard_plan_pricing.svg",
      "https://dlvkyia8i4zmz.cloudfront.net/ln7AutUUT6KMHYqlqeuS_Advanced_plan_pricing.svg"
    ];
    const main = document.querySelectorAll(".aiplan-bx");
    const imgBox = document.querySelectorAll(".aiplan-ing-bx");
    const temp: any = []
    Array.from(imgBox).forEach(ele => temp.push(ele.innerHTML))
    Array.from(main).forEach((element, index) => {
      element.addEventListener("mouseenter", () => {
        imgBox[index].innerHTML = `<object type="image/svg+xml" data=${svgs[index]}><img src=${svgs[index]} alt="" /></object>`;
      });
    });

    const updatedData = data.map((item) => {
      if (checked) {
        return { ...item, planCode: `${item.planCode.slice(0, item.planCode.length - 2)}02` };
      } else {
        return { ...item, planCode: `${item.planCode.slice(0, item.planCode.length - 2)}01` };
      }
    });
    setData(updatedData);
  }, [checked]);

  return (
    <Fragment>
      <div className="ai-plan-landing">
        <div className="pricing-head">
          <h2>Choose the best plan for your business </h2>

          <div className="pricing-toggle">
            <span
              className={checked ? "monthly-label" : "monthly-label selected"}
            >
              Monthly
            </span>
            <label
              className="pricing-toggle-wrapper"
              onChange={() => {
                setChecked(!checked);
              }}
            >
              <input type="checkbox" checked={checked} />
              <span className="toggle-switch round"></span>
            </label>
            <span
              className={checked ? "yearly-label selected" : "yearly-label"}
            >
              Yearly
            </span>
          </div>
          <p>(Save 2 months with annual billing)</p>
        </div>
        <div className="ai-plan-flex">
          {data.map((plans, i) => (
            <div
              className={`aiplan-bx ${active === i ? "active-aiplan" : ""}`}
              key={i}
              onClick={() => SetActive(i)}
            >
              <div className="aiplan-ing-bx">{plans.image}</div>
              <div className="aiplan-content-bx">
                <h2 style={{ marginBottom: '5px' }} >
                  {plans.title}
                  {/* {plans.title === "Professional" && (
                    <span className="ai-recommend">Recommended</span>
                  )} */}
                  {/* {plans.title==="Standard" && <span className="ai-current-plan">Current Plan</span>} */}
                </h2>
                {/* <p>{plans.desc}</p> */}
                {" "}
                <div className="ai-plan-price fx jst-sp-bt">
                  <span>{checked ? plans.yearly : plans.monthly}</span> per
                  {checked ? " year" : " month"}
                </div>
                {!checked && plans.title === 'Basic' && !token && (
                  <button onClick={() => window.location.href = `http://app.chatbotbuilder.net/register`}>{plans.button}  </button>
                )}
                <ul>
                  <span>Features</span>
                  {plans?.features.map((feature: any, index) => (
                  <li key={index}>
                    <span> {checked && feature.slice(feature.length - 4) === 'bots' || checked && feature.slice(feature.length - 4) === 'bots' ? (
                      `Access to create up to ${feature.slice(23, 25) * 12} bots `
                    ) : (
                      feature
                    )}</span>
                  </li>
                ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Pricing;
