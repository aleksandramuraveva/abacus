import Abacus from './components/Abacus/Abacus';

import beadImage from './assets/Bead1.png';
import rodImage from './assets/Frame1.png'

import './App.css';

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
