import React from 'react'
import { FaSearch } from "react-icons/fa";
import Conversation from './Conversation';

function SideBar() {
  return (
    <div>
        <div style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
            <input type="text" name="" id="" style={{marginRight:"10px"}}/>
            <FaSearch />

        </div>
        <hr />
     <Conversation/>
        <hr />
        <button>Logout</button>
    </div>
  )
}

export default SideBar