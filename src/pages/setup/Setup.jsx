import { useState } from 'react';
import Button from '../../components/Button'
import Tabs from "../../components/Tabs";
import Divider from "@mui/material/Divider";

export default function Setup() {


    const SetupSection = () => {
        return (
            <>
                <h2>Instalacion necesaria</h2>
                <p>Para poder usar la herramienta npm, es necesario tener instalado Node.js. Puedes descargarlo desde la pagina oficial de <a href="https://nodejs.org/" target="_blank">Node.js</a>.</p>
                <h2>Editor de codigo</h2>
                <p>Para editar el codigo del proyecto es recomendable utilizar un editor de codigo. Te recomiendo <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> o si quieres usar un editor con inteligencia artificial integrada puedes usar la opcion gratuita de google <a href="https://antigravity.google/" target="_blank">Antigravity</a>. Estos programas tienen un terminal integrado para poder ejecutar los comandos necesarios.</p>

                <h2>Crear un proyecto con Vite y React</h2>
                <p> la mejor opcion para crear una pagina web con un framework (una estructura ordenada y estandarizada) es usar React con Vite. Desde el terminal del editor de codigo abre una carpeta donde quieras crear el proyecto. Despues selecciona nuevo terminal en la pestaña de arriba que pone "Ver" y ejecuta el siguiente comando:</p>
                <pre>{`
npm create vite@latest
        `}</pre>
                <p>Despues te preguntara el nombre del proyecto, el framework y el lenguaje. Elige "react" y "javascript". Tras crear el proyecto la web sera visible en el navegador de tu ordenador en la direccion http://localhost:5173/. Sin embargo, una vez creado el proyecto, para poder ejecutar la web deberas ejecutar el siguiente comando en el terminal estando dentro del proyecto: </p>
                <pre>{`
npm run dev
        `}</pre>
                <p>Despues de ejecutar el comando, la web se abrira en el navegador en la direccion http://localhost:5173/. Para parar el servidor deberas presionar "Ctrl + C" en el terminal o cerrar el terminal. </p>
                <h2>Dependencias Recomendadas</h2>
                <pre>{`
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
npm install recharts
npm install react-router-dom
        `}</pre>
            </>
        )
    }


    const FastSetup = () => {

        const downloadZip = () => {
            const fileUrl = 'plantilla.zip';

            const link = document.createElement('a');
            link.href = fileUrl;
            link.setAttribute('download', 'plantilla.zip');

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        return (
            <>
                <h2>Instalacion necesaria</h2>
                <p>Para poder usar la herramienta npm, es necesario tener instalado Node.js. Puedes descargarlo desde la pagina oficial de <a href="https://nodejs.org/" target="_blank">Node.js</a>.</p>
                <h2>Editor de codigo</h2>
                <p>Para editar el codigo del proyecto es recomendable utilizar un editor de codigo. Te recomiendo <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> o si quieres usar un editor con inteligencia artificial integrada puedes usar la opcion gratuita de google <a href="https://antigravity.google/" target="_blank">Antigravity</a>. Estos programas tienen un terminal integrado para poder ejecutar los comandos necesarios.</p>
                <p>Clica el boton para descargar una plantilla con las dependencias, componentes y estructura listos para desarrollar tu propia aplicación. Despues de descargar la plantilla extrae el contenido del interior y abre el proyecto en el editor de codigo. Ejecuta el siguiente comando en el terminal para instalar las dependencias:</p>
                <pre>{`
npm install
                `}</pre>
                 <p>Despues ejecuta el siguiente comando para poder ver la aplicacion en tiempo real en tu navegador en la url <a href="http://localhost:5173">http://localhost:5173</a></p>
                <pre>{`
npm run dev
                `}</pre>
                <Button text="Descargar Plantilla" onClick={downloadZip} />
            </>
        )
    }

    const [tabValue, setTabValue] = useState(0);

    return (
        <div>
            <Tabs tabs={["Setup", "Fast Setup",]} tab={tabValue} setTab={setTabValue} />
            <Divider/>
            {tabValue === 0 ? <SetupSection /> : <FastSetup />}
        </div>
    )
}