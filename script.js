function timeDisplay(){
    let time_text=document.getElementById("time-id");
    time_text.innerText=new Date().toLocaleTimeString();
}
timeDisplay();
// console.log(time_text.innerText);

setInterval(timeDisplay,1000); // 1000ms=1s