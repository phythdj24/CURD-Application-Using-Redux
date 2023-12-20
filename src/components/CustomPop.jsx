import React from 'react'
import { useSelector } from 'react-redux'

const CustomPop = ({id, showPopup,setShowPopup}) => {

    const allusers = useSelector((state)=> state.app.users);

    const singleUser = allusers.filter((e)=> e.id === id);


  return (
    <div className='popBack'>
        <div className='container'>
        <button onClick={()=> setShowPopup(false)}>close</button>
        <h2>{singleUser[0].name}</h2>
        <h3>{singleUser[0].email}</h3>
        <h3>{singleUser[0].age}</h3>
        <h4>{singleUser[0].gender}</h4>
        </div>
    </div>
  )
}

export default CustomPop