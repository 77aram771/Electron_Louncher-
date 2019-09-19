'use strict';

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
        // titleBarStyle: 'hidden',
        title: TITLE,
        width: 1920,
        height: 1080,
        minWidth: 1920,
        minHeight: 1080,
        backgroundColor: '#312450',
        // show: true,
        // icon: null,
        frame: false
    });

    ipcMain.on('resize-me-please', (event, arg) => {
        mainWindow.setSize(width,height)
    });

    // mainWindow.setSkipTaskbar(true);

    let indexPath;

    if (dev && process.argv.indexOf('--noDevServer') === -1) {
        indexPath = url.format({
            protocol: 'http:',
            host: 'localhost:8080',
            pathname: 'index.html',
            slashes: true
        });
    }
    else {
        indexPath = url.format({
            protocol: 'file:',
            pathname: path.join(__dirname, 'dist', 'index.html'),
            slashes: true
        });
    }
    mainWindow.loadURL(indexPath);

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        mainWindow.setTitle(TITLE);
        mainWindow.setFullScreen(true);
        mainWindow.setMinimizable(true);
        if (dev) {
            mainWindow.webContents.openDevTools();
        }
    });


    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

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
