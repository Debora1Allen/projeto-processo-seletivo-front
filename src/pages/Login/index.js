import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useRequests from '../../hooks/useRequest';
import useGlobal from '../../hooks/useGlobal';
import InputSenha from '../../components/InputSenha';
import './style.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { token, setToken } = useGlobal();
    const history = useHistory();
    const requests = useRequests();

    useEffect(() => {
        if (token) {
            history.push('/home');
        }
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();

        if (!email || !password) {
            return;
        }

        const body = { email: email, senha: password };

        const result = await requests.post('login', body);

        if (result) {
            setToken(result.token);
            history.push('/home');
        }
    }

    return (
        <main>
            <div className='left'
            >
            </div>
            <div className="container-right">
                <form onSubmit={handleSubmit}>
                    <span>Bem vindo</span>
                    <h1>Faça o login com sua conta</h1>

                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputSenha
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="btn btn-positive btn-login">LOGIN</button>
                </form>

                <div className="register-link">
                    <span>Não tem cadastro?</span><Link to="/cadastro">Clique aqui!</Link>
                </div>
            </div>
        </main>
    );
}

export default Login;
