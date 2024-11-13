import { useContext } from 'react';
import { AbacusContext } from '../../contexts/AbacusContext';
import './styles.css';

const Header = () => {
  const { changeTheme } = useContext(AbacusContext);  

  return (
    <header className="header">
      <button className="theme-button" onClick={changeTheme}>Сменить тему</button>
    </header>
  );
};

export default Header;
