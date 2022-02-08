import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

function useGlobalProvider() {

    const [token, setToken, removeToken] = useLocalStorage('token', '');

    return {

        token,
        setToken,
        removeToken
    }
}

export default useGlobalProvider;