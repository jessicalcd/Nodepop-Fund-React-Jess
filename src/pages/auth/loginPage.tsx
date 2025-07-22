import "./LoginPage.css";
import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "../../components/ui/button";
import { login } from "./service";
import { useAuth } from "./context";
import FormField from "../../components/ui/FormField";
import { useLocation, useNavigate } from "react-router";
import { AxiosError } from "axios";

function LoginPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { onLogin } = useAuth();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState<{ message: string } | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const { email: email, password } = credentials;
    const isDisabled = !email || !password || isFetching;

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [event.target.name]: event.target.value,
        }));
    }

    //console.log(location);
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            setIsFetching(true);
            await login(credentials);
            onLogin();
            // Navigate to the page in state.from
            const to = location.state?.from ?? "/";
            navigate(to, { replace: true });
        } catch (error) {
            if (error instanceof AxiosError) {
                setError({
                    message: error.response?.data?.message ?? error.message ?? "",
                });
            }
        } finally {
            setIsFetching(false);
        }       
    }

    return (
        <div  className="login-page">
            <h1 className="login-page-title">Login</h1>
            <form onSubmit={handleSubmit}>
                <FormField
                    type="text"
                    name="email"
                    label="email"
                    value={email}
                    onChange={handleChange}
                />
                <FormField
                    type="password"
                    name="password"
                    label="password"
                    value={password}
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    $variant="primary"
                    disabled={isDisabled}
                    className="login-form-submit"
                >
                    Login
                </Button>
            </form>
            {error && (
                <div
                    className="login-page-error"
                    role="alert"
                    onClick={() => {
                        setError(null);
                    }}
                >
                    {error.message}
                </div>
            )}
                </div>
        );
    }

export default LoginPage;