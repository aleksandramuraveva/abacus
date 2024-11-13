import { useContext } from 'react';
import { AbacusContext } from '../../contexts/AbacusContext';
import Rod from '../../components/Rod/Rod';
import './styles.css';

const Abacus = () => {
  const { backgroundColor, borderColor } = useContext(AbacusContext);

  return (
    <div className="abacus" style={{ backgroundColor, borderColor }}>
      <Rod />
      <Rod />
      <Rod />
    </div>
  );
};

export default Abacus;

