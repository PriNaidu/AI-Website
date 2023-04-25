import { useState } from "react";
const pricings = [
  {
    id: 1,
    plan: "Free",
    monthly: 0,
    yearly: 0,
    features: ["1 bot", "35 messages", "Size of 4MB", "350k characters"],
    recommeded: false,
  },
  {
    id: 2,
    plan: "Basic",
    monthly: 22,
    yearly: 120,
    features: ["4 bots", "2500 messages", "Size of 27MB", "3.5m characters"],
    recommeded: true,
  },
  {
    id: 3,
    plan: "Basic",
    monthly: 55,
    yearly: 400,
    features: ["18 bots", "4500 messages", "Size of 45 MB", "3.5m characters"],
    recommeded: false,
  },
  {
    id: 4,
    plan: "Basic",
    monthly: 115,
    yearly: 900,
    features: ["30 bots", "12500 messages", "Size of 55 MB", "4.5m characters"],
    recommeded: false,
  },
];

const Pricing = () => {
  const [isChecked, setIsChecked] = useState<any>();

  return (
    <div className="pricing-container">
      <h3>Pricing Plan</h3>
      <div className="pricing-toggle">
        <span className="monthly-label">Monthly</span>
        <label className="pricing-toggle-wrapper">
          <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
          <span className="toggle-switch round"></span>
        </label>
        <span className="yearly-label">Yearly</span>
      </div>
      <div className="pricing-flex">
        {pricings.map((price) => {
          return (
            <div className={`pricing-box ${price.recommeded ? `box-active` : ``}` } key={price.id}>
              <h3>{price.plan}</h3>
              <div className="per-month-year">
                <sup>$</sup>
                {!isChecked ? price.monthly : price.yearly} <span>{!isChecked ? '/month' : '/year'}</span>
              </div>
              <button>Select plan</button>
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
