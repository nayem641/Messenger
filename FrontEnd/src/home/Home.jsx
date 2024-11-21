import React from 'react'
import SideBar from '../sidebar/SideBar'
import MessageContainer from '../messegeContainer/MessageContainer'

function Home() {
  return (
    <div style={{display:"flex",gap:"20px"}}>
        <SideBar/>
        <MessageContainer/>
    </div>
  )
}

export default Home