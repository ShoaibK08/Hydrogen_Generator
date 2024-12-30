const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true, // Enable this
      webSecurity: false // Add this for development
    }
  });

  // Remove the menu bar
  mainWindow.setMenu(null);

  // For debugging - open DevTools
  // mainWindow.webContents.openDevTools();

  if (process.argv.includes('--dev')) {
    mainWindow.loadURL('http://localhost:3001');
  } else {
    // Log the path for debugging
    const filePath = path.join(__dirname, '../dist/index.html');
    console.log('Loading file from:', filePath);
    mainWindow.loadFile(filePath);
  }

  // Handle loading errors
  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error('Failed to load:', errorCode, errorDescription);
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});