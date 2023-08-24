import React ,{useState} from 'react'
import MyButton1 from './MyButton1';

const ChangeName = () => {
    const [name,setName]=useState("MCA")
    const ChName=() => {
      setName("REACT JS")
       
    };
  return (
    <div>
        <h2> Your name is {name}</h2>
        
        <MyButton1 onPress={ChName}/>
        
    </div>
  )
}

export default ChangeName