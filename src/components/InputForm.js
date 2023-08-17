import React, { useState } from "react";
import "./InputForm.css";

const InputForm = ({ setInputLink }) => {
  const [linkValue, setLinkValue] = useState("");

  const linkValueHandler = (event) => {
    setLinkValue(event.target.value);
  };

  // value being passed to App.js by the setInputLink from props
  const submitValueHandler = () => {
    setLinkValue("");
    setInputLink(linkValue);
  };

  return (
    <div className="center-position">
      <input
        className="input-box"
        type="text"
        placeholder="Enter a link to shorten it"
        value={linkValue}
        onChange={linkValueHandler}
      />
      <button className="shorten-button" onClick={submitValueHandler}>
        Shorten
      </button>
    </div>
  );
};

export default InputForm;
