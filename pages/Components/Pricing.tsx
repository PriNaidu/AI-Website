import { useState } from "react";
import { ListTickICon } from "./Assets";
import { pricings } from "./Pricings";

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
                  {price.features.map((feature) => {
                    return (
                      <li>
                        <ListTickICon /> {feature}
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
