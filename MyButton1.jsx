import React from 'react'

const MyButton1 = (props) => {
  return (
    <div>
        <button class="btn btn-outline-danger" onClick={()=>props.onPress("Your name is REACT JS")}> Change Name</button></div>
  )
}

export default MyButton1