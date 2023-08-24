import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const decrement=()=> {
        let lcount=count;
       
        setCount(lcount<=0? 0:lcount-1);
        
        
        
    }
    const increment=()=> {
        let lcount=count;
       
            setCount(lcount+1);
        
        
        
    }
    const changeClass=()=> {
        let check=count<=0?"btn btn-danger mx-2":"btn btn-warning mx-2"
        
        return check;
    }
  return (
    <div className="my-3">
        <button class="btn btn-primary"onClick={decrement}>Decrement</button>
        <span className={changeClass()}>{count===0?"Zero":count}</span>
        <button class="btn btn-primary"onClick={increment}>Increment</button>
        </div>
  )
}

export default Counter