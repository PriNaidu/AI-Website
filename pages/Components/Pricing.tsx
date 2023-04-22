import { ListTickICon } from "./Assets";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h3>Pricing Plan</h3>
      <div className="pricing-toggle">
        <span className="monthly-label">Monthly</span>
        <label className="pricing-toggle-wrapper">
          <input type="checkbox" />
          <span className="toggle-switch round"></span>
        </label>
        <span className="yearly-label">Yearly</span>
      </div>
      <div className="pricing-flex">
        <div className="pricing-box">
          <h3>Free</h3>
          <div className="per-month-year">
            <sup>$</sup>0 <span>/month</span>
          </div>
          <button>Select plan</button>
          <div className="features-list">
          <h4>Features</h4>
            <ul>
              <li><ListTickICon/> 1 bot</li>
              <li><ListTickICon/>35 messages</li>
              <li><ListTickICon/> Size of 4MB</li>
              <li><ListTickICon/> 350k characters</li>
            </ul>
          </div>
        </div>
        <div className="pricing-box box-active">
          <h3>Free</h3>
          <div className="per-month-year">
            <sup>$</sup>0 <span>/month</span>
          </div>
          <button>Select plan</button>
          <div className="features-list">
          <h4>Features</h4>
            <ul>
              <li><ListTickICon/> 1 bot</li>
              <li><ListTickICon/>35 messages</li>
              <li><ListTickICon/> Size of 4MB</li>
              <li><ListTickICon/> 350k characters</li>
            </ul>
          </div>
        </div>
        <div className="pricing-box">
          <h3>Free</h3>
          <div className="per-month-year">
            <sup>$</sup>0 <span>/month</span>
          </div>
          <button>Select plan</button>
          <div className="features-list">
          <h4>Features</h4>
            <ul>
              <li><ListTickICon/> 1 bot</li>
              <li><ListTickICon/>35 messages</li>
              <li><ListTickICon/> Size of 4MB</li>
              <li><ListTickICon/> 350k characters</li>
            </ul>
          </div>
        </div>
        <div className="pricing-box">
          <h3>Free</h3>
          <div className="per-month-year">
            <sup>$</sup>0 <span>/month</span>
          </div>
          <button>Select plan</button>
          <div className="features-list">
          <h4>Features</h4>
            <ul>
              <li><ListTickICon/> 1 bot</li>
              <li><ListTickICon/>35 messages</li>
              <li><ListTickICon/> Size of 4MB</li>
              <li><ListTickICon/> 350k characters</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
