import { app, BrowserWindow} from 'electron';
import path from 'path';
import { isDev } from './utils.js';
import { getPreloadPath } from './pathResolver.js';


app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        //preload script path for IPC communication
        webPreferences: {
            preload: getPreloadPath(),
        },
    });
    if(isDev()){
        mainWindow.loadURL('http://localhost:3000');
    } else {
        //make sure to load the react app from the correct path on the file system
        mainWindow.loadFile(path.join(app.getAppPath(),'/dist-react/index.html'));
    }
});