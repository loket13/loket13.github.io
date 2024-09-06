// Wait until Telegram WebApp SDK is ready
window.Telegram.WebApp.ready();

// Store the Telegram WebApp object
const tg = window.Telegram.WebApp;

// Set the main button color, text, and visibility
tg.MainButton.text = "Press Me!";
tg.MainButton.color = "#0088cc";
tg.MainButton.show();

// Setup close button click action to close the WebApp
document.getElementById("closeBtn").addEventListener("click", function () {
  tg.close();
});

// Handle the main button being pressed
tg.MainButton.onClick(function () {
  alert('Main button was clicked!');
  // Send data back to the Telegram bot
  tg.sendData('Main button was clicked!');
  
  // You can hide the main button after the first click, if needed
  tg.MainButton.hide();
});

// Make the WebApp theme match the Telegram client theme
document.body.style.backgroundColor = tg.themeParams.bg_color || "#ffffff";
document.body.style.color = tg.themeParams.text_color || "#000000";