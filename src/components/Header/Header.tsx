import { useContext } from 'react';
import { AbacusContext } from '../../contexts/AbacusContext';
import './styles.css';

interface HeaderProps {
  rodCount: number;
  setRodCount: (e: number) => void;
}

const Header: React.FC<HeaderProps> = ({ rodCount, setRodCount }) => {
  const { changeTheme } = useContext(AbacusContext);

  const handleRodCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRodCount(Number(e.target.value));
  };

  return (
    <header className="header">
      <button className="theme-button" onClick={changeTheme}>
        Сменить тему
      </button>
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
