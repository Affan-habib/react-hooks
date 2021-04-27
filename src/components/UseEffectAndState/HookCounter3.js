import React, { useState } from "react";

const HookCounter3 = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your first Name is: {name.firstName}</h2>
      <h2>Your first Name is: {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
};

export default HookCounter3;
