import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const manejarEnvio = (event) => {
        event.preventDefault();
        let datosAEnviar = {
            nombre,  //no es necesario definir el valor porque JS reconoce que tiene el mismo nombre de la llave
            puesto: puesto,
            foto: foto,
            equipo,
        };
    };

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto title="Nombre" placeholder="Ingresar nombre" required={true} value={nombre} updateValue={setNombre}/>
            <CampoTexto title="Puesto" placeholder="Ingresar puesto" required value={puesto} updateValue={setPuesto}/>
            <CampoTexto title="Foto" placeholder="Ingresar enlace de foto" required value={foto} updateValue={setFoto}/>
            <ListaOpciones value={equipo} updateValue={setEquipo}/>
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario