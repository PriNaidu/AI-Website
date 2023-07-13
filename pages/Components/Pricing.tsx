import React, { Fragment, useState, useEffect } from "react";
// import "./AIPricing.css"
import AIPlan1 from "./Assets/AIPlan1";
import AIPlan2 from "./Assets/AIPlan2";
import AIPlan3 from "./Assets/AIPlan3";
import AIPlan4 from "./Assets/AIPlan4";

const Pricing = ({token}:any) => {
  const [active, SetActive] = useState(4);
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState([
    {
      image: <AIPlan1 />,
      title: "Free",
      desc: "Good superb content for Advanced users  Advanced users",
      monthly: "$0",
      yearly: "$0",
      button: "Free Plan",
      planCode: "free_01",
      features: [
        "1 Chatbot",
        "500 Message Credits/Month",
        "1,000,000 Characters/Bot",
        "Upload Multiple Files Up To 10 MB",
        "Embed On Multiple Websites"
      ],
    },
    {
      image: <AIPlan2 />,
      title: "Basic",
      desc: "Good superb content for Advanced users  Advanced users",
      monthly: "$22",
      yearly: "$220",
      button: "Select Plan",
      planCode: "basic_01",
      features: [
        "5 Chatbots",
        "3000 Message Credits/Month",
        "4,000,000 Characters/Bot",
        "Upload Multiple Files Up To 27 MB",
        "Embed On Multiple Websites"
      ],
    },
    {
      image: <AIPlan3 />,
      title: "Standard",
      desc: "Good superb content for Advanced users  Advanced users",
      monthly: "$55",
      yearly: "$550",
      button: "Select Plan",
      planCode: "standard_01",
      features: [
        "20 Chatbots",
        "7000 Message Credits/Month",
        "6,000,000 Characters/Bot",
        "Upload Multiple Files Up To 45 MB",
        "Embed On Multiple Websites",
        "Ability to connect your OpenAI API Key"
      ],
    },
    {
      image: <AIPlan4/>,
      title: "Advanced",
      desc: "Good superb content for Advanced users  Advanced users",
      monthly: "$115",
      yearly: "$1150",
      button: "Select Plan",
      planCode: "advanced_01",
      features: [
        "35 Chatbots",
        "14000 Message Credits/Month",
        "11,000,000 Characters/Bot",
        "Upload Multiple Files Up To 70 MB",
        "Embed On Multiple Websites",
        "Ability to connect your OpenAI API Key"
      ],
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
    const temp: any =[]
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
        return { ...item,  planCode: `${item.planCode.slice(0, item.planCode.length - 2)}01` };
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
                <h2>
                  {plans.title}
                  {plans.title === "Standard" && (
                    <span className="ai-recommend">Recommended</span>
                  )}
                  {/* {plans.title==="Standard" && <span className="ai-current-plan">Current Plan</span>} */}
                </h2>
                {/* <p>{plans.desc}</p> */}
                <div className="ai-plan-price fx jst-sp-bt">
                  <span>{checked ? plans.yearly : plans.monthly}</span> per
                  month
                </div>
                <button disabled={plans.title === 'Free'} onClick={() => window.location.href = token ? "http://app.chatbotbuilder.net/settings?plan" :
                 `http://app.chatbotbuilder.net/register?plan_code=${plans.planCode}` }>{plans.button}</button>
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
