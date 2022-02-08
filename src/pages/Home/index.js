import NavBar from '../../components/NavBar';
import Table from '../../components/Table';

import './style.css';

function Home() {



    return (
        <div className="container-home">
            <NavBar />
            <div className="content-home">
                <h1>Busque Por Fornecedores</h1>

                <div className="search-home">
                    <label htmlFor='search' >Digite sua demanda mensal de energia</label>
                    <input id='search' type='number' />

                </div>

                <Table />

            </div>

        </div>
    )
}

export default Home;
