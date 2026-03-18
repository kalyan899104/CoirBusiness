import React from "react";
import "./Market.css";

const Market = () => {
  return (
    <section id="market" className="market">
      <h2>Market Insight</h2>

      <div className="market-block">
        <h3>Premium Markets (High margins)</h3>
        <p>USA, Netherlands, UK, Germany, Japan</p>
      </div>

      <div className="market-block">
        <h3>Volume Markets (Bulk sales)</h3>
        <p>China, Vietnam, South Korea</p>
      </div>

      <div className="market-block">
        <h3>Emerging Growth</h3>
        <p>Southeast Asia & Europe</p>
      </div>

      <div className="market-tip">
        <h3>💡 Pro Tip (Export Strategy)</h3>
        <ul>
          <li>Start with <strong>Netherlands</strong> → gateway to full Europe</li>
          <li>Target <strong>USA</strong> for branded/retail packs (higher profits)</li>
          <li>Use <strong>Vietnam/China</strong> for bulk orders to maintain volume</li>
        </ul>
      </div>

      <div className="market-focus">
        <h3>Key Focus Countries (from Suresh@vizag)</h3>
        <p>India, Netherlands, China, Germany, USA</p>
      </div>
    </section>
  );
};

export default Market;