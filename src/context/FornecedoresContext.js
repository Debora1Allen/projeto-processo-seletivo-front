import { createContext } from 'react';
import useFornecedoresProvider from '../hooks/useFornecedoresProvider';

const FornecedoresContext = createContext();

export function FornecedoresProvider(props) {
    const fornecedoresProvider = useFornecedoresProvider();

    return (
        <FornecedoresContext.Provider value={fornecedoresProvider}>
            {props.children}
        </FornecedoresContext.Provider>
    )
}

export default FornecedoresContext;