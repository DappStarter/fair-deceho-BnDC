require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food edge random noble assume coral light army giggle'; 
let testAccounts = [
"0x775d660df4723f2c8172f096a6246845efeff148b40fd15bdccf45f253431834",
"0x5fb8a2a6768b4d180540f0873a588c48ce4ff210d03988a56cbc9066665ef6f1",
"0x138245f2993a96445c2fcc4dad78b6bf891c022797c474fead8482403ae68329",
"0xa20f436b1042aa71ae67e1ea899dcb257dd4aaa9aff90d9673217aea14de6b20",
"0xe359dd51b1d1b8a24a43641791f8087fa40206a8406e2f2723bef61731635f53",
"0xaa247a94f42759682b7696f05118397696e626c2492f912d9b6fab78484d33f6",
"0x5186d43aad94c5a399bb50bb37da8e51db63c5b36bd8f17c993c079719049c26",
"0x8146326d7fbbd3cbac1fe7dacdcdf6fc0211c2274c9e17d05e125685d6084988",
"0xd870eff4bef1544a6b5c0872f55fd5348873a4cd8500c134621d6361a9fcac04",
"0xd22134c6cc39f3f7f510b9f44461c1ad6952d8d21797c3da52af9cb85408e11b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

