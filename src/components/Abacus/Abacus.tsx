import { useContext } from 'react';
import { AbacusContext } from '../../contexts/AbacusContext';
import Rod from '../../components/Rod/Rod';
import './styles.css';

const Abacus = ({ rodCount }) => {
  const { backgroundColor, borderColor } = useContext(AbacusContext);

  return (
    <div className="abacus" style={{ backgroundColor, borderColor }}>
      {Array.from({ length: rodCount }).map((_, index) => (
        <Rod key={index} />
      ))}
    </div>
  );
};

export default Abacus;
