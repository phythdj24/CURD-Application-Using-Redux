import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();

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

  const HandleUpdate = () => {
    // Implement your update logic here
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
        
        Name:
        <input
          type="text"
          name="name"
          value={ UpdateData && UpdateData.name}
          onChange={newData}
        
          
        />
      </label>
      <label>
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
