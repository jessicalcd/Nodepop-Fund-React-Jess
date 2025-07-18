import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "../../components/ui/button";
import { login } from "./service";
import { useAuth } from "./context";

function LoginPage() {
  const { onLogin } = useAuth();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const { email: email, password } = credentials;
    const disabled = !email || !password;

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [event.target.name]: event.target.value,
        }));
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            await login(credentials);
            onLogin();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="text" 
                        name="email"
                        value={email}
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <Button type="submit" $variant="primary" disabled={disabled}>
                    Login
                </Button>
            </form>
        </div>
    )
}

export default LoginPage;