const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Future hooks for backend communication
});
