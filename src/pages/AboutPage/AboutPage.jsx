import { useNavigate } from "react-router";
import "./AboutPage.scss"

export default function AboutPage() {

  const navigate = useNavigate();
  let toHome = () => {
    navigate("/films");
  }
  return (
    <div className="aboutWrap">
      <header className='header'>
        <div className='more'><div className='menuItem' onClick={toHome} ><svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="416" cy="256" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="96" cy="256" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg> </div></div>
      </header>
      <div className="container">
        <div className="text"> 
          <h2 className="title">关于</h2>          
          <div>看电影时习惯截了很多图，想找个地方存一下，干脆做成一个网页好了！</div>
          {/* <div>立刻投稿，贡献电影截图</div> */}
          <p>代码仓库：<a target="_blank" rel="noreferrer" href="https://github.com/raxskle/Films-Challenge">Raxskle/Films-Challenge</a></p>
          <p>关于作者：<a target="_blank" rel="noreferrer" href="https://blog.raxskle.fun/">blog.raxskle.fun</a>    </p>
        </div>

        <div className="footer">
          <p>by Raxskle</p>
          <p>粤ICP备2022123403号</p>
        </div>

      </div>



    </div>
  )
}
