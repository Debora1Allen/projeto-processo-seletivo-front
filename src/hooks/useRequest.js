import useGlobal from "./useGlobal";
import toast from '../helpers/toast';
function useRequests() {
    const { token } = useGlobal();
    async function post(body, withToken) {

        const config = withToken ? {
            'Authorization': `Bearer ${token}`
        } : {}

        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...config,
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();


            if (!response.ok) {
                throw new Error(data)
            }
            return data;

        } catch (error) {
            toast.mensagemError(error.message)
        }
    }

    async function put(body, id) {
        try {
            const response = await fetch('', {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data)
            }

            return data;


        } catch (error) {
            toast.mensagemError(error.message)
        }
    }
    async function getOne(id) {
        try {
            const response = await fetch('', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data)
            }

            return data;
        } catch (error) {
            toast.mensagemError(error.message)
        }
    }

    return {
        post,
        put,
        getOne

    }

}

export default useRequests;