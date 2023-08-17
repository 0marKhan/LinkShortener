import React, { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const [linkValue, setLinkValue] = useState("");

  const linkValueHandler = (event) => {
    setLinkValue(event.target.value);
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
      <button className="shorten-button" onClick={props.setInputLink}>
        Shorten
      </button>
    </div>
  );
};

export default InputForm;
