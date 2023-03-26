import { Link } from 'react-router-dom';
import { useState  } from 'react';
import './MainPage.scss';
// import logo from '../../assests/mie.png';
import InputBox from '../../components/InputBox/InputBox.jsx';
import { jumpPic, getPicsQueue, getGuessedNum, getLoadingStatus } from '../../data/Queues';
import Menu from '../../components/Menu/Menu';
import { getShowMenu } from '../../components/Menu/showMenu';

export default function MainPage() {
  let [showInputBox, setShowInputBox] = useState(false);
  let loading = getLoadingStatus();
  let pic = getPicsQueue();
  let guessedNum = getGuessedNum();

  let jump = () => {
    jumpPic();
  }

  // 猜
  let guess = () => {
    // 调起输入框组件
    setShowInputBox(true);
    // 已经传入当前的pic对象的name给输入框组件,在InputBox中判断是否猜对
  }

  let [showMenu, setShowMenu] = getShowMenu();

  return (
    <div className='mainPage'>
      <header className='header'>
        <div className='more btn' onClick={()=>setShowMenu((prev)=>!prev)}><div className='menuItem'><svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="416" cy="256" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="96" cy="256" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg> </div></div>
        <div className='logo btn'>{/* <img src={logo} className="App-logo" alt="logo" /> */}
          &nbsp;&nbsp;猜电影！
          {/* 猜电影 */}
        </div>
        <div className='score btn'><span className='smallSpan'>已猜中：</span>{ guessedNum }</div>
        {showMenu && <Menu></Menu>}
      </header>
      <div className='container'>
        <div className='field'>{
          !loading && (
            pic.length > 0 
              ?<img className='pic' src={pic[0].url} alt={"alt"} />
              : <div> 你已猜对所有截屏！ </div>)
        } </div>
      </div>
      <div className='bottomBar'>
        <div className='toAchieve'><Link to={"/films/achieve"}>已猜中</Link></div>
        <div className='guessBtn' onClick={()=>guess()}>输入</div>
        <div className='passBtn' onClick={()=>jump()}>跳过</div>
      </div>
      {showInputBox===true && pic.length>0? <InputBox setShow={setShowInputBox} filmName={pic[0].name} ></InputBox> : null}
      
    </div>
  )
}
