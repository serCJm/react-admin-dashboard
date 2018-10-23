import React from "react";

const SocialTogglesRow = props => {
  return (
    <React.Fragment>
      {props.contents.map(item => (
        <tr className="social-toggle-row" key={item.text}>
          <td className="social-toggle-network">
            <span className={item.text}>{item.icon}</span>
            {item.text === "google-plus" ? "google+" : item.text}
          </td>
          <td>
            {item.text === "instagram" ? (
              <button className="insta-connect">Connect</button>
            ) : (
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
              </label>
            )}
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
};

export default SocialTogglesRow;
