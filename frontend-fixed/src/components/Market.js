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

      {/* ✅ Removed Pro Tip section */}

      <div className="market-focus">
        <h3>Key Focus Countries</h3> {/* ✅ Simplified heading */}
        <p>India, Netherlands, China, Germany, USA</p>
      </div>
    </section>
  );
};

export default Market;