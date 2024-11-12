import Abacus from './components/Abacus/Abacus';

import beadImage from './assets/Bead1.png';
import rodImage from './assets/Frame1.png'

import './App.css';

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
