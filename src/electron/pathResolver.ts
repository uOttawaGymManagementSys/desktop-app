import { app } from 'electron';
import Path from 'path';
import { isDev } from './utils.js';

export function getPreloadPath() {
    return Path.join(
        app.getAppPath(),
        isDev() ? '.' : '..',
        '/dist-electron/preload.js'
    );
}