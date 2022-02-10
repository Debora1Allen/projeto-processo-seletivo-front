import toast from '../../helpers/toast';
import useGlobal from '../../hooks/useGlobal';
import logout from '../../assest/logout.svg';
import './styles.css';

function NavBar() {

    const { removeToken } = useGlobal();

    function handleLogout() {
        toast.mensagemSuccess('Até breve');
        removeToken();
    }

    return (
        <header>
            <img src='' alt="Logo" />
            <img
                className="sign-out-button"
                src={logout}
                alt="Sign Out"
                onClick={() => handleLogout()}
            />
        </header>
    );
}

export default NavBar;