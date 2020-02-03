var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'Zent Cash Electronic Wallet';
config.appDescription = 'Zent Cash Electronic Wallet';
config.appSlogan = 'Slow and steady wins the race!';
config.appId = 'cash.zent.electronic';
config.appGitRepo = 'https://github.com/ZentCashFoundation/zentcash-wallet-electronic';

// default port number for your daemon (e.g. Zentd)
config.daemonDefaultRpcPort = 21698;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'wallet';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'Zent-service';

// version on the bundled service (Zent-service)
config.walletServiceBinaryVersion = "v1.14.6";

// config file format supported by wallet service, possible values:
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. Zent-service)
config.walletServiceRpcPort = 21699;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://explorer.zent.cash/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'seedpro2.zent.cash';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = 'https://raw.githubusercontent.com/ZentCashFoundation/zentcash-nodes-json/master/zentcash-nodes.json';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  'seedpro1.zent.cash:21698',
  'seedpro2.zent.cash:21698'
];

config.remoteNodeCacheSupported = false;
config.remoteNodeSslSupported = false;

// your currency name
config.assetName = 'Zent';
// your currency ticker
config.assetTicker = 'ZTC';
// your currency address prefix, for address validation
config.addressPrefix = 'Ze';
// standard wallet address length, for address validation
config.addressLength = 97;
// integrated wallet address length, for address validation. Added length is length of payment ID encoded in base58.
config.integratedAddressLength = config.addressLength + ((64 * 11) / 8);

// minimum fee for sending transaction
config.minimumFee = 0.5;
// minimum amount for sending transaction
config.mininumSend = 0.5;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to represent human readable value
config.decimalPlaces = 2;
// to convert from atomic unit
config.decimalDivisor = 10 ** config.decimalPlaces;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'Zent Cash Electronic Wallet Donation',
    address: 'Ze3GLbHkwq6iDt65iX6Nejb6LbYuvBSJ97Hjz3qoFKtwKwnBHVkTFyESL2Wt37kZHSFc9fvLoxCbE4soTJ7BjzCC3A5bhbQYS',
    paymentId: '005a656e7420456c656374726f6e69632057616c6c657420446f6e6174696f6e',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
