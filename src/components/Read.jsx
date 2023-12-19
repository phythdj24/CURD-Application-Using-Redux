import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { showUser } from '../features/userDetailsSlice'

const Read = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(showUser())
  },[])
  return (
    <div className='card'>
        <h2>Title</h2>
         <p>helll</p>
    </div>
  )
}

export default Read