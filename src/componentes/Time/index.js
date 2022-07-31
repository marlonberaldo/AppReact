import Colaborador from '../Colaborador';
import './Time.css'

// componente sem comportamento => dumb component, COMPONENTE VISUAL

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }


    return (
        // nao pode colocar if dentro do return pois o JSX faz o evaluete => le o codigo em uma linha so
        // props.colaboradores.length > 0 && ===> significa que se o tamenho do array de colaboradores
        // for maior que zero entao o comando a direita é executado atraves do operador &&

        props.colaboradores.length > 0 && <section className='time' style={css} >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
    );
}

export default Time;