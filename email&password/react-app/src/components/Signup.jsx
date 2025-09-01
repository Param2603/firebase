import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Signup = () => {
    const [data , setData] = useState({name:"",email:"",password:""})
    const navigate = useNavigate()
  return (
    <div>
      <h1> Signup page </h1>
      <form action="" onSubmit={register}>
        <input
          type="text"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          placeholder="Enter your email "
        />
        <input
          type="text"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          placeholder="Enter your password"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default SignUp;