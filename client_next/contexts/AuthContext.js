import { createContext, useState ,useEffect } from "react";
import WalletConnect from "@walletconnect/client";

export const AuthContect = createContext();

function AuthContectProvider(props){
   const [isLogged, setIsLogged] = useState(false);
   const [currentAccount, setCurrentAccount] = useState('');
   const [currentChainID, setCurrentChainID] = useState(-1);
   const [message, setMessage] = useState('');

   const detectConnections = async () => {

      if(localStorage.getItem('isConnectedToWallet') === 'WalletConnect'){
         const connector = new WalletConnect({
            bridge: "https://bridge.walletconnect.org"
         })

         if(connector.connected && connector.accounts.length > 0 && connector.accounts[0] !== currentAccount){
            setIsLogged(true);
            setCurrentAccount(connector.accounts[0]);
            setCurrentChainID(parseInt(connector.chainId, 16));
         }

      }else if(localStorage.getItem('isConnectedToWallet') === 'MetaMask'){

         const id = await window.ethereum.request({ method: 'eth_chainId' });
         const accounts = await window.ethereum.request({ method: 'eth_accounts' });

         if(accounts.length > 0 && accounts[0] !== currentAccount){
            setIsLogged(true);
            setCurrentAccount(accounts[0]);
            setCurrentChainID(parseInt(id, 16));
         }

      }else{
         SignOut();
      }
   }

   const SignOut = async () => {
      setIsLogged(false)
      setCurrentAccount('')
      setCurrentChainID(-1)
      localStorage.setItem('isConnectedToWallet', false);
   }

   useEffect(() => {
      detectConnections();
   }, []);

   return (
      <AuthContect.Provider value={{isLogged, setIsLogged, currentAccount, setCurrentAccount, currentChainID,setCurrentChainID ,SignOut , message, setMessage }}>
         {props.children}
      </AuthContect.Provider>
   )

}

export default AuthContectProvider;