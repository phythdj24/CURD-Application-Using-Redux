import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showUser } from '../features/userDetailsSlice'

const Read = () => {
  const dispatch = useDispatch()

  const {users , loading} = useSelector((state)=> state.app)

  useEffect(()=>{
      dispatch(showUser())
  },[])

  if(loading){
    return <h2>loading...</h2>
  }




  return (
    <div>
    {
      users && users.map((e)=>(
        <div className='card'>
        <h2>Name:-{e.name}</h2>
         <p>Email:-{e.email}:</p>
         <p>Age:-{e.age}</p>
         <p>Gender:-{e.gender}</p>

       <div className='link'>
         <a href="#">View</a>
         <a href="#">edit</a>
         <a href="#">Delete</a>
         </div>
    </div>
      ))
    }
  </div>
  )



}
export default Read