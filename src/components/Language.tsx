import '../style/Language.style.scss';
import pl from '../assets/pl.png';
import us from '../assets/us.png';

export const Languages = ({ onClickUS, onClickPL }) => {
  return (
    <div className='language-switcher'>
      <button onClick={onClickUS}>
        <img className='btn' src={us} alt="usFlag" />
      </button>
      <button onClick={onClickPL}>
        <img className='btn' src={pl} alt="plFlag" />
      </button>
    </div>
  );
};