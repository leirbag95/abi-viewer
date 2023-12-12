// src/App.tsx
import { CodeEditor, Functions, Navbar } from './components';
import './App.css';
import useABIState from './hooks/useABIState';
import { useEffect } from 'react';

function App() {
  const [abi, setABI] = useABIState([]);


  return (
    <div className="App ">
      <Navbar onConnectWallet={() => {}}></Navbar>
      <div className='flex h-screen mt-2 mx-2'>
      <div>
        <CodeEditor setABI={setABI} />
      </div>
      <div className='flex-1 my-2 mx-4'>
        {
          abi.sort((a,b) => a?.stateMutability?.localeCompare(b?.stateMutability)).map((obj) => (
            <Functions obj={obj}></Functions>
          )
          )
        }
      </div>
      </div>
    </div>
  );
}

export default App;
