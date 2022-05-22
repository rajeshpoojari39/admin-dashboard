import React from "react";
export const ProfileNameContext = React.createContext("Profile Name");
const ProfileContext = (props) => {
  return (
    <ProfileNameContext.Provider value={props.value}>
      {props.children}
    </ProfileNameContext.Provider>
  );
};

export default ProfileContext;
