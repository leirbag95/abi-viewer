import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { ABIObject } from '../helpers/interfaces';

type UseABIStateType = [
  ABIObject[],
  Dispatch<SetStateAction<any>>,
];

const useABIState = (initialCode: ABIObject[]): UseABIStateType => {
  const [abi, setABI] = useState(initialCode);

  useEffect(() => {
  }, [abi]);

  const updateABI = (newCode: ABIObject[]): any => {
    setABI(newCode);
  };

  return [abi, updateABI];
};

export default useABIState;
