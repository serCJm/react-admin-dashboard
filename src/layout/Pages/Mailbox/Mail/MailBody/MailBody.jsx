import React from "react";

const MailBody = () => {
  return (
    <div className="mail-body">
      <p>
        <strong>Hi CJ,</strong>
      </p>
      <p>
        Hey, whoa, just where do you think you're going? Master Luke here is
        your rightful owner. We'll have no more of this Obi-Wan Kenobi
        jibberish...and don't talk to me about your mission, either. You're
        fortunate he doesn't blast you into a million pieces right here. What's
        wrong with him now? Oh my...sir, he says there are several creatures
        approaching from the southeast. Sandpeople! Or worst! Come on, let's
        have a look. Come on. There are two Banthas down there but I don't see
        any...wait a second, they're Sandpeople all right. I can see one of them
        now.
      </p>
      <p>
        Chewie! Get behind me! Get behind me! Can't get out that way. Looks like
        you managed to cut off our only escape route. Maybe you'd like it back
        in your cell, Your Highness:
      </p>
      <ul className="mail-body-list">
        <li>See-Threepio! See-Threepio! Yes sir?</li>
        <li>
          We've been cut off! Are there any other ways out of the cell bay?
        </li>
        <li>What was that? I didn't copy! </li>
        <li>I said, all systems have been alerted to your presence, sir. </li>
      </ul>
      <blockquote className="mail-body-quote">
        <span>
          He says it's the best he can do. Since the XP-38 came out, they're
          just not in demand. It will be enough. If the ship's as fast as he's
          boasting, we ought to do well.
        </span>
      </blockquote>
      <div>
        <strong>Sincerely,</strong>
      </div>
      <div>
        <strong>Look Skytalker</strong>
      </div>
    </div>
  );
};

export default MailBody;
