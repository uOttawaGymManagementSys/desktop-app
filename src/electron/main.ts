import { app, BrowserWindow} from 'electron';
import path from 'path';


// Define the createWindow function to create a BrowserWindow
function createWindow(): void {
    const mainWindow = new BrowserWindow({});
    // Make sure to load the react app from the correct path on the file system
    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
}

app.on("ready", () => {
    const mainWindow = new BrowserWindow({});
    //make sure to load the react app from the correct path on the file system
    mainWindow.loadFile(path.join(app.getAppPath(),'/dist-react/index.html'));
});

//In Electron, browser windows can only be created after the app module's ready event is fired.
app.whenReady().then(() => {
    createWindow();
});