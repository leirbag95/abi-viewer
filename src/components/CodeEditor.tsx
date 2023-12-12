// src/components/MonacoEditor.tsx
import React, { useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { isABIObjectValid } from '../helpers/abi';
import { ABIObject } from '../helpers/interfaces';

interface FunctionProps {
  setABI: any
}

const CodeEditor: React.FC<FunctionProps> = ({setABI}) => {
  const [code, setCode] = useState<string>('');

  const handleEditorChange = (newCode: string, e: any) => {
    setCode(newCode);
  };

  useEffect(() => {
    try {
      let newAbi: ABIObject[] = JSON.parse(code)
      setABI(newAbi)
    } catch (err) {
      setABI([])
      console.log(err)
    }
  }, [code])

  return (
    <div style={{ textAlign: 'left', overflow: 'hidden', height: '100%'}} className=''> {/* Ajout de la div avec style */}
      <MonacoEditor
        width="800"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={{ selectOnLineNumbers: true, automaticLayout: true }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditor;
