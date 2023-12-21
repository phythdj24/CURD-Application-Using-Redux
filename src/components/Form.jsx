import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailsSlice';
import { useNavigate } from 'react-router-dom';

const MyForm = () => {
  
  const [users, setuser] = useState({})
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const getUserData = (e)=>{
    setuser({...users, [e.target.name] : e.target.value})
    console.log(users);
  }

  const Handlesubmit = (e)=>{
    e.preventDefault();
    console.log("users...",users);
      dispatch(createUser(users))
      navigate("/read")
  }

 
  

  return (
    <div className="form-container">
      <form  className="my-form" onSubmit={Handlesubmit} >
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={getUserData}
            
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={getUserData}
            
          />
        </label>
        <label className='age'>
          Age:
          <input
            type="number"
            name="age"
            onChange={getUserData}
           
          />
        </label>
        <label>
          Gender:
          <div>
            <label>
              Male
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={getUserData}
                
                
              />
            </label>
            <label>
              Female
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={getUserData}
                
              
              />
            </label>
          </div>
        </label>
        <button type="submit"> <span>Submit</span></button>
      </form>
    </div>
  );
};

export default MyForm;
