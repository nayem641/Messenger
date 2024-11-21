import React from 'react'
import Messages from './Messages'
import { LuSend } from "react-icons/lu";

function MessageContainer() {
  return (
    <div>
        <div style={{display:"flex",justifyContent:"center",gap:"5px" }}>
        <span>to:</span>
        <span>Nayem Sheikh</span>
        </div>

        <Messages/>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <input type="text" name="" id="" />
            <LuSend/>
        </div>
    </div>
  )
}

export default MessageContainer