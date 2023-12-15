import { app, BrowserWindow } from "electron";
import { initialize } from "@electron/remote/main/index.js";

initialize();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadURL("http://localhost:5173");
};

app.whenReady().then(() => {
  createWindow();
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
