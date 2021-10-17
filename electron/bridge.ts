import { contextBridge, ipcRenderer } from 'electron';
import { Message } from '../src/data/messages';
import { ProviderState } from '../src/data/provider';

const api = {
    /**
     * Here you can expose functions to the renderer process
     * so they can interact with the main (electron) side
     * without security problems.
     *
     * The function below can accessed using `window.Main.sayHello`
     */

    sendMail: (provider: ProviderState, message: Message & { recipient: string }) => {
        ipcRenderer.send('sendMail', provider, message);
    },

    /**
     * Provide an easier way to listen to events
     */
    on: (channel: string, callback: Function) => {
        ipcRenderer.on(channel, (_, data) => callback(data));
    }
};

export default api;

contextBridge.exposeInMainWorld('Main', api);
