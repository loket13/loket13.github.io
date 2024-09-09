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
  tg.CloudStorage.setItem(k, v, function(error, resp) {
    if (error) {
       console.log(error);
       return 'Error';
    } else {
        console.log(resp);
        console.log(resp.toString());
        if(resp.result = true){
          return 'Saved';
        };
    }
})};

async function gett(k){
  tg.CloudStorage.getItem(k, function(error, resp){
    if (error) {
      return error;
    } else {
      console.log(resp);
      console.log(resp.toString());
      let res = resp.toString();
      return res;
    }
  });
};
async function list(){
  tg.CloudStorage.getKeys(function(error, resp){
    if (error) {
      return error;
    } else {
      console.log(resp);
      console.log(resp.toString())
      let res = resp.toString();
      return res;
    }
  });
};
async function remm(k){
  tg.CloudStorage.removeItem(k, function(error, resp){
    if (error) {
      return error;
    } else {
      console.log(resp);
      console.log(resp.toString());
      if(resp.result = true){
        return 'Removed';
      };
    }
  });
};

document.getElementById("setDataBtn").addEventListener("click", async function(){
  let key = document.getElementById('setKeyInput').value;
  let val = document.getElementById('setValInput').value;
  sett(key, val).then(res => {
    document.getElementById('resSetBox').innerHTML = res;
  });
});

document.getElementById("getDataBtn").addEventListener("click", async function(){
  let key = document.getElementById('getKeyInput').value;
  gett(key).then(res => {
    document.getElementById('resGetBox').innerHTML = res;
  });
});

document.getElementById("listDataBtn").addEventListener("click", async function(){
  list().then(res => {
    document.getElementById('resListBox').innerHTML = res;
  });
});

document.getElementById("remDataBtn").addEventListener("click", async function(){
  let key = document.getElementById('remKeyInput').value;
  remm(key).then(res => {
    document.getElementById('resRemBox').innerHTML = res;
  });
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
