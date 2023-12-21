import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { upDateUser } from '../features/userDetailsSlice';
const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { users, loading } = useSelector((state) => state.app || {});
  const [UpdateData, setUpdateData] = useState();

  const newData = (e) => {
    setUpdateData({ ...UpdateData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (id && Array.isArray(users)) {
      const singleUser = users.filter((e) => e.id === id);
      setUpdateData(singleUser[0]);
    }
  }, [id, users]);

  const HandleUpdate = (e) => {
    e.preventDefault();
    dispatch(upDateUser(UpdateData))
    navigate('/read')

  };

  return (
    <div className="form-container">
      <form className="my-form" onSubmit={HandleUpdate}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={ UpdateData && UpdateData.email}
          onChange={newData}
        
          />
          <br />
        
        Name:
        <input
          type="text"
          name="name"
          value={ UpdateData && UpdateData.name}
          onChange={newData}
        
          
        />
        <br />
        Age:
        <input
          type="number"
          name="age"
          value={ UpdateData && UpdateData.age}
          onChange={newData}  
         
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
              value="Male"
              checked={ UpdateData && UpdateData.gender === 'Male'}
              onChange={newData}
            
              
              
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={ UpdateData && UpdateData.gender === 'Female'}
              onChange={newData}
            
              
            
            />
          </label>
        </div>
      </label>
      <button type="submit">Submit</button>
    </form>
      
    </div>
  );
};

export default Update;
