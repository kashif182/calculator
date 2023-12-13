import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [result, setresult] = useState("");

  const clickHandler=(Event)=>{
    setresult(result.concat(Event.target.value))
  }
  const  clearDisplay=()=>{
    setresult('');
  }
   const calculate = () => {
     setresult(eval(result).toString());
   };

  return (
    <div className="calc">
      <input type="text" placeholder="0" id="result" value={result} />
      <input
        type="button"
        value={9}
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value={8}
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value={7}
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value={6}
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value={5}
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value={4}
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value={3}
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value={2}
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value={1}
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value={0}
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="."
        className="button"
        onClick={clickHandler}
      />
      
      <input
        type="button"
        value="/"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="*"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="-"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="+"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="%"
        className="button"
        onClick={clickHandler}
      />
      <input type="button"
        value="C"
        className="button button1"
        onClick={clearDisplay}
      />
      <input type="button" value="="className="button button1"onClick={calculate}/>

      {/* <input type="button" value="/(" onClick={() => setCount((c) => c + 1)} /> */}
    </div>
  );
}

export default App
