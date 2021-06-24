import React from "react";

export const ContactIcon = ({ url, icon }) => {
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <i className={icon}> </i>
      </a>
    </>
  );
};
