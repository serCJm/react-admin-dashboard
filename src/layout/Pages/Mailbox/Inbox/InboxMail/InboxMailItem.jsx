import React from "react";

const InboxMailItem = ({ contents }) => {
  return (
    <ul className="inbox-mail">
      {contents.map((item, i) => (
        <li key={item.name + 1} className="inbox-mail-item">
          <div className="inbox-mail-main">
            <img
              className={`inbox-mail-avatar ${item.labelStyle}`}
              src={item.avatar}
              width={50}
              height={50}
              alt={item.name}
            />
            <div>
              <h3>
                {item.name}
                {item.count ? <span> ({item.count})</span> : null}
              </h3>

              <p className="inbox-mail-text">
                <span className={`inbox-mail-label ${item.labelStyle}`}>
                  {item.labelText}
                </span>
                {item.mailContent}
              </p>
            </div>
          </div>
          <div className="inbox-mail-date">
            <p>{item.date}</p>
            <p>#{i + 1}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InboxMailItem;
