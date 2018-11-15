import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const InstrumentControls = () => {
  return (
    <div className="instrument-controls">
      <button className="btn edit">
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <div>
        <button className="btn action">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="btn action">
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className="btn action">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div>
        <button className="btn trash">
          <FontAwesomeIcon icon={faExclamation} />
        </button>
        <button className="btn trash">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default InstrumentControls;
