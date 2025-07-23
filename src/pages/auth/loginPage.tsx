import "./LoginPage.css";
import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import Button from "../../components/ui/button";
import { login } from "./service";
import { useAuth } from "./context";
import FormField from "../../components/ui/FormField";
import { useLocation, useNavigate } from "react-router";
import { AxiosError } from "axios";
import storage from "../../utils/storage";

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
    const [rememberMe, setRememberMe] = useState(false);
    const { email: email, password } = credentials;
    const isDisabled = !email || !password || isFetching;

    useEffect(() => {
    const authData = storage.get("auth");
        if (authData) {
        try {
            const parsed = JSON.parse(authData);
            if (parsed.remember && parsed.email) {
            setRememberMe(true);
            setCredentials((prev) => ({
                ...prev,
                email: parsed.email,
            }));
            }
        } catch (e) {
            storage.remove("auth");
        }
        }
    }, []);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [event.target.name]: event.target.value,
        }));
    }

    
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            setIsFetching(true);
            await login(credentials);
            onLogin();

            if (rememberMe) {
                const authInfo = JSON.stringify({
                remember: true,
                email: credentials.email,
                });
                storage.set("auth", authInfo);
            } else {
                storage.remove("auth");
            }
            
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
                <label className="login-form-remember">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe((prev) => !prev)}
                    />
                    Recordar contraseña
                    </label>

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
                    className="form-error"
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