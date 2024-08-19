import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();
  const [num3, setnum3] = useState();
  const [Total, setTotal] = useState();
  const [per, setper] = useState();
  const [grade, setgrade] = useState();

  const handleCalc = (e) => {
    e.preventDefault();
    const Total = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);
    setTotal(Total);

    const per = ((Total / 300) * 100).toFixed(2);
    setper(parseFloat(per));

    if (per >= 86) {
      setgrade("A");
    } 
    else if (per >= 82 && per <= 85) {
      setgrade("A-");
    }
    else if (per >= 78 && per <= 81) {
      setgrade("B+");
    }
    else if (per >= 72 && per <= 77) {
      setgrade("B-");
    }
    else if (per >= 66 && per <= 71) {
      setgrade("C");
    }
    else if (per >= 50 && per <= 65) {
      setgrade("D");
    }
    else {
      setgrade("F");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Grade Calculator</h1>
        <div>
          <label>Marks 1</label>
          <br />
          <input type="number" placeholder="enter a number" className="input" value={num1} onChange={(e) => setnum1(e.target.value)} />
        </div>
        <div>
          <label>Marks 2</label>
          <br />
          <input type="number" placeholder="enter a number" className="input" value={num2} onChange={(e) => setnum2(e.target.value)} />
        </div>
        <div>
          <label>Marks 3</label>
          <br />
          <input type="number" placeholder="enter a number" className="input" value={num3} onChange={(e) => setnum3(e.target.value)} />
        </div>
        <div>
          <label>Total</label>
          <br />
          <input className="input" value={Total} readOnly />
        </div>
        <div>
          <label>Percentage</label>
          <br />
          <input className="input" value={per} readOnly />
        </div>
        <div>
          <label>Grade</label>
          <br />
          <input className="input" value={grade} readOnly />
        </div>
        <div>
          <button className="btn" onClick={handleCalc}>Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
