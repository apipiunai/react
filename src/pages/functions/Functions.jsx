import { useState, useEffect } from "react";

export default function Functions() {


    const array = [1, 2, 3, 4, 5];


    return (
        <div>
            <h2>Map Function</h2>
            <p>La funcion map se usa para recorrer un array y devolver un item por cada elemento del array. En react se puede usar para devolver elementos de html por cada item</p>
            <pre>{`
const array = ["unai", "juan", "maria"];

array.map((item, index) => <p key={index}>{item}</p>);
`}</pre>
            <p>Tambien se puede no devolver nada</p>
            <pre>{`
const array = ["unai", "juan", "maria"];

array.map((item, index) => {
    if (item === "unai") {
        return <p key={index}>{item}</p>;
    }
});
`}</pre>

            <h2>Filter Function</h2>
            <p>La funcion filter se usa para recorrer un array y devolver un item por cada elemento del array aplicando un filtro de true o false</p>
            <pre>{`
const array = ["unai", "juan", "maria"];

array.filter((item, index) => item === "unai" && <p key={index}>{item}</p>);
`}</pre>


            <h2>SetInterval Function</h2>
            <p>La funcion setInterval se usa para ejecutar una funcion cada cierto tiempo. La manera correcta de usarlo en React es la siguiente:</p>
            <pre>{`
const [count, setCount] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
        setCount(c => c + 1); //forma correcta de actualizar la variable
    }, 1000);
    return () => clearInterval(interval);
}, []);
`}</pre>

            <h2>SetTimeout Function</h2>
            <p>La funcion setTimeout se usa para ejecutar una funcion una vez pasado un tiempo. La manera correcta de usarlo en React es la siguiente:</p>
            <pre>{`
useEffect(() => {
    const timeout = setTimeout(() => {
        console.log("Hola");
    }, 1000);
    return () => clearTimeout(timeout);
}, []);

`}</pre>

            <h2>Fetch Function</h2>
            <p>La funcion fetch se usa para hacer peticiones a una ruta. Conviene usar try catch para manejar errores</p>
            <pre>{`
useEffect(() => {
    try {
        fetch("data.json")
            .then(res => res.json())
            .then(data => console.log(data));
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}, []);

`}</pre>

            <h2>onClick Function</h2>
            <p>Cuando queremos usar parametros en un onClick, no podemos hacerlo directamente, debemos usar una funcion inline que llame a la funcion con los parametros</p>
            <pre>{`
const items = [{id: 1, name: "unai"}, {id: 2, name: "juan"}, {id: 3, name: "maria"}];

{items.map((item, index) => (
  <button key={index} onClick={() => handleClick(item.id)}>
    {item.name}
  </button>
))}
`}</pre>

            <h2>&&</h2>
            <p>El operador && se usa para mostrar un elemento si la condicion anterior es true</p>
            <pre>{`
const items = [1,2,3,4,5,6]

{items.map((item, index) => (
    item > 3 && <p key={index}>{item}</p>
))}

`}</pre>

            <h2>? :</h2>
            <p>El operador ? se usa para mostrar un elemento u otro dependiendo de una condicion</p>
            <pre>{`
const items = [1,2,3,4,5,6]

{items.map((item, index) => (
    item > 3 ? 
    <p key={index}>{item} es mayor a 3</p> : 
    <p key={index}>{item} es menor a 3</p>
))}

`}</pre>

            <h2>||</h2>
            <p>El operador || se usa para mostrar un elemento si la condicion anterior es false o no tiene valor</p>
            <pre>{`
const value = null;

{value || <p>No hay valor</p>}
`}</pre>



            <h2>?.</h2>
            <p>El operador ?. se usa para acceder a una propiedad de un objeto si existe. Si la propiedad no existe, devuelve undefined</p>
            <pre>{`
const user = { name: "unai", age: 25 };

console.log(user.name); // unai
console.log(user.age); // 25
console.log(user.address); // undefined
console.log(user.address?.city); // undefined
console.log(user.address.city); // error
`}</pre>
            <p>En este caso usamos ?. por que si address no existe, al buscar la proopiedad city en un undefined daria error</p>

        </div>
    )
}