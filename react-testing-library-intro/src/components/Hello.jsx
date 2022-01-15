import React from "react";

const Hello = () => {
  const [name, setName] = React.useState("");

  const handleClick = () => {
    console.log("I'm clicked");
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Hello</h1>
      <h2 data-testid="my-heading">world</h2>
      <button onClick={handleClick}></button>
      <input type="text" value={name} onChange={handleInputChange}></input>
    </div>
  );
};

export default Hello;
