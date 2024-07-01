import React, { useState } from "react";
import "../assets/styles/HomePage.css";
import useFetch from "../hooks/useFetch";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  const { data, loading, error } = useFetch(
    "https://api.apis.guru/v2/list.json"
  );

  const [localCounter, setLocalCounter] = useState<number>(
    parseInt(localStorage.getItem("localCounter") || "0", 10)
  );

  const [sessionCounter, setSessionCounter] = useState<number>(
    parseInt(sessionStorage.getItem("sessionCounter") || "0", 10)
  );

  const incrementLocalCounter = () => {
    const newLocalCounter = localCounter + 1;
    setLocalCounter(newLocalCounter);
    localStorage.setItem("localCounter", newLocalCounter.toString());
  };

  const incrementSessionCounter = () => {
    const newSessionCounter = sessionCounter + 1;
    setSessionCounter(newSessionCounter);
    sessionStorage.setItem("sessionCounter", newSessionCounter.toString());
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const objectData = Object.keys(data);
  const tenFirst = objectData.slice(0, 10).join("\n");

  return (
    <div className="back-color">
      <div className="page-content">
        <div className="header">
          <a className="header-a" href="/">
            Home
          </a>
          <a className="header-a" href="/contact">
            Contact
          </a>
          <a className="header-a" href="/about">
            About
          </a>
        </div>
        <br />

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Home Page</h1>
          <br />
          <p>This is home page.</p>
          <br />
          <button onClick={incrementLocalCounter}>
            Local Storage Button - ({localCounter})
          </button>
          <button onClick={incrementSessionCounter}>
            Session Storage Button - ({sessionCounter})
          </button>
          <br />
          <a>
            Fetching ten first index from https://api.apis.guru/v2/list.json
            using axios and custom hook:
          </a>
          <div>
            {tenFirst.split("\n").map((provider, index) => (
              <p key={index}>{provider}</p>
            ))}
          </div>{" "}
          <br />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
