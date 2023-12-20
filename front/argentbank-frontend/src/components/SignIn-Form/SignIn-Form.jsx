import "./_signin-form.scss"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setUser} from "../../utils/slices/userSlice";
import {useNavigate} from "react-router-dom";


const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getInfos = async (token, data) => {
        try {
            let userRes = await fetch("http://localhost:3001/api/v1/user/profile", {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: "POST",
                body: JSON.stringify(data),
            });
            if (userRes.ok) {
                let response = await userRes.json();
                dispatch(setUser(response.body));
                navigate("/user");
            } else {
                alert("API KO " + userRes.status + " " + userRes.statusText)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = e.target.action;
        console.log(url)
        const data = {
            email: email,
            password: password,
        };

        try {
            let res = await fetch(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify(data),
            });
            if (res.ok) {
                let resJson = await res.json();
                let token = resJson.body.token;
                localStorage.setItem("token", token);
                await getInfos(token, data);
            } else {
                alert("Error " + res.status)
            }
        } catch (err) {
            console.log(err)
            alert("erreur lors de l'authentification");
        }
    };

    return(
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form action="http://localhost:3001/api/v1/user/login" id="login-form" method="POST" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label
                    ><input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label
                    ><input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me"/><label htmlFor="remember-me"
                >Remember me</label
                >
                </div>
                <button type="submit" className="sign-in-button">Sign In</button>
            </form>
        </section>
    )
}

export default SignInForm;
