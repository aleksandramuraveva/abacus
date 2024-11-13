import { useState } from 'react';
import { AbacusProvider } from './contexts/AbacusContext';
import Header from './components/Header/Header';
import Abacus from './components/Abacus/Abacus';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [rodCount, setRodCount] = useState(3);

  return (
    <AbacusProvider>
      <div className="App">
        <Header rodCount={rodCount} setRodCount={setRodCount} />
        <Abacus rodCount={rodCount} />
        <Footer/>
      </div>
    </AbacusProvider>
  );
};

export default App;
