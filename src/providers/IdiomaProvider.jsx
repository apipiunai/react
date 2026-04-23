import { createContext, useContext, useState, useEffect } from 'react';

const IdiomaContext = createContext();


export const useIdioma = () => {
    const context = useContext(IdiomaContext);
    if (!context) {
        throw new Error('useIdioma must be used within a IdiomaProvider');
    }
    return context;
};

export const IdiomaProvider = ({ children }) => {
    const [idioma, setIdioma] = useState(() => {
        return localStorage.getItem("idioma") || "español";
    });

    useEffect(() => {
        localStorage.setItem("idioma", idioma);
    }, [idioma]);

    const getDiccionario = async () => {
        try {
            const baseUrl = import.meta.env.BASE_URL || "/";
            const response = await fetch(`${baseUrl}diccionario.json`);
            if (!response.ok) {
                console.error("Failed to fetch dictionary", response.status);
                return null;
            }
            const data = await response.json();
            return data[idioma] || data["español"] || {};
        } catch (error) {
            console.error("Error loading dictionary:", error);
            return {};
        }
    }

    const [diccionario, setDiccionario] = useState({});

    useEffect(() => {
        const actualizarDiccionario = async () => {
            const data = await getDiccionario();
            if (data) {
                setDiccionario(data);
            }
        }
        actualizarDiccionario();
    }, [idioma]);


    return (
        <IdiomaContext.Provider value={{ idioma, setIdioma, diccionario }}>
            {children}
        </IdiomaContext.Provider>
    );
};