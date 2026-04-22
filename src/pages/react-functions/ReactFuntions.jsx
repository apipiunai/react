import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useTheme } from "../../providers/ThemeProvider";

export default function ReactFunctions() {

    const { theme } = useTheme();
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count > 0){
            alert("El contador ha sido actualizado: " + count);
        }
    }, [count]);

    return (
        <div>
            <div style={{display: "flex",  justifyContent: "space-between", alignItems: "center", border: `1px solid ${theme.border}`, padding: 10, borderRadius: 10}}>
                <p>Contador: {count}</p>
                <Button onClick={() => setCount(count + 1)} text="Increment"/>
            </div>

            <h2>useState</h2>
            <p>Las variables declaradas con useState se actualizan automaticamente cuando cambia su valor</p>
            <pre>{`
const [count, setCount] = useState(0);
`}</pre>
<h2>useEffect</h2>
<p>Cuando el contador se actualiza, se ejecuta el useEffect, y muestra una alerta con el valor actual del contador</p>
<pre>{`
useEffect(() => {
if(count > 0){
alert("El contador ha sido actualizado: " + count);
}
}, [count]);
`}</pre>
             <h2>useNavigate</h2>
            <p>Permite navegar entre rutas sin recargar la pagina (la ventaja es que no se pierde el estado de las variables)</p>
            <pre>{`
const navigate = useNavigate();

navigate("/ruta");
            `}</pre>

            <h2>useContext</h2>
            <p>Permite acceder a variables globales de la aplicacion. Las variables no se resetean al navegar entre rutas usando useNavigate</p>
            <pre>{`
const { theme } = useTheme();
            `}</pre>

            <h2>useRef</h2>
            <p>Permite acceder a elementos del DOM (vista de usuario) sin necesidad de usar document.getElementById</p>
            <pre>{`
const divRef = useRef(null);

<div ref={divRef}></div>
            `}</pre>
        </div>
    )
}