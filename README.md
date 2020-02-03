## Zent Cash Electronic Wallet - GUI wallet for ZentCash.

![Zent Cash Electronic Wallet Screens](https://user-images.githubusercontent.com/46155884/55154075-3e8c5e00-5154-11e9-90f5-08a78de41b99.jpg "Zent Cash Electronic Wallet Screens")

### Features:

This wallet contains the basic functions required to manage your Zent Cash assets:

* Wallet creation:
  * Create new wallet.
  * Import/recover from private keys OR mnemonic seed.
* Basic wallet operation/transactions:
  * Open an existing  wallet
  * Display wallet address & balance
  * Display & Backup private keys/seed
  * Sending/transferring. Integrated Address or Payment ID are supported. Also provides address lookup from your addressbook.
  * Transactions history listing/sorting/searching/detail.
  * Incoming transaction notification.
  * Export incoming, outgoing, or all transactions to csv file.
  * Rescan wallet from specific block height.
  * Perform wallet optimization.
  * Utilities: generate payment id and integrated address.
* Address book:
  * Add/Edit/Delete address entry.
  * Listing/sorting/searching existing entries.
  * Allow to store same wallet address with different payment id.
  * Autosave address after sending to new/unknown recipient
  * Allow to optionally create password protected address book.
* Misc:
  * Option to use system tray (on closing/minimizing wallet)
  * Provides list of public nodes, fetch/updated daily from [zentcash-nodes-json](https://github.com/ZentCashFoundation/zentcash-nodes-json) repo.
  * Allow to add custom node address.
  * Theme: Dark & Light Mode
  * [Keyboard shortcuts](docs/shortcut.md)

### Download &amp; Run Zent Cash Electronic Wallet

#### Windows:
1. Download the latest installer here: https://github.com/ZentCashFoundation/zentcash-wallet-electronic/releases/latest
2. Run the installer (`ZentCash-Electronic-Wallet-<version>-win-setup.exe`) and follow the installation wizard.
3. Launch Zent Cash Electronic Wallet via start menu or desktop shortcut.

#### GNU/Linux (AppImage):
1. Download latest AppImage bundle here: https://github.com/ZentCashFoundation/zentcash-wallet-electronic/releases/latest
2. Make it executable, either via GUI file manager or command line, e.g. `chmod +x ZentCash-Electronic-Wallet-<version>-linux.AppImage`
3. Run/execute the file, double click in file manager, or run via shell/command line (See: https://docs.appimage.org/user-guide/run-appimages.html)

#### macOS
1. Download latest archive here: https://github.com/ZentCashFoundation/zentcash-wallet-electronic/releases/latest
2. Install the application from `dmg` file
3. Launch ZentCash-Electronic-Wallet via application.

### Using Zent Cash Electronic Wallet
Please visit our wiki page: [Zent Cash Electronic Wallet User Guide](../../wiki).

### Building/Packaging Zent Cash Electronic Wallet
You need to have `Node.js` and `npm` installed, go to https://nodejs.org and find out how to get it installed on your platform.

Once you have Node+npm installed:
```
# first, download zent-service binary for each platform
# from ZentCoin official repo
# https://github.com/ZentCashFoundation/Zent/releases
# extract the Zent-service executable somewhere

# clone the repo
$ git clone https://github.com/ZentCashFoundation/zentcash-wallet-electronic
$ cd zentcash-wallet-electronic

# install dependencies
$ npm install

# create build+dist directory
$ mkdir -p ./build && mkdir -p ./dist

# copy/symlink icons from assets, required for packaging
$ cp ./src/assets/icon.* ./build/

# build GNU/Linux package
$ mkdir -p ./bin/lin
$ cp /path/to/linux-version-of/Zent-service ./bin/lin/
$ npm run dist-lin

# build Windows package
$ mkdir -p ./bin/win
$ cp /path/to/win-version-of/Zent-service.exe ./bin/win/
$ npm run dist-win

# build OSX package
$ mkdir -p ./bin/osx
$ cp /path/to/osx-version-of/Zent-service ./bin/osx/
$ npm run dist-mac
```

Resulting packages or installer can be found inside `dist/` directory.

### Porting for another coin
Please see [this guide](docs/porting.md) if you want to adapt Zent Cash Electronic Wallet to be use for your own ZentCash fork.

