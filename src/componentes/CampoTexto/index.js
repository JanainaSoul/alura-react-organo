import './CampoTexto.css'

const CampoTexto = (props) => { //props = propriedade

    const placeholderModificada =`${props.placeholder}...` //de forma explicita - aqui ta do lado de fora - + legivel
    
    let valor = 'Janaina de Souza'

    const aoDigitado = (evento) =>{
        valor = evento.target.value
        console.log(valor)
    }
    return (
    <div className="campo-texto"> 
        <label>
            {props.label}
        </label>
        <input value={valor} onChange= {aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
    </div>
)
    
}

export default CampoTexto