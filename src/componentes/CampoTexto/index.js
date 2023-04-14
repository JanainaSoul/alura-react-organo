import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => { //props = propriedade

    const placeholderModificada =`${props.placeholder}...` //de forma explicita - aqui ta do lado de fora - + legivel
    
    //let valor = 'Janaina de Souza'

    //const [valor, setValor] = useState('Janaina de Souza') //rokie - vai afzer algo

    const aoDigitado = (evento) =>{
        //setValor(evento.target.value)
        //console.log(valor)
        props.aoAlterado(evento.target.value)
    }
    return (
    <div className="campo-texto"> 
        <label>
            {props.label}
        </label>
        <input value={props.valor} onChange= {aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
    </div>
)
    
}

export default CampoTexto