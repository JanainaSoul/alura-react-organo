import './Rodape.css'

const Rodape = () => {
    return (
        <footer className = 'footer'>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/tw.png" alt="icone twitter"/>
                        </a>
                    </li>
                    <li>
                        < a href="instagram.com" target="_blank">
                            <img src="/imagens/ig.png"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <p>
                    Desenvolvido por Alura - Aluna Janaina - 2023
                </p>
            </section>
        </footer>
    )
}

export default Rodape 