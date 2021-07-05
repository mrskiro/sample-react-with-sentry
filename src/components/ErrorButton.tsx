import React from "react";

export const ErrorButton = () => {
  const onClick = () => {
    throw new Error("onClick error!");
  };

  return <button onClick={onClick}>error</button>;
};
