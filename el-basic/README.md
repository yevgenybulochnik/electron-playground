# Electron Basic Setup

This folder contains a very basic electron setup following the [electron quick-start](https://www.electronjs.org/docs/tutorial/quick-start). The setup includes very basic main and renderer processes. Jquery was added to show jquery usage within an electron app. Initially the remote module was also used to show how to open native dialog boxes, however it appears the remote module maybe [removed](https://github.com/electron/electron/issues/21408) from electron in the near future.

Basic setup is run using `yarn start` which calls electron. The package json specifies the location of the main module so `electron .`, will execute the correct main module. This basic setup does not include some dev conveniences like hot reloading.
