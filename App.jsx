import { useState } from 'react'
import './App.css'
import LoginForm from './LoginForm'


function App(){
  return(
    <div className='App'>
      <LoginForm/>
    </div>

  );
}
export default App;

// function App() {

//   const [counter, setCounter] = useState(0); // Variable, Method/Function

//   // let counter = 20

//   const addValue = () => {
//     setCounter((prevCounter)=>prevCounter+1)
//     setCounter((prevCounter)=>prevCounter+1)
//     setCounter((prevCounter)=>prevCounter+1)
//     setCounter((prevCounter)=>prevCounter+1)
//     // Thats how react work in batching
//     // setCounter(counter + 1)
//     // setCounter(counter + 1)
//     // setCounter(counter + 1)
//     // setCounter(counter + 1)
//     // setCounter(counter + 1)
//   }

//   const removeValue = () => {
//     setCounter(counter - 1)
//   }

//   return (
//     <>
//       <h1>Karan is learning react {counter}</h1>
//       <h2>Counter Value:{counter}</h2>
//       <button
//         onClick={addValue}
//       >Add Value</button> {" "}
//       <button onClick={removeValue}>Remove Value</button>
//       <p>Footer: {counter}</p>
//     </>
//   )
// }

// export default App
