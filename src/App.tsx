import { useState } from 'react';
import './App.css';
import beadImage from './assets/Bead1.png';
import rodImage from './assets/Frame1.png'

const Bead = ({ position, onMove, beadUrl }) => {
  const handleDrag = (e) => {
    if (e.clientY === 0) return; 

    onMove(e);
  };

  return (
    <div
      className="bead-container"
      style={{ top: `${position}px`, position: 'absolute' }}
      draggable
      onDrag={handleDrag}
      onDragEnd={handleDrag}
    >
      <img src={beadUrl} alt="Bead" className="bead" />
    </div>
  );
};

const Rod = ({ beadUrl, rodUrl }) => {
  const rodHeight = 400; 
  const beadHeight = 60; 
  const edgeMargin = beadHeight * 0.26; 
  const bridgePosition = rodHeight / 3.2; 

  const [positions, setPositions] = useState([
    rodHeight - beadHeight + edgeMargin, 
    rodHeight - beadHeight * 1.5 + edgeMargin, 
    rodHeight - beadHeight * 2 + edgeMargin, 
    rodHeight - beadHeight * 2.5 + edgeMargin, 
    edgeMargin, 
  ]);

  const handleMove = (index, e) => {
    const rodElement = e.target.closest('.rod');
    const rodRect = rodElement.getBoundingClientRect();
    const beadHeight = e.target.offsetHeight;
    const minDistance = beadHeight + 5;

    let newPosition = e.clientY - rodRect.top - beadHeight / 2;

    if (index < 4) {
      newPosition = Math.max(newPosition, bridgePosition);
    } else {
      newPosition = Math.min(newPosition, bridgePosition - beadHeight);
    }

    newPosition = Math.max(newPosition, edgeMargin);
    newPosition = Math.min(newPosition, rodElement.offsetHeight - beadHeight - edgeMargin);

    for (let i = 0; i < positions.length; i++) {
      if (i !== index) {
        if (Math.abs(newPosition - positions[i]) < minDistance) {
          if (newPosition > positions[i]) {
            newPosition = positions[i] + minDistance;
          } else {
            newPosition = positions[i] - minDistance;
          }
        }
      }
    }

    const newPositions = [...positions];
    newPositions[index] = newPosition;
    setPositions(newPositions);
  };

  return (
    <div className="rod">
      {positions.map((pos, index) => (
        <div
          key={index}
          className="bead-container"
          style={{ top: `${pos}px`, position: 'absolute' }}
          draggable
          onDrag={(e) => handleMove(index, e)}
          onDragEnd={(e) => handleMove(index, e)}
        >
          <img src={beadUrl} alt="Bead" className="bead" />
        </div>
      ))}
    </div>
  );
};




const Abacus = ({ beadUrl, rodUrl }) => {
  return (
    <div className="abacus">
      <Rod beadUrl={beadUrl} rodUrl={rodUrl}/>
      <Rod beadUrl={beadUrl} rodUrl={rodUrl}/>
      <Rod beadUrl={beadUrl} rodUrl={rodUrl}/>
    </div>
  );
};

const App = () => {
  const beadUrl = beadImage;
  const rodUrl = rodImage;

  return (
    <div className="App">
      <Abacus beadUrl={beadUrl} rodUrl={rodUrl} />
    </div>
  );
};

export default App;
