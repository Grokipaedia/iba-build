const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Future hooks for real terminal / backend calls
});
