# Electron IPC Setup

This folder uses the basic setup but to explore IPC communications between the renderer and main processes. The first button presents async communication between the renderer process and the main process via ping/pong messages. The second button is a sync process which asks the user to open a directory using a native dialog window. After selection the directory contents are displayed via a bootstrap list-group. Additionally, the native top menu has been hidden and replaced with a bootstrap navbar. To close the application bootstraps close button is used with an IPC binding to exit the application.

# References
- [IPC-Main](https://www.electronjs.org/docs/api/ipc-main)
