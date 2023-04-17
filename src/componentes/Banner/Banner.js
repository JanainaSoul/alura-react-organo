import './Banner.css'

function Banner() {
    //JSX - parece html mas não é
    return (
        //<div> no react vc pode usar o <Fragment> ou deixar <> </> e isso não aparecera no codigo
        <>
            <header className="banner">
                <img src="/imagens/banner.png" alt="O banner principal do Organo"/>
            </header>
            <h1> Teste </h1>
        
        </>

        //<h1> Teste </h1> // ai não da p fazer assim , tem q por dentro de uma div
        
    )
}

export default Banner