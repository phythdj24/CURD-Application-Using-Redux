import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../features/userDetailsSlice'
import CustomPop from './CustomPop'
import { Link } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { CirclesWithBar } from 'react-loader-spinner'


const Read = () => {
  const dispatch = useDispatch()
  const [radioData, setRadioData] = useState("");

  const [id, setId] = useState()

  const [showPopup, setShowPopup] = useState(false)

  const {users , loading, searchData} = useSelector((state)=> state.app)

  useEffect(()=>{
      dispatch(showUser())
  },[])

  if(loading){
    return   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CirclesWithBar
      height="200"
      width="300"
      color="red"
      wrapperStyle={{ margin: 'auto' }}
      wrapperClass=""
      visible={true}
      outerCircleColor="white"
      innerCircleColor="white"
      barColor=""
      ariaLabel='circles-with-bar-loading'
    />
  </div>
  }




  return (
    <div>

   {showPopup && <CustomPop id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}
   <h2>All data</h2>
      <input
        class="form-check-input"
        name="gender"
        checked={radioData === ""}
        type="radio"
        onChange={(e) => setRadioData("")}
      />
      <label class="form-check-label">All</label>
      <input
        class="form-check-input"
        name="gender"
        checked={radioData === "Male"}
        value="Male"
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label">Male</label>
      <input
        class="form-check-input"
        name="gender"
        value="Female"
        checked={radioData === "Female"}
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label">Female</label>


    {
      users && users.filter((e)=>{
        if(searchData.length === ""){
          return e
        }else{
          return e.name.toLowerCase().includes(searchData.toLowerCase())
        }
      } ).filter((e)=>{
        if(radioData ==="Male"){
          return e.gender === radioData;
        }else if(radioData === "Female"){
          return e.gender === radioData;
        }
        else return e;
      }) .map((e)=>(
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