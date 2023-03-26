// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */
import './App.scss';
// router
import Router from "./router";
import { useInitQueues, loadQueues, useLoading} from './data/Queues';
import { useEffect } from 'react';
import { useShowMenu } from './components/Menu/showMenu';

function App() {
  useInitQueues();
  useLoading();
  useEffect(() => {
    loadQueues();
    
  }, [])
  let [, setShowMenu] = useShowMenu();

  useEffect(() => {
    // 关闭右上角栏
    window.addEventListener("click", (e) => {
      if (e.target.className !== "menuItem") {
        setShowMenu(false);
      }
    })
  }, [setShowMenu]);

  useEffect(() => {
    // 防止移动端输入法造成页面高度被压缩
    let height = document.body.clientHeight;
    window.onresize = () => {
      document.querySelector(".App").style.height = height+`px`;
    }
  }, []);

  return (
    <div className="App">
        <Router></Router>
    </div>
  );
}

export default App;
