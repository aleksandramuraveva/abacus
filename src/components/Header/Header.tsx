import { useContext, useState } from 'react';
import { AbacusContext } from '../../contexts/AbacusContext';
import './styles.css';

const Header = ({rodCount, setRodCount}) => {
  const { changeTheme } = useContext(AbacusContext);  

  const handleRodCountChange = (e) => {
    setRodCount(Number(e.target.value));
  };

  return (
    <header className="header">
      <button className="theme-button" onClick={changeTheme}>Сменить тему</button>
      <input 
        type="number" 
        value={rodCount} 
        onChange={handleRodCountChange} 
        min="1"
        className="rod-count-input" 
        placeholder="Number of Rods"
      />
    </header>
  );
};

export default Header;
