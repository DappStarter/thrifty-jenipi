require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inner drum olympic smooth elegant note praise punch harvest local equal gauge'; 
let testAccounts = [
"0x75c1da5366cd7d27d3f029cc8d7786a5a77bea6d3bb3d0b722643e1cf8ae2b97",
"0xb5a9930c1ae2abd993f715ffa903ae3975ef45c03efb2f5d6c349a191624ae61",
"0x1aee262846fa14d87b15b1c42f3426e42bcb0dea07de903f87d0b2a9e91d2875",
"0x620be62aa715aeea26ecb6ca24b212bd59e225650acdd49aba2e47b7578ab0fb",
"0xdb9d2014584c97da734721ce0b921121536ed5b56fb31e35afb54794922de252",
"0x6447668be5e407eb6bd0e3a6796f46c61c3f204159d8d7aae9e5cce4f1fce8bd",
"0x51c31f601f97489a78ac5d51231b7baadf538ae3767282e7d7de51cc9a9d36ce",
"0xa351047dde52c60e52a2e7bf00421cf23f443ce713ff00020a9dfcbb43c8fb99",
"0xd2e4a9e89e00c5c1e8af8ab4f3769d2f239d408b03e551c1b3bc4ecb5ac239b8",
"0x6317155d36077bc2a200f1189d41aa1d348431a2dfec5c818cf923cdba84e413"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


