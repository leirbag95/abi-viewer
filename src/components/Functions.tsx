// src/components/MonacoEditor.tsx
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ABIObject } from '../helpers/interfaces';
import { useWallet } from '../hooks/useWallet';

interface FunctionsProps {
    obj: ABIObject;
}

const Functions: React.FC<FunctionsProps> = ({ obj }) => {

    const { account, connectWallet } = useWallet()

    const backgroundColor = (func: typeof obj) => {
        console.log(func.payable)
        if (func.type === 'event') return '#1C5F13'
        if (func?.stateMutability === 'payable') return '#900000'
        if (func?.stateMutability === 'nonpayable') return '#903200'
        if (func?.stateMutability === 'view') return '#004290'
    }

    return (
        <>
            <Accordion className='text-white mb-3 bg-red-500' style={{ backgroundColor: backgroundColor(obj) }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography fontFamily={'Avenir'} color={'white'}>{obj.name || obj.type}</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: '#021636', borderColor: backgroundColor(obj), borderWidth: '2px' }}>
                    {obj.inputs && obj.inputs.map((param, index) => (
                        // Générer le contenu pour chaque paramètre ici
                        <div key={index} className='flex my-2' style={{ alignItems: 'center' }} >
                            <Typography color={'white'} align='left' fontFamily={'Avenir'} >
                                {param.name}: (<span style={{ color: backgroundColor(obj) }}>{param.type}</span>)
                            </Typography>
                            <input type="text" id="first_name" className="bg-gray-50 block border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={param?.type} />
                        </div>
                    ))}
                    <button
                        className="bg-white text-[#001434] px-4 py-2 rounded hover:bg-blue-100"
                    >Run</button>
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default Functions;
