import "./CampoTexto.css";

const CampoTexto = (props) => {
    
    const manejarCambio = (evento) => {
        props.updateValue(evento.target.value)
    };

    const placeholderModified = `${props.placeholder}...`  
    return <div className="campo-texto">
        <label>{props.title}</label>
        <input 
        placeholder={placeholderModified} 
        required={props.required} 
        value={props.value}
        onChange={manejarCambio}
        ></input>
    </div>
}

export default CampoTexto