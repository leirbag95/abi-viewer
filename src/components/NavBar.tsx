// Navbar.tsx
import React from 'react';
import { useWallet } from '../hooks/useWallet';

interface NavbarProps {
  onConnectWallet: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onConnectWallet }) => {
    
  const { account, connectWallet } = useWallet();

  return (
    <nav className=" p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">ABI Viewer</div>
      <button
        className="bg-white text-[#001434] px-4 py-2 rounded hover:bg-blue-100"
        onClick={() => {connectWallet()}}
      >
        {
            account ? ( 
                <span>{account}</span>
            ) : (
                <span>Connect wallet</span>
            )
        }
      </button>
    </nav>
  );
};

export default Navbar;
