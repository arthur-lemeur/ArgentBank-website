import Layout from "../../components/Layout/Layout";
import Account from "../../components/Account/Account";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import EditUser from "../../components/EditUser/EditUser";
import {useNavigate} from "react-router-dom";

const accountTable = [
    {
        id: "account1",
        title: "Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        desc: "Available Balance"
    },
    {
        id: "account2",
        title: "Argent Bank Savings (x6712)",
        amount: "$10,928.42",
        desc: "Available Balance"
    },
    {
        id: "account3",
        title: "Argent Bank Credit Card (x8349)",
        amount: "$184.30",
        desc: "Current Balance"
    }
]

const UserPage = () => {
    const userData = useSelector((state) => state.user);
    const [editUser, setEditUser] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userData || !userData.firstName || !userData.lastName) {
            localStorage.clear();
            navigate("/sign-in");
        }
    }, [userData, navigate]);

    return (
        <Layout>
            <main className={editUser ? "" : "main bg-dark"}>
                {editUser ?
                    <EditUser
                        currentUser={userData}
                        setEditUser={setEditUser}
                    />
                    :
                    <>
                        <div className="header">
                            <h1>Welcome back<br />{userData.firstName} {userData.lastName}!</h1>
                            {!editUser ?
                                <button className="edit-button" onClick={() => setEditUser(true)}>Edit Name</button>
                                : <></>
                            }
                        </div>
                    </>
                }
                <h2 className="sr-only">Accounts</h2>
                {accountTable.map((account =>
                        <Account
                            key={account.id}
                            title={account.title}
                            amount={account.amount}
                            desc={account.desc}
                            editUser={editUser}
                        />
                ))
                }
            </main>
        </Layout>
    )
}

export default UserPage;
