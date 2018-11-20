import React from "react";
import PageElementWrapper from "../PageElementWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const GalleryItem = ({ contents, handleLikeButton }) => {
  return (
    <React.Fragment>
      {contents.map(item => (
        <PageElementWrapper key={item.name}>
          <div className="gallery-item">
            <img
              className="gallery-img"
              src={item.image}
              alt={item.name}
              width={500}
              height={500}
            />
            <h1 className="gallery-title">{item.name}</h1>
            <p className="gallery-date">{item.date}</p>
            <button
              className={item.liked ? "gallery-btn liked" : "gallery-btn"}
              onClick={() => handleLikeButton(item.name)}
            >
              <span className="gallery-btn-icon">
                <FontAwesomeIcon icon={faHeart} />
              </span>
              {item.likes}
            </button>
          </div>
        </PageElementWrapper>
      ))}
    </React.Fragment>
  );
};

export default GalleryItem;
