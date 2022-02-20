import React from "react";

const CountryActivities = ({ activities }) => {
  return (
    <div>
      {activities?.length > 0 ? (
        activities.map((activity) => {
          return <h6>{activity.name}</h6>;
        })
      ) : (
        <h6>El país no tiene actividades</h6>
      )}
    </div>
  );
};

export default CountryActivities;
