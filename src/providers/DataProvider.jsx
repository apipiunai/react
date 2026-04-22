import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { apiClient } from "../api/apiClient";
import { useAuth } from "./AuthProvider";


const DataContext = createContext();

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
};

export function DataProvider({ children }) {

    const { token } = useAuth();
    const [data, setData] = useState([]);

    const getData = useCallback(() => {
        apiClient.get("/data", { headers: { Authorization: `Bearer ${token}` } })
            .then(res => setData(res.data))
            .catch(err => console.error("Error fetching data:", err));
    }, []);



    return (
        <DataContext.Provider value={{ data, getData }}>
            {children}
        </DataContext.Provider>
    );
}