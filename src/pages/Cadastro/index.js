import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useRequests from '../../hooks/useRequest';
import './style.css';

const defaultValuesForm = { name: '', email: '', password: '' };

function Cadastro() {
    const [form, setForm] = useState(defaultValuesForm);
    const history = useHistory();
    const requests = useRequests();

    function handleChange(target) {
        setForm({
            ...form,
            [target.name]: target.value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();


        if (!form.email || !form.password || !form.name) {
            return;
        }

        const body = {
            nome: form.name,
            email: form.email,
            senha: form.password
        };

        const result = await requests.post('usuarios', body);

        if (result) {
            history.push('/');
        }
    }

    return (
        <main>
            <div className="container-left">
                <form onSubmit={handleSubmit}>

                    <h2>Cadastre-se</h2>
                    <input
                        name="name"
                        type="text"
                        placeholder="Nome"
                        value={form.name}
                        onChange={(e) => handleChange(e.target)}
                    />

                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => handleChange(e.target)}
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Senha"
                        value={form.password}
                        onChange={(e) => handleChange(e.target)}
                    />

                    <button className="btn btn-positive btn-register">CADASTRAR</button>
                    <button className="btn btn-negative btn-cancel">CANCELAR</button>
                </form>

                <div className="login-link">
                    <span>Já tem cadastro?</span><Link to="login">Clique aqui!</Link>
                </div>
            </div>
            <div className='right' >
            </div>
        </main>
    );
}

export default Cadastro;