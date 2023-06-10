import React, { Fragment, useState } from "react";
// import "./AIPricing.css"
import { features } from "process";
import {AIPlan1, AIAnimateFreePlan} from "./Assets/AIPlan1";
import AIPlan2 from "./Assets/AIPlan2";
import AIPlan3 from "./Assets/AIPlan3";
import AIPlan4 from "./Assets/AIPlan4";



const Pricing = () => {
  const data = [
    {
      image: <AIPlan1 />,
      title: "Free",
      desc: "Good superb content for Advanced users  Advanced users",
      monthly: "$0",
      yearly: "$0",
      button: "Free Plan",
      features: [
        "01 bot",
        "420 msg per month",
        "Training limit - 500k characters/bot",
      ],
    },
    {
      image: <AIPlan2 />,
      title: "Basic",
      desc: "Good superb content for Advanced users  Advanced users",
      monthly: "$22",
      yearly: "$14",
      button: "Select Plan",
      features: [
        "04 bots",
        "2500 messages per month",
        "Training limit - 1.5M characters/bot",
      ],
    },
    {
      image: <AIPlan3 />,
      title: "Standard",
      desc: "Good superb content for Advanced users  Advanced users",
      monthly: "$55",
      yearly: "$35",
      button: "Select Plan",
      features: [
        "18 bot",
        "4500 messages per month",
        "Training limit - 3M characters/bot",
        "Add your OpenAI key",
      ],
    },
    {
      image: <AIPlan4 />,
      title: "Advanced",
      desc: "Good superb content for Advanced users  Advanced users",
      monthly: "$115",
      yearly: "$95",
      button: "Select Plan",
      features: [
        "30 bot",
        "12500 messages per month",
        "Training limit - 5M characters/bot",
        "Add your OpenAI key",
      ],
    },
  ];

  const [active, SetActive] = useState(4);
  const [checked, setChecked] = useState(false);
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
                <h2>
                  {plans.title}
                  {plans.title === "Advanced" && (
                    <span className="ai-recommend">Recommended</span>
                  )}
                  {/* {plans.title==="Standard" && <span className="ai-current-plan">Current Plan</span>} */}
                </h2>
                <p>{plans.desc}</p>
                <div className="ai-plan-price fx jst-sp-bt">
                  <span>{checked ? plans.yearly : plans.monthly}</span> per
                  month
                </div>
                <button>{plans.button}</button>
                <ul>
                  <span>Features</span>
                  {plans.features.map((feature, index) => (
                    <li key={index}>
                      <span> {feature}</span>{" "}
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
