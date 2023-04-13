import './Botao.css'

const Botao = (props) => {
    return (
        <button className="botao"> 
            {/*props.texto*/}
            {props.children} {/* são os filhos, ai pode colocar mais coisas como imagem */}
        </button>
    )
}

export default Botao