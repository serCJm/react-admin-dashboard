import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const SinglePostBody = () => {
  return (
    <div className="single-post-body p3">
      <h1 className="mtb05 heading1">Lorem ipsum dolor sit amet</h1>
      <div className="fsb">
        <p className="mb0 text text--small">
          by <span className="text--green">CJ Moro</span> / Dec 8, 2018
        </p>
        <p className="mb0 text text--small readtime">
          <FontAwesomeIcon icon={faClock} /> 2 minutes read
        </p>
      </div>
      <p className="mtb05 text text--black">
        Donec leo nulla, elementum volutpat nunc et, sagittis sollicitudin
        ligula. Nulla non placerat tortor. Phasellus commodo libero eu nisi
        sollicitudin rhoncus.
      </p>
      <p className="text">
        Curabitur laoreet tellus eu nisl accumsan, vitae tristique nisl
        dignissim. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nulla odio lorem,
        <span className="text--green"> sollicitudin</span> at enim sed,
        imperdiet egestas odio. Suspendisse est velit, consequat id molestie
        tincidunt, ultricies id dui. Aliquam interdum sit amet neque vitae
        sodales. Nulla id malesuada sapien. Nulla facilisi. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras
        eu lectus ullamcorper, faucibus justo vel, tempus ante. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Fusce imperdiet lacus quam,
        luctus commodo felis condimentum non.
      </p>
      <div className="mtb1 embed-video-container">
        <iframe
          className="embed-video"
          title="glitch-mob"
          src="https://www.youtube.com/embed/IAhHtPayTUE"
          width="853"
          height="480"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <h2 className="mtb05 heading2">Ut efficitur finibus odio</h2>
      <p className="text">
        Maecenas cursus nisi laoreet gravida rutrum.{" "}
        <span className="text--emph">Ut a interdum arcu.</span>
      </p>
      <blockquote className="text quote">
        Aliquam ante mauris, luctus eu tincidunt quis, finibus nec urna. Aliquam
        pellentesque lectus sed nunc rhoncus, id convallis sapien eleifend.
      </blockquote>
      <p className="text">
        Nam risus risus, fringilla sed magna ac, vestibulum lacinia tellus. In
        non turpis dictum, rutrum justo ut, lobortis diam. Ut id risus vitae
        felis dictum suscipit. Proin in commodo arcu. In eget ante tortor. Donec
        erat nisl, varius sit amet lorem vestibulum, volutpat ornare diam. Cras
        ut mollis ex. Cras porttitor, felis a rhoncus rhoncus, mi nunc luctus
        turpis, sit amet sagittis eros nisl non augue.{" "}
      </p>
      <p className="text">
        TAGGED IN: <span className="text--green pntr">SCIENCE</span> &#183;{" "}
        <span className="text--green pntr">PROGRAMMING</span>
      </p>
    </div>
  );
};

export default SinglePostBody;
