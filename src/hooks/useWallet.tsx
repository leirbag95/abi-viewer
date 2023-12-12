// useWallet.ts
import { useState } from 'react';
import Web3 from 'web3';

export const useWallet = () => {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      // Vérifie si MetaMask est installé
      if (window.ethereum) {
        // Demande à l'utilisateur l'autorisation de se connecter
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Crée une instance de Web3 avec MetaMask comme fournisseur
        const web3 = new Web3(window.ethereum);

        // Récupère l'adresse du compte connecté
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];

        // Met à jour le state avec l'adresse du compte
        setAccount(address);
      } else {
        console.error('MetaMask non détecté. Veuillez installer MetaMask.');
      }
    } catch (error) {
      console.error('Erreur de connexion au portefeuille :', error);
    }
  };

  return { account, connectWallet };
};
