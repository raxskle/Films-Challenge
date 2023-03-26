import axiosInstance from "./index.js";

// 后端直接返回数据pic
async function requestRandom() {
  let response = await axiosInstance.get(`/api/random`);
  return response.data;
}

// 后端直接返回数据pic
async function requestRecord(recordCode) {
  if (!recordCode) {
    return []; // 如果code没东西，说明ls没东西，是第一次打开
  }
  let data = {
    code: recordCode,
  };
  let response = await axiosInstance.post(`/api/record`, data);
  return response.data;
}

async function requestAll(userid, amount) {
  let response = await axiosInstance.get(
    `/api/all?userid=${userid}&amount=${amount}`
  );
  return response.data;
}

export { requestRandom, requestRecord, requestAll };
