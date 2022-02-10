import useGlobal from "./useGlobal";
import toast from '../helpers/toast';
function useRequests() {
    const { token } = useGlobal();
    //get para fornecedores
    async function get(route) {
        try {
            const response = await fetch(`http://localhost:3000/${route}`, {
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
    async function post(route, body, withToken) {

        const config = withToken ? {
            'Authorization': `Bearer ${token}`
        } : {}

        try {
            const response = await fetch(`http://localhost:3000/${route}`, {
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

    async function put(body, id, route) {
        try {
            const response = await fetch(`http://localhost:3000/${route}/${id}`, {
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
    async function getOne(route, id) {
        try {
            const response = await fetch(`http://localhost:3000/${route}/${id}`, {
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
        getOne,
        get

    }

}

export default useRequests;