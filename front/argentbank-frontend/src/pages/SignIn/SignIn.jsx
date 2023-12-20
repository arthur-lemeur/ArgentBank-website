import Layout from "../../components/Layout/Layout";
import SignInForm from "../../components/SignIn-Form/SignIn-Form";

const SignIn = () => {
    return (
        <Layout>
            <main className="main bg-dark">
                <SignInForm />
            </main>
        </Layout>
    )
}

export default SignIn;
