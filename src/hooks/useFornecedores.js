import { useContext } from 'react';
import FornecedoresContext from '../context/FornecedoresContext';

function useFornecedores() {
    return useContext(FornecedoresContext);
}

export default useFornecedores;