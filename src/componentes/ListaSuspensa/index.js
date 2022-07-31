import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

    /* foreach so intera, faz algo
        map => percorre uma lista, faz algo com uma devolucao, transformados 
        MAP APARECE SEMPRE QUE TEM UMA LISTA COM ITERACAO RENDERIZANDO NA TELA*/
}

export default ListaSuspensa;