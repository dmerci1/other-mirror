const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {

    mainWindow = new BrowserWindow({width: 800, height: 600, fullscreen: true, frame: false });
    
    mainWindow.loadURL('http://localhost:3000');
    
    mainWindow.on('login', (event, webContents, request, authInfo, callback) => {
        event.preventDefault();
        callback('username', 'secret');
      });

    mainWindow.on('closed', function () {

        mainWindow = null
      
    })

}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }  
});