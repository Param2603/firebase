import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "./config/Firebase";
import Home from "./components/Home";

const App = () => {
  const [data, setData] = useState("");
  async function handleLogin() {
    let response = await signInWithPopup(auth, provider);
    // console.log(response.user.userName);
    setData(response);
  }

  console.log(data);
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <h1 className="text-[30px] text-center text-red-600 font-bold mb-6">Authentication </h1>
      {data ? (
        <Home userName={data.user.displayName}  setData={setData}/>
      ) : (
        <button onClick={handleLogin} className="px-6 py-2 bg-blue-500 text-white rounded-[10px]
         hover:bg-blue-600  duration-300 cursor-pointer" >Google login</button>
      )}
    </div>
  );
};

export default App;