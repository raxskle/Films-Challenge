import { useState } from "react";
import { requestAll } from "../network/request";
import { getRecordFromLocalStorage, updateLocalStorage } from "./localstorage";

let picsQueue;
let setPicsQueue;

let guessedQueue;
let setGuessedQueue;

let loading;
let setLoading;

let useInitQueues = () => {
  // 生成state
  let _picsQueueState = useState([]);
  picsQueue = _picsQueueState[0];
  setPicsQueue = _picsQueueState[1];

  let _guessedQueueState = useState([]);
  guessedQueue = _guessedQueueState[0];
  setGuessedQueue = _guessedQueueState[1];
};

let useLoading = () => {
  // 初始化加载状态
  let _loading = useState(true);
  loading = _loading[0];
  setLoading = _loading[1];
};

let getLoadingStatus = () => {
  return loading;
};

// load两个Queues
let loadQueues = async () => {
  setLoading(() => true);
  let [guessedArr, userId, amount] = getRecordFromLocalStorage(); // 得到本地数据
  let allPics = await requestAll(userId, amount); // 请求所有图片
  // console.log(" 全量请求到的数据", allPics);
  let picsQueueData = [];
  let guessedQueueData = [];
  // 分发为两个数组
  for (let i = 0; i < allPics.length; i++) {
    if (guessedArr.includes(allPics[i].id)) {
      // 已经猜对，需要按照顺序
      let index = guessedArr.indexOf(allPics[i].id);
      guessedQueueData[index] = allPics[i];
    } else {
      picsQueueData.push(allPics[i]);
    }
  }
  // 打乱未猜对的数组
  picsQueueData.sort(() => {
    return 0.5 - Math.random();
  });
  // console.log("picsQueue", picsQueueData);
  // console.log("guessedQueue", guessedQueueData);
  setPicsQueue(picsQueueData);
  setGuessedQueue(guessedQueueData);
  setLoading(() => false);
};

// 跳过，去队尾
let jumpPic = () => {
  if (picsQueue.length > 0) {
    setPicsQueue((prev) => {
      let body = [...prev];
      body.push(body.shift());
      return body;
    });
  }
};

// 新增已猜对，picsQueue队首去guessedQueue队首，加入本地字符串
let guessedCorrect = () => {
  let correct = picsQueue[0];
  // pics出队
  setPicsQueue((prev) => {
    let newPics = [...prev];
    newPics.shift();
    return newPics;
  });
  // guessed入队
  setGuessedQueue((prev) => {
    return [correct, ...prev];
  });
  // console.log("新增已猜对", correct, guessedQueue.length);
  // 更新本地串
  updateLocalStorage(correct.id);
};

// 得到队列picsQueue
let getPicsQueue = () => {
  return picsQueue;
};

// 得到guessedQueue
let getGuessedQueue = () => {
  return guessedQueue;
};

// 得到已猜对的数量
let getGuessedNum = () => {
  return guessedQueue.length;
};

export {
  useInitQueues,
  getPicsQueue,
  getGuessedQueue,
  getGuessedNum,
  jumpPic,
  guessedCorrect,
  loadQueues,
  useLoading,
  getLoadingStatus,
};
