const randomColor = function (){
  const hex = "0123456789ABCDEF";
  let color = "#"
  for(let i = 0;i < 6;i++){
    color += hex[Math.floor(Math.random() *16)];
  }
  return color;
  }
  let intervalId;
  const startChangColor = function (){
    if(!intervalId){
      intervalId = setInterval(startBgColor,1000)
    }
    function startBgColor(){
      document.body.style.backgroundColor = randomColor()
    }
  }
  const stopChangColor = function (){
    clearInterval(intervalId);
    intervalId = null;
  }
  
  document.querySelector("#start").addEventListener("click",startChangColor)
  document.querySelector("#stop").addEventListener("click",stopChangColor)
  