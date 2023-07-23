interface MetaMaskWindow extends Window {
    ethereum: any;
  }
  
  let metamaskWindow = window as MetaMaskWindow;

async function addAndConnectNetwork() {
    let ethereum = metamaskWindow.ethereum;

    if (ethereum && ethereum.isMetaMask) {
        console.log('Ethereum successfully detected!');

        // Check if the user's MetaMask wallet is connected to your website
        let accounts = await ethereum.request({ method: 'eth_accounts' });
        
        if (accounts.length === 0) {
            // User's MetaMask wallet is not connected. Prompt them to connect it
            console.warn('Please connect your MetaMask wallet first');
            
            try {
                // Ask the user to connect their MetaMask wallet
                accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            } catch (error) {
                console.error('User refused to connect their MetaMask wallet');
            }
        }

        if (accounts.length !== 0) {
            // User's MetaMask wallet is now connected

            // Define the network
            let network = {
                chainId: '0x1', // Replace '0x1' with the chainId of the network you want to add
                chainName: 'Mainnet', // Replace 'Mainnet' with the name of the network
                nativeCurrency: {
                    name: 'ETH', // Replace 'ETH' with the name of the native currency of the network
                    symbol: 'ETH', // Replace 'ETH' with the symbol of the native currency
                    decimals: 18
                },
                rpcUrls: ['https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'], // Replace with your own Infura project ID
                blockExplorerUrls: ['https://etherscan.io/'] // Replace with the network's block explorer url
            };

            try {
                // Request the user to add the network to their MetaMask
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [network]
                });
                console.log('Network added successfully');
            } catch (error) {
                console.error(error);
            }
        }
    } else {
        console.error('Please install MetaMask!');
    }
}
