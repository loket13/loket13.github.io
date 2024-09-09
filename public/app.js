const contIds = ['setBox', 'getBox', 'listBox', 'remBox'];

function switchBox(nb){
  for (let i = 0; i < contIds.length; i++) {
    document.getElementById(contIds[i]).classList.add('hide');
  };
  document.getElementById(nb).classList.remove('hide');
};

document.getElementById("setBoxBtn").addEventListener("click", function (){
  switchBox('setBox');
});
document.getElementById("getBoxBtn").addEventListener("click", function (){
  switchBox('getBox');
});
document.getElementById("listBoxBtn").addEventListener("click", function (){
  switchBox('listBox');
});
document.getElementById("remBoxBtn").addEventListener("click", function (){
  switchBox('remBox');
});


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
  tg.CloudStorage.setItem(k, v, function(error, saved) {
    if (error) {
       console.log(error);
       return 'Error';
    } else {
        if(saved.result = true){
          return 'Saved';
        };
    }
})};

async function gett(k){
  tg.CloudStorage.getItem(k, function(error, value){
    if (error) {
      return error;
    } else {
        return value.toString();
    }
  });
};
async function list(){
  tg.CloudStorage.getKeys(function(error, value){
    if (error) {
      return error;
    } else {
      console.log(value);
      console.log(value.toString())
      return value.toString();
    }
  });
};
async function remm(k){
  tg.CloudStorage.removeItem(k, function(error, value){
    if (error) {
      return error;
    } else {
      console.log(value);
      console.log(value.toString());
      return value.toString();
    }
  });
};

document.getElementById("setDataBtn").addEventListener("click", async function(){
  let key = document.getElementById('setKeyInput').value;
  let val = document.getElementById('setValInput').value;
  let res = sett(key, val);
  document.getElementById('resSetBox').value = res;
});

document.getElementById("getDataBtn").addEventListener("click", async function(){
  let key = document.getElementById('getKeyInput').value;
  let res = gett(key);
  document.getElementById('resGetBox').value = res;
});

document.getElementById("listDataBtn").addEventListener("click", async function(){
  let res = list();
  document.getElementById('resListBox').value = res;
});

document.getElementById("remDataBtn").addEventListener("click", async function(){
  let key = document.getElementById('remKeyInput').value;
  let res = remm(key);
  document.getElementById('resRemBox').value = res;
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
//document.body.style.backgroundColor = tg.themeParams.bg_color || "#ffffff";
//document.body.style.color = tg.themeParams.text_color || "#000000";


switchBox('setBox');
