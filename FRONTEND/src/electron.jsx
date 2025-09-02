const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // opcional
    },
  })

  // en desarrollo usa vite dev server
  if (process.env.ELECTRON_DEV) {
    win.loadURL('http://localhost:5173')
  } else {
    // en producción usa el build de Vite
    win.loadFile(path.join(__dirname, 'dist/index.html'))
  }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
