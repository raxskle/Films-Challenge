import { Link } from 'react-router-dom';
import GuessedPic from './components/GuessedPic/GuessedPic.jsx';
import { getGuessedNum, getGuessedQueue } from '../../data/Queues';
import './AchievePage.scss';
import { getShowMenu } from '../../components/Menu/showMenu.js';
import Menu from '../../components/Menu/Menu.jsx';

export default function AchievePage() {
  let guessedNum = getGuessedNum();
  let guessedQueue = getGuessedQueue();
  let [showMenu, setShowMenu] = getShowMenu();
  return (
    <>
      <div className='achievePage'>
        <div className='header'>
          <div className='more btn'  onClick={()=>setShowMenu((prev)=>!prev)}><div className='menuItem'><svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="416" cy="256" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="96" cy="256" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg></div></div>
          <div className='score btn'><span className='smallSpan'>已猜中：</span>{ guessedNum }</div>
          <div className='toM btn'><Link to={"/films/"}><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144"/></svg></Link></div>
          {showMenu && <Menu></Menu>}
        </div>
        <div className='Acontainer'>
          <div className='Abox'>
            { guessedQueue.map((val) => <GuessedPic key={val.id} name={val.name} url={val.url} />) }
          </div>
        </div>
      
      </div>
    </>
  )
}
