import Rod from '../../components/Rod/Rod';
import './styles.css';

const Abacus = ({ beadUrl, rodUrl }) => {
  return (
    <div className="abacus">
      <Rod beadUrl={beadUrl} rodUrl={rodUrl}/>
      <Rod beadUrl={beadUrl} rodUrl={rodUrl}/>
      <Rod beadUrl={beadUrl} rodUrl={rodUrl}/>
    </div>
  );
};

export default Abacus;