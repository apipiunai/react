import { useTheme } from "../../providers/ThemeProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from "../../components/Card";
import InputText from "../../components/InputText";
import Button from "../../components/Button";

export default function Login() {

    const { theme } = useTheme();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = () => {
        navigate("/setup");
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <Card style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                <InputText
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <InputText
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button text="Iniciar Sesión" onClick={handleLogin} />
            </Card>
        </div>
    )
}