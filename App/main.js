const { app, BrowserWindow } = require('electron');

let window = null;

app.on('window-all-closed', () => {
    // Respect the OSX convention of having the application in memory even
    // after all windows have been closed
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  
  app.on('ready', async () => {

    window = new BrowserWindow({
      show: false,
      width: 1024,
      height: 728
    });
  
    window.loadURL('http://ya.ru');
   
    window.webContents.on('did-finish-load', () => {
      if (!window) {
        throw new Error('"window" is not defined');
      }
      // if (process.env.START_MINIMIZED) {
      //     toolsWindow.minimize();
      // } else {
      window.show();
      window.focus();
    });
window.on('closed'), () => {
    window = null;
}
});