import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Data from './Data';

function App() {
  const [accord, setAccord] = useState(Array(Data.length).fill(false));

  const toggleAccordion = (index) => {
    setAccord((prevAccord) => {
      const newAccord = [...prevAccord];
      newAccord[index] = !newAccord[index];
      return newAccord;
    });
  };

  return (
    <>
    <h1>React Accordion </h1>
    <div className='main'>
      {Data.map((element, index) => (
        <div className="accordion" key={index}>
          <div className='qtnShow' onClick={() => toggleAccordion(index)}>
            <h1>{element.question}</h1>
            <h1>{accord[index]? '-' : '+'} </h1>
          </div>
          {accord[index] && <p>{element.answer}</p>}
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
