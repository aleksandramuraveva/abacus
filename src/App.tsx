import { useState } from 'react';
import './App.css';
import beadImage from './assets/Bead1.png';


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

const Rod = ({ beadUrl }) => {
  const [positions, setPositions] = useState([0, 40, 80, 120, 160]);

  const handleMove = (index, e) => {
    const rodElement = e.target.closest('.rod');
    const rodRect = rodElement.getBoundingClientRect();

    let newPosition = e.clientY - rodRect.top - e.target.offsetHeight / 2;

    // bead are within the rod boundaries
    newPosition = Math.max(newPosition, 0);
    newPosition = Math.min(newPosition, rodElement.offsetHeight - e.target.offsetHeight);

    const newPositions = [...positions];
    newPositions[index] = newPosition;
    setPositions(newPositions);
  };

  return (
    <div className="rod">
      {positions.map((pos, index) => (
        <Bead key={index} position={pos} onMove={(e) => handleMove(index, e)} beadUrl={beadUrl} />
      ))}
    </div>
  );
};

const Abacus = ({ beadUrl }) => {
  return (
    <div className="abacus">
      <Rod beadUrl={beadUrl} />
      <Rod beadUrl={beadUrl} />
      <Rod beadUrl={beadUrl} />
    </div>
  );
};

const App = () => {
  const beadUrl = beadImage; // Use the imported image

  return (
    <div className="App">
      <Abacus beadUrl={beadUrl} />
    </div>
  );
};

export default App;
