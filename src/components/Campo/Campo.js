import "./Campo.css";

const Campo = (props) => {
    
    const manejarCambio = (evento) => {
        props.updateValue(evento.target.value)
    };

    const placeholderModified = `${props.placeholder}...`  

    const {type = "text"} = props; //Desestructuración, ponemos por defecto el valor "text" a la llave "type"

    return <div className={`campo campo-${type}`}>
        <label>{props.title}</label>
        <input 
            placeholder={placeholderModified} 
            required={props.required} 
            value={props.value}
            onChange={manejarCambio}
            type={type}
        ></input>
    </div>
}

export default Campo