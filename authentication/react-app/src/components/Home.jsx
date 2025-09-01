import React from "react";

const Home = ({ userName, setData }) => {
  function handleSignout() {
    setData("");
  }
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-[20px] font-semibold text-gray-800 mb-4">userName :{userName}</h1>
      <button className="px-4 py-2 bg-red-500 text-white rounded-[10px] shadow hover:bg-red-600 cursor-pointer transition" onClick={handleSignout}>Signout</button>
    </div>
  );
};

export default Home;