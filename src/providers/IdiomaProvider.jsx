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
        const response = await fetch("diccionario.json");
        const data = await response.json();
        return data[idioma];
    }

    const [diccionario, setDiccionario] = useState({});

    useEffect(() => {
        const actualizarDiccionario = async () => {
            const data = await getDiccionario();
            setDiccionario(data);
        }
        actualizarDiccionario();
    }, [idioma]);


    return (
        <IdiomaContext.Provider value={{ idioma, setIdioma, diccionario }}>
            {children}
        </IdiomaContext.Provider>
    );
};