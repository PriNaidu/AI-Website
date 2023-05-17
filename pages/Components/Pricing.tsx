import React, { Fragment, useState } from "react";
import "./AIPricing.css"
import { features } from "process";
import AIPlan1 from "./Assets/AIPlan1";
import AIPlan2 from "./Assets/AIPlan2";
import AIPlan3 from "./Assets/AIPlan3";
import AIPlan4 from "./Assets/AIPlan4";
const Pricing = () => {
  const data = [
    {
      image: <AIPlan1 />,
      title: "Free",
      desc: "Good superb content for Advanced users  Advanced users",
      price: "$0",
      button: "Free Plan",
      features:["01 bot", "35 msg per day / 420 msg per month","File upload limit - 04 MB"]
    },
    { 
    
      image: <AIPlan2 />,
      title: "Basic",
      desc: "Good superb content for Advanced users  Advanced users",
      price: "$22",
      button: "Upgrade Plan",
      features:["04 bots", "2500 messages per month","File upload limit - 27 MB"]
    },
    { 
      image: <AIPlan3 />,
      title: "Standard",
      desc: "Good superb content for Advanced users  Advanced users",
      price: "$55",
      button: "Upgrade Plan",
      features:["18 bot", "4500 messages per month","File upload limit - 45 MB / 3.5M characters","Add your OpenAI key","100 links"]
    },
    {
      image: <AIPlan4 />,
      title: "Advanced", 
      desc: "Good superb content for Advanced users  Advanced users",
      price: "$115",
      button: "Upgrade Plan",
      features:["30 bot", "12500 messages per month","File upload limit - 55 MB / 4.5M characters","Add your OpenAI key","1000 links"]
    },
  ];

const[active, SetActive] = useState(3);

  return (
    <Fragment>
      <div className="ai-plan-flex">
        {data.map((plans , i) => (
          <div className={`aiplan-bx ${active === i ? "active-aiplan" : ""}`} key={i} onClick={()=>SetActive(i)}>
            <div className="aiplan-ing-bx">{plans.image}</div>
            <div className="aiplan-content-bx">
              <h2>{plans.title}{plans.title==="Advanced" && <span className="ai-recommend">Recommended</span>} {plans.title==="Standard" && <span className="ai-current-plan">Current Plan</span>}</h2>
              <p>{plans.desc}</p>
              <div className="ai-plan-price fx jst-sp-bt">
                <span>{plans.price}</span> per month
              </div>
              <button>{plans.button}</button>
              <ul>
                <span>Features</span>
               {
                plans.features.map((feature, index) => (

                  <li key={index}> 
                <span> {feature}</span> </li>
                )
                )
               }
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Pricing;
