import React from "react";
import PageElementWrapper from "../PageElementWrapper";

const GalleryItem = ({ contents }) => {
  return (
    <React.Fragment>
      {contents.map(item => (
        <PageElementWrapper>
          <img src={item.image} alt={item.name} width={300} height={300} />
          <h1>{item.name}</h1>
          <p>{item.date}</p>
          <button>{item.likes}</button>
        </PageElementWrapper>
      ))}
    </React.Fragment>
  );
};

export default GalleryItem;
