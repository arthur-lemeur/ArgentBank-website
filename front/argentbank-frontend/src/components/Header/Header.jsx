import "./_header.scss";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {setUser} from "../../utils/slices/userSlice";

const Header = () => {
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const signOut = () => {
        localStorage.clear()
        dispatch(setUser(null));
        navigate("/")
    };

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src="/assets/img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {(userData && token) ?
                    <div>
                        <Link className="main-nav-item" to="/user">
                            <i className="fa fa-user-circle"></i>
                            {userData.userName}
                        </Link>
                        <a className="main-nav-item" onClick={signOut}>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </a>
                    </div>
                    :
                    <Link className="main-nav-item" to="/sign-in">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                }
            </div>
        </nav>
    )
}

export default Header;
