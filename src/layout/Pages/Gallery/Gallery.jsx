import React, { Component } from "react";
import galImg1 from "../../../images/gallery/alma-black-1160605-unsplash.jpg";
import galImg2 from "../../../images/gallery/benjamin-voros-1160571-unsplash.jpg";
import galImg3 from "../../../images/gallery/eberhard-grossgasteiger-1161186-unsplash.jpg";
import galImg4 from "../../../images/gallery/gautier-salles-1160094-unsplash.jpg";
import galImg5 from "../../../images/gallery/jens-johnsson-1160993-unsplash.jpg";
import galImg6 from "../../../images/gallery/johanna-buguet-1160991-unsplash.jpg";
import galImg7 from "../../../images/gallery/sakkarin-kaewsukho-1160157-unsplash.jpg";
import galImg8 from "../../../images/gallery/tamas-munkacsi-1160612-unsplash.jpg";
import galImg9 from "../../../images/gallery/yu-mp-1159664-unsplash.jpg";
import GalleryItem from "./GalleryItem";

class Gallery extends Component {
  state = {
    contents: [
      {
        image: galImg1,
        name: "Hold onto leaves",
        date: "1st Aug - 2nd Aug",
        likes: 5,
        liked: false
      },
      {
        image: galImg2,
        name: "Forest",
        date: "2nd Aug - 3rd Aug",
        likes: 8,
        liked: true
      },
      {
        image: galImg3,
        name: "Cloud",
        date: "3rd Aug - 4th Aug",
        likes: 5,
        liked: false
      },
      {
        image: galImg4,
        name: "Skateboard",
        date: "4th Aug - 5th Aug",
        likes: 9,
        liked: true
      },
      {
        image: galImg5,
        name: "Baby",
        date: "5th Aug - 6th Aug",
        likes: 4,
        liked: false
      },
      {
        image: galImg6,
        name: "Beach",
        date: "6th Aug - 7th Aug",
        likes: 3,
        liked: false
      },
      {
        image: galImg7,
        name: "Bamboo",
        date: "7th Aug - 8th Aug",
        likes: 7,
        liked: true
      },
      {
        image: galImg8,
        name: "Train",
        date: "8th Aug - 9th Aug",
        likes: 4,
        liked: false
      },
      {
        image: galImg9,
        name: "Jellyfish",
        date: "9th Aug - 10th Aug",
        likes: 7,
        liked: false
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <GalleryItem contents={this.state.contents} />
      </React.Fragment>
    );
  }
}

export default Gallery;
