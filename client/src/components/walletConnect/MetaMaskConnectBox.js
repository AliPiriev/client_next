import { useEffect, useContext } from 'react'
import detectEthereumProvider from '@metamask/detect-provider';
import { AuthContect } from '../../contexts/AuthContext';

function MetamMaskConnectBox() {
   const { 
      currentAccount,
      setCurrentAccount,
      setCurrentChainID,
      SignOut,
      setIsLogged,
      setMessage } = useContext(AuthContect)
   


   const SignIn = async () => {
      const provider = await detectEthereumProvider()
      if (!provider) {
         setMessage('Please install MetaMask!')
      } else {
         setMessage('')
         await ConnectWallet()
      }
   }

   const ConnectWallet = async () => {
      try {
         await window.ethereum.enable();
         const id = await window.ethereum.request({ method: 'eth_chainId' })
         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

         setCurrentChainID(() => parseInt(id, 16))
         setIsLogged(true)
         setCurrentAccount(accounts[0])
         localStorage.setItem('isConnectedToWallet', 'MetaMask');
         setMessage('')
      } catch (err) {
         if (err.code === 4001) {
            setMessage('Please connect to MetaMask.')
         } else if (err.code === -32002) {
            setMessage('Please unlock MetaMask.')
         } else {
            setMessage(err.message)
         }
      }
   }


   const handleAccountsChanged = async (accounts) => {
      if (accounts.length === 0) {
         // MetaMask is locked or the user has not connected any accounts
         setMessage('Please connect to MetaMask.')
         SignOut();
         setMessage('')
      } else if (accounts[0] !== currentAccount) {
         const id = await window.ethereum.request({ method: 'eth_chainId' })
         setCurrentAccount(() => accounts[0])
         setCurrentChainID(parseInt(id, 16))
         setIsLogged(true)
         setMessage('')
         localStorage.setItem('isConnectedToWallet', 'MetaMask');
      }
   }


   useEffect(() => {
      window.onbeforeunload = function () { return "Prevent reload" }
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', (_chainId) => {
         setCurrentChainID(() => parseInt(_chainId, 16))
      });
   });


 

   return (
      <button className="item metamask-connect" onClick={SignIn}>
         <div className="icon">
            <img src={require('../../assets/img/icons/metamask.png').default} alt="metamask-icon" />
         </div>
         <h3 className="ttl">Metamask</h3>
      </button>
   )
}

export default MetamMaskConnectBox;