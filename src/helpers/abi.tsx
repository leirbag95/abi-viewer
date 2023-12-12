// helpers/abiValidator.ts

import { ABIObject, ABIInput, ABIOutput } from './interfaces';

export function isABIObjectValid(objs: any[]): objs is ABIObject[] {
    for(var i = 0; i < objs.length; i++) {
        let obj = objs[i]
        
        
          if (
            typeof obj.type !== 'string' ||
            typeof obj.payable !== 'boolean' ||
            typeof obj.stateMutability !== 'string'
          ) {
            console.log('enter')
            return false;
          }
        
          if ('constant' in obj && typeof obj.constant !== 'boolean') {
            console.log('enter')
            return false;
          }
        
          if ('anonymous' in obj && typeof obj.anonymous !== 'boolean') {
            console.log('enter')
            return false;
          }
        
          if ('name' in obj && typeof obj.name !== 'string') {
            console.log('enter')
            return false;
          }
        
          if ('inputs' in obj && !Array.isArray(obj.inputs)) {
            console.log('enter')
            return false;
          }
        
          if ('outputs' in obj && !Array.isArray(obj.outputs)) {
            console.log('enter')
            return false;
          }
        
    }
  return true;
}

export function isABIInputValid(input: any): input is ABIInput {
  return typeof input.name === 'string' &&
    typeof input.type === 'string'
}

export function isABIOutputValid(output: any): output is ABIOutput {
    console.log(typeof output.name === 'string' &&
    typeof output.type === 'string')
  return typeof output.name === 'string' &&
    typeof output.type === 'string'
}
