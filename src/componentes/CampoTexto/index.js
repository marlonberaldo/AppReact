import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`
    // ${} => concatena


    // // let valor = 'uiuiu'

    // const [valor, setValor] = useState('')
    // desestruturar o array e pegar a primeira posicao do array e a segunda posicao do array
    // useState => um objetinho para ler e outro para escrever(seter)


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado} />
        </div>
    )
}
// onchange => toda vez que escrever algo a funcao aoDigitado fica esperta e funciona
export default CampoTexto;