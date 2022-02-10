
import useFornecedores from '../../hooks/useFornecedores';
import './style.css';

function Table() {



    const { allFornecedores } = useFornecedores();
    return (
        <div className="container-table" >

            <div className="header-table">

                <strong>Nome</strong>
                <strong>Estado</strong>
                <strong>Custo/Kwh</strong>
                <strong>Limite minimo/Kwh</strong>
            </div>
            <div className="body-table">
                {allFornecedores.map(item => (
                    <div className="line-table" key={item.id}>
                        <span>{item.nome}</span>
                        <span>{item.estado}</span>
                        <span>{item.numero_clientes}</span>
                        <span>{item.avaliacao}</span>
                        <span>{item.logo}</span>
                    </div>
                ))
                }
            </div >

        </div >
    );
}

export default Table;
