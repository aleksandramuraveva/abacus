import { createContext, useState } from 'react';
import bead1 from '../assets/Bead1.png';
import bead2 from '../assets/Bead2.png';
import frame1 from '../assets/Frame1.png';
import frame2 from '../assets/Frame2.png';

export const AbacusContext = createContext();

export const AbacusProvider = ({ children }) => {
  const [theme, setTheme] = useState('theme1');
  const themes = {
    theme1: { beadUrl: bead2, rodUrl: frame2, backgroundColor: 'var(--pink)', borderColor: 'var(--primary)' },
    theme2: { beadUrl: bead1, rodUrl: frame1, backgroundColor: 'var(--secondary)', borderColor: 'var(--brown)' },
  };

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'theme1' ? 'theme2' : 'theme1'));
  };

  return (
    <AbacusContext.Provider value={{ ...themes[theme], changeTheme }}>
      {children}
    </AbacusContext.Provider>
  );
};