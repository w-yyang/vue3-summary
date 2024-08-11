import { Http } from "./request";
import axios from "axios";

console.log('asdfg', Http.get);

export const testFetch = () => {
  return new Promise((resolve, reject) => {
    Http.get('/test').then((backData: any) => {
      console.log('请求结果', backData);
      resolve(backData)
    });
  })
};

export const uploadSingleFile = (fileData: FormData) => {
  console.log('fileData', fileData);
  return new Promise((resolve, reject) => {
    Http.request(
      {
        url: '/uploadFile',
        method: 'POST',
        data: fileData,
        headers: {
          'Content-Type': false
        }
      }
    ).then((backData: any) => {
      console.log('bbbb', backData);
    });
  });
}