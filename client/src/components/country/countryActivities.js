import React from "react";

const CountryActivities = ({ activities }) => {
  return (
    <div>
      {activities?.length === 0
        ? "no tiene actividades"
        : activities?.map((activity) => {
            return <h6>{activity.name}</h6>;
          })}
    </div>
  );
};

export default CountryActivities;
