import { useContext, useState, memo } from 'react'; 
import { AbacusContext } from '../../contexts/AbacusContext';
import Bead from '../../components/Bead/Bead';
import './styles.css';

const Rod = () => {
  const { rodUrl } = useContext(AbacusContext);
  const rodHeight = 400; 
  const beadHeight = 60; 
  const edgeMargin = beadHeight * 0.26; 
  const bridgePosition = rodHeight / 3.2; 

  const [positions, setPositions] = useState([
    rodHeight - beadHeight + edgeMargin, 
    rodHeight - beadHeight * 1.5 + edgeMargin, 
    rodHeight - beadHeight * 2 + edgeMargin, 
    rodHeight - beadHeight * 2.5 + edgeMargin, 
    edgeMargin, 
  ]);

  const handleMove = (index, e) => {
    const rodElement = e.target.closest('.rod');
    const rodRect = rodElement.getBoundingClientRect();
    const beadHeight = e.target.offsetHeight;
    const minDistance = beadHeight + 2;

    let newPosition = e.clientY - rodRect.top - beadHeight / 2;

    if (index < 4) {
      newPosition = Math.max(newPosition, bridgePosition);
    } else {
      newPosition = Math.min(newPosition, bridgePosition - beadHeight);
    }

    newPosition = Math.max(newPosition, edgeMargin);
    newPosition = Math.min(newPosition, rodElement.offsetHeight - beadHeight - edgeMargin);

    for (let i = 0; i < positions.length; i++) {
      if (i !== index) {
        if (Math.abs(newPosition - positions[i]) < minDistance) {
          if (newPosition > positions[i]) {
            newPosition = positions[i] + minDistance;
          } else {
            newPosition = positions[i] - minDistance;
          }
        }
      }
    }

    const newPositions = [...positions];
    newPositions[index] = newPosition;
    setPositions(newPositions);
  };

  return (
    <div className="rod" style={{ backgroundImage: `url(${rodUrl})` }}>
      {positions.map((pos, index) => (
        <Bead
          key={index}
          position={pos}
          onMove={(e) => handleMove(index, e)}
        />
      ))}
    </div>
  );
};

export default memo(Rod);
