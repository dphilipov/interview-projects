import React from "react";
import "./CSSExercise.css";

// DO NOT EDIT - for reference only
function CSSExercise() {
  return (
    <div class="app">
      <header>
        <div class="header-content">
          <h1>
            <img
              src="https://s3.amazonaws.com/taulia-styles/tau-logo.png"
              alt="taulia"
            />
          </h1>
          <nav>
            <ul>
              <li>
                <a class="selected" href="#">
                  Invoices
                </a>
              </li>
              <li>
                <a href="#">Purchase Orders</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div class="content">
        <h2>Invoices</h2>
      </div>
    </div>
  );
}

export default CSSExercise;
