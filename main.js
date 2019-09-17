'use strict';

// Import parts of electron to use
const {app, BrowserWindow} = require('electron');
const path = require('path')
const url = require('url')
const {ipcMain} = require('electron')

const TITLE = 'React Electron React-Router Boilerplate';

let mainWindow;

let dev = false;
if (process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath)) {
    dev = true;
}

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1440,
        height: 1020,
        minWidth: 1280,
        minHeight: 768,
        //icon: path.join(__dirname, 'assets/icons/png/64x64.png')
    });


    ipcMain.on('resize-me-please', (event, arg) => {
        mainWindow.setSize(1280,768)
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
