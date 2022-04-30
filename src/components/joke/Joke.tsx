import React, { useState, useEffect } from "react";
import Emogi from "../../assets/img/laughing.svg";

import "./joke.styles.css";
import generateJoke from "../../utils/generateJoke";

const Joke = () => {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateJoke = () => {
    setLoading(true);
    generateJoke()
      .then((joke) => {
        setJoke(joke);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    handleGenerateJoke();
    return () => {
      setJoke("");
    };
  }, []);

  if (error) {
    return <div className="joke__container">{error}</div>;
  }

  return (
    <div className="joke__container">
      <img src={Emogi} alt="" />
      <h3>Don't Laugh Challenge</h3>
      <div className="joke">
        {loading ? (
          <i className="bx bx-loader-circle bx-spin bx-flip-horizontal"></i>
        ) : (
          joke
        )}
      </div>

      <button onClick={() => handleGenerateJoke()} className="button">
        New Joke
      </button>
    </div>
  );
};

export default Joke;
