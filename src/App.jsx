import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  
  const addValue = () =>{
    if (counter < 20){
      setCounter(counter+1)
      console.log("Value added:", counter);
    }


  }
  const removeValue = () =>{
    if (counter > 0){
      setCounter(counter-1)
      console.log("Value removed:", counter);

    }

    
  }

  return (
    <>
    <h1> Counter Application</h1>
    <h2> Counter Value: {counter}</h2>
    <div className='btns'> 
    <button onClick={addValue}>Add Value</button> 
    
    <button onClick={removeValue}>Remove Value</button>

    </div>

    </>
  )
}

export default App
