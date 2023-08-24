import React from 'react'

const MyButton = (props) => {
  return (
    <div>
        <button onClick={()=>props.onPress("This message is under my button")}> 
        Click ME
        </button>
    </div>
  )
}

export default MyButton