import nanoid from "../utils/NanoID";
import { Base64 } from "js-base64";

let filmsRecord = "filmsRecord";

// 从localStorage拿转码过的字符串数据
// 返回 [已猜对数组，userid，猜对数目]
const getRecordFromLocalStorage = () => {
  let recordCode = localStorage.getItem(filmsRecord);

  if (!recordCode) {
    // 第一次登陆，返回新的userid和0
    let userId = nanoid(21); // 直接发送
    let userIdCode = Base64.encode(userId); //  编码后存储
    localStorage.setItem(filmsRecord, userIdCode);
    return [[], userId, 0];
  } else {
    // 非第一次登陆，返回串
    let record = Base64.decode(recordCode);
    const arr = record.split(",");
    console.log(arr);
    const userId = arr.pop();
    const guessedIdArr = arr;
    return [guessedIdArr, userId, guessedIdArr.length];
  }
};

// 更新本地串
const updateLocalStorage = (newPic) => {
  let oldRecord = Base64.decode(localStorage.getItem(filmsRecord));
  let newRecord = `${newPic},${oldRecord}`;
  let newRecordCode = Base64.encode(newRecord); // 编码后存储
  localStorage.setItem(filmsRecord, newRecordCode);
};

export { getRecordFromLocalStorage, updateLocalStorage };
