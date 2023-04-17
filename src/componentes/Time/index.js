import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => { //compenente visual - dumb component
    const css = {backgroundColor:props.corSecundaria}
    return (
        <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            < Colaborador />
            < Colaborador />
        </section>
    )

}

export default Time