import React from "react";

const Home = ({ userName, setData }) => {
  function handleSignout() {
    setData("");
  }
  return (
    <div>
      <h1>userName :{userName}</h1>
      <button onClick={handleSignout}>Signout</button>
    </div>
  );
};

export default Home;