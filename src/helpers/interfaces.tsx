export interface ABIInput {
    name: string;
    type: string
}

export interface ABIOutput {
    name: string;
    type: string
}

export interface ABIObject {
    constant?: boolean;
    anonymous?: boolean;
    name?: string;
    inputs?: ABIInput[];
    outputs?: ABIOutput[];
    type: string;
    payable: boolean;
    stateMutability: string;
}