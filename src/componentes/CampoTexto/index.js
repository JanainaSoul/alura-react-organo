import './CampoTexto.css'

const CampoTexto = (props) => { //props = propriedade

    const placeholderModificada =`${props.placeholder}...` //de forma explicita - aqui ta do lado de fora - + legivel
    return (
    <div className="campo-texto"> 
        <label>
            {props.label}
        </label>
        <input placeholder={placeholderModificada}/>
    </div>
)
    
}

export default CampoTexto