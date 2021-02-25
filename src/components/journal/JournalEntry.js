import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://www.w3schools.com/w3css/img_lights.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo día</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          eligendi ab modi esse quas eveniet, totam nobis non sequi perferendis?
        </p>
      </div>
      <div className="journal__entry-date-box">
          <span>Monday</span>
          <h4>28</h4>
      </div>
    </div>
  );
};
