'use strict';

// Import parts of electron to use
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const {ipcRenderer, ipcMain} = require('electron');

const TITLE = 'React Electron React-Router Boilerplate';

let mainWindow;

let dev = false;
if (process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath)) {
    dev = true;
}

function createWindow() {
    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        title: TITLE,
        width: 1440,
        height: 1020,
        minWidth: 1024,
        minHeight: 768,
        backgroundColor: '#312450',
        show: true,
        icon: null
    });
    ipcMain.on('resize-me-please', (event, arg) => {
        mainWindow.setSize(width,height)
    });
    mainWindow.setSkipTaskbar(true);


    ipcMain.on('resize-me-please', (event, arg) => {
        mainWindow.setSize(width,height)
    })

    let indexPath;
    if (dev && process.argv.indexOf('--noDevServer') === -1) {
        indexPath = url.format({
            protocol: 'http:',
            host: 'localhost:8080',
            pathname: 'index.html',
            slashes: true
        });
    } else {
        indexPath = url.format({
            protocol: 'file:',
            pathname: path.join(__dirname, 'dist', 'index.html'),
            slashes: true
        });
    }
    mainWindow.loadURL(indexPath);

    // Don't show until we are ready and loaded
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        mainWindow.setTitle(TITLE);
        mainWindow.setFullScreen(true);
        mainWindow.setMinimizable(true);

        // Open the DevTools automatically if developing
        if (dev) {
            mainWindow.webContents.openDevTools();
        }
    });


    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {

    if (mainWindow === null) {
        createWindow();
    }
});
