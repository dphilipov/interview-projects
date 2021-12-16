import React, { useState } from "react";
import TodoClass from "./components/TodoClass";
import TodoHooks from "./components/TodoHooks";
import CSSExercise from "./components/CSSExercise";
import "./App.css";

function App() {
  const [currentPage] = useState("class");

  return (
    <div className="app">
      {currentPage === "class" && <TodoClass />}
      {currentPage === "hooks" && <TodoHooks />}
      {currentPage === "css" && <CSSExercise />}
    </div>
  );
}

export default App;
