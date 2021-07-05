import React from "react";
import * as ReactRedux from "react-redux";
import * as Count from "../store/count";

export const ErrorButton = () => {
  const count = ReactRedux.useSelector(Count.countSelector);
  const dispatch = ReactRedux.useDispatch();
  const onClickError = () => {
    throw new Error("onClick error!");
  };

  const onClick = () => {
    dispatch(Count.fetchCount());
  };

  return (
    <>
      <button onClick={onClick}>increment {count}</button>
      <button onClick={onClickError}>error</button>
    </>
  );
};
