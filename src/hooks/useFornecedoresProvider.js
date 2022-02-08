import { useEffect, useState } from 'react';
import useRequests from '../hooks/useRequest';
import useGlobal from './useGlobal';

function useFornecedoresProvider() {
    const requests = useRequests();
    const [allFornecedores, setFornecedores] = useState([]);
    const { token } = useGlobal();

    useEffect(() => {
        if (token) {
            loadFornecedoresData();
        }

    }, []);

    async function loadFornecedoresData() {
        const result = await requests.get('fornecedores');
        setFornecedores(result);
    }

    return {
        allFornecedores,
        loadFornecedoresData
    }
}

export default useFornecedoresProvider;