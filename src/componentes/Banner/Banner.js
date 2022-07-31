import './Banner.css'

function Banner() {
    // JSX como o react trabalha com a parte visual, parece HTML mas nao é
    return (
        <>
            <header className='banner'>
                <img src="/imagens/banner.png" alt="Banner principal da pagina Organo" />
            </header>
            {/* <h1>tac</h1> */}
        </> //fragment <>
    )
}

// document.createElement('img')
// imagem estatica, nao muda, vai na pasta public
export default Banner;