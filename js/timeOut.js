// token 期限設定
const btnTimeOut = document.querySelector("#btnTimeOut");
let objStartTime = JSON.parse(localStorage.getItem("startTime"));
let startTime = new Date(`${objStartTime.year}-${objStartTime.month}-${objStartTime.day}`);
startTime.setHours(objStartTime.hour, objStartTime.min, objStartTime.sec);
let nowTime = new Date();
let costTime = (nowTime-startTime) / 1000; // 秒
if(costTime>=21600){
    // 大於 21600 秒（6小時），token到期，清空localStorage，出現使用期限到期請重新登入
    localStorage.clear();
    btnTimeOut.click();
}