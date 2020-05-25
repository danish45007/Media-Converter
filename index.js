var app = require('electron').app

var BrowserWindow = require('electron').BrowserWindow

var mainWindow = null

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        resizable: true,
        height:600,
        width: 800,
        webPreferences: {
            nodeIntergation:true
        }
    })

    mainWindow.loadURL("file://"+ __dirname + '/main.html')

    // Close event to release memory
    mainWindow.on('closed', function(){
        mainWindow = null
    })
  })