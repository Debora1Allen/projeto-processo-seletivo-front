import './style.css';
import { useState } from 'react';
import IconeFechado from '../../assest/icone-olho-fechado.svg';
import IconeAberto from '../../assest/icone-olho-aberto.svg';

function InputSenha({ placeholder, className, id, name, value, onChange }) {
    const [visivel, setVisivel] = useState(false);

    const handleVisibilidade = () => {
        setVisivel(!visivel);
    }

    return (
        <div className="custom-input-senha">
            <input
                type={visivel ? "text" : "password"}
                placeholder={placeholder}
                className={className}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={id}>
                <img
                    src={visivel ? IconeAberto : IconeFechado}
                    alt="Alterar visibilidade da senha"
                    onClick={handleVisibilidade}
                />
            </label>
        </div>
    );
}

export default InputSenha;