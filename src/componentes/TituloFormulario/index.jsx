// props é um OBJETO que guarda todas as propriedades
// props.children guarda o contéudo que fica entre as tags de abertura e fechamento
export function TituloFormulario(props) {
    return (
        <h2>
            {props.children}
        </h2>
    )
}