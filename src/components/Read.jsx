import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../features/userDetailsSlice'
import CustomPop from './CustomPop'
import { Link } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";



const Read = () => {
  const dispatch = useDispatch()

  const [id, setId] = useState()

  const [showPopup, setShowPopup] = useState(false)

  const {users , loading} = useSelector((state)=> state.app)

  useEffect(()=>{
      dispatch(showUser())
  },[])

  if(loading){
    return <h2>loading...</h2>
  }




  return (
    <div>

   {showPopup && <CustomPop id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}


    {
      users && users.map((e)=>(
        <div key={e.id} className='card'>
        <h2>Name:-{e.name}</h2>
         <p>Email:-{e.email}:</p>
         <p>Age:-{e.age}</p>
         <p>Gender:-{e.gender}</p>

       <div className='link'>
         <button onClick={()=> [setId(e.id),setShowPopup(true)]} href="#">View</button>
         <Link to={`/edit/${e.id}`} > <button><FaEdit /> </button>  </Link>
         <Link onClick={()=> dispatch(deleteUser(e.id))} ><button> <MdDeleteForever /> </button></Link>
         </div>
    </div>
      ))
    }
  </div>
  )



}
export default Read