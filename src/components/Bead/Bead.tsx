import { useContext, memo } from 'react';
import { AbacusContext } from '../../contexts/AbacusContext';
import './styles.css';

const Bead = ({ position, onMove }) => {
  const { beadUrl } = useContext(AbacusContext);

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

export default memo(Bead);
