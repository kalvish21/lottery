const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require ('./compile');

const provider = new HDWalletProvider(
    'main inhale balance puzzle guilt tumble tattoo stool depth zero dose margin',
    'https://rinkeby.infura.io/v3/81391a73eb0e41d58ae3b72eef243dcd'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account: ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x' + bytecode })
        .send({ from: accounts[0], gas: '2900000' });

    console.log(interface);
    console.log('Contract deployed to: ', result.options.address);
};
deploy();

