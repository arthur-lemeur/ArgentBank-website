import "./_account.scss";

const Account = (props) => {
    const {title, amount, desc, editUser} = props;
    return (
        <section className={editUser? "account onEdit" : "account"}>
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{desc}</p>
            </div>
            <div className="account-content-wrapper cta">
                {!editUser ?
                    <button className="transaction-button">View transactions</button>
                    :
                    <i className="fa fa-chevron-right"></i>
                }
            </div>
        </section>
    )
}

export default Account;
