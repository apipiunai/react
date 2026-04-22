import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { apiClient } from "../api/apiClient";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export function AuthProvider({ children }) {

    const [token, setToken] = useState(null);

    const login = useCallback((username, password) => {
        apiClient.post("/login", { username, password })
            .then(res => setToken(res.data.token))
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    const logout = useCallback(() => {
        setToken(null);
    }, []);



    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}