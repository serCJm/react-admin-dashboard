import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ComposeButtons = () => {
  return (
    <div className="instrument-controls">
      <div>
        <button className="btn reverse">
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </button>
        <button className="btn close">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default ComposeButtons;
