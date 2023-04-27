import { useState } from "react";
const pricings = [
  {
    id: 1,
    plan: "Free",
    monthly: 0,
    yearly: 0,
    features: ["1 bot", "35 messages", "Size of 4MB"],
    recommeded: false,
  },
  {
    id: 2,
    plan: "Basic",
    monthly: 22,
    yearly: 14,
    features: ["4 bots", "2500 messages", "Size of 27MB"],
    recommeded: true,
  },
  {
    id: 3,
    plan: "Standard",
    monthly: 55,
    yearly: 35,
    features: ["18 bots", "4500 messages", "Size of 45 MB"],
    recommeded: false,
  },
  {
    id: 4,
    plan: "Advanced",
    monthly: 115,
    yearly: 95,
    features: ["30 bots", "12500 messages", "Size of 55 MB"],
    recommeded: false,
  },
];

const Pricing = () => {
  const url = `https://app.chatbotbuilder.net/register`
  const [isChecked, setIsChecked] = useState<any>();

  const fontStyle = {
    color: '#FB5F66',
    fontWeight: 500
  }
  const noStyle = {
    
  }

  return (
    <div className="pricing-container">
      <h3>Pricing Plan</h3>
      <div className="pricing-toggle">
        <span className="monthly-label" style={!isChecked ? fontStyle: noStyle}>Monthly</span>
        <label className="pricing-toggle-wrapper">
          <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
          <span className="toggle-switch round"></span>
        </label>
        <span className="yearly-label" style={isChecked ? fontStyle: noStyle}>Annual</span>
      </div>
      <div className="pricing-flex">
        {pricings.map((price) => {
          return (
            <div className={`pricing-box ${price.recommeded ? `` : ``}` } key={price.id}>
              <h3>{price.plan}</h3>
              <div className="per-month-year">
                <sup>$</sup>
                {!isChecked ? price.monthly : price.yearly} <span>/month</span>
              </div>
              <button onClick={()=>window.location.replace(url)}>Select plan</button>
              <div className="features-list">
                <h4>Features</h4>
                <ul>
                  {price.features.map((feature, index) => {
                    return (
                      <li key={index}>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.9 0L3.08 7.49833L1.1 5.995H0L3.08 11L11 0H9.9Z"
                            fill="#4CAF50"
                          />
                        </svg>
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
