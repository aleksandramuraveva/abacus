import { useContext, memo } from 'react';
import { AbacusContext } from '../../contexts/AbacusContext';
import './styles.css';

interface BeadProps {
  position: number;
  onMove: (e: React.DragEvent<HTMLDivElement>) => void;
}

const Bead: React.FC<BeadProps> = ({ position, onMove }) => {
  const { beadUrl } = useContext(AbacusContext);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
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
