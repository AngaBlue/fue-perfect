import { contextBridge, ipcRenderer } from 'electron'
import { Provider, Customer, Message } from '../src/data/form'

export const api = {
  /**
   * Here you can expose functions to the renderer process
   * so they can interact with the main (electron) side
   * without security problems.
   *
   * The function below can accessed using `window.Main.sayHello`
   */

  sendMail: (provider: Provider, customer: Customer, message: Message) => { 
    ipcRenderer.send('sendMail', provider, customer, message)
  },

  /**
   * Provide an easier way to listen to events
   */
  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  }
}

contextBridge.exposeInMainWorld('Main', api)
