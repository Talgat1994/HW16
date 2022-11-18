import React from "react";

const DemoList = () => {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};

export default React.memo(DemoList); // obertyvaem Demo na memo
