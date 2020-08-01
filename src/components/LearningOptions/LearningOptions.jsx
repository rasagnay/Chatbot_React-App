import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Explore Mirror",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Help", handler: () => {}, id: 2 },
    { text: "Contact Us", handler: () => {}, id: 3 },
   
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;