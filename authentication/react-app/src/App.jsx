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
    <div>
      {data ? (
        <Home userName={data.user.displayName}  setData={setData}/>
      ) : (
        <button onClick={handleLogin}>Google login</button>
      )}
    </div>
  );
};

export default App;