import { useState } from "react";

let showMenu;
let setShowMenu;

let useShowMenu = () => {
  let state = useState(false);
  showMenu = state[0];
  setShowMenu = state[1];
  return [showMenu, setShowMenu];
};

let getShowMenu = () => {
  return [showMenu, setShowMenu];
};

export { useShowMenu, getShowMenu };
