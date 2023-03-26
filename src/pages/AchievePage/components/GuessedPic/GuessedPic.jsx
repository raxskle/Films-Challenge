import {  useRef, useState } from "react"
import "./GuessedPic.scss"

export default function GuessedPic(props) {
// 放大
  let [scale, setScale] = useState(false);
  let bigW = useRef(null);


  let scaleFn = () => {
    // 放大
    if (!scale) {
      setScale((prev) => {
        if (!prev) {
          return true;
        }
      });             
    }
  }

  let scaleFade = () => {
    bigW.current.className = "bigWfade flex";
    setTimeout(() => {
      setScale((prev) => {
        return !prev;
      });  
    }, 200);         
  }

  return (
    <>
      <div  className='picWrap' >
        <img key={props.id} onClick={scaleFn} className='guessedpic' src={props.url} alt={"alt"} />
      </div>
      {
        scale &&
        <div ref={bigW} onClick={scaleFade} className="bigW flex">
          <img className="big" src={props.url} alt={"alt"} />
          <div className="bigTitle">{ props.name }</div>
        </div>
        
      }

    </>)
}
