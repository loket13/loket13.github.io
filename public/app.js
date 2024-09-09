// Wait until Telegram WebApp SDK is ready
window.Telegram.WebApp.ready();

// Store the Telegram WebApp object
const tg = window.Telegram.WebApp;

// Set the main button color, text, and visibility
tg.BottomButton.text = "Press Me!";
tg.BottomButton.color = "#FF5722";
tg.BottomButton.show();

// Setup close button click action to close the WebApp
document.getElementById("closeBtn").addEventListener("click", function (){
  tg.close();
});


async function sett(k,v){
  let res = await tg.CloudStorage.setItem(k,v);
  return res;
};
async function gett(k){
  return tg.CloudStorage.getItem(k);
};
document.getElementById("setDataBtn").addEventListener("click", async function(){
  let key = document.getElementById('setKeyInput').value;
  let val = document.getElementById('setValInput').value;
  let res = await sett(key, val);
  console.log(res);
  document.getElementById('resSetBox').value = res;
});
document.getElementById("getDataBtn").addEventListener("click", async function(){
  let key = document.getElementById('getKeyInput').value;
  let val = await gett(key);
  console.log(val);
  document.getElementById('resGetBox').value = val;
});

// Handle the main button being pressed
tg.BottomButton.onClick(function (){
  alert('Main button was clicked!');
  // Send data back to the Telegram bot
  tg.sendData('Main button was clicked!');
  
  // You can hide the main button after the first click, if needed
  tg.BottomButton.hide();
});

// Make the WebApp theme match the Telegram client theme
document.body.style.backgroundColor = tg.themeParams.bg_color || "#ffffff";
document.body.style.color = tg.themeParams.text_color || "#000000";
