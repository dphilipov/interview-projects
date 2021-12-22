import React from "react";
import "./CSSExercise.css";

// DO NOT EDIT - for reference only
function CSSExercise() {
  return (
    <div className="app">
      <header>
        <div className="header-content">
          <h1>
            <img
              src="https://s3.amazonaws.com/taulia-styles/tau-logo.png"
              alt="taulia"
            />
          </h1>
          <nav>
            <ul>
              <li>
                <a className="selected" href="http://taulia.com">
                  Invoices
                </a>
              </li>
              <li>
                <a href="http://taulia.com">Purchase Orders</a>
              </li>
              <li>
                <a href="http://taulia.com">Payments</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="content">
        <h2>Invoices</h2>
      </div>
    </div>
  );
}

export default CSSExercise;
