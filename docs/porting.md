## Porting Zent Cash Electronic Wallet for Another Currency

> Note that this is only valid/possible for `Zent-service` compatible currency (e.g. a ZentCash fork).

You can modify Zent Cash Electronic Wallet to be used for your own `Zent-service` compatible currency with few simple steps (assuming you already grab the source code by cloning our repo):

### 1. Update package.json
This step is important in order to avoid conflict with the original Zent Cash Electronic Wallet (or other fork), when user happen to install both wallet version.

Edit `package.json` file, change the values of the following keys:
- `name`
- `productName`
- `appId`

### 2. Update ws_config.js
Edit `src/js/ws_config.js` file, update config values to match your currency configuration/requirements.  
Each config item are pretty much self explanatory and are commented for clarity.

### 3. Re-skining (Optional)
If you want your version of Zent Cash Electronic Wallet looks different than what provided by default, you can do a few tweaks to re-skin/updating the appearance:
- Edit `src/css/common.css` to modify general appearance (layout, sizing, color, etc)
- Replace `src/assets/image/*` with your own images.

### 4. Rebuild/package your wallet for distribution
Please refer to the build guide on the repository [main page](https://github.com/ZentCashFoundation/zentcash-wallet-electronic).

### Final Note
_You are free to use, modify, redistribute, or do whatever you want to the Zent Cash Electronic Wallet's code, as long as you comply with the [license](https://github.com/ZentCashFoundation/zentcash-wallet-electronic/blob/master/LICENSE.md) coming with Zent Cash Electronic Wallet_.