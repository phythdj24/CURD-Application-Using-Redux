import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const MyForm = () => {
  
  const [users, setuser] = useState({})

  const dispatch = useDispatch();

  const getUserData = (e)=>{
    setuser({...users, [e.target.name] : e.target.value})
    console.log(users);
  }

  const Handlesubmit = ()=>{
      dispatch()
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
        <label>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
