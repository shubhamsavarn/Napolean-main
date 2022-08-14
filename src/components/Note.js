import React from "react";
import Rocket from "../images/rocket.svg";

const Note = () => {
  const styles = {
    text: {
      fontSize: "19px",
    },
    icon: {
      height: "auto",
      width: "40%",
      margin: "20px auto",
    },
    background: {
      color: "brown",
    },
  };
  const notes = [
    {
      text: `The data is updated in every thirty minutes by our very own bot.`,
    },
    {
      text: `As of now, there isn't any data available for the past contests.`,
    },
    {
      text: `Because this is a free service, there is a rate-limiter for the backend api.`,
    },
  ];
  return (
    <div className="my-4">
      <div className="row d-flex p-md-5 px-2 py-4 align-items-center justify-content-center mx-0">
        <div className="col-12 text-center">
          <h3>
            <b>Points to remember</b>
          </h3>
        </div>
        <div className="col-12" style={styles.text}>
          <ul style={{ listStyleImage: `url(${Rocket})` }}>
            {notes.map((note, index) => {
              return (
                <li className="text-justify my-4" key={index}>
                  {note.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Note;
