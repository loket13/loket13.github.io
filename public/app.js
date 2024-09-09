// Wait until Telegram WebApp SDK is ready
window.Telegram.WebApp.ready();

// Store the Telegram WebApp object
const tg = window.Telegram.WebApp;

// Set the main button color, text, and visibility
tg.MainButton.text = "Press Me!";
tg.MainButton.color = "#FF5722";
tg.MainButton.show();

// Setup close button click action to close the WebApp
document.getElementById("closeBtn").addEventListener("click", function (){
  tg.close();
});


async function sett(k,v){
  tg.CloudStorage.setItem(k,v, function(error){
    if (error) {
        console.log('Error occurred while storing:', error);
    } else {
        console.log('Data stored successfully!');
    }
  });
};
async function gett(k){
  tg.CloudStorage.getItem(k, function(error, value){
    if (error) {
      // If there's an error, pass the error to the callback
      console.log(error.result, null);
  } else {
      // If successful, pass null for error and the value
      console.log(null, value.result);
      return value
  }
  });
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
tg.MainButton.onClick(function (){
  alert('Main button was clicked!');
  // Send data back to the Telegram bot
  tg.sendData('Main button was clicked!');
  
  // You can hide the main button after the first click, if needed
  tg.MainButton.hide();
});

// Make the WebApp theme match the Telegram client theme
document.body.style.backgroundColor = tg.themeParams.bg_color || "#ffffff";
document.body.style.color = tg.themeParams.text_color || "#000000";
