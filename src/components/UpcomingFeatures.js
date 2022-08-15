import React from "react";
import Rocket from "../images/rocket.svg";

const UpcomingFeatures = () => {
  const styles = {
    text: {
      fontSize: "19px",
    },
  };
  const UpcomingFeatures = [
    {
      text: `VS Code Extension that enables user to directly to run remote test cases locally.`,
    },
    {
      text: `Sending alerts through push notifications 30 minutes prior to the contest.`,
    },
    {
      text: `Flutter-based hybrid application with Google OAuth to sync up saved data.`,
    },
  ];
  return (
    <div className="my-4">
      <div className="row d-flex p-md-5 px-2 py-4 align-items-center justify-content-center mx-0">
        <div className="col-12 text-center">
          <h3>
            <b>Upcoming Features</b>
          </h3>
        </div>
        <div className="col-12 text-align-center" style={styles.text}>
          <ul style={{ listStyleImage: `url(${Rocket})` }}>
            {UpcomingFeatures.map((feature, index) => {
              return (
                <li
                  className="text-justify my-4"
                  key={index}
                  style={styles.list}
                >
                  {feature.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFeatures;