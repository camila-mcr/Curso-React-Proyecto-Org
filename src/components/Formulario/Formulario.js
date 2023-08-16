import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo/Campo.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const manejarEnvio = (event) => {
        event.preventDefault();
        let datosAEnviar = {
            nombre,  //no es necesario definir el valor porque JS reconoce que tiene el mismo nombre de la llave
            puesto: puesto,
            foto: foto,
            equipo,
        };
        props.registrarColaborador(datosAEnviar);
    };

    const manejarNuevoEquipo = (event) => {
        event.preventDefault();
        props.crearEquipo({titulo, colorPrimario: color});
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo title="Nombre" placeholder="Ingresar nombre" required={true} value={nombre} updateValue={setNombre}/>
            <Campo title="Puesto" placeholder="Ingresar puesto" required value={puesto} updateValue={setPuesto}/>
            <Campo title="Foto" placeholder="Ingresar enlace de foto" required value={foto} updateValue={setFoto}/>
            <ListaOpciones value={equipo} updateValue={setEquipo} equipos={props.equipos}/>
            <Boton>Crear</Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo title="Título" placeholder="Ingresar título" required={true} value={titulo} updateValue={setTitulo}/>
            <Campo title="Color" placeholder="Ingresar color en hexadecimal" required value={color} updateValue={setColor} type="color"/>
            
            <Boton>Registrar equipo</Boton>
        </form>
    </section>
}

export default Formulario