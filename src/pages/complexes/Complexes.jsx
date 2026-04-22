import Components from "./Components.jsx";
import { useState, useEffect } from "react";
import { useTheme } from "../../providers/ThemeProvider";

export default function Complexes() {

    const { theme } = useTheme();
    const components = Components();

    const categories = [...new Set(components.map((item) => item.category))];

    const [selectedComponent, setSelectedComponent] = useState("Line Chart");

    const [codes, setCodes] = useState([])

    useEffect(() => {
    const fetchCodes = async () => {
        if (selectedComponent && components) {
            const codeFiles = components.find((item) => item.name === selectedComponent).codes;

            const codes = [];

            for (let codeFile of codeFiles) {
                const response = await fetch(codeFile.code);
                const data = await response.text();

                codes.push({
                    name: codeFile.name,
                    code: data
                });
            }
            setCodes(codes);
        }
    };
    
    fetchCodes();
}, [selectedComponent, components]);


    return (
        <>
            <div style={{ minWidth: "150px", position: "fixed", height: "calc(100% - 70px)", top: "70px", right: 10, background: theme.card, borderLeft: `1px solid ${theme.border}`, padding: 20 }}>
                {categories.map((category) => (
                    <div key={category}>
                        <span style={{ fontWeight: "bolder" }}>{category}</span>
                        {components.filter((item) => item.category === category).map((item) => <p style={{ fontSize: "14px", marginLeft: "10px", cursor: "pointer", color: selectedComponent === item.name ? theme.main : theme.text1 }} onClick={() => setSelectedComponent(item.name)} key={item.name}>{item.name}</p>)}
                    </div>
                ))}
            </div>
            <div>
                {components.find((item) => item.name === selectedComponent).component}
            </div>
            <div>
                {codes.map((code) => (
                    <div key={code.name}>
                        <h2>{code.name}</h2>
                        <pre>{code.code}</pre>
                    </div>
                ))}
            </div>
        </>
    )
}