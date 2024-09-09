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

  Telegram.WebApp.CloudStorage.setItem(key, value, function(err, saved) {
    if (err) {
        DemoApp.showAlert('Error: ' + err);
    } else {
        if (saved) {
            if (typeof DemoApp.cloudStorageItems[key] === 'undefined') {
                DemoApp.cloudStorageKeys.push(key);
            }
            DemoApp.cloudStorageItems[key] = value;
        }
        form.reset();
        DemoApp.updateCloudRows();
    }
});



  tg.CloudStorage.setItem(k, v, function(error, saved){
    if (error) {
      console.log('error : '+ error);
    } else {
      if (saved) {
        console.log(save)
      } 
    }
  });
};
async function gett(k){
  tg.CloudStorage.getItem(k, function(error, value){
    if (error) {
      console.log(error, null);
  } else {
      console.log(null, value.result);
      return value.result;
  }
  });
};

document.getElementById("setDataBtn").addEventListener("click", async function(){
  let key = document.getElementById('setKeyInput').value;
  let val = document.getElementById('setValInput').value;
  let res = await sett(key, val);
  document.getElementById('resSetBox').value = res;
});
document.getElementById("getDataBtn").addEventListener("click", async function(){
  let key = document.getElementById('getKeyInput').value;
  let val = await gett(key);
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
