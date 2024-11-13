import { AbacusProvider } from './contexts/AbacusContext';
import Header from './components/Header/Header';
import Abacus from './components/Abacus/Abacus';
import './App.css';

const App = () => {
  return (
    <AbacusProvider>
      <div className="App">
        <Header />
        <Abacus />
      </div>
    </AbacusProvider>
  );
};

export default App;
