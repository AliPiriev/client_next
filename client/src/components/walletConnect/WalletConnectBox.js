import { useContext, useState, useEffect } from 'react'
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { AuthContect } from '../../contexts/AuthContext';

function WalletConnectBox() {
   const {
      currentAccount,
      setCurrentAccount,
      setCurrentChainID,
      SignOut,
      setIsLogged,
      setMessage } = useContext(AuthContect)
   const [connector, setConnector] = useState(null);
   const signIn = () => {
      setConnector(
         new WalletConnect({
            bridge: "https://bridge.walletconnect.org",
            qrcodeModal: QRCodeModal,
         })
      )
   }

   useEffect(() => {
      if (connector) {
         if (!connector.connected) {
            connector.createSession();
         }else{
            setIsLogged(true);
            setCurrentAccount(connector.accounts[0]);
            setCurrentChainID(parseInt(connector.chainId, 16));
            localStorage.setItem('isConnectedToWallet', 'WalletConnect');
            setMessage('')
         }

         // Subscribe to connection events
         connector.on("connect", (error, payload) => {
            if (error) {
               setMessage(error.message)
               throw error;
            }

            // Get provided accounts and chainId
            const { accounts, chainId } = payload.params[0];
            setCurrentChainID(() => parseInt(chainId, 16))
            setIsLogged(true)
            setCurrentAccount(accounts[0])
            localStorage.setItem('isConnectedToWallet', 'WalletConnect');
            setMessage('')
         });

         connector.on("session_update", (error, payload) => {
            if (error) {
               setMessage(error.message)
               throw error;
            }

            // Get updated accounts and chainId
            const { accounts, chainId } = payload.params[0];
            if (accounts.length === 0) {
               SignOut();
               setMessage('')
            } else if (accounts[0] !== currentAccount) {
               setCurrentAccount(() => accounts[0])
               setCurrentChainID(parseInt(chainId, 16))
               setIsLogged(true)
               localStorage.setItem('isConnectedToWallet', 'WalletConnect');
               setMessage('')
            }
         });

         connector.on("disconnect", (error, payload) => {
            if (error) {
               setMessage(error.message)
               throw error;
            }
            SignOut();
            console.log('disconnect');
            setMessage('')
         });
      }
   }, [connector])


   return (
      <button className="item metamask-connect" onClick={signIn} >
         <div className="icon">
            <img src={require('../../assets/img/icons/connect-wallet.png')} alt="wallet connect icon" />
         </div>
         <h3 className="ttl">Wallet Connect</h3>
      </button>
   )
}

export default WalletConnectBox;