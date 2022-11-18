import React from "react";

const Demo = ({ onClick, user }) => {
  return (
    <div>
      <button onClick={onClick}>Demo click</button>
      <div>{user.name}</div>
      <div>{user.age}</div>
    </div>
  );
};

export default React.memo(Demo); // obertyvaem Demo na memo
