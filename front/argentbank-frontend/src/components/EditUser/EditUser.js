import "./_edituser.scss";
import {setUser} from "../../utils/slices/userSlice";
import {useDispatch} from "react-redux";
import {useState} from "react";

const EditUser = (props) => {
    const [userName, setUserName] = useState("");
    const {currentUser, setEditUser} = props;
    const dispatch = useDispatch();
    const data = {
        userName: userName,
        fistName: currentUser.firstName,
        lastName: currentUser.lastName,
    }
    const token = localStorage.getItem("token")


    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = document.getElementById("message");
        const input = document.getElementById("username");

        if (userName === currentUser) {
            message.innerHTML = "This is already your username";
            input.style.backgroundColor = "red!important";
            input.style.animation = "200ms wrong";
            return
        }
        try {
            let res = await fetch("http://localhost:3001/api/v1/user/profile", {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: "PUT",
                body: JSON.stringify(data),
            });
            let response = await res.json();
            dispatch(setUser(response.body))
        } catch (err) {
            console.log(err)
            alert("erreur lors de la modification");
        }
        setEditUser(false);
    }

    return (
        <div className="edit-user-wrapper">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Edit user info</label>
                <span id="message"></span>
                <div className="form-field">
                    <label htmlFor="username">User name: </label>
                    <input type="text" defaultValue={currentUser.userName} required id="username" onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="form-field">
                    <label htmlFor="firstname">First name: </label>
                    <input type="text" defaultValue={currentUser.firstName} id="firstname" disabled/>
                </div>
                <div className="form-field">
                    <label htmlFor="lastname">Last name: </label>
                    <input type="text" defaultValue={currentUser.lastName} id="lastname" disabled/>
                </div>
                <div className="form-buttons">
                    <button type="submit" className="edit-button">
                        Save
                    </button>
                    <button className="edit-button" onClick={() => setEditUser(false)}>
                        Cancel
                    </button>
                </div>

            </form>
        </div>
    )
}

export default EditUser;
